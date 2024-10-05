<template>
    <nav>
      <router-link to="/">
        <p>Home</p>
      </router-link>

      <router-link to="/list">
        <p>List</p>
      </router-link>
    </nav>
    
    <!-- 현재 활성화된 라우트의 컴포넌트가 여기에 렌더링됨 -->
    <router-view />
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>