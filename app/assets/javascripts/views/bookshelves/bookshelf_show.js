GoodThings.Views.BookshelfShow = Backbone.View.extend({
	template: JST["bookshelves/show"],

	events: {
		"submit form#loadById": "addToBookshelf",
		"submit form.loadByIsbn": "addBookViaIsbn",
		"click a.removeFromShelf": "removeBookFromShelf"
	},

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.books(), 'sync add remove', this.render);
	},

	render: function(){
		// console.log(this.model);
		// console.log(this.model.books());
		var content = this.template({
			bookshelf: this.model
		});

		this.$el.html(content);

		return this;
	},

	addToBookshelf: function(event){
		event.preventDefault();

		console.log("adding book");
		var book_id = $(event.target).serializeJSON().book_id;
		this.model.add_book_to_shelf(book_id);
	},

	removeBookFromShelf: function(event){
		event.preventDefault();
		var $target = $(event.currentTarget);
		console.log("removing book")
		var book_id = $target.attr('data-id');
		console.log(this.model)
		this.model.removeBookFromShelf(book_id);
	}

});