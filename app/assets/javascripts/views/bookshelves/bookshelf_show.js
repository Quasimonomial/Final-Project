GoodThings.Views.BookshelfShow = Backbone.View.extend({
	template: JST["bookshelves/show"],

	events: {
		"submit form": "addBookshelf"
	},

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render)
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

	addBookshelf: function(event){
		event.preventDefault();
		console.log("adding book")
	}
});