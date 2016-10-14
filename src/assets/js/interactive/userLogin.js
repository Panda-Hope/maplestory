if (typeof jQuery === 'undefined') {
	throw new Error('Users Class Needs jQuery');
}

let Users = function() {
	this.vue = {};
	this.elem;
	this.userMsg = {};
};

Users.VERSION = '1.0.0';
Users.AUTHOR = 'Hope';
Users.EMAIL = '494873674@qq.com';
Users.LAST_UPDATE_TIME = '2016-10-13';

Users.prototype.login = function(_relatedTarget, _relatedContext) {
	this.elem = _relatedTarget;
	this.vue = _relatedContext;

	let $formElem = $($(_relatedTarget).closest('[name="userLogin"]')),
		_self = this;

	if ($formElem.length == 1) {
		let data = this.serializeObject($formElem.serializeArray());
		
		this.vue.$http.post('../index.php/Home/Login/check', data).then(function(response) {
			if (response.data) {
				// sign in success, record user msg
				_self.recordMsg();
			}else {
				// sign in fail, waitting the notice modal vue
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
		// waitting the notice modal vue
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
		return localStorage.getItem('user') != undefined ? true : false;
	}else {
		return this.objectConversion(document.cookie).user !== undefined ? true : false;
	}
};

Users.prototype.getUserMsg = function() {
	return {};
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

Users.prototype.signOut = function() {
	
};

export default new Users;