GoodThings.Routers.GoodRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl
		console.log("Starting Router");
	},

	routes: {
		'': 'index',
		'books': 'bookIndex',
		'books/new' : 'bookNew',
		'books/:id': 'bookShow',
		'books/:id/edit': 'bookEdit',
		'bookshelves': 'bookshelvesIndex',
		'bookshelves/new': 'bookshelfNew',
		'bookshelves/:id': 'bookshelfShow',
		'bookshelves/:id/edit': 'bookshelfEdit'

	},

	index: function(){
		console.log("reaching root js index")
		var indexView = new GoodThings.Views.Index();
		this._swapView(indexView);
	},

	bookIndex: function(){
		console.log("reaching index");
		GoodThings.books.fetch();
		
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

	bookshelvesIndex: function(){
		console.log("routing to bookshelves Index");
		GoodThings.bookshelves.fetch();
		var indexView = new GoodThings.Views.BookshelvesIndex({
			collection: GoodThings.bookshelves
		});
		this._swapView(indexView);
	},

	bookshelfShow: function(){
		var showView = new GoodThings.Views.BookshelfShow();
		this._swapView(showView);
	},

	bookshelfEdit: function(){
		var editView = new GoodThings.Views.BookshelfForm();
		this._swapView(editView);
	},

	bookshelfNew: function(){
		var newView = new GoodThings.Views.BookshelfForm();
		this._swapView(newView);
	},

	_swapView: function(view){
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el); //remember to make renders all return this
 	}
});