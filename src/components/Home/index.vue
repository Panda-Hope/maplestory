<style>
    #canvas {
        position:fixed;
        left:0;
        top:0;
        z-index:999;
        background-color: aqua;
    }
    #canvas_2 {
        position:fixed;
        left:0;
        top:0;
        z-index:800;
        opacity:0;
        background:#FFF;
    }
    .bg_image {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 500px;
        z-index: -999;
        background:url(../../assets/image/home_bg0819.jpg) no-repeat center top;
    }
    .logo-special {
        height:70px;
        background:url(../../assets/image/nav.png) no-repeat 0px -90px;
    }
    .mxd_logo {
        position:absolute;
        left: 490px;
        top: -50px;
    }
    .login_pic {
        position: absolute;
        left: 0;
        bottom: -300px;
    }
</style>
    
<template>
<!--    <canvas id="canvas">您的浏览器版本过低</canvas>-->
    <canvas id="canvas_2">您的浏览器版本过低</canvas>
    
    <header>
        <div class="bg_image"></div>
        <div class="container top-adjust">
            <div class="logo-special"></div>
            <img src="../../assets/image/hope.png" class="mxd_logo"></a>
            <a class="login_pic" target="_blank"><img src="../../assets/image/fresh2014.png"></a>
        </div>
    </header>
    
    <section>
        
    </section>
</template>

<script>
    //require('../../assets/js/digitDowntime');

</script>