var SiteHeadComponent = Ember.Component.extend({
	eventsClasses: '',
	featuredEventsClasses: 'active',
	activeModelId: 'events',

	actions: {
		changeEventsModel: function (modelId) {
			var activeModelId = this.get('activeModelId');
			if (activeModelId !== modelId) {

				this.set('activeModelId', modelId);

				this.toggleClasses();

				this.sendAction('menuToggled', event.target.id);
			}
		}
	},

	toggleClasses: function () {
		if (this.get('eventsClasses') === 'active') {
			this.set('eventsClasses', '');
			this.set('featuredEventsClasses', 'active');
		} else {
			this.set('eventsClasses', 'active');
			this.set('featuredEventsClasses', '');
		}
	}
});

export default SiteHeadComponent;