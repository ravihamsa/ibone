
require.config({paths: {
    "jquery": "empty:",
    'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.1.1/lodash.min',
    'backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min'
}});

require(["jquery", "underscore", "backbone"], function ($) {

    var Backbone = window.Backbone;

    $(function () {
        $('body').html('test complete');
        console.log(Backbone.Model);
    });
});
