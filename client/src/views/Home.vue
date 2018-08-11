<template>
  <div class='home'>
    <Navbar />
    <Hello />
    <Anchor anchorId='bar' />
    <Bar />
    <Anchor anchorId='about' />
    <Shell />
    <Anchor anchorId='social' />
    <Social />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Hello from '@/components/hello/Hello.vue';
import Bar from '@/components/bar/Bar.vue';
import Shell from '@/components/shell/Shell.vue';
import Social from '@/components/social/Social.vue';
import Footer from '@/components/footer/Footer.vue';
import Anchor from '@/components/Anchor.vue';

export default {
  name: 'home',
  components: {
    Hello,
    Navbar,
    Shell,
    Bar,
    Social,
    Footer,
    Anchor,
  },
};
</script>
