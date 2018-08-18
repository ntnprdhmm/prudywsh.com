<template>
  <div class='container'>
    <div class='container__content'>
      <h1 class='container__content__title'>404 - page not found</h1>
      <router-link to='/' class='container__content__link'>
        Go back to the home page
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>

<style scoped lang='scss'>
  @import '@/config/variables.scss';

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $secondary;
    height: 100vh;
  }

  .container__content__title {
    color: $white;
    font-size: 2.5em;
    text-transform: uppercase;
  }

  .container__content__link {
    display: block;
    text-align: center;
  }
</style>
