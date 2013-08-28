Journal.Views.PostsForm = Backbone.View.extend({
	events: {
		"submit form.post-form": "submitModel"
	},

	render: function () {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	template: JST['posts/form'],

	_getSubmitMethod: function () {
		if (this.model.isNew()) {
			return this.collection.create.bind(this.collection);
		} else {
			return this.model.save.bind(this.model);
		}
	},

	submitModel: function (event) {
		event.preventDefault();
		var postData = $(event.currentTarget).serializeJSON();
		var submitMethod = this._getSubmitMethod()

		submitMethod(postData, {
			success: function (model) {
				Journal.Store.router.navigate('#/posts/' + model.id, {trigger: true});
			}
		});
	}
});
