import {Users, Notice} from './userLogin';

let Shopping = function() {

};

Shopping.prototype.addCart = function() {
	if (!Users.isLogin()) return Notice.showNotice({msg: '请先登录'});


};

Shopping.prototype.buy = function(id) {
	if (!Users.isLogin()) return Notice.showNotice({msg: '请先登录'});

	
};


let Plugin = (function (){
	let _Shopping = new Shopping;

	return function (type, ...args)  {
			let e = e || window.event;
			e && e.preventDefault();

			if (typeof _Shopping[type] !== 'function') return
			// initialization
			_Shopping[type](...args);
		};
})();;

export {
	Users,
	Notice,
	Plugin as Shopping
};