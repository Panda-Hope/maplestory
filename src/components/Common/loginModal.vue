<style lang="sass">
	.maple-login {
		.modal-content {
			width: 600px;
			height: 400px;
			background: url('../../assets/image/20130128151109_49574.jpg') no-repeat;
			background-size: 600px 400px;
		}
		.leave {
			position: absolute;
			right: 0;
			top: 0;
			cursor: pointer;
		}
		.login-form {
			margin-top: 50px;
		}
		.form-group {
			margin-bottom: 30px;
		}
		.form-control {
			display: inline-block;
			width: 200px;
		}
		.form-name {
			color: #fff;
	  	  	font-size: 20px;
		}
		.login-button {
		    width: 80px;
		    height: 40px;
		    margin-left: 30px;
		    background: #AFCD01;
		    color: #FFF;
		    border-radius: 8px;
		    font-size: 20px;
		}
	}
</style>

<template>
	<section>
	    <!-- Modal -->
	    <div class="modal fade maple-login maple" id="myModal2" tabindex="-1" >
	      <div class="modal-dialog" role="document">
	        <div class="modal-content">
		        <div class="modal-body">
		            <maple-logo></maple-logo>
		            <img src="../../assets/image/close.png" class="leave" data-dismiss="modal" />
		            <div class="login-form">
		            	<form name="userLogin" method="post">
			            	<div class="form-group">
			            		<label class="form-name">用户名：</label>
			            		<input name="user" type="text" class="form-control">
			            	</div>
			            	<div class="form-group">
			            		<label class="form-name">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
			            		<input name="password" type="password" class="form-control">
			            	</div>
			            	<button class="login-button btn" @click="userLogin">登录</button>
		            	</form>
		            </div>
		        </div>
	        </div>
	      </div>
	    </div>
	</section>
	<notice-modal :notice-data="noticeData"></notice-modal>
</template>

<script>
	import Users from '../../assets/js/interactive/userLogin';
	
	export default {
		ready() {
			//propagate vue context and other options to users class
			let _context = this;
			$.proxy(Users.init, Users)(_context);
			// $.proxy(Users.showNotice, Users)({});
		},
		data() {
			return {
				noticeData: {} 
			};
		},
		methods: {
			userLogin: function(e) {
				e && e.preventDefault();
				
				let elem = e.target || e.srcElement;  // for support ie6-8
				$.proxy(Users.login, Users)(elem, this);
			}
		},
		components: {
			mapleLogo: require('./mapleFontLogo.vue'),
			noticeModal: require('./noticeModal.vue')
		}
	};
</script>