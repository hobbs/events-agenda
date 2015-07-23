import DS from "ember-data";
 
export default DS.Model.extend({
	name: DS.attr('string'),
	startTime: DS.attr('date'),
	endTime: DS.attr('date'),
	location: DS.attr('string'),
	imgUrl: DS.attr('string')
});