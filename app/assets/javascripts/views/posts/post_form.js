Journal.Views.PostsForm = Backbone.View.extend({
	events: {
		"submit form.post-form": "update"
	},

	render: function () {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	template: JST['posts/form'],

	update: function (event) {
		event.preventDefault();
		console.log("here!")
		var postData = $(event.currentTarget).serializeJSON();
		this.model.set(postData);
		this.model.save();
		Journal.Store.router.navigate('#/posts/' + this.model.id, {trigger: true});
	}
});
