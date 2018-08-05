<template>
  <div class='shell__body__item'>
    <div class='shell__body__item__title'>
      {{ title }}
    </div>
    <div class='shell__body__item__value'>
      <ShellItemString :value='data' v-if='isString' />
      <ShellItemArray :values='data' v-if='isArray' />
      <ShellItemLink :link='data' v-if='isLink' />
    </div>
  </div>
</template>

<script>
import ShellItemString from '@/components/ShellItemString.vue';
import ShellItemArray from '@/components/ShellItemArray.vue';
import ShellItemLink from '@/components/ShellItemLink.vue';

export default {
  name: 'ShellItem',
  components: {
    ShellItemString,
    ShellItemArray,
    ShellItemLink,
  },
  props: {
    type: {
      type: String,
      validator: val => ['link', 'array', 'string'].includes(val),
    },
    title: String,
    data: [String, Array],
  },
  computed: {
    isLink() {
      return this.type === 'link';
    },
    isArray() {
      return this.type === 'array';
    },
    isString() {
      return this.type === 'string';
    },
  },
};
</script>

<style>
.shell__body__item__title::before {
  content: '>'
}

.shell__body__item__value {
  margin-top: .5em;
  color: #bbb;
}

.shell__body__item:not(:last-child) {
  margin-bottom: 1.5em;
}
</style>
