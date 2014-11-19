// I think this is the actual jQuery and the dylay.js file is the plug-in.

var $dylay = jQuery('#dylay');

// init
$dylay.dylay({
// speed of animation
	speed: 1500,
// make your animation yummy
	easing: 'easeOutElastic',
// selector to define elements
	selector: '>li'
});

// controls
jQuery('#filters a').on('click', function () {
	$dylay.dylay('filter', jQuery(this).data('filter'));	
	return false;
})

jQuery('#sorts a').on('click', function () {
	$dylay.dylay('sort', jQuery(this).data('sort-by'), jQuery(this).data('sort-way'));	
	return false;
})