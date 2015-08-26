export default Ember.Controller.extend({

	groupedEvents: function() {
		console.log(this.visible.state);
		var result = [];

		this.get('model').forEach(function(item) {
			if (item.get('favorite') == true) {

				if (result.length == 0 || result[result.length - 1].startTime.valueOf() != item.get('startTime').valueOf()) {
					result[result.length] = { startTime: item.get('startTime'), items: [item]};
				} else {
					result[result.length - 1].items.push(item)
				}
			}
		});

		return result;
	}.property('model')

});