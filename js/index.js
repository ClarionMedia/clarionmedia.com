$(document).ready(function() {

    $("#contact-form").validate({
        rules: {
          name: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Please enter your name",
          email: "Please enter a valid email address"
        }
    });

    $('.responsive-popover').popover({
        title: 'What is "Responsive"?',
        content: "A responsive style allows your customers to view your content eloquently on any screen size. Your mobile users don't want to zoom in and out, they want to navigate your site with ease.",
        trigger: 'hover'
    });

    $('a').click(function(e){
        e.preventDefault();
        var headerOffset = $(window).width() > 979 ? 110 : 0;
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - headerOffset
        }, 650);
        return false;
    });

});
