var eventsRouteMixin = Ember.Mixin.create({
	actions : {
		changeEventsFilter: function (route) {
			this.transitionTo(route);
		}
	}
});

export default eventsRouteMixin;