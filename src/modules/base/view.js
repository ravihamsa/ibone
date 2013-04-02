define(['app'],function(){
    var BaseView = Backbone.View.extend({
        constructor:function(){
            Backbone.View.call(this, options);
            this.bindDataEvents();
            this.bindLoadingEvents();
        }
    });
});


