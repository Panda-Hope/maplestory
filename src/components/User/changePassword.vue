<style lang="sass">
	@import '../../assets/css/sass/mixins/assist';

	.center-button {
		display: block;
		margin-top: 30px;
		@include center-auto;
	}
</style>
<template>
	<section id="test">
		<form class="form-inline" name="changePassword">
			<ul class="navbar dotted">
				<li>
					<span class="name">旧密码：</span>
					<span><input type="password" class="form-control" name="oldpassword"></span>
				</li>
				<li>
					<span class="name">新密码：</span>
					<span><input type="password" class="form-control" name="newpassword"></span>
				</li>
				<li>
					<span class="name">确认密码：</span>
					<span><input type="password" class="form-control" name="newpassword_2"></span>
				</li>
			</ul>
			<button class="btn btn-primary center-button" @click="changePassword">确认修改</button>
		</form>
		<notice-modal :notice-data="noticeData"></notice-modal>
	</section>
</template>

<script>
	import Notice from '../../assets/js/notice';

	export default {
		methods: {
			changePassword: function(e) {
				let formApi = "[name='changePassword']",
					formData = $(formApi).serialize(formApi),
					_self = this;
				e && e.preventDefault();

				$.ajax({
					method: 'get',
					url: '../index.php/Home/Myhome/checkVue?'+formData
				}).done(function(result) {
					if (result) {
						Notice.showNotice({msg: '密码修改成功'});
						setTimeout(function() {
							Notice.hideNotice(_self.$router.go({path: '/'}));
						},2000);
					}else {
						Notice.showNotice({msg: '密码修改失败'});
					}
				});
			}
		},
		data() {
			return {
				noticeData: {}
			};
		},
		components: {
			noticeModal: require('../Common/noticeModal.vue')
		}
	};
</script>