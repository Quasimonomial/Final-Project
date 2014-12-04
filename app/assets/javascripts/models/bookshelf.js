GoodThings.Models.Bookshelf = Backbone.Model.extend({
	urlRoot:"api/bookshelves",

	books: function(){
		if(!this._books){
			this._books = new GoodThings.Collections.Books()
		}

		return this._books;
	},

	parse: function(response){
		if(response.books){
			this.books().set(response.books, {parse: true});
			delete response.books;
		}

		return response;
	},
	
	add_book_to_shelf: function(book_id){
		var shelf = this;

		$.ajax({
			url: "/api/book_readerships",
			method: "POST",
  			dataType: 'json',
			data: {
				book_readership:{
					book_id: book_id,
					bookshelf_id: this.id
				}
				// "book_readership:book_id": book_id,
				// "book_readershipbookshelf_id]": this.id
			},
			success: function(book){
				shelf.books().add(book);
				console.log("Successfully added book to shelf");
			}
		});
	},

	remove_book_from_shelf: function(){

	}
});