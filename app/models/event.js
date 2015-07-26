import DS from "ember-data";
 
export default DS.Model.extend({
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