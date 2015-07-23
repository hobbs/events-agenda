export default Ember.Route.extend({
  model: function () {
	  return this.store.findAll('event');
  },
	actions: {
		setEventsModel: function (modelName) {
			this.set('model', modelName);
		}
	},
	events: function () {
		return this.store.findAll('event');
	},
	headlineEvents: function () {
		return this.store.findAll('headlineEvent');
	}
});