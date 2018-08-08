<template>
  <div class='bar'>
    <div class='bar__drawing'>
      <div>
        <div class='bar__drawing__item'>
          <Pump @tapClicked='handleTapClick' @animationEnded='handleAnimationEnded' />
        </div>
        <div class='bar__drawing__item'>
          <Beer :fill='tapClicked' />
        </div>
      </div>
    </div>
    <div v-if='animationEnded === false' class='bar__text'>
      Before going further, hit the tap and serve you a beer !
    </div>
    <div v-else class='bar__text'>
      Now you're good to continue ;)
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
    animationEnded: false,
  }),
  components: {
    Pump,
    Beer,
  },
  methods: {
    handleTapClick() {
      this.tapClicked = true;
    },
    handleAnimationEnded() {
      this.animationEnded = true;
    },
  },
};
</script>

<style scoped lang="scss">
.bar {
  background-color: #33B1E7;
  padding-top: 2em;
  padding-bottom: 6em;
}

.bar__drawing {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bar__drawing__item {
  display: inline-block;
}

.bar__text {
  text-align: center;
  margin-top: 2em;
}
</style>
