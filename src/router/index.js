import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import TodoList from '../components/TodoList.vue';
import TodoDetail from '@/components/TodoDetail.vue'; '../components/TodoDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
  },
  {
    path: '/list',
    name: 'list',
    component: TodoList,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: TodoDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
