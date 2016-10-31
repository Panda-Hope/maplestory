<style lang="sass">
	// maplestory theme container
    @import '../../assets/css/sass/mixins/assist';
    @import '../../assets/css/sass/mixins/clearfix';

	.container {
		&.maple {
			margin-top: 60px;
			background-color: rgba(255,255,255,0.75);
			border: 1px solid #FFF;
			border-radius: 10px;
		}
	}
	.user-header {
		border-bottom: 2px dotted #999999;
		@include padding-fill;
		@include clearfix;
	}
	.header-msg {
		padding: 20px 40px;
		.avatar,.time-notice {
			display: inline-block;
		}
		.avatar {
			border: 2px solid #FFF;
			border-radius: 50%;
			img {
				width: 100px;
				height: 100px;
				border-radius: 50%;
			}
		}
		.time-notice {
		    margin-left: 90px;
		    color: #666;
		    font-family: cursive;
		    font-size: 50px;
		    vertical-align: middle;
		    .user-name {
		    	color: #DF9BE0;
		    }
		} 
	}
	.navbar.maple {
		> li{
			float: left;
			list-style: none;
			> a {
				display: block;
				padding: 25px 40px;
			    font-size: 30px;
			    color: #666;
			    &:hover {
			    	color: #23F6EA;
			    }
			}
		}
		@include clearfix;
	}
	.content-filling {
		width: 500px;
		height: 450px;
		margin-top: 20px;
		@include center-auto;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 2px 2px #AAA7A7 inset,-2px -2px #F4F4F4 inset;
	}
	.fade-transition {
	  transition: opacity .15s ease;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}
	.timing {
	 	 margin-left: 200px;
		 vertical-align: middle;
	}
</style>
<template>
	<header-component :bg-image="bgImage"></header-component>
	<login-window></login-window>
	<section class="container maple">
		<header class="user-header">
			<div class="header-msg">
				<a class="avatar"><img :src="'./assets/image/' + userMsg.photo"></a>
				<span class="time-notice">{{ timeNotice }}:<span class="user-name">{{ userMsg.user }}</span></span>
				<!-- <timing-componet></timing-componet> -->
			</div>
			<ul class="navbar maple">
				<li><a @click="changeView('profile')">个人资料</a></li>
				<li><a @click="changeView('changePassword')">修改密码</a></li>
				<li><a @click="changeView('address')">收货地址</a></li>
				<li><a @click="changeView('orders')">订单记录</a></li>
				<li><a @click="changeView('notice')">消息中心</a></li>
				<li><a @click="changeView('personalService')">个性服务</a></li>
			</ul>
		</header>
		<div class="content-filling">
			<component :is="currentView" keep-alive transition="fade" transition-mode="out-in">></component>
		</div>
	</section>
</template>

<script>
	import {Users} from '../../assets/js/interactive/userLogin';
	import TimeNotie from '../../assets/js/timeNotice';
	import assists from '../../assets/js/assists';

	export default {
		data() {
			return {
				userMsg: Users.getUserMsg(),
				timeNotice: TimeNotie.hourNotice(),
				currentView: 'profile',
				bgImage: 'mxd_bg.jpg', // header component background image
			};
		},
		methods: {
			changeView: assists.changeView
		},
		components: {
			// timingComponet: require('../Common/timing.vue'),
			loginWindow: require('../Common/loginWindow.vue'),
			headerComponent: require('../Common/header.vue'),
			profile: require('./profile.vue'),
			changePassword: require('./changePassword.vue'),
			address: require('./address.vue'),
			orders: require('./orders.vue'),
			notice: require('./notice.vue'),
			personalService: require('./personalService.vue')
		}
	};
</script>