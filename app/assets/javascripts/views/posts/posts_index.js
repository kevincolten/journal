Journal.Views.PostsIndex = Backbone.View.extend({

	initialize: function () {
		var renderCallback = this.render.bind(this);
		this.collection.on("add", renderCallback);
		this.collection.on("change", renderCallback);
		this.collection.on("remove", renderCallback);
	},


	events: {
		"submit form.delete-post": "destroy"
	},

	destroy: function (event) {
		event.preventDefault();
		var id = $(event.currentTarget).attr("data_id");
		var post = this.collection.get(id);
		post.destroy();
	},

	render: function () {
		this.$el.html(this.template({ posts: this.collection }));
		return this;
	},

	template: JST['posts/index']

});
