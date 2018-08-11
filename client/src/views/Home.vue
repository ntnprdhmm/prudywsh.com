<template>
  <div class='home'>
    <Navbar />
    <Hello />
    <Bar />
    <Shell />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Hello from '@/components/hello/Hello.vue';
import Shell from '@/components/shell/Shell.vue';
import Bar from '@/components/bar/Bar.vue';

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
