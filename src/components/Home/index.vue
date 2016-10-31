<style lang="sass">
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
    .login_pic {
        position: absolute;
        left: 10px;
        top: 190px;
    }
</style>
    
<template>
<!--    <canvas id="canvas">您的浏览器版本过低</canvas>-->
    <canvas id="canvas_2">您的浏览器版本过低</canvas>
    <header-component :bg-image="bgImage"></header-component>
    <div style="width: 1250px;margin: 0 auto;position:relative">
      <a class="login_pic" target="_blank"><img src="../../assets/image/fresh2014.png"></a>
    </div>
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
                    <a data-toggle="modal" 
                       data-target="#myModal" 
                       @click="getProductMsg('kxzb', item.id)">购买</a>
                </div>
            </div>
        </div>
    </section>
    <shopping-modal 
      :modal-name=" modal.name " 
      :modal-price=" modal.price" 
      :modal-path=" modal.path ">
    </shopping-modal>
    <login-window></login-window>
</template>

<script>
    //require('../../assets/js/digitDowntime');
    import interactive from '../../assets/js/interactive/interactive';

    export default {
        data() {
            return {
                bgImage: 'bg160927.jpg', // header component background image
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
            'loginWindow': require('../Common/loginWindow.vue'),
            'headerComponent': require('../Common/header.vue')
        }
    };
</script>