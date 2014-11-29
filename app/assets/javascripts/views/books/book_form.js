GoodThings.Views.BookFrom = Backbone.View.extend({
	template: JST['books/form'],

	intialize: function(){

	},

	render: function(){
		var content = template();

		this.$el.html(content);
		
		return this;
	}
});