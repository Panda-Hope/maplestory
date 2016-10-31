/* ===================
 * TIME NOTICE PLUGIN 
 * ===================*/

 let TimeNotice = function() {
 	this.date = new Date;
 };

 TimeNotice.AUTHOR = 'Hope';
 TimeNotice.EMAIL = '494873674@qq.com';
 TimeNotice.VERSION = '1.0.0';
 TimeNotice.LAST_UPDATE_TIME = '2016-10-25';

 TimeNotice.prototype.getLocalHour = function() {
 	let Date = this.date,
 		localHour = Date.getHours();

 	return localHour;
 };

 TimeNotice.prototype.hourNotice = function() {
 	let localHour = this.getLocalHour();
 	let [morningText, afternoonText, nightText] = ['早上好', '下午好', '晚上好'];

	return (localHour<6 || localHour>16) ? nightText : ((localHour>=6 && localHour<12) ? morningText : afternoonText); 	
 };

 export default new TimeNotice;