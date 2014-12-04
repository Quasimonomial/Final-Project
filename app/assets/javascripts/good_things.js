window.GoodThings = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Utils: {},
	initialize: function(){
		GoodThings.books = new GoodThings.Collections.Books();
		GoodThings.bookshelves = new GoodThings.Collections.Bookshelves();
		GoodThings.bookshelves.fetch();
		
		new GoodThings.Routers.GoodRouter({$rootEl: $('#primary')});
		console.log("script initializing");
		Backbone.history.start();
	}
}