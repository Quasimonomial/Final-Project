GoodThings.Views.BookshelfForm = Backbone.View.extend({
	template: JST["bookshelves/form"],

	events: {
		"submit form": "submit"
	},

	render: function(){
		var content = this.template({
			bookshelf: this.model
		});

		this.$el.html(content);

		return this;
	},

	submit: function(event){
		console.log("submitting");
		event.preventDefault();
		var attrs = $(event.target).serializeJSON();

		var success = function(){
			this.collection.add(this.model, {merge: true});
			Backbone.history.navigate("#/bookshelves", {trigger: true});
		}.bind(this);

		function errors(model, response){
			$('.errors').empty();
			response.responseJSON.forEach(function(el){
				var li = $("<li></li>")
				li.html(el);
				$('.errors').append(li);
			}.bind(this));
		}

		this.model.save(attrs, {
			success: success,
			error: errors.bind(this)
		})
	}
});