<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__container__title">
        Prudywsh.com
      </h1>
    </div>
    <Nav :show='showNav' />
    <button @click='toggleNav' :class='{ "header__button--active" : showNav,
      "button--inactive": !showNav }' class='header__button' type='button'>
      <span class='header__button__icon'></span>
    </button>
  </header>
</template>

<script>
import Nav from './Nav.vue';

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
<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .header {
    position: fixed;
    top: 0;
    z-index: 600;
    width: 100%;
  }

  .header__container {
    background-color: $white;
    padding: $navbar-padding 0;
  }

  .header__container__title {
    line-height: $navbar-header-font-size;
    font-size: $navbar-header-font-size;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .2em;
    margin: 0;
  }

  .header__button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: $navbar-header-font-size;
    width: 26px;
    position: absolute;
    top: $navbar-padding;
    left: 2em;
  }

  .header__button__icon,
  .header__button__icon::after,
  .header__button__icon::before {
    position: absolute;
    z-index: 900;
    background-color: #333;
    height: 2px;
    width: 26px;
    margin: -2px -10px;
    border-radius: 3px;
  }

  .header__button__icon::after,
  .header__button__icon::before {
    content: '';
    margin: -13px;
  }

  .header__button__icon::after {
    margin-top: 10px;
  }

  .header__button__icon::before {
    margin-top: -10px;
  }

  .header__button--active .header__button__icon,
  .header__button--inactive .header__button__icon {
    transition: .15s ease-in-out;
  }
  .header__button--active .header__button__icon {
    transform: rotate(90deg);
  }
  .header__button--inactive .header__button__icon {
    transform: rotate(0deg);
  }
</style>
