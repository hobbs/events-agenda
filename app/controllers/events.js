export default Ember.Controller.extend({

	groupedEvents: function() {

		var result = [];

		this.get('model').forEach(function(item) {
			if (result.length == 0 || result[result.length - 1].startTime != item.get('startTime')) {
				result[result.length] = { startTime: item.get('startTime'), items: [item]};
			} else {
				result[result.length - 1].items.push(item)
			}

			console.log(result);
		});

		return result;
	}.property('model')

});