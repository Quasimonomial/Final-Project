GoodThings.Routers.GoodRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl
		console.log("Starting Router");
		this.bookshelvesIndexView = new GoodThings.Views.BookshelvesIndex({
			collection: GoodThings.bookshelves
		});
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
		var mainIndexView = new GoodThings.Views.Index();
		
		this._swapView(mainIndexView, {sidebar: true});
	},

	bookshelfShow: function(id){
		var bookshelf = GoodThings.bookshelves.getOrFetch(id);
		bookshelf.fetch();

		var showView = new GoodThings.Views.BookshelfShow({
			model: bookshelf
		});
		this._swapView(showView, {sidebar: true});
	},

	bookshelfEdit: function(id){
		var bookshelf = GoodThings.bookshelves.getOrFetch(id);
		var editView = new GoodThings.Views.BookshelfForm({
			collection: GoodThings.bookshelves,
			model: bookshelf
		});
		this._swapView(editView, {sidebar: true});
	},

	bookshelfNew: function(){
		var newBookshelf = new GoodThings.Models.Bookshelf();
		var newView = new GoodThings.Views.BookshelfForm({
			collection: GoodThings.bookshelves,
			model: newBookshelf
		});
		this._swapView(newView, {sidebar: true});
	},

	_swapSideBar: function(options){
		//this.sidebarView && this.sidebarView.remove();
		if(options.sidebar){
			// this.sidebarView = this.bookshelvesIndexView;
			$('#sidebar').html(this.bookshelvesIndexView.render().$el);
		}else{
			$('#sidebar').empty();
		}
	},

	_swapView: function(view, options){
		if(typeof options === "undefined"){
			options = {sidebar: false}
		}
		this.currentView && this.currentView.remove();
		this.currentView = view;
		$('#content').html(view.render().$el); //remember to make renders all return this
		this._swapSideBar(options);
 	}
});