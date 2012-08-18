/* Author:
Swen Gorschewski
*/

/* camera slider */
jQuery(function(){			
	jQuery('#slider_main').camera({
		pagination: false,
		thumbnails: false,
		loader: 'bar',
		imagePath: 'img/'
	});
});