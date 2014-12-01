GoodThings.Views.BookshelfForm = Backbone.View.extend({
	template: JST["bookshelves/form"],

	render: function(){
		var content = this.template({
			bookshelf: this.model
		});

		this.$el.html(content);

		return this;
	}
});