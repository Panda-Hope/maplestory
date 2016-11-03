<template>
	<section id="test">
	    <!-- Modal -->
	    <div class="modal fade maple" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	      <div class="modal-dialog" role="document">
	        <div class="modal-content">
	          <div class="modal-header">
	            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
	            <maple-logo></maple-logo>
	          </div>
	          <div class="modal-body">
	            <img :src=" './assets/image/' + modalPath " >
	            <div class="list-item">
	              <span>商品名称：</span>
	              <span class="goods-name">{{ modalName }}</span>
	            </div>
	            <div class="list-item">
	              <span>商品价格：</span>
	              <span class="price"><img src="../../assets/image/dot.gif"> {{ modalPrice }}点</span>
	            </div>
	            <div class="list-item">
	              <span>商品描述：</span>
	              <span class="text-primary">暂无</span>
	            </div>
	          </div>
	          <div class="modal-footer">
	            <button type="button" class="btn btn-default" @click="Shopping('addCart', modalId)">加入购物车</button>
	            <button type="button" class="btn btn-primary" @click="Shopping('buy', modalId)">直接购买</button>
	          </div>              
	        </div>
	      </div>
	    </div>
	</section>
</template>

<script>
    import {Users, Notice, Shopping} from '../../assets/js/interactive/shopping';
    
	export default {
		props: ['modalName', 'modalPrice', 'modalPath', 'modalId'],
		data() {
			return {
				noticeData: {} 
			};
		},
		methods: {
			Shopping
		},
		components: {
			mapleLogo: require('./mapleFontLogo.vue'),
		}
	};
</script>