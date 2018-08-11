<template>
  <nav id='nav' class='header__nav'
    :class='{ "header__nav--displayed": show, "header__nav--hidden": !show }'>
    <ul class='header__nav__list'>
      <li v-for='link in links' :key='link.href'>
        <a :href='link.href' class='header__nav__link'>
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
        { label: 'Take a beer', href: '#bar' },
        { label: 'About me', href: '#about' },
        { label: 'Social', href: '#social' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
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
</style>
