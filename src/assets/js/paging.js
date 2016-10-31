/* =============
 * PAGING CLASS
 * =============*/
 
let Paging = function() {
	this.options = Paging.DEFAULT;
	this.vue = null;
	this.currentPage;
	this.$targets = $('.paging');
};

Paging.AUTHOR = 'Hope';
Paging.EMAIL = '494873674@qq.com';
Paging.VERSION = '1.0.0';
Paging.LAST_UPDATE_TIME = '2016-10-31';

Paging.DEFAULT = {
	visibleNumber: 1,
	currentPage: 1
};

/* =====================================
 * INITIALIZATION CUSTOMIZE CONFIGURATION
 * =====================================*/
Paging.prototype.init = function(options) {
	this.options = $.extend(options, Paging.DEFAULT);
};

Paging.prototype.prevPage = function() {

};

Paging.prototype.nextPage = function() {

};

Paging.prototype.switchPage = function() {
	
};

// =========================
// PAGING PLUGIN DEFINITION

let Plugin = (function (){
	let _Paging = new Paging;

	return function (type, ...args)  {
			let e = e || window.event;
			e && e.preventDefault();

			if (typeof _Paging[type] !== 'function') return

			_Paging.vue = this;
			_Paging[type](...args);
		};
})();

export default Plugin;



