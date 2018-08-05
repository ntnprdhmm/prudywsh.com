<template>
  <div class="home">
    <Navbar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Shell />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navbar.vue';
import Shell from '@/components/Shell.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    Shell,
  },
};
</script>
