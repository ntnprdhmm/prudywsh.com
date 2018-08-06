<template>
  <div>
    "<a :href='link' class='shell__body__link'>{{ link }}</a>"
  </div>
</template>

<script>
export default {
  name: 'ShellItemLink',
  props: {
    link: String,
  },
};
</script>

<style scoped lang='scss'>
.shell__body__link {
  color: rgb(27, 173, 248);
}
</style>
