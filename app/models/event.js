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
		name: 'Welcome and Orientation',
		startTime: new Date(2016, 6, 12, 8, 30, 0, 0),
		endTime: new Date(2016, 6, 12, 9, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 2,
		name: 'How did your adventure at Wikia start?',
		startTime: new Date(2016, 6, 12, 10, 0, 0, 0),
		endTime: new Date(2016, 6, 12, 10, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 3,
		name: 'Discussions: Moving Beyond the Beta',
		startTime: new Date(2016, 6, 12, 10, 45, 0, 0),
		endTime: new Date(2016, 6, 12, 11, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette4.wikia.nocookie.net/adtest/images/a/aa/DisBeyondBeta.jpg/revision/latest?cb=20160706233647',
		featured: true
	},
	{
		id: 4,
		name: 'Apps at Wikia',
		startTime: new Date(2016, 6, 12, 11, 30, 0, 0),
		endTime: new Date(2016, 6, 12, 12, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette4.wikia.nocookie.net/admin-summit/images/c/cd/Apps.jpg/revision/latest?cb=20160828014514',
		featured: true
	},
	{
		id: 5,
		name: 'Lunch',
		startTime: new Date(2016, 6, 12, 12, 0, 0, 0),
		endTime: new Date(2016, 6, 12, 13, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 6,
		name: 'Brainstorm: Structured Discussions',
		startTime: new Date(2016, 6, 12, 13, 0, 0, 0),
		endTime: new Date(2016, 6, 12, 14, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette1.wikia.nocookie.net/adtest/images/9/92/Brainstorm2.jpg/revision/latest?cb=20160706233812',
		featured: true
	},
	{
		id: 7,
		name: 'Wikia and the Fandom Brand',
		startTime: new Date(2016, 6, 12, 13, 0, 0, 0),
		endTime: new Date(2016, 6, 12, 14, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 8,
		name: 'Discussions User Testing',
		startTime: new Date(2016, 6, 12, 13, 0, 0, 0),
		endTime: new Date(2016, 6, 12, 14, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 9,
		name: 'Community Central',
		startTime: new Date(2016, 6, 12, 14, 0, 0, 0),
		endTime: new Date(2016, 6, 12, 15, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 10,
		name: 'Our Values and Culture',
		startTime: new Date(2016, 6, 12, 15, 0, 0, 0),
		endTime: new Date(2016, 6, 12, 16, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 11,
		name: 'Board bus to visit the Poznan office!',
		startTime: new Date(2016, 6, 12, 16, 30, 0, 0),
		endTime: new Date(2016, 6, 12, 21, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 12,
		name: 'What is Fandom?',
		startTime: new Date(2016, 6, 13, 9, 30, 0, 0),
		endTime: new Date(2016, 6, 13, 10, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette4.wikia.nocookie.net/adtest/images/c/c0/Fandom_cc.png/revision/latest?cb=20160706234327',
		featured: true
	},
	{
		id: 13,
		name: 'An In-Depth Look at the Fan Contributor Program',
		startTime: new Date(2016, 6, 13, 10, 45, 0, 0),
		endTime: new Date(2016, 6, 13, 11, 30, 0, 0),
		location: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		imgUrl: 'todo',
		featured: false
	},
	{
		id: 14,
		name: 'Wikia Design System: Behind the Scenes with the Design Team',
		startTime: new Date(2016, 6, 13, 11, 30, 0, 0),
		endTime: new Date(2016, 6, 13, 12, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 15,
		name: 'Lunch',
		startTime: new Date(2016, 6, 13, 12, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 13, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 16,
		name: 'Fan Contributor User Testing',
		startTime: new Date(2016, 6, 13, 13, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 14, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 17,
		name: 'Multilingual Adventures on Wikia',
		startTime: new Date(2016, 6, 13, 13, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 14, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 17,
		name: 'Brainstorming on Steroids: Intro to 10x Content',
		startTime: new Date(2016, 6, 13, 14, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 15, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 18,
		name: 'Wikia and the Fandom Brand',
		startTime: new Date(2016, 6, 13, 14, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 15, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
	},	
	{
		id: 19,
		name: 'How Social Media Can Help Your Community',
		startTime: new Date(2016, 6, 13, 14, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 15, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
	},		
	{
		id: 20,
		name: 'BETA. Fan Editor Program: An Open Forum',
		startTime: new Date(2016, 6, 13, 15, 30, 0, 0),
		endTime: new Date(2016, 6, 13, 16, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette1.wikia.nocookie.net/admin-summit/images/7/77/Doctor_Cookie_Monster_and_Ernie.jpg/revision/latest?cb=20160818194851',
		featured: false
	},
	{
		id: 21,
		name: 'Main Pages: Desktop and mobile',
		startTime: new Date(2016, 6, 13, 15, 30, 0, 0),
		endTime: new Date(2016, 6, 13, 16, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette1.wikia.nocookie.net/admin-summit/images/7/77/Doctor_Cookie_Monster_and_Ernie.jpg/revision/latest?cb=20160818194851',
		featured: false
	},	
	{
		id: 22,
		name: 'Fan Contributor working sessions',
		startTime: new Date(2016, 6, 13, 16, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 17, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette4.wikia.nocookie.net/admin-summit/images/c/cd/Apps.jpg/revision/latest?cb=20160828014514',
		featured: false
	},
	{
		id: 23,
		name: 'What makes a "Wikian"?',
		startTime: new Date(2016, 6, 13, 16, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 16, 45, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette4.wikia.nocookie.net/admin-summit/images/c/cd/Apps.jpg/revision/latest?cb=20160828014514',
		featured: false
	},
	{
		id: 24,
		name: 'Contribution User Testing',
		startTime: new Date(2016, 6, 13, 16, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 16, 45, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette4.wikia.nocookie.net/admin-summit/images/c/cd/Apps.jpg/revision/latest?cb=20160828014514',
		featured: false
	},
	{
		id: 25,
		name: 'Social & Content Moderation - Best Practices',
		startTime: new Date(2016, 6, 13, 16, 45, 0, 0),
		endTime: new Date(2016, 6, 13, 17, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette2.wikia.nocookie.net/adtest/images/1/1f/Moderation_cc.jpg/revision/latest?cb=20160706235502',
		featured: true
	},
	{
		id: 26,
		name: 'What makes a "Wikian"?',
		startTime: new Date(2016, 6, 13, 16, 45, 0, 0),
		endTime: new Date(2016, 6, 13, 17, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},					
	{
		id: 27,
		name: 'Fan Contributor working sessions',
		startTime: new Date(2016, 6, 13, 17, 0, 0, 0),
		endTime: new Date(2016, 6, 13, 17, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette1.wikia.nocookie.net/admin-summit/images/3/35/Pride_rock.jpg/revision/latest?cb=20160813215742',
		featured: false
	},
	{
		id: 28,
		name: 'How to Gain and Retain New Contributors on Your Community',
		startTime: new Date(2016, 6, 14, 9, 30, 0, 0),
		endTime: new Date(2016, 6, 14, 10, 15, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 29,
		name: 'Content Understanding and Contributions: Possibilities for the Future',
		startTime: new Date(2016, 6, 14, 10, 15, 0, 0),
		endTime: new Date(2016, 6, 14, 10, 45, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 30,
		name: 'Ask Me Anything',
		startTime: new Date(2016, 6, 14, 11, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 12, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 31,
		name: 'Lunch (with optional chat about the Volunteer Developer program)',
		startTime: new Date(2016, 6, 14, 12, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 13, 15, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 32,
		name: 'Contribution User Testing',
		startTime: new Date(2016, 6, 14, 13, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 13, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 33,
		name: 'BETA. Fan Editor Program: An Open Forum',
		startTime: new Date(2016, 6, 14, 13, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 13, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 34,
		name: '5 Essential Techniques to Boost SEO Health',
		startTime: new Date(2016, 6, 14, 13, 30, 0, 0),
		endTime: new Date(2016, 6, 14, 14, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 35,
		name: 'What does the perfect new contributor look like to you?',
		startTime: new Date(2016, 6, 14, 15, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 16, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'http://vignette3.wikia.nocookie.net/adtest/images/e/e8/Contributor_cc.jpg/revision/latest?cb=20160706235951',
		featured: false
	},
	{
		id: 36,
		name: 'Wikia and the Fandom Brand',
		startTime: new Date(2016, 6, 14, 15, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 16, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 37,
		name: 'International interaction',
		startTime: new Date(2016, 6, 14, 15, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 16, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},			
	{
		id: 38,
		name: 'Content Discovery on Wikia',
		startTime: new Date(2016, 6, 14, 16, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 17, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 39,
		name: 'Wikia and the Fandom Brand',
		startTime: new Date(2016, 6, 14, 16, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 17, 0, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 40,
		name: 'Portability on your community',
		startTime: new Date(2016, 6, 14, 16, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 17, 30, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	},
	{
		id: 50,
		name: 'Thank you!',
		startTime: new Date(2016, 6, 14, 17, 0, 0, 0),
		endTime: new Date(2016, 6, 14, 17, 15, 0, 0),
		location: 'TBD',
		imgUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
		featured: false
	}


	]
});

export default events;