<template>
  <div class='home'>
    <Navbar />
    <Hello />
    <Bar />
    <Shell />
    <Social />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Hello from '@/components/hello/Hello.vue';
import Bar from '@/components/bar/Bar.vue';
import Shell from '@/components/shell/Shell.vue';
import Social from '@/components/social/Social.vue';

export default {
  name: 'home',
  components: {
    Hello,
    Navbar,
    Shell,
    Bar,
    Social,
  },
};
</script>
