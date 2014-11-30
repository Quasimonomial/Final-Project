GoodThings.Routers.GoodRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl
		console.log("Starting Router");
		console.log(this.$rootEl);
	},

	routes: {
		'books': 'bookIndex',
		'books/new' : 'bookNew',
		'books/:id': 'bookShow',
		'books/:id/edit': 'bookEdit'

	},

	bookIndex: function(){
		console.log("reaching index");
		GoodThings.books.fetch();
		console.log(GoodThings.books);
		var indexView = new GoodThings.Views.BookIndex({
			collection: GoodThings.books
		});
		this._swapView(indexView);
	},

	bookShow: function(id){
		var book = GoodThings.books.getOrFetch(id);
		console.log("routing to show page");
		var showView = new GoodThings.Views.BookShow({
			collection: GoodThings.books,
			model: book
		});
		this._swapView(showView)
	},

	bookNew: function(){
		console.log("routing to new page");
		var newBook = new GoodThings.Models.Book();
		var newView = new GoodThings.Views.BookForm({
			collection: GoodThings.books,
			model: newBook
		});
		this._swapView(newView);
	},

	bookEdit: function(id){
		console.log("routing to edit page");
		var book = GoodThings.books.getOrFetch(id);
		var editView = new GoodThings.Views.BookForm({
			collection: GoodThings.books,
			model: book
		});
		this._swapView(editView);
	},

	_swapView: function(view){
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el); //remember to make renders all return this
 	}
});