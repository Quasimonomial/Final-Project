GoodThings.Views.Index = Backbone.View.extend({
	template: JST['index'],

	initialize: function(){},

	render: function(){
		var content = this.template({});

		this.$el.html(content);
		
		return this;
	}
});