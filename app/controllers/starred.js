var StarredController = Ember.Controller.extend({
	// the initial value of the `search` property
	localStorageKey: 'starredItems',
	cookieName: 'starredItems',

	items: [],

	actions: {

	},

	add: function (name) {
		if (items.indexOf(name) === -1) {
			items.push(name);
		}
		this.syncWithStorage();
	},

	remove: function (name) {
		var index = items.indexOf(name);
		if (index !== -1) {
			items.splice(index, 1);
		}
		this.syncWithStorage();
	},

	syncWithStorage: function () {
		var itemsStringified = JSON.stringify(this.items);
		localStorage.set(this.localStorageKey, itemsStringified);
		document.cookie += cookieName + '=' + itemsStringified;
	}
});

export default StarredController;