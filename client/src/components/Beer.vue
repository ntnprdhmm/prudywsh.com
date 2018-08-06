<template>
  <div class='beer-container'>
    <div class='foam' id='foam'>
      <div class='foam__item'>
        <div class='foam__item__circle'></div>
      </div>
      <div class='foam__item'>
        <div class='foam__item__circle foam__item__circle--bottom'></div>
      </div>
      <div class='foam__item'>
        <div class='foam__item__circle'></div>
      </div>
      <div class='foam__item'>
        <div class='foam__item__circle foam__item__circle--bottom'></div>
      </div>
      <div class='foam__item'>
        <div class='foam__item__circle'></div>
      </div>
      <div class='foam__item'>
        <div class='foam__item__circle foam__item__circle--bottom'></div>
      </div>
      <div class='foam__item'>
        <div class='foam__item__circle'></div>
      </div>
    </div>
    <div class='glass' id='glass'></div>
    <div class='grip'></div>
    <div id='beer-liquid'></div>
  </div>
</template>

<script>
export default {
  name: 'Beer',
};
</script>

<style scoped lang='scss'>

$beer-color: #F5A510;
$glass-border-color: #FFF;

$glass-border: 5px;
$glass-height: 120px;
$glass-width: 70px;
$grip-width: 20px;
$grip-height: 45px;

$foam-item-width: (($glass-width - (3 * $glass-border)) / 8);
$foam-circle-diameter: $foam-item-width + ($foam-item-width * 0.90);
$foam-item-height: $foam-circle-diameter + ($foam-circle-diameter / 2);

$bubble-size: 1px;
$bubble-size-big: 2px;

$filling-duration: 2s;

.beer-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glass {
  width: $glass-width;
  height: $glass-height;

  border-bottom: $glass-border solid $glass-border-color;
  border-left: $glass-border solid $glass-border-color;
  border-right: $glass-border solid $glass-border-color;
  border-radius: 0 0 10% 10%;
}

.grip {
  width: $grip-width;
  height: $grip-height;
  border-bottom: $glass-border solid $glass-border-color;
  border-top: $glass-border solid $glass-border-color;
  border-right: $glass-border solid $glass-border-color;
  border-radius: 0 10% 30% 0;
  margin-bottom: 10px;
}

.foam {
  display: none;
  position: absolute;
  height: 45px;
  top: 0;
  left: 1px;
  z-index: 100;
}

.foam__item {
  width: $foam-item-width;
  height: $foam-item-height;
  display: inline-block;
}

.foam__item__circle {
  width: $foam-circle-diameter;
  height: $foam-circle-diameter;
  background: white;
  border-radius: 50%;
  position: absolute;
}

.foam__item__circle--bottom {
  margin-top: $foam-circle-diameter / 4;
}

@keyframes fill-foam {
  from {top: ($glass-height - $foam-circle-diameter);}
  to {top: 0px;}
}
.foam--filling {
  animation: fill-foam $filling-duration ease-in-out;
}

.beer-liquid {
  background-color: $beer-color;
  width: $glass-width;
  height: ($glass-height - ($foam-circle-diameter / 2));
  position: absolute;
  left: $glass-border;
  bottom: $glass-border;
  border-radius: 0 0 8% 8%;
}
@keyframes fill-beer {
  0% {
    height: 0px;
  }
}
.beer-liquid--filling {
  animation: fill-beer $filling-duration ease-in-out;
}

@keyframes bubble {
  0% {
    bottom: $glass-border;
  }
  100% {
    bottom: $glass-height;
  }
}

.bubble {
  height: $bubble-size;
  width: $bubble-size;
  border-radius: 50%;
  border: 1px solid #fff;
  z-index: 90;
  position: absolute;
  left: 15px;
  animation: bubble $filling-duration infinite ease-in;
  background-color: #fff;
  opacity: .4;
}

.bubble--big {
  height: $bubble-size-big;
  width: $bubble-size-big;
}
</style>

