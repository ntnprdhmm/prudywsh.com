<template>
  <div class='hello'>
    <div class='hello__content'>
      <h2 class='hello__content__title'>
        Hello, world !
      </h2>
      <div class='hello__content__text'>
        <p>
          My name is <strong>Antoine Prudhomme</strong>
        </p>
        <p>
          A 23yo <strong>fullstack software engineer</strong>
          <br>
          currently living in <strong>Paris</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
};
</script>

<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .hello {
    background-color: $white;
    color: $grey-10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - #{$navbar-height});
  }

  .hello__content {
    text-align: center;
    padding-bottom: $navbar-padding;
  }

  .hello__content__title {
    color: $primary;
    font-size: 2.5em;
    text-transform: uppercase;
  }

  .hello__content__text {
    font-size: 1.5em;
  }

  .hello__content__text strong {
    color: $secondary;
  }
</style>
