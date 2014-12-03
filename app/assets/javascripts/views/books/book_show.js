GoodThings.Views.BookShow = Backbone.View.extend({
	template: JST['books/show'],

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function(){
		console.log("rendering show page");
		var content = this.template({
			book: this.model
		});

		this.$el.html(content);
		
		return this;
	}
});