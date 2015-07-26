export default Ember.Controller.extend({

	groupedEvents: function() {

		var result = [];

		this.get('model').forEach(function(item) {
			if (result.length == 0 || result[result.length - 1].startTime.valueOf() != item.get('startTime').valueOf()) {
				result[result.length] = { startTime: item.get('startTime'), items: [item]};
			} else {
				result[result.length - 1].items.push(item)
			}

			console.log(result);
		});

		return result;
	}.property('model'),

	modelFeatured: function() {
		return this.store.find('event', { where: '{ "featured": true }', order: 'startTime'} );
	}.property('model'),

	featured: true,

	actions: {
		showFeatured: function() {
			this.set('featured', true);
		},

		showAll: function() {
			this.set('featured', false);
		}
	}

});