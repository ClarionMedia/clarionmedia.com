(function($) {
    $.fn.goTo = function() {
        // Temporarily disable waypoints
        setWaypoints('disable');
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, {
            duration: 'slow',
            complete: function() {
                // Re-enable waypoints
                setWaypoints('enable');
            }
        });
        return this;
    }
})(jQuery);

function menuSelect(selected, selectedMenu) {
    menuHighlight(selectedMenu);
    selected.goTo();
}

function menuHighlight(selectedMenu) {
    $('#menu').find('a').each(function(i) { 
        $(this).removeAttr('class');
    });
    selectedMenu.attr('class', 'selected');
}

function setWaypoints(option) {
    $('#home').waypoint(option);
    $('#mobile').waypoint(option);
    $('#responsive').waypoint(option);
    $('#cloud').waypoint(option);
}


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

	$('#home').waypoint(function(direction) {
        menuHighlight($('#home-link'));
    });
    $('#mobile').waypoint(function(direction) {
        menuHighlight($('#mobile-link'));
    }, {offset: -110});
    $('#responsive').waypoint(function(direction) {
        menuHighlight($('#responsive-link'));
    });
    $('#academic').waypoint(function(direction) {
        menuHighlight($('#academic-link'));
    });
});