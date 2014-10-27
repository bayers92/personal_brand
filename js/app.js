// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// Magellan top bar preferences
// $(document).foundation({
// "magellan-expedition": {
//   active_class: 'active', // specify the class used for active sections
//   threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
//   destination_threshold: 20, // pixels from the top of destination for it to be considered active
//   throttle_delay: 0, // calculation throttling to increase framerate
//   fixed_top: 0, // top distance in pixels assigned to the fixed element on scroll
// }
// });


// Instagram Feed Preferences
$(function() {
    //Set up instafeed
    var feed = new Instafeed({
        clientId: 'ebbda816dd2e462195375df6a4def1bd',
        target: 'instafeed',
        get: 'user',
        userId: 176341126,
        accessToken: '176341126.467ede5.a548f7aeb8d64580aa82b56d6ca44277',
        resolution: 'low_resolution',
        sortBy: 'most-liked',
        limit: 12
    });
    feed.run();
});