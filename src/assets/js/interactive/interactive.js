export default {
	getProducts: function (searchKey) {
    	this.$http.get('../index.php/Home/Index/indexVue?searchKey=' + searchKey).then(response => {
	        if (response.ok) {
	            this.products = response.json();
	        }
 	   });
	},
	getProductMsg: function(type, id) {
		if (typeof type !== 'string' || id !== 0 && !id) {
			throw new Error('Data Lose');
		}
		
		this.$http.get('../index.php/Home/Index/getProductsMsgVue?type=' + type + '&id=' + id).then(response => {
			if (response.ok) {
				let data = response.json();

				this.modal.name = data.name;
				this.modal.path = data.path;
				this.modal.price = data.price;
				this.modal.id = data.id;
			}
		});
	},
	getDetailedMsg: function() {
		let vue = this;

		$.ajax({
			method: 'get',
			url: '../index.php/Home/Myhome/usermsgVue',
		}).done(function(response) {
			if (response.length >= 1) {
				vue.userMsgLists = response[0];
			}
		});
	},
	getAddress: function() {
		let vue = this;

		$.ajax({
			method: 'get',
			url: '../index.php/Home/Myhome/useraddrVue'
		}).done(function(response) {
			if (response) {
				vue.addressData = response;
			}
		});
	},
	getOrders: function() {
		let vue = this;

		$.ajax({
			method: 'get',
			url: '../index.php/Home/Myhome/orderVue'
		}).done(function(data) {
			if (data.length >=1) {
				vue.orders = data;
			}
		});
	}
};