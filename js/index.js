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
        content: "A responsive style allows your customers to view your content eloquently on any screensize. Your mobile users don't want to zoom in and out, they want to navigate your site with ease.",
        trigger: 'hover'
    });

	$('.navbar li a').click(function(e) {
	    e.preventDefault();
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -110);
	});

});