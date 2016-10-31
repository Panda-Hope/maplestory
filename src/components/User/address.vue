<template>
	<section>
		<form class="form-inline" name="address">
			<ul class="navbar dotted">
				<li>
					<span class="name">姓名：</span>
					<span><input type="text" class="form-control" name="xingming" value="{{ addressData.xingming }}"></span>
				</li>
				<li>
					<span class="name">省份：</span>
					<span><input type="text" class="form-control" name="shengfen" value="{{ addressData.shengfen }}"></span>
				</li>
				<li>
					<span class="name">城市：</span>
					<span><input type="text" class="form-control" name="city" value="{{ addressData.city }}"></span>
				</li>
				<li>
					<span class="name">街道：</span>
					<span><input type="text" class="form-control" name="street" value="{{ addressData.street }}"></span>
				</li>
				<li>
					<span class="name">电话：</span>
					<span><input type="text" class="form-control" name="phone" value="{{ addressData.phone }}"></span>
				</li>
				<li>
					<span class="name">邮箱：</span>
					<span><input type="text" class="form-control" name="mail" value="{{ addressData.mail }}"></span>
				</li>
			</ul>
			<button class="btn btn-primary center-button" @click="modifyAddress">确认修改</button>
		</form>
		<notice-modal :notice-data="noticeData"></notice-modal>
	</section>
</template>

<script>
	import interactive from '../../assets/js/interactive/interactive';
	import Notice from '../../assets/js/notice';

	export default {
		beforeCompile() {
			this.getAddress();
		},
		data() {
			return {
				addressData: {},
				noticeData: {}
			};
		},
		methods: {
			getAddress: interactive.getAddress,
			modifyAddress: function(e) {
				let formApi = "[name='address']",
					formData = $(formApi).serialize(formApi),
					_self = this;

				e && e.preventDefault();	

				$.ajax({
						method: 'get',
						url: '../index.php/Home/Myhome/modifyVue?'+formData
					}).done(function(result) {
						if (result) {
							Notice.showNotice({msg: '地址修改成功'});
							// setTimeout(function() {
							// 	_self.$router.go({path: '/'});
							// },2000);
						}else {
							Notice.showNotice({msg: '地址修改失败'});
						}
					});
			}
		},
		components: {
			noticeModal: require('../Common/noticeModal.vue')
		}
	};
</script>