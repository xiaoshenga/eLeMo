<template>
  <div class="add">
    <span class="iconfont icon-jianshao" @click="jian()"></span>
    <span >{{food.oldPrice? food.oldPrice : 0}}</span>
    <span class="iconfont icon-tianjia" @click="add()"></span>
  </div>
</template>

<script>
export default {
    props:{
        food:{type:Object}
    },
    methods:{
        add(){
            this.food.oldPrice ? this.food.oldPrice++ : this.food.oldPrice=1
        },
        jian(){
            this.food.oldPrice ? this.food.oldPrice-- : this.food.oldPrice
        }
    }
};
</script>

<style lang="less">
.add {
  span {
    line-height: 24px;
    padding: 6px;
    vertical-align: top;
  }
  span:nth-child(1) {
    font-size: 20px;
    vertical-align: top;
  }
  span:nth-child(2) {
    font-size: 12px;
  }
}
</style>