<template>
  <div class='hello'>
    <div class='hello__content'>
      <h2>
        Hello, world !
      </h2>
      <p class='hello__content__text'>
        I'm <strong>Antoine Prudhomme</strong>
        &nbsp;<span class='hello__content__text--small'>(aka <strong>prudywsh</strong>)</span>
        <br>
        a 23yo <strong>fullstack engineer</strong> living in <strong>Paris</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
};
</script>

<style scoped lang='scss'>
  .hello {
    background-color: #33B1E7;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6em;
  }

  .hello__content {
    text-align: center;
  }

  .hello__content__text {
    font-size: 1.5em;
  }

  .hello__content__text--small {
    font-size: .6em;
    color: #555;
  }
</style>
