
define(['app'],function(){
var BaseModel = Backbone.Model.extend({
	loadMetaData:function (optionalArguments) {
		 if(!this._metaDataLoaded){			
		 	this._metaDataLoaded = this.getRequestDeffered(this.getMetaRequests());
		 }
		 return this._metaDataLoaded.promise;
	},
	loadModelData:function(){
		if(!this._modelDataLoaded){			
		 	this._modelDataLoaded = this.getRequestDeffered(this.getDataRequests());
		 }
		return this._modelDataLoaded.promise;
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
	},
	clearMetaData:function(){
		this._metaDataLoaded = null;
		
	},
	clearModelData:function(){
		this._modelDataLoaded = null;
	},
	clearData:function(){
		this.clearMetaData();
		this.clearModelData();
	}
});

});