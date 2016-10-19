if (typeof jQuery === 'undefined') {
	throw new Error('Users Class Needs jQuery');
}

import Notice from '../notice';
let Users = function() {
};

Users.VERSION = '1.0.0';
Users.AUTHOR = 'Hope';
Users.EMAIL = '494873674@qq.com';
Users.LAST_UPDATE_TIME = '2016-10-18';


Users.prototype.login = function(_relatedTarget, _relatedContext) {
	if (this.isLogin()) {
		return;
	}

	this.elem = _relatedTarget;
	this.vue = this.vue || _relatedContext;

	let $formElem = $($(_relatedTarget).closest('[name="userLogin"]'));

	if ($formElem.length == 1) {
		let data = this.serializeObject($formElem.serializeArray()),
		_self = this;

		this.vue.$http.post('../index.php/Home/Login/check', data).then(function(response) {
			if (response.data) {
				// sign in success, record user msg
				_self.recordMsg() && location.reload(true);
			}else {
				// sign in fail
				let data = {
					msg: '验证失败请重新输入',
					img: 'f66fe171f6.jpg'
				};
				_self.noticeAvaliable() ? Notice.showNotice(data) : _self.spareNotice(data);
			}
		});
	}else {
		return;
	}
};

/* ================
 * RECORD USER MSG
 * ================ */
Users.prototype.recordMsg = function() {
	let cookies = this.objectConversion(document.cookie);

	if (!cookies.user) {
		// cookie setting fail
		let _self = this,
			data = {
				msg: '服务器繁忙，请稍后重试',
				img: 'f66fe171f7.jpg'
			};

		_self.noticeAvaliable() ? Notice.showNotice(data) : _self.spareNotice(data);
		return false;
	}

	if (this.storageAvailable()) {
		for (let name in cookies) {
			localStorage.setItem(name, cookies[name]);
		}
		
		this.userMsg = localStorage;
	}else {
		// browser not support storage
		this.userMsg = cookies;
	}

	return true;
};

Users.prototype.check = function() {
	
};

Users.prototype.isLogin = function() {
	if (this.storageAvailable()) {
		return localStorage.getItem('user') != undefined ?  this.verifying(localStorage): false;
	}else {
		let cookies = this.objectConversion(document.cookie);

		return cookies.user !== undefined ? this.verifying(cookies) : false;
	}
};


Users.prototype.getUserMsg = function() {
	if (!this.isLogin()) {
		return {length: 0}; // for not login
	}

	if (this.userMsg.length > 0 && this.userMsg.user) {
		return this.userMsg;
	}

	let cookies = {};
	if (this.storageAvailable && localStorage.user) {
		return localStorage;
	}else if ((cookies = this.objectConversion(document.cookie)) && cookies.user) {
		return cookies;
	}

	return {length: 0}; //no data exit return a plain object
};

Users.prototype.signOut = function(_relatedContext) {
	if (!this.isLogin) {
		return;
	}

	this.vue = this.vue || _relatedContext;
	this.vue.$http.get('../index.php/Home/Login/signout');  // delete cookie by server 

	if (this.storageAvailable()) {
		for (let name in localStorage) {
			localStorage.removeItem(name);
		}
	}

	location.reload(true);  // refresh the current html
};


/* ==============================
 * VERIFY USER MSG WHETHER MATCH 
 * ==============================*/
Users.prototype.verifying = function(obj) {
	if (obj.length<=0 || !obj.user || !obj.password) {
		return false;
	}

	let result;
	// it can be optimaztion
	$.ajax('../index.php/Home/Login/verifying', {
		data: obj,
		type: 'post',
		datType: 'json',
		async: false
	}).done(function(response) {
		if (response === true) {
			result = true;
		}else {
			result = false;
		}
	});
	return result;
};

/* =================================================
 * CONVERSION STRING LIKE DOCUMENT COOKIE TO OBJECT 
 * ================================================= */
Users.prototype.objectConversion = function(string) {
	if (!string) {
		return {};
	}

	let arr = string.split(';'),
		obj = {},
		length = 0; // count array length

	for (let i=0;i<arr.length;i++) {
		let a = arr[i].split('=');

		obj[a[0].trim()] = a[1].trim();
		length++;
	}
	obj.length = length;

	return obj;
};

/* ===========================
 * NOTICE COMPONENT DETECTION
 * ==========================*/
Users.prototype.noticeAvaliable = function() {
	return typeof Notice === undefined ? false : true;
};

//if not install notice class , use this spare method
Users.prototype.spareNotice = function(data) {
	console.warn('please install notice modal components to get better experience');
	data.msg && alert(data.msg);
};

/* =====================================
 *	BROWSER STORAGE FEATURES DETECTION
 * ===================================== */
Users.prototype.storageAvailable = function(type) {
	if (type === undefined) {
		type = 'localStorage';
	}

	try {
		let storage = window[type],
			test = '__storage_test__';

		storage.setItem(test, test);
		storage.removeItem(test, test);	

		return true;
	} catch (e) {
		return false;
	}
};

/* =====================================
 * CONVERSION FORM DATA TO OBJECT SHAPE
 * =====================================*/
Users.prototype.serializeObject = function(serializeArrary) {
	if (!(serializeArrary instanceof Array)) {
		return;
	}

	let o = {},
		a = serializeArrary;

    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });

    return o;
};

let User = new Users;
export {User as Users, Notice};