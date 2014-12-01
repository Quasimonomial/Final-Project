GoodThings.Views.BookStatusShow = Backbone.View.extend({
	template: JST['book_statuses/show'],

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function(){
		var content = this.template({});

		this.$el.html(content);
		
		return this;
	}
});