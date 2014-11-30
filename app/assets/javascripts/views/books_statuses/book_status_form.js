Goodthings.Views.BookStatusForm = Backbone.Views.extend({
	template: JST['book_statuses/form'],

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function(){
		var content = this.template({
	
		});

		this.$el.html(content);
		
		return this;
	}
});