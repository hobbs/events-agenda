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
		name: 'Check-in & Breakfast',
		startTime: new Date(2015, 9, 9, 8, 30, 0, 0),
		endTime: new Date(2015, 9, 9, 9, 30, 0, 0),
		location: 'Wikia HQ',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 2,
		name: 'Welcome & Introductions',
		startTime: new Date(2015, 9, 9, 9, 30, 0, 0),
		endTime: new Date(2015, 9, 9, 10, 45, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 3,
		name: 'Product Overview',
		startTime: new Date(2015, 9, 9, 10, 45, 0, 0),
		endTime: new Date(2015, 9, 9, 11, 15, 0, 0),
		location: 'Town Hall',
		imgUrl: 'http://vignette4.wikia.nocookie.net/admin-summit/images/d/d1/Slider-wikia-connect.png/revision/latest?cb=20150821022112',
		featured: true
	},
	{
		id: 4,
		name: 'Programming & Editorial Insights',
		startTime: new Date(2015, 9, 9, 11, 15, 0, 0),
		endTime: new Date(2015, 9, 9, 12, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'http://vignette4.wikia.nocookie.net/admin-summit/images/a/a3/Programming_and_Editorial.jpg/revision/latest?cb=20150828014730',
		featured: true
	},
	{
		id: 5,
		name: 'Lunch',
		startTime: new Date(2015, 9, 9, 12, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 13, 0, 0, 0),
		location: 'Wikia HQ',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 6,
		name: 'Creating Content in a Multi-device World',
		startTime: new Date(2015, 9, 9, 13, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 14, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'http://vignette3.wikia.nocookie.net/admin-summit/images/0/0d/Multi_Device.jpg/revision/latest?cb=20150828014355',
		featured: true
	},
	{
		id: 7,
		name: 'JS Security: A Fireside Chat',
		startTime: new Date(2015, 9, 9, 14, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 14, 30, 0, 0),
		location: 'Holodeck',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 8,
		name: 'Infoboxes:  Past, Present & Future',
		startTime: new Date(2015, 9, 9, 14, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 14, 30, 0, 0),
		location: 'Ministry of Magic',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 9,
		name: 'JS Security: A Fireside Chat',
		startTime: new Date(2015, 9, 9, 15, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 15, 30, 0, 0),
		location: 'Holodeck',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 10,
		name: 'Infoboxes:  Past, Present & Future',
		startTime: new Date(2015, 9, 9, 15, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 15, 30, 0, 0),
		location: 'Ministry of Magic',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 11,
		name: 'Threads, Conversations and Discussions, Oh My!',
		startTime: new Date(2015, 9, 9, 15, 30, 0, 0),
		endTime: new Date(2015, 9, 9, 16, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'http://vignette2.wikia.nocookie.net/admin-summit/images/9/9d/Wizofoz.jpg/revision/latest?cb=20150821003411',
		featured: true
	},
	{
		id: 12,
		name: 'Building & Strengthening Communities Growth Strategies',
		startTime: new Date(2015, 9, 9, 16, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 17, 0, 0, 0),
		location: 'Holodeck',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 13,
		name: 'Building & Strengthening Communities Communication Strategies',
		startTime: new Date(2015, 9, 9, 16, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 17, 0, 0, 0),
		location: 'Ministry of Magic',
		imgUrl: 'http://vignette2.wikia.nocookie.net/admin-summit/images/7/73/Communication_online.jpg/revision/latest?cb=20150825141512',
		featured: true
	},
	{
		id: 14,
		name: 'Day 1 Outro',
		startTime: new Date(2015, 9, 9, 17, 0, 0, 0),
		endTime: new Date(2015, 9, 9, 17, 30, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 15,
		name: 'Operation Selfie Shootout',
		startTime: new Date(2015, 9, 9, 17, 30, 0, 0),
		endTime: new Date(2015, 9, 9, 20, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 16,
		name: 'Rooftop Reception with Wikia Staff',
		startTime: new Date(2015, 9, 9, 17, 30, 0, 0),
		endTime: new Date(2015, 9, 9, 20, 0, 0, 0),
		location: 'Rooftop',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 17,
		name: 'Arrive & Breakfast',
		startTime: new Date(2015, 9, 10, 8, 30, 0, 0),
		endTime: new Date(2015, 9, 10, 9, 30, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 18,
		name: '5 Essential Techniques to Boost SEO Health',
		startTime: new Date(2015, 9, 10, 9, 30, 0, 0),
		endTime: new Date(2015, 9, 10, 10, 30, 0, 0),
		location: 'Town Hall',
		imgUrl: 'http://vignette1.wikia.nocookie.net/admin-summit/images/7/77/Doctor_Cookie_Monster_and_Ernie.jpg/revision/latest?cb=20150818194851',
		featured: true
	},
	{
		id: 19,
		name: 'Apps',
		startTime: new Date(2015, 9, 10, 10, 30, 0, 0),
		endTime: new Date(2015, 9, 10, 11, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'http://vignette4.wikia.nocookie.net/admin-summit/images/c/cd/Apps.jpg/revision/latest?cb=20150828014514',
		featured: true
	},
	{
		id: 20,
		name: 'Lifecycle of a Feature at Wikia',
		startTime: new Date(2015, 9, 10, 11, 0, 0, 0),
		endTime: new Date(2015, 9, 10, 11, 30, 0, 0),
		location: 'Town Hall',
		imgUrl: 'http://vignette1.wikia.nocookie.net/admin-summit/images/3/35/Pride_rock.jpg/revision/latest?cb=20150813215742',
		featured: true
	},
	{
		id: 21,
		name: 'AMA Brown Bag Session (Lunch Included)',
		startTime: new Date(2015, 9, 10, 11, 30, 0, 0),
		endTime: new Date(2015, 9, 10, 13, 15, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 22,
		name: 'Board Bus for Afternoon Event',
		startTime: new Date(2015, 9, 10, 13, 15, 0, 0),
		endTime: new Date(2015, 9, 10, 13, 30, 0, 0),
		location: 'Wikia HQ Outside',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 23,
		name: 'Tour of Wax Museum at Fishermans Wharf',
		startTime: new Date(2015, 9, 10, 14, 0, 0, 0),
		endTime: new Date(2015, 9, 10, 16, 0, 0, 0),
		location: 'Wax Museum At Fishermans Wharf',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 24,
		name: 'Dinner at Hard Rock Cafe San Francisco',
		startTime: new Date(2015, 9, 10, 17, 0, 0, 0),
		endTime: new Date(2015, 9, 10, 19, 0, 0, 0),
		location: 'Hard Rock Cafe San Francisco',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 25,
		name: 'Board Bus to Return to Hotel/Wikia',
		startTime: new Date(2015, 9, 10, 19, 0, 0, 0),
		endTime: new Date(2015, 9, 10, 19, 15, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 26,
		name: 'Arrive & Breakfast',
		startTime: new Date(2015, 9, 11, 8, 30, 0, 0),
		endTime: new Date(2015, 9, 11, 9, 30, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 27,
		name: 'Discussion Deep Dive',
		startTime: new Date(2015, 9, 11, 9, 30, 0, 0),
		endTime: new Date(2015, 9, 11, 10, 30, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 28,
		name: 'Preview of New Contribution Tools',
		startTime: new Date(2015, 9, 11, 9, 30, 0, 0),
		endTime: new Date(2015, 9, 11, 10, 30, 0, 0),
		location: 'Holodeck',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 29,
		name: 'Keyword Research & Content Coverage (by Appointment or Walk-in)',
		startTime: new Date(2015, 9, 11, 9, 30, 0, 0),
		endTime: new Date(2015, 9, 11, 12, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 30,
		name: 'Your Wikia Identity',
		startTime: new Date(2015, 9, 11, 10, 30, 0, 0),
		endTime: new Date(2015, 9, 11, 11, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 31,
		name: 'Discussion Deep Dive',
		startTime: new Date(2015, 9, 11, 11, 0, 0, 0),
		endTime: new Date(2015, 9, 11, 12, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 32,
		name: 'What the Flag Are Flags?',
		startTime: new Date(2015, 9, 11, 11, 0, 0, 0),
		endTime: new Date(2015, 9, 11, 11, 30, 0, 0),
		location: 'Ministry of Magic',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 33,
		name: 'Lunch | Free Time | Travel Home',
		startTime: new Date(2015, 9, 11, 12, 0, 0, 0),
		endTime: new Date(2015, 9, 11, 13, 0, 0, 0),
		location: 'Town Hall',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	}


	]
});

export default events;