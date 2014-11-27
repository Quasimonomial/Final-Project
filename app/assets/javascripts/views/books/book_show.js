GoodThings.Views.BookShow = Backbone.View.extend({
	template: JST['books/show'],

	intialize: function(){

	},

	render: function(){
		content = template();

		this.$el.html(content);
		
		return this;
	}
});