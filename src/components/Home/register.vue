<style lang="sass">
	@import '../../assets/css/sass/mixins/assist';

	.bg-img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: -999;
		background: url(../../assets/image/regpage_bg0807.jpg) center top no-repeat;
		background-size: cover;
	}
	.register-title {
		display: block;
		text-align: center;
	}
	.fly-pic {
		position: absolute;
		width: 190px;
		height: 250px;
	}
</style>

<template>
	<div class="bg-img"></div>
	<a v-link="{ path: '/' }" class="register-title"><img src="../../assets/image/top_menu_2014.png"></a>
	<a v-link="{ path: '/' }" class="fly-pic"><img src="../../assets/image/small_menu2014.png"></a>
	<form class="form-inline">
		<ul class="navbar register">
				<li>
					<span class="name">用户名：</span>
					<input type="text" class="form-control" name="">
				</li>
				<li>
					<span class="name">密码：</span>
					<input type="text" class="form-control" name="">
				</li>
				<li>
					<span class="name">确认密码：</span>
					<input type="text" class="form-control" name="">
				</li>
				<li>
					<span class="name">手机号：</span>
					<input type="text" class="form-control" name="">
				</li>
				<li>
					<span class="name">邮箱：</span>
					<input type="text" class="form-control" name="">
				</li>
				<li>
					<button class="btn btn-primary register-button btn-lg" @click="register">&nbsp;&nbsp;注册&nbsp;&nbsp;</button>
				</li>
		</ul>
	</form>
</template>

<script>
	import {Users,Notice} from '../../assets/js/interactive/userLogin';

	export default {
		methods: {
			register: function(e) {
				e && e.preventDefault();
				
				Users.register();
			}
		}
	};
</script>