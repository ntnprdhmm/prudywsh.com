<template>
  <div class='shell-container'>
    <div class='shell'>
      <div class='shell__header'>
        <div class='shell__header__actions'>
          <span class='circle circle--red'></span>
          <span class='circle circle--yellow'></span>
          <span class='circle circle--green'></span>
        </div>
        {{ title }}
      </div>
      <div class='shell__body'>
        <ShellItem v-for='(value, key) in items'
          :title='key'
          :type='value.type'
          :data='value.data'
          :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
import ShellItem from './ShellItem.vue';

export default {
  name: 'Shell',
  components: {
    ShellItem,
  },
  props: {
    title: String,
    items: Object,
  },
};
</script>

<style scoped lang='scss'>
@import '@/config/variables.scss';

.shell-container {
  background-color: $secondary;
  padding: $section-padding;
}

.shell {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid $grey-10;
  border-radius: 5px;
}

.shell__header {
  background-color: $grey-4;
  text-align: center;
  padding: .5em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
}

.shell__header__actions {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.circle {
  width: .8em;
  height: .8em;
  background-color: $white;
  float: left;
  margin: .6em 0 .6em .6em;
  border-radius: 50%;
  box-shadow: .1px .1px $grey-10;
}
.circle--red {
  background-color: $mac-red;
}
.circle--yellow {
  background-color: $mac-yellow;
}
.circle--green {
  background-color: $mac-green;
}

.shell__body {
  padding: 3em 2em;
  background-color: $grey-10;
  color: $grey-0;
}
</style>
