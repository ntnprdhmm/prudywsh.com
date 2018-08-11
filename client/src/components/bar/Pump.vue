<template>
  <div class='pump-container'>
    <div class='pump'>
      <div class='pump__body'></div>
      <div class='pump__base'></div>
      <div class='pump__arm'></div>
      <div class='pump__head'>
        <div class='pump__head__tap' :class='{ "pump__head__tap--open": showAnimation}'
          @click='handleTapClick'>
          <div class='pump__head__tap__top'></div>
          <div class='pump__head__tap__bottom'></div>
        </div>
        <div class='pump__head__fixing'></div>
        <div class='pump__head__output'></div>
      </div>
      <div class='pump-liquid-container'>
        <div class='pump-liquid' :class='{ "pump-liquid--on": showAnimation  }'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pump',
  data: () => ({
    clicked: false,
    stopAnimation: false,
  }),
  methods: {
    handleTapClick() {
      if (this.clicked === false) {
        this.clicked = true;
        this.$emit('tapClicked');
        setTimeout(this.handleAnimationEnd, 2000);
      }
    },
    handleAnimationEnd() {
      this.$emit('animationEnded');
      this.stopAnimation = true;
    },
  },
  computed: {
    showAnimation() {
      return this.clicked && !this.stopAnimation;
    },
  },
};
</script>

<style scoped lang='scss'>
$pump-height: 300px;

$pump-tap-color: #8b4513;
$pump-mecanic-color: #bbb;
$pump-color: black;

$pump-body-height: ($pump-height * 0.6);
$pump-body-width: ($pump-height * 0.1);
$pump-body-offset: ($pump-height * 0.075);

$pump-base-height: ($pump-height * 0.1);
$pump-base-width: ($pump-body-offset * 2) + $pump-body-width;

$pump-arm-height: $pump-base-height / 2;
$pump-arm-left-offset: ($pump-body-width + $pump-body-offset);
$pump-arm-bottom-offset: ($pump-base-height + $pump-body-height - $pump-arm-height);

$pump-arm-width: ($pump-body-offset * 2);

$pump-head-bottom-offset: ($pump-arm-bottom-offset - ($pump-arm-height / 2));
$pump-head-left-offset: ($pump-arm-left-offset + $pump-arm-width - ($pump-body-offset * 0.5));

$pump-head-fixing-diameter: $pump-arm-height * 2;

$pump-head-output-height: $pump-head-fixing-diameter;
$pump-head-output-width: $pump-head-fixing-diameter * 0.2;

$pump-head-ouput-left-offset: ($pump-head-fixing-diameter - $pump-head-output-width) / 2;

$pump-head-tap-bottom-width: $pump-head-fixing-diameter * 0.3;
$pump-head-tap-bottom-height: $pump-head-fixing-diameter;
$pump-head-tap-bottom-left-offset: ($pump-head-fixing-diameter - $pump-head-tap-bottom-width) / 2;
$pump-head-tap-bottom-bottom-offset: $pump-head-fixing-diameter * -0.5;

$pump-head-tap-top-width: $pump-head-fixing-diameter / 2;
$pump-head-tap-top-height: $pump-head-fixing-diameter * 1.5;
$pump-head-tap-top-bottom-offset: ($pump-head-tap-bottom-height / 2);
$pump-head-tap-top-left-offset: ($pump-head-fixing-diameter - $pump-head-tap-top-width) / 2;

$liquid-height: $pump-body-height - $pump-head-output-height;
$liquid-width: $pump-head-output-width;
$liquid-left-offset: $pump-head-left-offset + (($pump-head-fixing-diameter - $liquid-width) / 2);
$liquid-bottom-offset: $pump-body-height + $pump-base-height - ($pump-arm-height * 0.5)
- ($pump-head-fixing-diameter * 0.5) - $liquid-height - $pump-head-output-height;

$pump-width: $pump-base-width + (0.25 * $pump-body-width);

.pump-container {
  width: $pump-width;
}

.pump {
  height: $pump-height;
  position: relative;
}

.pump__body, .pump__base, .pump__arm {
  background-color: $pump-color;
}

.pump__body {
  height: $pump-body-height;
  width: $pump-body-width;
  position: absolute;
  bottom: $pump-base-height;
  left: $pump-body-offset;
  border-top-left-radius: 40%;
}

.pump__base {
  width: $pump-base-width;
  position: absolute;
  bottom: 0;
  height: $pump-base-height;
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

.pump__arm {
  height: $pump-arm-height;
  position: absolute;
  width: $pump-arm-width;
  left: $pump-arm-left-offset;
  bottom: $pump-arm-bottom-offset;
}

.pump__head {
  position: absolute;
  bottom: $pump-head-bottom-offset;
  left: $pump-head-left-offset;
}

.pump__head__fixing {
  border-radius: 50%;
  width: $pump-head-fixing-diameter;
  height: $pump-head-fixing-diameter;
}

.pump__head__output {
  width: $pump-head-output-width;
  height: $pump-head-output-height;
  position: absolute;
  left: $pump-head-ouput-left-offset;
}

.pump__head__tap__bottom {
  width: $pump-head-tap-bottom-width;
  height: $pump-head-tap-bottom-height;
  bottom: $pump-head-tap-bottom-bottom-offset;
  left: $pump-head-tap-bottom-left-offset;
  position: absolute;
}

.pump__head__tap__top {
  width: $pump-head-tap-top-width;
  height: $pump-head-tap-top-height;
  background-color: $pump-tap-color;
  position: absolute;
  bottom: $pump-head-tap-top-bottom-offset;
  left: $pump-head-tap-top-left-offset;
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
}

.pump__head__fixing, .pump__head__output, .pump__head__tap__bottom {
  background-color: $pump-mecanic-color;
}

.pump__head__tap {
  position: relative;
}
.pump__head__tap:hover {
  cursor: pointer;
}

.pump__head__tap--open {
  transform: rotate(45deg);
  right: -(($pump-head-fixing-diameter - $pump-head-tap-bottom-width) / 2);
}

.pump-liquid-container {
  width: $liquid-width;
  height: $liquid-height;
  position: absolute;
  left: $liquid-left-offset;
  bottom: $liquid-bottom-offset;
}

@keyframes flow-on {
  0% {height: 0;}
  100% {height: $liquid-height;}
}

.pump-liquid--on {
  background-color: orange;
  animation: flow-on .2s forwards ease-in;
}
</style>
