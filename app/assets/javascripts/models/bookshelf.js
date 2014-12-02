GoodThings.Models.Bookshelf = Backbone.Model.extend({
	urlRoot:"api/bookshelves",

	books: function(){
		if(!this._books){
			this._books = new GoodThings.Collections.Books()
		}

		return this._books;
	},
	
	add_book_to_shelf: function(){

	},

	remove_book_from_shelf: function(){

	},
});