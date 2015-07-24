import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('events-featured', {path: '/'});
	this.route('events', {path: '/all'});
	this.route('events', {path: '/starred'});
});

Router.reopen({
  location: 'hash'
});

export default Router;
