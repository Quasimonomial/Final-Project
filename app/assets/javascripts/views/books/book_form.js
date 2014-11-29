GoodThings.Views.BookForm = Backbone.View.extend({
	template: JST['books/form'],

	events: {
		'submit form': 'submit'
	},

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function(){
		var content = this.template({
			book: this.model
		});

		this.$el.html(content);
		
		return this;
	},

	submit: function(event){
		event.preventDefault();

		var attrs = $(event.target).serializeJSON();

		var success = function(){
			this.collection.add(this.model, {merge: true});
			Backbone.history.navigate("/#/books", {trigger: true});
		}.bind(this);

		function errors(model, response){
			$('.errors').empty();
			response.responseJSON.forEach(function (el){
				var li = $('<li></li>')
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