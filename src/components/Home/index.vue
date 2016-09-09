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
    .carousel {
      position: relative;
    }
    .carousel-inner {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .carousel-inner > .item {
      position: relative;
      display: none;
      -webkit-transition: .6s ease-in-out left;
           -o-transition: .6s ease-in-out left;
              transition: .6s ease-in-out left;
    }
    .carousel-inner > .item > img,
    .carousel-inner > .item > a > img {
      line-height: 1;
    }
    @media all and (transform-3d), (-webkit-transform-3d) {
      .carousel-inner > .item {
        -webkit-transition: -webkit-transform .6s ease-in-out;
             -o-transition:      -o-transform .6s ease-in-out;
                transition:         transform .6s ease-in-out;

        -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
        -webkit-perspective: 1000px;
                perspective: 1000px;
      }
      .carousel-inner > .item.next,
      .carousel-inner > .item.active.right {
        left: 0;
        -webkit-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
      }
      .carousel-inner > .item.prev,
      .carousel-inner > .item.active.left {
        left: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
                transform: translate3d(-100%, 0, 0);
      }
      .carousel-inner > .item.next.left,
      .carousel-inner > .item.prev.right,
      .carousel-inner > .item.active {
        left: 0;
        -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
      }
    }
    .carousel-inner > .active,
    .carousel-inner > .next,
    .carousel-inner > .prev {
      display: block;
    }
    .carousel-inner > .active {
      left: 0;
    }
    .carousel-inner > .next,
    .carousel-inner > .prev {
      position: absolute;
      top: 0;
      width: 100%;
    }
    .carousel-inner > .next {
      left: 100%;
    }
    .carousel-inner > .prev {
      left: -100%;
    }
    .carousel-inner > .next.left,
    .carousel-inner > .prev.right {
      left: 0;
    }
    .carousel-inner > .active.left {
      left: -100%;
    }
    .carousel-inner > .active.right {
      left: 100%;
    }
    .carousel-control {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 15%;
      font-size: 20px;
      color: #fff;
      text-align: center;
      text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
      filter: alpha(opacity=50);
      opacity: .5;
    }
    .carousel-control.left {
      background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
      background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
      background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));
      background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
      background-repeat: repeat-x;
    }
    .carousel-control.right {
      right: 0;
      left: auto;
      background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
      background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
      background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));
      background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
      background-repeat: repeat-x;
    }
    .carousel-control:hover,
    .carousel-control:focus {
      color: #fff;
      text-decoration: none;
      filter: alpha(opacity=90);
      outline: 0;
      opacity: .9;
    }
    .carousel-control .icon-prev,
    .carousel-control .icon-next,
    .carousel-control .glyphicon-chevron-left,
    .carousel-control .glyphicon-chevron-right {
      position: absolute;
      top: 50%;
      z-index: 5;
      display: inline-block;
      margin-top: -10px;
    }
    .carousel-control .icon-prev,
    .carousel-control .glyphicon-chevron-left {
      left: 50%;
      margin-left: -10px;
    }
    .carousel-control .icon-next,
    .carousel-control .glyphicon-chevron-right {
      right: 50%;
      margin-right: -10px;
    }
    .carousel-control .icon-prev,
    .carousel-control .icon-next {
      width: 20px;
      height: 20px;
      font-family: serif;
      line-height: 1;
    }
    .carousel-control .icon-prev:before {
      content: '\2039';
    }
    .carousel-control .icon-next:before {
      content: '\203a';
    }
    .carousel-indicators {
      position: absolute;
      bottom: 10px;
      left: 50%;
      z-index: 15;
      width: 60%;
      padding-left: 0;
      margin-left: -30%;
      text-align: center;
      list-style: none;
    }
    .carousel-indicators li {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 1px;
      text-indent: -999px;
      cursor: pointer;
      background-color: #000 \9;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #fff;
      border-radius: 10px;
    }
    .carousel-indicators .active {
      width: 12px;
      height: 12px;
      margin: 0;
      background-color: #fff;
    }
    .carousel-caption {
      position: absolute;
      right: 15%;
      bottom: 20px;
      left: 15%;
      z-index: 10;
      padding-top: 20px;
      padding-bottom: 20px;
      color: #fff;
      text-align: center;
      text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    }
    .carousel-caption .btn {
      text-shadow: none;
    }
    @media screen and (min-width: 768px) {
      .carousel-control .glyphicon-chevron-left,
      .carousel-control .glyphicon-chevron-right,
      .carousel-control .icon-prev,
      .carousel-control .icon-next {
        width: 30px;
        height: 30px;
        margin-top: -15px;
        font-size: 30px;
      }
      .carousel-control .glyphicon-chevron-left,
      .carousel-control .icon-prev {
        margin-left: -15px;
      }
      .carousel-control .glyphicon-chevron-right,
      .carousel-control .icon-next {
        margin-right: -15px;
      }
      .carousel-caption {
        right: 20%;
        left: 20%;
        padding-bottom: 30px;
      }
      .carousel-indicators {
        bottom: 20px;
      }
    }
</style>
    
<template>
<!--    <canvas id="canvas">您的浏览器版本过低</canvas>-->
    <canvas id="canvas_2">您的浏览器版本过低</canvas>
    
    <header>
        <div class="bg_image"></div>
        <div class="container top-adjust">
            <div class="logo-special"></div>
            <img src="../../assets/image/hope.png" class="mxd_logo">
            <a class="login_pic" target="_blank"><img src="../../assets/image/fresh2014.png"></a>
        </div>
    </header>
    
    <section style="margin-top: 300px;">
        <div class="container">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li 
                data-target="#carousel-example-generic" 
                v-for="item in products.banner" 
                data-slide-to="{{ $index }}" 
                :class=" $index == 0 ? 'active' : ''"></li>
              </ol>
              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item" 
                v-for="item in products.banner" 
                :class=" $index == 0 ? 'active' : ''">
                  <img :src="'./assets/image/' + item.pathname" class="img-responsive">
                </div>
              </div>

              <!-- Controls -->
              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </a>
              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </a>
            </div>
        </div>
    </section>

    <section>
        <div class="container products">
            <div class="title">宠物中心</div>
            <div class="item" v-for="item in products.cwzx">
                <div class="cover-img">
                    <img class="img-responsive" :src="'./assets/image/' + item.path">
                </div>
                <div class="item-msg">
                    <div class="name"><a v-link="{path: '/search/cwzx'}">{{ item.name }}</a></div>
                    <div class="price">
                        <img src="../../assets/image/dot.gif">
                        <span>{{ item.price }}点</span>
                    </div>
                </div>
                <div class="purchase">
                    <img src="../../assets/image/cart.png">
                    <a data-toggle="modal" data-target="#myModal" @click="getProductMsg('cwzx', item.id)">购买</a>
                </div>
            </div>
        </div>
    </section>
<!--     <section>
        <div class="container products">
          <div class="banner-container">
              
          </div>
        </div>
    </section> -->
    <section>
        <div class="container products">
            <div class="title">酷炫装备</div>
            <div class="item" v-for="item in products.kxzb">
                <div class="cover-img">
                    <img class="img-responsive" :src="'./assets/image/' + item.path">
                </div>
                <div class="item-msg">
                    <div class="name"><a v-link="{path: '/search/cwzx'}">{{ item.name }}</a></div>
                    <div class="price">
                        <img src="../../assets/image/dot.gif">
                        <span>{{ item.price }}点</span>
                    </div>
                </div>
                <div class="purchase">
                    <img src="../../assets/image/cart.png">
                    <a data-toggle="modal" data-target="#myModal" @click="getProductMsg('kxzb', item.id)">购买</a>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container products">
            <div class="title">实用消耗</div>
            <div class="item" v-for="item in products.syxh">
                <div class="cover-img">
                    <img class="img-responsive" :src="'./assets/image/' + item.path">
                </div>
                <div class="item-msg">
                    <div class="name"><a v-link="{path: '/search/cwzx'}">{{ item.name }}</a></div>
                    <div class="price">
                        <img src="../../assets/image/dot.gif">
                        <span>{{ item.price }}点</span>
                    </div>
                </div>
                <div class="purchase">
                    <img src="../../assets/image/cart.png">
                    <a data-toggle="modal" data-target="#myModal" @click="getProductMsg('kxzb', item.id)">购买</a>
                </div>
            </div>
        </div>
    </section>
    <login-window></login-window>
    <shopping-modal 
      :modal-name=" modal.name " 
      :modal-price=" modal.price" 
      :modal-path=" modal.path ">
    </shopping-modal>
    
</template>

<script>
    //require('../../assets/js/digitDowntime');
    import interactive from '../../assets/js/interactive/interactive.js';

    export default {
        data() {
            return {
                products: [],
                modal: {name: '系统错误', path: '1424_777385.GIF', price: '暂无'}
            };
        },
        route: {
            data(transition) {
                let $route = this.$route;
                let searchKey = $route.query.searchKey;

                this.getProducts(searchKey);
            },
        },
        methods: {
            'getProducts': interactive.getProducts,
            'getProductMsg': interactive.getProductMsg
        },
        components: {
            'shoppingModal': require('../Common/shoppingModal.vue'),
            'loginWindow': require('../Common/loginWindow.vue')
        }
    };
</script>