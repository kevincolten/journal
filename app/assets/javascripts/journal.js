window.Journal = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		var posts = new Journal.Collections.Posts();
		posts.fetch({
			success: function () {
				new Journal.Routers.Posts($("body"), posts);
				Backbone.history.start();
			}
		});

	}
};

$(document).ready(function(){
	Journal.initialize();
});
