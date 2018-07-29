<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container__title">
        Hello world !
      </div>
    </div>
    <nav id="nav" class="header__nav header__nav--hidden">
      <ul class="header__nav__list">
        <li>
          <a href="" class="header__nav__link">About me</a>
        </li>
        <li>
          <a href="" class="header__nav__link">Socials</a>
        </li>
        <li>
          <a href="" class="header__nav__link">Contact</a>
        </li>
      </ul>
    </nav>
    <button class='button button--inactive' type='button'>
      <span class='icon'></span>
    </button>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .header {
    position: fixed;
    top: 0;
    z-index: 600;
    width: 100%;
    font-family: 'Open Sans', monospace;
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

  .header__nav {
    background-color: #eee;
    width: 200px;
  }

  .header__nav__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .header__nav__link {
    text-transform: uppercase;
    display: block;
    padding: 1em 0 1em 2em;
  }

  .header__nav__link:active,
  .header__nav__link:visited,
  .header__nav__link:link,
  .header__nav__link:hover {
    color: #555;
    text-decoration: none;
  }

  .header__nav__link:hover {
    background-color: #ddd;
  }

  .header__nav--hidden {
    transform: translate(-100%);
  }
  .header__nav--displayed {
    transform: translate(0%);
  }

  .header__nav--hidden,
  .header__nav--displayed {
    transition: .15s ease-in-out;
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
