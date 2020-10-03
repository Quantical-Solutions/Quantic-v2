FROM php:7.4-fpm

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libmcrypt-dev \
    zlib1g-dev \
    libxml2-dev \
    libzip-dev \
    libonig-dev \
    graphviz \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \

&& docker-php-ext-configure gd \
&& docker-php-ext-install -j$(nproc) gd \
&& docker-php-ext-install pdo_mysql \
&& docker-php-ext-install mysqli \
&& docker-php-ext-install zip \
&& docker-php-source delete

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
RUN docker-php-ext-install gd

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# see https://secure.php.net/manual/en/opcache.installation.php
RUN \
    { \
        echo 'opcache.memory_consumption=128'; \
        echo 'opcache.interned_strings_buffer=8'; \
        echo 'opcache.max_accelerated_files=4000'; \
        echo 'opcache.revalidate_freq=2'; \
        echo 'opcache.fast_shutdown=1'; \
    } > $PHP_INI_DIR/conf.d/opcache-recommended.ini; \
    \
    { \
        echo 'session.cookie_httponly = 1'; \
        echo 'session.use_strict_mode = 1'; \
    } > $PHP_INI_DIR/conf.d/session-strict.ini; \
    \
    { \
        echo 'allow_url_fopen = Off'; \
        echo 'max_execution_time = 600'; \
        echo 'memory_limit = 512M'; \
    } > $PHP_INI_DIR/conf.d/phpmyadmin-misc.ini

# Calculate download URL
ENV VERSION 5.0.2
ENV SHA256 cbcc78d1499308d9329950fcba2ebaa84c559a934fe54efc027d459d8e4161c8
ENV URL https://files.phpmyadmin.net/phpMyAdmin/${VERSION}/phpMyAdmin-${VERSION}-all-languages.tar.xz

LABEL org.opencontainers.image.title="Official phpMyAdmin Docker image" \
    org.opencontainers.image.description="Run phpMyAdmin with Alpine, Apache and PHP FPM." \
    org.opencontainers.image.authors="The phpMyAdmin Team <developers@phpmyadmin.net>" \
    org.opencontainers.image.vendor="phpMyAdmin" \
    org.opencontainers.image.documentation="https://github.com/phpmyadmin/docker#readme" \
    org.opencontainers.image.licenses="GPL-2.0-only" \
    org.opencontainers.image.version="${VERSION}" \
    org.opencontainers.image.url="https://github.com/phpmyadmin/docker#readme" \
    org.opencontainers.image.source="https://github.com/phpmyadmin/docker.git"

# Download tarball, verify it using gpg and extract
RUN \
    savedAptMark="$(apt-mark showmanual)"; \
    \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        gnupg \
        dirmngr \
    ; \
    \
    export GNUPGHOME="$(mktemp -d)"; \
    export GPGKEY="3D06A59ECE730EB71B511C17CE752F178259BD92"; \
    curl -fsSL -o phpMyAdmin.tar.xz $URL; \
    curl -fsSL -o phpMyAdmin.tar.xz.asc $URL.asc; \
    echo "$SHA256 *phpMyAdmin.tar.xz" | sha256sum -c -; \
    gpg --batch --keyserver ha.pool.sks-keyservers.net --recv-keys "$GPGKEY" \
        || gpg --batch --keyserver ipv4.pool.sks-keyservers.net --recv-keys "$GPGKEY" \
        || gpg --batch --keyserver keys.gnupg.net --recv-keys "$GPGKEY" \
        || gpg --batch --keyserver pgp.mit.edu --recv-keys "$GPGKEY" \
        || gpg --batch --keyserver keyserver.pgp.com --recv-keys "$GPGKEY"; \
    gpg --batch --verify phpMyAdmin.tar.xz.asc phpMyAdmin.tar.xz; \
    tar -xf phpMyAdmin.tar.xz -C /var/www/html --strip-components=1; \
    mkdir -p /var/www/html/tmp; \
    chown www-data:www-data /var/www/html/tmp; \
    gpgconf --kill all; \
    rm -r "$GNUPGHOME" phpMyAdmin.tar.xz phpMyAdmin.tar.xz.asc; \
    rm -rf /var/www/html/setup/ /var/www/html/examples/ /var/www/html/test/ /var/www/html/po/ /var/www/html/composer.json /var/www/html/RELEASE-DATE-$VERSION; \
    sed -i "s@define('CONFIG_DIR'.*@define('CONFIG_DIR', '/etc/phpmyadmin/');@" /var/www/html/libraries/vendor_config.php; \
    \
    apt-mark auto '.*' > /dev/null; \
    apt-mark manual $savedAptMark; \
    apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false; \
    rm -rf /var/lib/apt/lists/*

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www:www . /var/www

# Change current user to www
USER www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]