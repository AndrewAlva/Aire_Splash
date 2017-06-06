jQuery(document).ready(function($) {
	$.each($('.fadeInFromRight'), function(index, el) {
		setTimeout(function(){
	       $(el).removeClass('fadeInFromRight');
	    }, ( index * 200 ));
	});
});