GoodThings.Views.BookshelfShow = Backbone.View.extend({
	template: JST["bookshelves/show"],

	render: function(){
		var content = this.template({
		
		});

		this.$el.html(content);

		return this;
	}
});