export default Ember.Route.extend({
  model: function() {
    // the model is an Array of all of the posts
    // fetched from this url
    return this.store.findAll('event');
  }
});