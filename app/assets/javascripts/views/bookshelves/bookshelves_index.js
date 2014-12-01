GoodThings.Views.BookshelvesIndex = Backbone.View.extend({
	template: JST['bookshelves/index'],

	initialize: function(){
		//this.listenTo(this.collection, 'sync', this.render)
	},

	render: function () {
		var content = this.template({
			bookshelves: this.collection
		});

		this.$el.html(content);

		return this;
	}
});