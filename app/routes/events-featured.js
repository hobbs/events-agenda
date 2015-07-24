import eventsRouteMixin from './mixins/events-route-mixin';

export default Ember.Route.extend(eventsRouteMixin, {
  model: function () {
	  return this.store.find('event', { where: '{ "featured": true }', order: 'startTime'} );
  }
});