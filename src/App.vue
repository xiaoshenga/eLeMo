<template>
    <div id="app">
        <headd />
        <tabe :tabes="tabes"/>
        <router-view :goods = "goods" />
    </div>
</template>

<script>
import headd from "./components/headerr";
import tabe from "./components/tabes"
import {getGoods} from './api/index.js'

export default {
  name: "App",
  data(){
      return{
          tabes:[
                {text:"商品",router:"commodity"},
                {text:"评论",router:"comment"},
                {text:"商家",router:"business"},
            ],
         goods:[]
      }
  },
  components: { headd,tabe},
  methods:{
      good(){
          getGoods().then(res=>{
              this.goods = res;
          })
      }
  },
  created(){
      this.good()
  }
};
</script>

<style lang="less">
#app{

    .main{
        flex:1;
        display: flex;
        flex-direction: column;
    }
}

</style>
