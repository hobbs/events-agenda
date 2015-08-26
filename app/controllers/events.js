export default Ember.Controller.extend({

	groupedEvents: function() {

		var result = [];

		var that = this;
		this.get('model').forEach(function(item) {

			if (that.get('starred') == true && item.get('favorite') == false) {
				return;
			}

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
	}.property('model', 'starred'),

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
	starred: false,
	all: false,

	actions: {
		showFeatured: function() {
			this.set('featured', true);
			this.set('starred', false);
			this.set('all', false);

		},

		showAll: function() {
			this.set('featured', false);
			this.set('starred', false);
			this.set('all', true);

		}, 

		showStarred: function() {
			this.set('featured', false);
			this.set('starred', true);
			this.set('all', false);
		}
	}

});