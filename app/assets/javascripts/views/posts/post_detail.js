Journal.Views.PostsDetail = Backbone.View.extend({

	initialize: function () {
		// var renderCallback = this.render.bind(this);
// 		this.collection.on("add", renderCallback);
// 		this.collection.on("change", renderCallback);
// 		this.collection.on("remove", renderCallback);
	},

	render: function () {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	template: JST['posts/detail']

});
