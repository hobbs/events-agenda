export default Ember.Route.extend({
  model: function () {
	  return this.store.find('event', { order: 'startTime' });
  },

  action: {
  	toggleStar: function() {
  		console.log('action here!');
  	}

  }
});