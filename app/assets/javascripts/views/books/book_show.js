GoodThings.Views.BookShow = Backbone.View.extend({
	template: JST['books/show'],

	intialize: function(){

	},

	render: function(){
		var content = template();

		this.$el.html(content);
		
		return this;
	}
});