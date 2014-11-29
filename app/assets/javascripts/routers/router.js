GoodThings.Routers.GoodRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl
		console.log("Starting Router");
		console.log(this.$rootEl);
	},

	routes: {
		'books': 'index',
		'books/new' : 'new',
		'books/:id': 'show',
		'books/:id/edit': 'edit'

	},

	index: function(){
		console.log("reaching index");
		GoodThings.books.fetch();
		console.log(GoodThings.books);
		var indexView = new GoodThings.Views.BookIndex({
			collection: GoodThings.books
		});
		this._swapView(indexView);
	},

	show: function(){
		console.log("routing to show page");
		var showView = new GoodThings.Views.BookShow();
		this._swapView(showView)
	},

	new: function(){
		console.log("routing to new page");
		var newView = new GoodThings.Views.BookForm();
		this._swapView(newView);
	},

	edit: function(){
		console.log("routing to edit page");
		var editView = new GoodThings.Views.BookForm();
		this._swapView
	},

	_swapView: function(view){
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el); //remember to make renders all return this
 	}
});