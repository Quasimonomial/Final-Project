GoodThings.Collections.BookReaderships = Backbone.collection.extend({
	url: "api/book_readerships",
	model: GoodThings.Models.BookReadership,

	getOrFetch: function (id) {
		console.log("getting or fetching");
	    var bookReadership = this.get(id);
	    var that = this;
	    if(!bookReadership) {
	    	console.log("book readership not found");
	      	bookReadership = new GoodThings.Models.Bookshelf({ id: id });
	      	bookReadership.fetch({
	        success: function () {
	          that.add(bookReadership);
	        }
	      });
	    } else {
	    	console.log("book readership found");
	     	bookReadership.fetch();
	    }

	   	return bookReadership;
	  }
});