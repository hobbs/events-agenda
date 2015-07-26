import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('events', {path: '/'});
	this.route('events-starred', {path: '/starred'});
});

Router.reopen({
  location: 'hash'
});

export default Router;
