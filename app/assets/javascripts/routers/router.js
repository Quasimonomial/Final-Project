GoodThings.Routers.GoodRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl
		console.log("Starting Router");
		console.log(this.$rootEl);
	},

	_swapView: function(view){
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el); //remember to make renders all return this
 	}
});