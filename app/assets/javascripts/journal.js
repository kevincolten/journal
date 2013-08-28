window.Journal = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Store: {},
	initialize: function() {
		var posts = new Journal.Collections.Posts();
		posts.fetch({
			success: function () {
				Journal.Store.router = new Journal.Routers.Posts($("body"), posts);

				Backbone.history.start();
			}
		});

	}
};

$(document).ready(function(){
	Journal.initialize();
});
