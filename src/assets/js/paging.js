/* =============
 * PAGING CLASS
 * =============*/
 
let Paging = function() {
	this.options = Paging.DEFAULT;
	this.$element;       //event trigger element
	this.$targets;      // .paging set
};

Paging.AUTHOR = 'Hope';
Paging.EMAIL = '494873674@qq.com';
Paging.VERSION = '2.0.0';
Paging.LAST_UPDATE_TIME = '2016-11-1';

// ===========================
// PAGE CONFIGURATION OPIONTS
Paging.DEFAULT = {
	visibleNumber: 1,
	currentPage: 1
};

/* =====================================
 * INITIALIZATION CUSTOMIZE CONFIGURATION
 * =====================================*/
Paging.prototype.init = function(options) {
	this.options = $.extend(Paging.DEFAULT, options);
};

Paging.prototype.goPage = function(option) {
	let currentPage = this.options.currentPage,
		pagesCount = Math.ceil(this.$targets.length/this.options.visibleNumber),
		$element = this.$element;
	let eventArr = ['goSpecify', 'goNext', 'goPrev'];

	if (typeof option == 'number') {
		let e = $.Event(eventArr[0] + '.paging');
		typeof $element == 'object' && $element.trigger(eventArr[0]);

		let page = Math.ceil(option);
		
		if (page < 1 || page > pagesCount) return;
		this.switchPage(page);
	}else if (option == 'next') {
		let e = $.Event(eventArr[1] + '.paging');
		typeof $element == 'object' && $element.trigger(eventArr[1]);

		if (currentPage >= pagesCount) return;
		this.switchPage(++currentPage);
	}else if (option == 'prev'){
		let e = $.Event(eventArr[2] + '.paging');
		typeof $element == 'object' && $element.trigger(eventArr[2]);

		if (currentPage <= 1) return;
		this.switchPage(--currentPage);
	}

};

Paging.prototype.switchPage = function(page) {
	// hidden visible elements
	let $targets = this.$targets,
		$actives = $targets.filter('.active');
	$actives.removeClass('active');
	
	let	visibleNumber = this.options.visibleNumber,
 		$readyActives = $targets.slice(visibleNumber*(page-1), visibleNumber*page);

	$readyActives.addClass('active');

	if ($readyActives.hasClass('active')) {
		this.options.currentPage = page
		return true;
	}else {
		return false;
	}
};

// =========================
// PAGING PLUGIN DEFINITION

let Plugin = (function (){
	let _Paging = new Paging;

	return function (type, ...args)  {
			let e = e || window.event;
			e && e.preventDefault();

			if (typeof _Paging[type] !== 'function') return
			// initialization
			_Paging.$element = $(e.target);
			_Paging.$targets = $('.paging');
			_Paging[type](...args);
		};
})();

export default Plugin;



