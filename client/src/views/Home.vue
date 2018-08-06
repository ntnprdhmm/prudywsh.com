<template>
  <div class="home">
    <Navbar />
    <Hello />
    <Bar />
    <Shell />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Hello from '@/components/Hello.vue';
import Shell from '@/components/Shell.vue';
import Bar from '@/components/Bar.vue';

export default {
  name: 'home',
  components: {
    Hello,
    Navbar,
    Shell,
    Bar,
  },
};
</script>
