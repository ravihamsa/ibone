var BaseView = Backbone.View.extend({
   Backbone.View.call(this, options);
     this.bindDataEvents();
     this.bindLoadingEvents();
});
