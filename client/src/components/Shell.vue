<template>
  <div class='shell-container'>
    <div class='shell'>
      <div class='shell__header'>
        <div class='shell__header__actions'>
          <span class='circle circle--red'></span>
          <span class='circle circle--yellow'></span>
          <span class='circle circle--green'></span>
        </div>
        About me
      </div>
      <div class='shell__body'>
        <div class='shell__body__block'>
          <div class='shell__body__block__question'>
            prudywsh.location
          </div>
          <div class='shell__body__block__answer'>
            "Paris, France"
          </div>
        </div>
        <div class='shell__body__block'>
          <div class='shell__body__block__question'>
            prudywsh.interests
          </div>
          <div class='shell__body__block__answer'>
            ["competitive programming", "web", "road cycling", "swimming", "beer"]
          </div>
        </div>
        <div class='shell__body__block'>
          <div class='shell__body__block__question'>
            prudywsh.twitter
          </div>
          <div class='shell__body__block__answer'>
            "<a href="" class='shell__body__link'>https://twitter.com/prudywsh</a>"
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shell',
}
</script>

<style>
  .shell-container {
    background-color: #81D4FA;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .shell {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #333;
  border-radius: 5px;
}

.shell__header {
  background-color: #ccc;
  text-align: center;
  padding: .5em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
}

.shell__header__actions {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.circle {
  width: .8em;
  height: .8em;
  background-color: #fff;
  display: inline-block;
  float: left;
  margin: .6em 0 .6em .6em;
  border-radius: 50%;
  box-shadow: .1px .1px #333;
}
.circle--red {
  background-color: rgb(255, 59, 48);
}
.circle--yellow {
  background-color: rgb(255, 204, 0);
}
.circle--green {
  background-color: rgb(76, 217, 100);
}

.shell__body {
  padding: 3em 2em;
  background-color: #333;
  color: #fafafa;
}

.shell__body__block__question::before {
  content: '>'
}

.shell__body__block__answer {
  margin-top: .5em;
  color: #bbb;
}

.shell__body__block:not(:last-child) {
  margin-bottom: 1.5em;
}

.shell__body__link {
  color: rgb(27, 173, 248);
}
</style>
