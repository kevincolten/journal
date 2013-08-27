Journal.Routers.Posts = Backbone.Router.extend({
	initialize: function ($rootEl, posts) {
		this.$rootEl = $rootEl;
		this.posts = posts;
	},

	routes: {
		"": "index",
		"posts/:id": "show"
	},

	index: function () {
		var postsIndexView = new Journal.Views.PostsIndex({
			collection: this.posts
		});

		this.$rootEl.html(postsIndexView.render().$el);
	},

	show: function (id) {
		var post = this.posts.get(id);

		var postDetailView = new Journal.Views.PostsDetail({
			model: post
		});

		this.$rootEl.html(postDetailView.render().$el)
	}
});
