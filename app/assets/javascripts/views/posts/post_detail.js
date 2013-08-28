Journal.Views.PostsDetail = Backbone.View.extend({
	render: function () {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	template: JST['posts/detail']

});
