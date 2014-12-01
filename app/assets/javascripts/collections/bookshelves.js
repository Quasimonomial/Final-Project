GoodThings.Collections.Bookshelves = Backbone.Collection.extend({
	url: "api/bookshelves",
	model: GoodThings.Models.Bookshelf,

	getOrFetch: function (id) {
		console.log("getting or fetching");
	    var bookshelf = this.get(id);
	    var that = this;
	    if(!bookshelf) {
	    	console.log("bookshelf not found");
	      	bookshelf = new GoodThings.Models.Bookshelf({ id: id });
	      	bookshelf.fetch({
	        success: function () {
	          that.add(bookshelf);
	        }
	      });
	    } else {
	    	console.log("bookshelf found");
	     	bookshelf.fetch();
	    }

	   	return bookshelf;
	  }
});