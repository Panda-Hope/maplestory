<style lang="sass">
	// maplestory theme container
    @import '../../assets/css/sass/mixins/padding-fill';
	.container {
		&.maple {
			margin-top: 60px;
			background-color: rgba(255,255,255,0.75);
			border: 1px solid #FFF;
			border-radius: 10px;
		}
	}
	.user-header {
		@include padding-fill;
		border-bottom: 2px dotted #999999;
	}
	.navbar {
	}
</style>
<template>
	<header-component :bg-image="bgImage"></header-component>
	<login-window></login-window>
	<div class="container maple">
		<header class="user-header">
			
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bgImage: 'mxd_bg.jpg', // header component background image
			};
		},
		components: {
			loginWindow: require('../Common/loginWindow.vue'),
			headerComponent: require('../Common/header.vue')
		}
	};
</script>