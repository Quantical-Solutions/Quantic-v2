const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('./app/React/app.js', 'public/js/react.js')
    .js([
        'resources/js/app.js',
        'resources/js/carousel.js',
        'resources/js/script.js'
    ], 'public/js/all.js')
    .styles([
        'resources/css/reset.css',
        './node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
        //'./node_modules/@progress/kendo-theme-default/dist/all.css',
        './node_modules/@progress/kendo-theme-bootstrap/dist/all.css',
        //'./node_modules/@progress/kendo-theme-material/dist/all.css',
        './node_modules/@fullcalendar/common/main.css',
        'resources/css/responsive.css',
        'resources/css/custom-responsive.css',
        'resources/css/fonts.css',
        'resources/css/carousel.css',
        'resources/css/app.css',
        'resources/css/demo.css',
        'resources/css/style.css',
    ], 'public/css/all.css')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);
