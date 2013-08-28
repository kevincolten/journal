Journal.Routers.Posts = Backbone.Router.extend({
	initialize: function ($sideBar, $content, posts) {
		this.$sideBar = $sideBar;
		this.$content = $content;
		this.posts = posts;

		this.index();
	},

	routes: {
		""              : "index",
		"posts/new"     : "new",
		"posts/:id"     : "show",
		"posts/:id/edit": "edit"
	},

	index: function () {
		var postsIndexView = new Journal.Views.PostsIndex({
			collection: this.posts
		});

		this.$sideBar.html(postsIndexView.render().$el);
	},

	show: function (id) {
		var post = this.posts.get(id);

		var postDetailView = new Journal.Views.PostsDetail({
			model: post
		});

		this.$content.html(postDetailView.render().$el);
	},

	edit: function (id) {
		var post = this.posts.get(id);

		var postForm = new Journal.Views.PostsForm({
			model: post
		});

		this.$content.html(postForm.render().$el);
	},

	new: function () {
		var model = new Journal.Models.Post;
		var postForm = new Journal.Views.PostsForm({
			model: model,
			collection: this.posts
		});

		this.$content.html(postForm.render().$el);
	}

});
