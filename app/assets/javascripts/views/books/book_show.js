GoodThings.Views.BookShow = Backbone.View.extend({
	template: JST['books/show'],

	intialize: function(){

	},

	render: function(){
		var content = this.template();

		this.$el.html(content);
		
		return this;
	}
});