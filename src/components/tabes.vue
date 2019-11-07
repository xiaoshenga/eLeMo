<template>
  <div class="tab" ref="tab">
    <ul ref="ul">
      <li v-for="(list,i) in tabes" :key="i" @click="count=i">
        <router-link class="item" v-bind:to="{name:list.router,parame:{}}" tag="div">{{list.text}}</router-link>
      </li>
      <div class="border" :style="{left: width * count + 'px',width:width +'px'}" ></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabe",
  props: {
    tabes: {
      type: Array
    }
  },
  data() {
    return {
      count: 0,
      width: 0
    };
  },
  methods: {
    W() {
        this.width =  Math.floor(this.$refs.ul.offsetWidth / 3);
    }
  },
  mounted(){
      this.W()
  }
};
</script>

<style lang="less">
.tab {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #4d555d;
  ul {
    display: flex;
    position: relative;
    li {
      flex: 1;
      text-align: center;
    }
  }
  .router-link-active {
    color: #f01414;
  }
  .border {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 120px;
    background-color: #f01414;
    transition: all .3s linear;
  }
}
</style>