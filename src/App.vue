<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import router from './router';

export default {
  router,
};
</script>