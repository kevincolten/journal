Journal.Routers.Posts = Backbone.Router.extend({
	initialize: function ($sideBar, $content, posts) {
		this.$sideBar = $sideBar;
		this.$content = $content;
		this.posts = posts;

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
		this.posts.add(model);
		var postForm = new Journal.Views.PostsForm({
			model: model
		});

		this.$content.html(postForm.render().$el);
	}

});
