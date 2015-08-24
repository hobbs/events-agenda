export default Ember.Controller.extend({

	groupedEvents: function() {

		var result = [];

		this.get('model').forEach(function(item) {
			if (result.length == 0 || result[result.length - 1].startTime.valueOf() != item.get('startTime').valueOf()) {
				var newDay = false;



				if (result.length == 0) {
					newDay = true // First day
				} else {
					var prevDate = result[result.length - 1].startTime;
					var curDate = item.get('startTime');
					if (prevDate.getDate() != curDate.getDate() 
						|| prevDate.getMonth() != curDate.getMonth()
						|| prevDate.getFullYear() != curDate.getFullYear()) {
						newDay = true;
					}
				}

				result[result.length] = { startTime: item.get('startTime'), items: [item], newDay: newDay};
			} else {
				result[result.length - 1].items.push(item)
			}

			console.log(result);
		});

		return result;
	}.property('model'),

	modelFeatured: function() {
		var result = [];
		this.get('model').forEach(function(item) {
			if (item.get('featured') == true) {
				result.push(item);
			}
		});
		return result;

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