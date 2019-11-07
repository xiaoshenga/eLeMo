<template>
  <div class="start">
    <span v-for="(list,i) in len" :class="[oFN(i),startSize()]" :key="list"></span>
  </div>
</template>

<script>
export default {
  name: "start",
  props: {
    score: {
      type: Number
    },
    size: {
      type: Number,
      default: 15
    }
  },
  data() {
    return {
      len: 5
    };
  },
  computed: {},
  methods: {
    oFN(i) {
      return i + 1 > this.score ? "off" : "on";
    },
    startSize() {
      return "start-" + this.size;
    }
  }
};
</script>

<style lang="less">
.start {
  margin: 0 12px;
  .start-15 {
    width: 15px;
    height: 15px;
  }
  .start-10 {
    width: 10px;
    height: 10px;
  }
  .on,
  .off {
    display: inline-block;

    margin-right: 6px;
  }
  .on {
    background: url("../assets/imgs/xX.png") no-repeat;
    background-size: 100%;
  }
  .off {
    background: url("../assets/imgs/kX.png") no-repeat;
    background-size: 100%;
  }
}
</style>