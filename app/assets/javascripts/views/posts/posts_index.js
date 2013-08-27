Journal.Views.PostsIndex = Backbone.View.extend({

	render: function () {
		this.$el.html(this.template({ posts: this.collection }));
		return this;
	},

	template: JST['posts/index']

});
