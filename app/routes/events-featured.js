export default Ember.Route.extend({
  model: function () {
	  return this.store.find('event', { where: '{ "featured": true }', order: 'startTime'} );
  },

  actions: {
  	toggleStar: function() {
  		console.log("featured action");
  	}
  }
});