<template>
  <div class="home">
    <Navbar />
    <Hello />
    <Shell />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Hello from '@/components/Hello.vue';
import Shell from '@/components/Shell.vue';

export default {
  name: 'home',
  components: {
    Hello,
    Navbar,
    Shell,
  },
};
</script>
