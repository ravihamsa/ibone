
/*

Appropach for Data Loading

Every Module should have capabilities to load meta and data.  Both should return promisses which can be watched out for the status of the loading.

*/

var DataModel = Backbone.Model.extend({
  loadMetaData:function (optionalArguments) {
		 return this.getRequestDeffered(this.getMetaRequests()).promise;
	},
	loadModelData:function(){
		return this.getRequestDeffered(this.getDataRequests()).promise;
	},
	getMetaRequests:function(){
		return this.options.metaRequests || [];
	},
	getDataRequests:function(){
		return this.options.dataRequests || [];
	},
	getRequestDeffered:function(requestConfigs){
		var def = $.Deffered();
		var requestDeffereds = [];
		 _.each(requests,function(request){
		 	requestDeffereds.push(app.request(request));
		 })
		 $.when.apply(null, requestDeffereds).then(function(arguments){
		 	def.resolveWith(arguments);
		 })

		 return def;
	},
	loadData:function(){
		return $.when.apply(null,[this.loadMetaData(), this.loadModelData()]);
	}
})
