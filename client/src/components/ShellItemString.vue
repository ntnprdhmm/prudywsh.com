<template>
  <div>"{{ value }}"</div>
</template>

<script>
export default {
  name: 'ShellItemString',
  props: {
    value: String,
  },
};
</script>
