window.Journal = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		console.log('hi there');
		var posts = new Journal.Collections.Posts();
		posts.fetch({
			success: function () {
				var postsIndexView = new Journal.Views.PostsIndex({
					collection: posts
				});

				$("body").html(postsIndexView.render().$el);
			}
		});

	}
};

$(document).ready(function(){
	Journal.initialize();
});
