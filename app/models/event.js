import DS from "ember-data";
 
var events = DS.Model.extend({
	name: DS.attr('string'),
	startTime: DS.attr('date'),
	endTime: DS.attr('date'),
	location: DS.attr('string'),
	imgUrl: DS.attr('string'),
	featured: DS.attr('boolean'),

	favorite: function(key, value, previousValue) {
		console.log("setting to: " + value);
		if (arguments.length > 1) {
			localStorage.setItem(this.get('id'), value?1:0);
		}

		if (localStorage.getItem(this.get('id')) == undefined) {
			return false;
		} else {
			return localStorage.getItem(this.get('id')) == 1;			
		}


	}.property('id')
});

events.reopenClass({
	FIXTURES: [

	{
		id: 1,
		name: 'Event Check-in & Breakfast',
		startTime: new Date(2015, 9, 9, 8, 30, 0, 0),
		endTime: new Date(2015, 9, 9, 8, 45, 0, 0),
		location: 'Wikia Lobby',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: true
	},

	{
		id: 2,
		name: 'Orientation',
		startTime: new Date(2015, 9, 9, 9, 45, 0, 0),
		endTime: new Date(2015, 9, 9, 10, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 3,
		name: 'Welcome & Introductions',
		startTime: new Date(2015, 9, 9, 10, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 11, 30, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 4,
		name: 'Product Roadmap Overview',
		startTime: new Date(2015, 9, 9, 11, 30, 0, 0),
		endTime: new Date(2015, 9, 9, 12, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: true
	}


	]
});

export default events;