<template>
  <div class="comment">
    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">4.2</h1>
            <div class="title">综合评分</div>
            <p class="rank">高于周边商家69.2%</p>
          </div>
          <div class="overview-right">
            <div class="score-wrapper">
              <span class="title">服务态度</span>
              <start :score="4.1" :size="15" />
              <span class="score">4.1</span>
            </div>
            <div class="score-wrapper">
              <span class="title">商品评分</span>
              <start :score="4.3" :size="15" />
              <span class="score">4.3</span>
            </div>
            <div class="time">
              <span class="title">送达时间</span>
              <span class="delivery">38分钟</span>
            </div>
          </div>
        </div>
        <split/>
        <div class="rating-type">
          <span
            v-for="(list,i) in tabes"
            :key="i"
            :class="{block:true, negative:i==2,positive:i!==2,active:index==i && i!=2,negativeActive:index==i && i==2}"
            @click="fn(i)"
          >
            {{list.name}}
            <span>{{lenth(i)}}</span>
          </span>
        </div>
        <ratingSelect :pinglun="pinglun" v-if="index == 0" />
        <ratingSelect :pinglun="manyi" v-if="index == 1"/>
        <ratingSelect :pinglun="bumanyi" v-if="index == 2"/>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import start from "./start";
import ratingSelect from './rating-select'
import split from './split'

import { getRatings } from "../api/index.js";
export default {
  name: "comment",
  data() {
    return {
      tabes: [
        { name: "全部", num: 24 },
        { name: "满意", num: 18 },
        { name: "不满意", num: 6 }
      ],
      index: 0,
      pinglun: [],
      count:0
    };
  },
  methods: {
    fn(i) {
      this.index = i;
    },
    rations() {
      getRatings().then(res => {
        this.pinglun = res;
      });
    },
    lenth(i){
      let num = 0;
      switch(i){
        case 0:
          num = this.pinglun.length;
          break;
        case 1:
          num = this.manyi.length;
          break;
        case 2:
          num = this.bumanyi.length;
      }
      return num

    }
  },
  computed:{
    manyi(){
      return this.pinglun.filter(list=>{
        return list.score > 3
      })
    },
    bumanyi(){
      return this.pinglun.filter(list=>{
        return list.score < 3
      })
    }
  },
  components: { start , ratingSelect,split},
  created() {
    this.rations();
    // console.log(this.lenth(2));
  }
};
</script>

<style lang="less">
.comment {
  position: fixed;
  top: 176px;
  bottom: 0;
  left: 0;
  right: 0;
  .scroll-list-wrap {
    height: 100%;
    .overview {
      display: flex;
      padding: 18px 0px;
      .overview-left {
        padding: 6px 0;
        text-align: center;
        width: 137px;
        border-right: 1px solid #d9dde1;
        .score {
          margin-bottom: 6px;
          line-height: 28px;
          font-size: 24px;
          color: #fc9153;
        }
        .title {
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 12px;
          color: #333;
        }
        .rank {
          line-height: 10px;
          font-size: 10px;
          color: #999;
        }
      }
      .overview-right {
        flex: 1;
        padding: 6px 0 6px 24px;
        .score-wrapper {
          margin-bottom: 8px;
          display: flex;
          .title {
            line-height: 18px;
            font-size: 12px;
            color: #333;
            vertical-align: top;
          }
          .score {
            line-height: 18px;
            font-size: 12px;
            color: #fc9153;
            vertical-align: top;
          }
        }
        .time {
          .title {
            line-height: 18px;
            font-size: 12px;
            color: #333;
          }
          .delivery {
            margin-left: 12px;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }

    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        color: #666;
      }
      .positive {
        background: rgba(0, 160, 220, 0.2);
      }
      .negative {
        background: #ccc;
      }
      .active {
        background: #00a0dc;
        color: #fff;
      }
      .negativeActive {
        background: #666;
        color: #fff;
      }
    }
  }
}
</style>