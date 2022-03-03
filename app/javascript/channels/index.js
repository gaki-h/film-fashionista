// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// $('.carousel').on('slide.bs.carousel', function(e){
// 	var next = $(e.relatedTarget);
// 	var h = next.height();
// 	$(this).find('.carousel-inner').height(h);
// });