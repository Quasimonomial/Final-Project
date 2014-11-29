GoodThings.Collections.Books = Backbone.Collection.extend({
	url: "api/books",
	model: GoodThings.Models.Book,

	getOrFetch: function (id) {
		console.log("getting or fetching");
	    var book = this.get(id);
	    var that = this;
	    if(!book) {
	    	console.log("book not found");
	      book = new GoodThings.Models.Book({ id: id });
	      book.fetch({
	        success: function () {
	          that.add(book);
	        }
	      });
	    } else {
	    	console.log("book found");
	     	book.fetch();
	    }

	   	return book;
	  }
});