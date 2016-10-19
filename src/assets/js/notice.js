if (typeof jQuery === 'undefined') {
	throw new Error('Users Class Needs jQuery');
}

let Notice = function() {
	this.vue;
	this.modalApi = '#noticeModal'; // notice modal api
};

Notice.VERSION = '1.0.0';
Notice.AUTHOR = 'Hope';
Notice.EMAIL = '494873674@qq.com';
Notice.LAST_UPDATE_TIME = '2016-10-19';

Notice.prototype.init = function(_relatedContext, options) {
	_relatedContext && (this.vue = _relatedContext);

	if (options === undefined || !$.isPlainObject(options)) {
		return;
	}

	for (let item in options) {
		switch (item) {
			case 'modalApi':
				this.modalApi = options[item]
				break;
		}
	}
};

//if not install notice modal , use this spare method
Notice.prototype.spareNotice = function(data) {
	data.msg && alert(data.msg);
};

Notice.prototype.hasNoticeModal = function() {
	if (!this.vue) {
		return false;
	}

	let _relatedContext = this.vue,
		components = _relatedContext.$options.components,
		result = false;

	for (let name in components) {
		if (name == 'noticeModal') {
			result = true;
		}
	}

	result || console.warn('lose notice components : notice.vue');
	return result;
};


/* ===========================
 * AVALIABLE DATA OBJECT LISTS
 * data {msg: '', img: ''}
 * ===========================*/
Notice.prototype.showNotice = function(data) {
	console.log(this);
	if (!$.isPlainObject(data)) {
		return false;
	}
	if (!this.hasNoticeModal()) {
		return this.spareNotice(data);
	} 
	
	this.vue.noticeData = data; // Synchronize notice data
	let modalApi = this.modalApi;

	$(modalApi).modal('show');
};

Notice.prototype.hideNotice = function() {
	let modalApi = this.modalApi;

	$(modalApi).modal('hide');
};


export default new Notice;