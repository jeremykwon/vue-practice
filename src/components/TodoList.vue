<!-- composition api 사용한 컴포넌트 -->

<template>
	<div>
		<h1>Todo List, 우리는 이것을 게시판이라고 부르기로 했습니다.</h1>
		<ul>
			<p v-if="isLoading">로딩중...</p>

			<div v-else>
				<TodoListItem
					v-for="(todoItem, index) in todoList"
					:key="index"
					:todoId="todoItem.id"
					:title="todoItem.title"
					:completed="todoItem.completed"
					:userId="todoItem.userId"
					:onClickHandler="handleMoveToDetailPage"
				/>
			</div>
			
		</ul>	
	</div>
</template>
  
<script>
	import { ref, onMounted } from 'vue';
	import { useRouter } from 'vue-router';
	import TodoListItem from "./TodoListItem.vue"

	export default {
		components: { 
			TodoListItem
		},
		setup() {
			

			// state
			const isLoading = ref(true);
			const todoList = ref([]);

			// hooks
			const router = useRouter();

			const getTodoListData = async () => {
				try {
					const response = await fetch('https://jsonplaceholder.typicode.com/todos');
					isLoading.value = false;
					
					return await response.json();
				} catch (error) {
					console.error(error);
				}
			};

			// 상세 페이지로 이동하는 핸들러
			const handleMoveToDetailPage = (todoId) => {
				router.push(`/detail/${todoId}`);
			};

			onMounted(async () => {
				todoList.value = await getTodoListData();
			});

			return {
				// data
				isLoading,
				todoList,
				
				// handler
				handleMoveToDetailPage,

				// components
				TodoListItem,
			}
		}
	}
</script>

