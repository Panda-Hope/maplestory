<style lang="sass">
	.navbar.dotted {
		&.page {
			margin-top: 0;
			> li {
				a {
					margin-right: 30px;
					color: inherit;
					&:hover {
						color: #00FFFF;
					}
				} 
			}
		}	
	}
	.paging {
		display: none;
		&.active {
			display: block;
		}
	}
</style>

<template>
	<section>
		<template v-if="orders.length >= 1">
			<ul class="navbar dotted paging" v-for="item in orders" :class="{active: $index == 0 }" id="{{ $index }}" >
				<li>
					<span class="name">订单编号：</span>
					<span>{{ item.orderid }}</span>
				</li>
				<li>
					<span class="name">商品名称：</span>
					<span>{{ item.commodityname }}</span>
				</li>
				<li>
					<span class="name">商品价格：</span>
					<span>{{ item.price }}</span>
				</li>
				<li>
					<span class="name">下单时间：</span>
					<span>{{ item.addtime }}</span>
				</li>
				<li>
					<span class="name">姓名：</span>
					<span>{{ item.xingming }}</span>
				</li>
				<li>
					<span class="name">收货地址：</span>
					<span>{{ item.shengfen + item.city + item.street }}</span>
				</li>
				<li>
					<span class="name">联系电话：</span>
					<span>{{ item.phone }}</span>
				</li>
			</ul>
			<ul class="navbar dotted page">
				<li>
					<a @click="Paging('goPage', 'prev')">上一页</a>
					<a @click="Paging('goPage', 'next')">下一页</a>
					<span style="float: right">一共{{ orders.length }}页</span>
				</li>
			</ul>
		</template>
		<template v-else>
			<h1 style="color: #7F7F7F;font-size: 55px;font-weight: bold;text-align: center;">暂无您的订单信息</h1>
		</template>
	</section>
</template>

<script>
	import interactive from '../../assets/js/interactive/interactive';
	import Paging from '../../assets/js/paging';
	
	export default {
		beforeCompile() {
			this.getOrders();
		},
		data() {
			return {
				orders: {}
			};
		},
		methods: {
			getOrders: interactive.getOrders,
			Paging
		}
	}
</script>