GoodThings.Views.BookForm = Backbone.View.extend({
	template: JST['books/form'],

	intialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function(){
		var content = this.template();

		this.$el.html(content);
		
		return this;
	}
});