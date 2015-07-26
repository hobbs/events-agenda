export default Ember.Component.extend({

	actions: {
		toggleStar: function() {
			var fav = this.get('event').get('favorite');
			console.log(fav);
			console.log('updating');
			console.log(this.get('event'))
			this.get('event').set('favorite', !fav)
			console.log(this.get('event').get('favorite'));
		}
	}
});