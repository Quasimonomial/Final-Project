window.GoodThings = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Utils: {},
	initialize: function(){
		//initialize a router when I build one
		console.log("script initializing");
		Backbone.history.start();
	}
}