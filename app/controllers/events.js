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

	randomCookie: function() {
		if (localStorage.getItem('localrand') == undefined) {
			localStorage.setItem('localrand', Math.random());
		}
		return localStorage.getItem('localrand');
	}.property('model')

});