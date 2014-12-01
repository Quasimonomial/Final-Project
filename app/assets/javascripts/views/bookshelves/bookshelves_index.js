GoodThings.Views.BookshelvesIndex = Backbone.View.extend({
	template: JST['bookshelves/index'],

	initialize: function(){
		//this.listenTo(this.collection, 'sync', this.render)
	},

	render: function () {
		console.log('rendering index');
		var content = this.template({
			//books: this.collection
		});

		this.$el.html(content);

		return this;
	}
});