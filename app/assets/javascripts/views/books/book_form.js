GoodThings.Views.BookForm = Backbone.View.extend({
	template: JST['books/form'],

	intialize: function(){

	},

	render: function(){
		var content = this.template();

		this.$el.html(content);
		
		return this;
	}
});