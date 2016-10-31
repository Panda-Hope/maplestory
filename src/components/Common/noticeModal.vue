<style lang="sass">
	$noticeM-modal-width: 400px;

	.notice {
		&-modal {
			width: $noticeM-modal-width
		}
		&-img {
			width: 200px;
			margin-top: -10px;
		}
		&-msg {
			font-size: 30px;
    		color: #666;
		}
	}
</style>
<template>
	<section>
	    <!-- Modal -->
	    <div class="modal fade maple" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	      <div class="modal-dialog notice-modal" role="document">
	        <div class="modal-content">
	          <div class="modal-header">
	            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
	            <maple-logo></maple-logo>
	          </div>
	          <div class="modal-body">
	            <template v-if="noticeData.img">
	            	<img class="notice-img" :src="'./assets/image/' + noticeData.img">
	            </template>
	            <template v-else>
	            	<h3 class="notice-msg">{{ noticeData.msg }}</h1>
	            </template>
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