<template>
  <div>
    [{{ stringifiedValues }}]
  </div>
</template>

<script>
export default {
  name: 'ShellItemArray',
  props: {
    values: Array,
  },
  computed: {
    stringifiedValues() {
      return this.values.map(v => `"${v}"`).join(', ');
    },
  },
};
</script>
