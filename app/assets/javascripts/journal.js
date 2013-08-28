window.Journal = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Store: {},

	initialize: function() {
		var posts = new Journal.Collections.Posts();
		var that = this;

		posts.fetch({
			success: function () {
				that.startRouter(posts);
			}
		});
	},

	startRouter:  function (posts) {

		var $sideBar = $('<div class="sidebar">');
		var $content = $('<div class="content">');
		$("body").html($sideBar).append($content);

		Journal.Store.router = new Journal.Routers.Posts($sideBar, $content, posts);

		Backbone.history.start();
	}

};

$(document).ready(function(){
	Journal.initialize();
});
