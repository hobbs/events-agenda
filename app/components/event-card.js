var EventCardComponent = Ember.Component.extend({
	actions: {
		markAsStarred: function () {
			debugger;
			this.sendAction('markAsStarred', this.get('info').name);
		},

		unmarkAsStarred: function () {

		}
	}
});

export default EventCardComponent;