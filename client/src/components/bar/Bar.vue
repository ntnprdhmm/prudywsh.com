<template>
  <div class='bar'>
    <div class='bar__drawing'>
      <div class='bar__drawing__flex'>
        <div>
          <div class='bar__drawing__flex__item'>
            <Pump @tapClicked='handleTapClick' @animationEnded='handleAnimationEnded' />
          </div>
          <div class='bar__drawing__flex__item'>
            <Beer :fill='tapClicked' />
          </div>
        </div>
      </div>
    </div>
    <div class='bar__content'>
      <div class='bar__content__flex'>
        <div>
          <h2 class='bar__content__flex__title'>
            Coding is fun
          </h2>
          <p>
            Like this little beer pump !
          </p>
          <br>
          <p v-if='animationEnded === false'>
            Before going further, hit the tap and serve you a beer ;)
          </p>
          <p v-else>
            Now you're good to continue :)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pump from './Pump.vue';
import Beer from './Beer.vue';

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

<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .bar {
    background-color: $primary;
    position: relative;
    display: table;
    width: 100%;
    table-layout: fixed;
    padding-top: $section-padding;
    padding-bottom: $section-padding;
  }

  .bar__drawing, .bar__content {
    display: table-cell;
    margin: 0;
    padding: 0;
    height: auto;
  }

  .bar__drawing__flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bar__drawing__flex__item {
    display: inline-block;
  }

  .bar__content {
    vertical-align: middle;
  }

  .bar__content__flex__title {
    color: $white;
  }

  @media (max-width: $mobile-width) {
    .bar__drawing, .bar__content {
      display: block;
    }

    .bar__content {
      padding-left: $section-padding;
      padding-right: $section-padding;
      padding-top: $section-padding;
      text-align: center;
    }
  }
</style>
