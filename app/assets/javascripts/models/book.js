GoodThings.Models.Book = Backbone.Model.extend({
	urlRoot: 'api/books',

	generate_by_isbn: function(item){
		function getIsbn10(industryIdentifiers){
			for(var key in industryIdentifiers){
				if (industryIdentifiers[key].type === "ISBN_10"){
					return industryIdentifiers[key].identifier;
				}
			}
		};

		function getIsbn13(industryIdentifiers){
			for(var key in industryIdentifiers){
				if (industryIdentifiers[key].type === "ISBN_13"){
					return industryIdentifiers[key].identifier;
				}
			}
		};

		
		this.set({"title": item.volumeInfo.title});
		this.set({"author":item.volumeInfo.authors[0]});
		this.set({"published_date": item.volumeInfo.publishedDate});
		this.set({"description": item.volumeInfo.description});
		this.set({"isbn10": getIsbn10(item.volumeInfo.industryIdentifiers)});
		this.set({"isbn13": getIsbn13(item.volumeInfo.industryIdentifiers)});
		this.set({"page_count": item.volumeInfo.pageCount});

		console.log(this.get("title"));
		console.log(this.get("author"));
		console.log(this.get("published_date"));
		console.log(this.get("description"));
		console.log(this.get("isbn10"));
		console.log(this.get("isbn13"));
		console.log(this.get("page_count"));
	}
});
