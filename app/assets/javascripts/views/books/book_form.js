GoodThings.Views.BookForm = Backbone.View.extend({
	template: JST['books/form'],

	events: {
		'submit form.traditional': 'submit',
		'submit form.isbn': 'useIsbn'
	},

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function(){
		var content = this.template({
			book: this.model
		});

		this.$el.html(content);
		
		return this;
	},

	submit: function(event){
		event.preventDefault();

		var attrs = $(event.target).serializeJSON();

		var success = function(){
			this.collection.add(this.model, {merge: true});
			Backbone.history.navigate("#/books", {trigger: true});
		}.bind(this);

		function errors(model, response){
			$('.errors').empty();
			response.responseJSON.forEach(function (el){
				var li = $('<li></li>')
				li.html(el);
				$('.errors').append(li);
			}.bind(this));
		}

		this.model.save(attrs, {
			success: success,
			error: errors.bind(this)
		})
	},

	useIsbn: function(event){
		event.preventDefault();
		console.log("Generating Data from ISBN");
		var isbn = $(event.target).serializeJSON().isbn;
		var googleUrl = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn
		console.log(isbn);
		console.log(googleUrl);
		var that = this;
		$.ajax({
		    type:     "GET",
		    url:      googleUrl,
		    dataType: "json",
		    success: function(data){
		        console.log(data);
		        that.parseBookData(data);
		    }
		});
	},

	parseBookData: function(data){
		console.log("parsing book data")

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

		var firstResult = data.items[0];
		var bookTitle = firstResult.volumeInfo.title;
		var bookAuthor = firstResult.volumeInfo.authors[0];
		var bookPublicationDate = firstResult.volumeInfo.publishedDate;
		var bookDescription = firstResult.volumeInfo.description;
		var bookIsbn10 = getIsbn10(firstResult.volumeInfo.industryIdentifiers);
		var bookIsbn13 = getIsbn13(firstResult.volumeInfo.industryIdentifiers);
		var bookPageCount = firstResult.volumeInfo.pageCount;

		console.log(bookTitle);
		console.log(bookAuthor);
		console.log(bookPublicationDate);
		console.log(bookDescription);
		console.log(bookIsbn10);
		console.log(bookIsbn13);
		console.log(bookPageCount);
	}	

});