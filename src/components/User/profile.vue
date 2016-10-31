<template>
	<div>
		<ul class="navbar dotted">
			<li>
				<span class="name">用户名：</span>
				<span>{{ userMsgLists.name }}</span>
			</li>
			<li>
				<span class="name">姓名：</span>
				<span>{{ userMsgLists.xingming }}</span>
			</li>
			<li>
				<span class="name">所在省份：</span>
				<span>{{ userMsgLists.shengfen }}</span>
			</li>
			<li>
				<span class="name">所在城市：</span>
				<span>{{ userMsgLists.city }}</span>
			</li>
			<li>
				<span class="name">手机号：</span>
				<span>{{ userMsgLists.phone }}</span>
			</li>
			<li>
				<span class="name">邮箱号：</span>
				<span>{{ userMsgLists.mail }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import interactive from '../../assets/js/interactive/interactive';

	export default {
		beforeCompile() {
			this.getDetailedMsg();
		},
		data() {
			return {
				userMsgLists: {}
			};
		},
		methods: {
			getDetailedMsg: interactive.getDetailedMsg
		}
	}
</script>