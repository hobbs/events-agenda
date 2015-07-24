import eventsRouteMixin from './mixins/events-route-mixin';

var eventsRoute =  Ember.Route.extend(eventsRouteMixin, {

  model: function () {
	  return this.store.find('event', { order: 'startTime' });
  }
});

export default eventsRoute;