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
	
	add_book_to_shelf: function(isbn){
		var shelf = this;

		function buildReadership(book_id){ 
			$.ajax({
				url: "/api/book_readerships",
				method: "POST",
	  			dataType: 'json',
				data: {
					book_readership:{
						book_id: book_id,
						bookshelf_id: shelf.id
					}
					// "book_readership:book_id": book_id,
					// "book_readershipbookshelf_id]": this.id
				},
				success: function(book){
					shelf.books().add(book);
					console.log("Successfully added book to shelf");
				}
			});
		}

		$.ajax({
			 url: "/api/books/isbn/" + isbn,
			method: "get",
  			dataType: 'json',
			success: function(book){
				console.log("Successfully found book");
				console.log(book);
				console.log("found book");
				buildReadership(book.id);
				console.log("readership ran");
			}
		});

	},

	removeBookFromShelf: function(book_id){
		var shelf = this;

		$.ajax({
			url: "/api/book_readerships",
			method: "POST",
  			dataType: 'json',
			data: {
				"_method":"delete",
				book_readership:{
					book_id: book_id,
					bookshelf_id: this.id
				}
				
			},
			success: function(book){
				console.log(book);
				shelf.books().remove(book);
				shelf.trigger("remove");
				console.log("Successfully removed book to shelf");
			}
		});

	}
});