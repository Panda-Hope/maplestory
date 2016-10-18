<style lang="sass">
	$position-absolute: absolute;
	$position-fixed: fixed;
	$position-relative: relative;

	.login-motion {
		// width: 180px;
		// height: 350px;
		.arrow,.content {
			position: $position-fixed;
			right: 0;
		}
		.arrow {
			top: 400px;
			width: 40px;
		    height: 80px;
		    border-radius: 4px;
		    z-index: 200;
		    background: url(../../assets/image/fix_logo.png) no-repeat;
		}
		.arrow:hover {
			transform: rotateY(180deg);
		}
		.content {
			top: 300px;
			width: 180px;
		    height: 330px;
		    background: url(../../assets/image/rect_bg_2.png) no-repeat;
		    background-size: 180px 330px;
		    z-index: 600;
		    border-radius: 10px;
		    transform: translateX(180px);
		    transition: transform .4s linear;
		}
		.content.active {
			transform: translateX(0);
		}
		.circle {
			overflow: hidden;
			width: 120px;
			height: 120px;
			margin: 30px auto;
			border: 2px solid #fff;
			border-radius: 50%;
			text-align: center;
			line-height: 120px;
			font-size: 30px;
			transition-property: border-color,box-shadow;
			transition-duration: .3s;
			transition-timing-function: ease-in;
			img {
				display: block;
				max-width: 100%;
				height: auto;
			}
		}
		.circle:hover{
		    border-color: rgba(195, 195, 195, 0.2);
			box-shadow: 2px 0 8px 6px rgba(195, 195, 195, 0.1);
		}
		.circle a {
			color: #C0C;
		}	
	}
	
</style>

<template>
	<section>
		<div class="login-motion">
			<div class="arrow"></div>
			<div class="content">
				<template v-if="!isLogin">
					<div class="circle">
						<a 
						data-toggle="modal"
						data-target="#myModal2">登录</a>
					</div>
					<div class="circle">
						<a v-link="{ path: '/register' }">注册</a>
					</div>
				</template>
				<template v-else>
					<div class="circle">
						<a v-link="{ path: '/user' }">
							<img :src=" './assets/image/' + userMsg.photo" >
						</a>
					</div>
					<div class="circle">
						<a @click="signOut">退出</a>
					</div>
				</template>
			</div>
		</div>
	</section>
	<login-modal></login-modal>
</template>

<script>
	/* ===========================
	 *	SLIDE FUNCTION DEFINITION	
	 * =========================== */	
	let slideContentApi = '.login-motion .content'; 
	let slideApi = '.login-motion .arrow';

	function Slide(e) {
		let $target = $(slideContentApi);

		if (!$target.length) {
			return false;
		}

		return $target.hasClass('active') ? $target.removeClass('active') : $target.addClass('active');
	}
	
	// ==============
	// SLIDE DATA-API

	$(document).on('mouseenter', slideApi, Slide)
			   .on('mouseleave', slideContentApi, Slide);
	
	import Users from '../../assets/js/interactive/userLogin'; 

	export default {
		methods: {
			signOut: function(e) {
				e && e.preventDefault();

				$.proxy(Users.signOut, Users)(this);
			}
		},
		data() {
			return {
				isLogin:  Users.isLogin(),
				userMsg: Users.getUserMsg()
			};
		},
		components: {
			loginModal: require('./loginModal.vue')
		}
	};
</script>