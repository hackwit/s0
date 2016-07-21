(function($) {
	console.log("I'm here!");

	// $('#datetime').innerHTML = Date();
	var d = new Date();
	document.getElementById('datetime').innerHTML = d.toDateString();

    var widgetIframe = document.getElementById('sc-widget');
    var newSoundUrl = 'http://api.soundcloud.com/tracks/267065000';
    widgetIframe.src = "https://w.soundcloud.com/player/?url=" + newSoundUrl;
    var widget = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function() {
    	widget.load(newSoundUrl, {
        	show_artwork: false,
        	show_playcount: false,
        	show_comments: false,
        	buying: false,
        	sharing: false,
        	show_user: false
        });
      // load new widget
      widget.bind(SC.Widget.Events.FINISH, function() {
        widget.load(newSoundUrl, {
        	show_artwork: false
        });
      });
    });

}(jQuery));
	
