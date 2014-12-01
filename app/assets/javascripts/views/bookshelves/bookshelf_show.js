GoodThings.Views.BookshelfShow = Backbone.View.extend({
	template: JST["bookshelves/show"],

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render)
	},

	render: function(){
		var content = this.template({
			bookshelf: this.model
		});

		this.$el.html(content);

		return this;
	}
});