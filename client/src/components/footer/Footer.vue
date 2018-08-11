<template>
  <div class='footer'>
    ©2018 - prudywsh.me
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .footer {
    background-color: $primary;
    padding: $section-padding;
    color: $white;
    text-align: center;
  }
</style>
