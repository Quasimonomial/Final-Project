window.GoodThings = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Utils: {},
	initialize: function(){
		new GoodThings.Routers.GoodRouter({$rootEl: $('#primary')});
		console.log("script initializing");
		Backbone.history.start();
	}
}