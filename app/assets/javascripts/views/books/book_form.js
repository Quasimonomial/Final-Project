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
		var that = this;
		event.preventDefault();
		console.log("Generating Data from ISBN");
		var isbn = $(event.target).serializeJSON().isbn;
		console.log(isbn);
		$.ajax({
			 url: "/api/books/isbn/" + isbn,
			method: "get",
  			dataType: 'json',
			success: function(book){
				console.log("Successfully found book");
				console.log(book);
				Backbone.history.navigate("#/books/"+ book.id, {trigger: true});
			}
		});
	}

	// parseBookData: function(data){
	// 	console.log("parsing book data")
	// 	var firstResult = data.items[0];

	// 	this.model.generate_by_isbn(firstResult);
	// 	this.model.save();
	// 	Backbone.history.navigate("#/books", {trigger: true});
	// }	

});