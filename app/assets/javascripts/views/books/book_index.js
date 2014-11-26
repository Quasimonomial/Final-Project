GoodThings.Views.BookIndex = Backbone.View.extend({
	template: JST['books/index'],

	initialize: function(){
		//this.listenTo(this.collection, 'sync', this.render)
	},

	render: function () {
		var content = this.template();

		this.$el.html(content);

		return this;
	}
});