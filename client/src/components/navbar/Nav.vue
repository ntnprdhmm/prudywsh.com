<template>
  <nav id='nav' class='header__nav'
    :class='{ "header__nav--displayed": show, "header__nav--hidden": !show }'>
    <ul class='header__nav__list'>
      <li v-for='link in links' :key='link.href'>
        <router-link v-if='link.router' :to='link.href'
          class='header__nav__link'>
          {{ link.label }}
        </router-link>
        <a v-else :href='link.href' class='header__nav__link'>
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    show: Boolean,
  },
  data() {
    return {
      links: [
        { label: 'Take a beer', href: '#bar', router: false },
        { label: 'About me', href: '#about', router: false },
        { label: 'Social', href: '#social', router: false },
        // { label: 'Projects', href: 'projects', router: true },
      ],
    };
  },
};
</script>

<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .header__nav {
    background-color: $grey-2;
    width: 300px;
    display: inline-block;
  }

  @media (max-width: $mobile-width) {
    .header__nav {
      width: 100%;
    }
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
    color: $grey-9;
    text-decoration: none;
  }

  .header__nav__link:hover {
    background-color: $grey-3;
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
</style>
