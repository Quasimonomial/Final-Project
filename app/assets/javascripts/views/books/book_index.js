GoodThings.Views.BookIndex = Backbone.View.extend({
	template: JST['books/index'],

	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render)
	},

	render: function () {
		console.log('rendering index');
		console.log(this.collection);
		var content = this.template({
			books: this.collection
		});

		this.$el.html(content);

		return this;
	}
});