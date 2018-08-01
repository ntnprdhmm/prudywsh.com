<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container__title">
        Hello world !
      </div>
    </div>
    <Nav :show='showNav' />
    <button @click='toggleNav' :class='{ "button--active" : showNav,
      "button--inactive": !showNav }' class='button' type='button'>
      <span class='icon'></span>
    </button>
  </header>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Navbar',
  components: {
    Nav,
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    z-index: 600;
    width: 100%;
  }

  .header__container {
    background-color: #fff;
    padding: 3em 0;
  }

  .header__container__title {
    line-height: 18px;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .2em;
  }

  /* BUTTON PART */

  .button {
    /* remove all default style */
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: 18px;
    width: 26px;
    position: absolute;
    top: 3em;
    left: 2em;
  }

  .icon,
  .icon::after,
  .icon::before {
    position: absolute;
    z-index: 900;
    background-color: #333;
    height: 2px;
    width: 26px;
    margin: -2px -10px;
    border-radius: 3px;
  }

  .icon::after,
  .icon::before {
    content: '';
    margin: -13px;
  }

  .icon::after {
    margin-top: 10px;
  }

  .icon::before {
    margin-top: -10px;
  }

  .button--active .icon,
  .button--inactive .icon {
    transition: .15s ease-in-out;
  }
  .button--active .icon {
    transform: rotate(90deg);
  }
  .button--inactive .icon {
    transform: rotate(0deg);
  }
</style>
