<template>
  <div class="commodity">
    <div class="scroll-list-wrap content-left">
      <cube-scroll ref="scroll">
        <div class="content">
          <div
            v-for="(list,i) in data"
            :key="i"
            :class="{text:true,active:count==i}"
            @click="count=i; scrollTo(i,list.foods.length)"
          >
            <div>
              <span :class="{tei:i==1,zhe:i==2}"></span>
              <span class="wenzi">{{list.name}}</span>
              <div class="num" v-if="he(list)">
                <span>{{he(list)}}</span>
              </div>
            </div>
          </div>
        </div>
      </cube-scroll>
    </div>
    <div class="scroll-list-wrap content-right">
      <cube-scroll ref="scroll">
        <div class="foodBox">
          <div class="food-item" v-for="(list,i) in data" :key="i">
            <div class="food-title">{{list.name}}</div>
            <ul>
              <li v-for="(item,ii) in list.foods" :key="ii" class="food">
                <div class="foodImg">
                  <img :src="item.icon" alt width="57" height="57" />
                </div>
                <div class="name">
                  <h1>{{item.name}}</h1>
                  <p class="jiesao">{{item.description}}</p>
                  <div class="extra">
                    <span>月售{{item.sellCount}}￥</span>
                    <span>好评{{item.rating}}%</span>
                  </div>
                  <div class="foodMoney">
                    <div class="money">￥{{item.price}}</div>
                        <cartControl :food="item" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </cube-scroll>
    </div>
    <shiwu />
  </div>
</template>

<script>
import shiwu from "./shiwu"
import cartControl from './cart-control'
export default {
  props:{
    data:{
      type:Array,
      default:()=>([])
    }
  },
  data() {
    return {
      count: 0,
      obj: { a: 1 }
    };
  },
  methods: {
    scrollTo(num) {
    //   console.log(this.num(num));
      this.$refs.scroll.scrollTo(0, this.num(num), 500, "ease");
    },
    num(index) {
      let num = 0;
      this.data.forEach((list, i) => {
        let he = 0;
        if (i < index) {
          he = list.foods.length * 95.67 + 26;
        }
        num += he;
      });
      return -num;
    },
    he(item){
        let num = 0;
        item.foods.forEach((list)=>{
            if(list.oldPrice){
                num += list.oldPrice;
            }
        })
        return num
    }
  },
  computed: {},
  components: { shiwu ,cartControl},

};
</script>

<style lang="less">
.commodity {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 48px;
  display: flex;
  .scroll-list-wrap {
    height: 100%;
  }
  .content-left {
    width: 80px;
    .content {
      .text {
        padding: 0 10px;
        width: 60px;
        height: 56px;
        background: #f3f5f7;
        font-size: 12px;
        line-height: 14px;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .wenzi {
          text-align: center;
        }
        .tei {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          background: url("../assets/imgs/tSe.png") no-repeat;
          background-size: 100%;
        }
        .zhe {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: url("../assets/imgs/zKuo.png") no-repeat;
          background-size: 100%;
        }
        .num {
          position: absolute;
          top: 10px;
          right: 8px;
          span {
            display: inline-block;
            height: 16px;
            color: #fff;
            padding: 0 5px;
            line-height: 16px;
            border-radius: 16px;
            background: linear-gradient(to right, #fc9153, #f01414);
          }
        }
      }
      .active {
        background: #fff;
      }
    }
  }
  .content-right {
    height: 100%;
    flex: 1;

    .foodBox {
      .food-title {
        height: 26px;
        font-size: 12px;
        color: #333;
        background: #f3f5f7;
        border-left: 2px solid #ccc;
        line-height: 26px;
        padding-left: 10px;
      }
      ul {
        li {
          margin: 18px;
          padding-bottom: 18px;
          display: flex;

          .foodImg {
            margin-right: 10px;
          }
          .name {
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: #333;
            flex: 1;
            .jiesao {
              font-size: 10px;
              line-height: 12px;
              margin: 8px 0;
              color: #999;
            }
            .extra {
              span {
                line-height: 10px;
                color: #999;
                margin-right: 10px;
                font-size: 10px;
              }
            }
            .foodMoney {
              display: flex;
              justify-content: space-between;
              .money {
                margin-right: 8px;
                font-size: 14px;
                color: #f01414;
                line-height: 24px;
              }
 
            }
          }
        }
      }
    }
  }
}
</style>