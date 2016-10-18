<template>
	<section>
	    <!-- Modal -->
	    <div class="modal fade maple" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	      <div class="modal-dialog" role="document">
	        <div class="modal-content">
	          <div class="modal-header">
	            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
	            <maple-logo></maple-logo>
	          </div>
	          <div class="modal-body">
	            <span>{{ noticeData.msg }}</span>
	            
	          </div>
	          <div class="modal-footer">
	            <button type="button" class="btn btn-default">加入购物车</button>
	            <button type="button" class="btn btn-primary">直接购买</button>
	          </div>              
	        </div>
	      </div>
	    </div>
	</section>
</template>

<script>
	export default {
		props: ['noticeData'],
		components: {
			mapleLogo: require('./mapleFontLogo.vue')
		}
	};
</script>