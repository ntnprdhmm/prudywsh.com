<template>
  <div class='anchor' :id='anchorId'></div>
</template>

<script>
export default {
  name: 'Anchor',
  props: {
    anchorId: String,
  },
};
</script>

<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .anchor {
    position:absolute;
    z-index:-1;
    left:0;
    margin-top:-7em;
  }
</style>
