<!-- composition api 사용한 컴포넌트 -->

<template>
	<li class="table-item" @click="onClickHandler(todoId)">
		<p>게시글 아이디: {{ todoId }}</p>
		<p>타이틀: {{ title }}</p>
		<p>완료여부: {{ completed }}</p>
		<p>유저 아이디: {{ userId }}</p>
	</li>
</template>
  
<script>
	import { defineComponent } from 'vue';

	export default defineComponent({
		props: {
			todoId: {
				type: Number,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			completed: {
				type: Boolean,
				required: true
			},
			userId: {
				type: Number,
				required: true
			},
			onClickHandler: {
				type: Function,
				required: true
			}
		},
});
</script>

<style>
	.table-item {
		display: flex;
		flex-direction: column;
		margin: 10px 0;
		padding: 5px;
		border: 1px solid #000;
		gap: 10px;
		cursor: pointer;
	}

	.table-item p {
		margin: 0;
	}
</style>