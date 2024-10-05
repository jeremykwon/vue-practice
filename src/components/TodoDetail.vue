<!-- composition api 사용한 컴포넌트 -->

<template>
	<div>
		<h1>Todo Detail, 이것은 상세 페이지 입니다.</h1>

		<div v-if="!todoData">로딩중...</div>		
			
		<div v-else>
			<p>게시글 아이디: {{ todoData.id }}</p>
			<p>타이틀: {{ todoData.title }}</p>
			<p>완료여부: {{ todoData.completed }}</p>
			<p>유저 아이디: {{ todoData.userId }}</p>
		</div>
	</div>
</template>
  
<script>
	import { useRoute } from 'vue-router';
	import { defineComponent, onMounted, ref } from 'vue';

	export default defineComponent({
		setup() {
			const route = useRoute();
			const id = route?.params?.id;

			const todoData = ref(false);

			const getTodoListData = async () => {
				try {
					const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

					return await response.json();
				} catch (error) {
					console.error(error);
				}
			};

			onMounted(async () => {
				todoData.value = await getTodoListData();
			});

			return {
				todoData
			}
		}
	})
</script>