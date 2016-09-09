<style>
	.login-motion {
		position: fixed;
		right: 0;
		top: 300px;
		width: 180px;
		height: 350px;
	}
	.login-motion .arrow,.login-motion .content {
		position: absolute;
	}
	.login-motion .arrow {
		right: 0;
		top: 100px;
		width: 40px;
	    height: 80px;
	    border-radius: 4px;
	    z-index: 200;
	    background: url(../../assets/image/fix_logo.png) no-repeat;
	}
	.login-motion .arrow:hover {
		transform: rotateY(180deg);
	}
	.login-motion .content {
		left: 100%;
		top: 0;
		width: 180px;
	    height: 330px;
	    background: url(../../assets/image/rect_bg_2.png) no-repeat;
	    background-size: 180px 330px;
	    z-index: 600;
	    border-radius: 10px;
	    transition: left .4s linear;
	}
	.login-motion .content.active {
		left: 0;
	}
	.login-motion .circle {
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
	}
	.login-motion .circle:hover{
	    border-color: rgba(195, 195, 195, 0.2);
		box-shadow: 2px 0 8px 6px rgba(195, 195, 195, 0.1);
	}
	.login-motion .circle a {
		color: #C0C;
	}	
</style>

<template>
	<section>
		<div class="login-motion">
			<div id="test" class="arrow"></div>
			<div class="content">
				<div class="circle">
					<a>登录</a>
				</div>
				<div class="circle">
					<a v-link="{ path: '/register' }">注册</a>
				</div>
			</div>
		</div>
	</section>
	<login-modal></login-modal>
</template>

<script>
	/* ===========================
	 *	SLIDE FUNCTION DEFINITION	
	 * ===========================*/	
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

	export default {
		components: {
			loginModal: require('./loginModal.vue')
		}
	};
</script>