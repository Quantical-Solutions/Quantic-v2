// Scroll to Element

$('.scroll-to').click(function(e){
    var jump = $(this).attr('data-anchor');
    var newPosition = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: newPosition.top }, 500);
});

$(document).ready(function() {
    function scroll_to_top(div) {
        $(div).click(function() {
            $('html,body').animate({scrollTop: 0}, 'slow');
        });
        $(window).scroll(function(){
            if($(window).scrollTop()<500){
                $(div).fadeOut();
            } else{
                $(div).fadeIn();
            }
        });
    }
    scroll_to_top("#scroll_to_top");
});