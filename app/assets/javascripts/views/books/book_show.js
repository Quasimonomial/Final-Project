GoodThings.Views.BookShow = Backbone.View.extend({
	template: JST['books/show'],

	intialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function(){
		console.log("rendering show page");
		console.log(this.model.toJSON());
		var content = this.template({
			book: this.model
		});

		this.$el.html(content);
		
		return this;
	}
});