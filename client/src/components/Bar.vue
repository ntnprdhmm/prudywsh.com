<template>
  <div class='main-container'>
    <div>
      <div class='container'>
        <Pump @tapClicked='handleTapClick' />
      </div>
      <div class='container'>
        <Beer :fill='tapClicked' />
      </div>
    </div>
  </div>
</template>

<script>
import Pump from '@/components/Pump.vue';
import Beer from '@/components/Beer.vue';

export default {
  name: 'Bar',
  data: () => ({
    tapClicked: false,
  }),
  components: {
    Pump,
    Beer,
  },
  methods: {
    handleTapClick() {
      this.tapClicked = true;
    },
  },
};
</script>


<style scoped lang="scss">
.main-container {
  background-color: #33B1E7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}

.container {
  display: inline-block;
}
</style>
