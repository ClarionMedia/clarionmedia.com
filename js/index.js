$(document).ready(function (){ 

	var offset = 110;

	$('.navbar li a').click(function(event) {
	    event.preventDefault();
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -offset);
	});

});