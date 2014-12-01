GoodThings.Views.BookshelfForm = Backbone.View.extend({
	template: JST["bookshelves/form"],

	render: function(){
		var content = this.template({
		
		});

		this.$el.html(content);

		return this;
	}
});