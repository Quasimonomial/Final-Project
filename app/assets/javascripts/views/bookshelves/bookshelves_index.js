GoodThings.Views.BookshelvesIndex = Backbone.View.extend({
	template: JST['bookshelves/index'],

	initialize: function(){
		this.listenTo(this.collection, 'sync destroy', this.render)
	},

	events: {
		'click .bookshelfDelete': 'destroyShelf'
	},

	render: function () {
		var content = this.template({
			bookshelves: this.collection
		});

		this.$el.html(content);

		return this;
	},

	destroyShelf: function(event){
		event.preventDefault();

		var $target = $(event.currentTarget);
		var bookshelf = this.collection.get($target.attr('data-id'));
		console.log($target);
		console.log($target.attr('data-id'));
		bookshelf.destroy();
	}
});