<template>
  <div class='container'>
    <div class='container__flex'>
      <div>
        <h2>Socials</h2>
        <p>Follow me on the social networks and coding platforms</p>
        <div class='social__container'>
          <div v-for='(value, key) in socials' class='social' :key='key'>
            <a :href='value.href' :class='`social__link social__link--${key}`'>
              {{ value.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data: () => ({
    socials: {
      twitter: { label: 'Twitter', href: 'https://twitter.com/prudywsh' },
      medium: { label: 'Medium', href: 'https://medium.com/@prudywsh' },
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoine-prudhomme/' },
      hackerrank: { label: 'Hackerrank', href: 'https://www.hackerrank.com/prudywsh' },
      github: { label: 'Github', href: 'https://github.com/prudywsh' },
      codepen: { label: 'Codepen', href: 'https://codepen.io/prudywsh/' },
    },
  }),
};
</script>

<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .container {
    padding: $section-padding;
    text-align: center;
  }

  .container__flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social__container {
    padding-top: 4em;
  }

  .social__link {
    padding: 1em 2em;
    display: block;
    float: left;
    clear: left;
  }
  .social__link:link,
  .social__link:active,
  .social__link:visited
  .social__link:hover {
    text-decoration: none;
  }
  .social__link:hover {
    opacity: 0.9;
  }

  .social__link--twitter:link,
  .social__link--twitter:active,
  .social__link--twitter:visited {
    background-color: $twitter;
    color: $white;
  }

  .social__link--medium:link,
  .social__link--medium:active,
  .social__link--medium:visited {
    background-color: $medium;
    color: $white;
  }

  .social__link--linkedin:link,
  .social__link--linkedin:active,
  .social__link--linkedin:visited {
    background-color: $linkedin;
    color: $white;
  }

  .social__link--hackerrank:link,
  .social__link--hackerrank:active,
  .social__link--hackerrank:visited {
    background-color: $hackerrank;
    color: $white;
  }

  .social__link--github:link,
  .social__link--github:active,
  .social__link--github:visited {
    background-color: $github;
    color: $white;
  }

  .social__link--codepen:link,
  .social__link--codepen:active,
  .social__link--codepen:visited {
    background-color: $github;
    color: $white;
  }

  .social {
    display: inline-block;
  }

  .social:not(:last-child) {
    margin-right: 2em;
  }

  @keyframes jump {
    50% {
      transform: translateY(-15px);
    }
  }

  .social:hover {
    animation: jump .5s;
  }
</style>
