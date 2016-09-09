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
			}
		});
	}
};