Journal.Views.PostsForm = Backbone.View.extend({
	events: {
		"submit form.post-form": "save"
	},

	render: function () {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	template: JST['posts/form'],

	save: function (event) {
		event.preventDefault();
		var postData = $(event.currentTarget).serializeJSON();

		this.model.save(postData, {
			success: function (model) {
				Journal.Store.router.navigate('#/posts/' + model.id, {trigger: true});
			}
		});
	}
});
