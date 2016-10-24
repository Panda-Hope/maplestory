<style lang="sass">
	.bg_image {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 700px;
        background-size: cover;
        z-index: -999;
    }
    .logo-special {
    	display: block;
        height:70px;
        background:url(../../assets/image/nav.png) no-repeat 0px -90px;
    }
    .mxd_logo {
        position:absolute;
        left: 490px;
        top: -50px;
    }
</style>

<template>
	<header>
        <div class="bg_image" :style="{ background: getBgImage()}"></div>
        <div class="container top-adjust">
            <a class="logo-special" v-link="{ path: '/' }"></a>
            <img src="../../assets/image/hope.png" class="mxd_logo">
        </div>
    </header>
</template>

<script>
	export default {
		props: ['bgImage'],
		methods: {
			getBgImage: function() {
				return 'url(./assets/image/'+ this.bgImage +') no-repeat center top';
			}
		}
	};
</script>