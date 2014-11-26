GoodThings.Collections.Books = Backbone.Collection.extend({
	url: "api/books",
	model: GoodThings.Models.Book,

	getOrFetch: function (id) {
	    var book = this.get(id);

	    if(!board) {
	      book = new GOodThings.Models.Book({ id: id });
	      book.fetch({
	        success: function () {
	          this.add(book);
	        }.bind(this)
	      });
	    } else {
	     	book.fetch();
	    }

	   	return book;
	  }
});