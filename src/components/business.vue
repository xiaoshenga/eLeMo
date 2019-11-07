<template>
  <div class="business">
    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll">
        <div class="overview">
          <h1 class="title">{{business.name}}</h1>
          <div class="des border-bottom-1px">
            <start :size="15" :score="business.score" />
            <span class="text">({{business.ratingCount}})</span>
            <span class="text">月售{{business.sellCount}}单</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2>起送价</h2>
              <div>
                <span>20</span>元
              </div>
            </li>
            <li class="block">
              <h2>商家配送</h2>
              <div>
                <span>4</span>元
              </div>
            </li>
            <li class="block">
              <h2>平均配送时间</h2>
              <div>
                <span>38</span>分钟
              </div>
            </li>
          </ul>
        </div>
        <split />
        <div class="bulletin">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper border-bottom-1px">
            <p class="content">{{business.bulletin}}</p>
          </div>
          <ul class="supports">
            <li
              class="support-item border-bottom-1px"
              v-for="(list,i) in business.supports"
              :key="i"
            >
              <span class="bg"></span>
              <span class="text">{{list.description}}</span>
            </li>
          </ul>
        </div>
        <split />
        <div class="pics">
          <h1 class="title">商家实景</h1>
          <cube-scroll ref="scroll" direction="horizontal" class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
              <li v-for="(list,i) in business.pics" :key="i" class="list-item">
                <img :src="list" alt width="120" height="90" />
              </li>
            </ul>
          </cube-scroll>
        </div>
        <split/>
        <div class="info">
          <h1 class="title border-bottom-1px">商家实体</h1>
          <ul>
            <li v-for="(list,i) in business.infos" :key="i" class="info-item border-bottom-1px">{{list}}</li>
          </ul>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/index";
import split from "./split";

import start from "./start";
export default {
  name: "business",
  data() {
    return {
      business: {}
    };
  },
  methods: {
    busines() {
      getSeller().then(res => {
        this.business = res;
      });
    }
  },
  components: { start, split },
  created() {
    this.busines();
  }
};
</script>

<style lang="less">
.business {
  position: fixed;
  top: 167px;
  bottom: 0;
  left: 0;
  right: 0;
  .scroll-list-wrap {
    height: 100%;
  }
  .overview {
    margin: 18px;
    position: relative;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      font-size: 14px;
      color: #333;
    }
    .des {
      display: flex;
      padding-bottom: 18px;
      .start {
        margin: 0;
      }
      .text {
        margin-right: 12px;
        line-height: 18px;
        font-size: 10px;
        color: #666;
      }
    }
    .remark {
      display: flex;
      padding-top: 18px;
    }
    .block {
      flex: 1;
      text-align: center;
      border-right: 1px solid #d9dde1;
      h2 {
        margin-bottom: 4px;
        line-height: 10px;
        font-size: 10px;
        color: #999;
      }
      div {
        line-height: 24px;
        font-size: 10px;
        color: #333;
        span {
          font-size: 24px;
        }
      }
    }
    .block:last-child {
      border: none;
    }
  }
  .bulletin {
    padding: 18px 18px 0 18px;
    white-space: normal;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: #333;
      font-size: 14px;
    }
    .content-wrapper {
      padding: 0 12px 16px 12px;
      .content {
        line-height: 24px;
        font-size: 12px;
        color: #f01414;
      }
    }
    .supports {
      color: red;
      .support-item {
        padding: 16px 12px;
        display: flex;
        align-items: center;
        .text {
          line-height: 16px;
          font-size: 12px;
          color: #333;
        }
        .bg {
          width: 16px;
          height: 16px;
          display: inline-block;
          background: url(../assets/imgs/zKuo.png) no-repeat;
          background-size: 100%;
          margin-right: 4px;
        }
      }
    }
  }
  .pics {
    padding: 18px;
    .title {
      margin-bottom: 12px;
      line-height: 14px;
      color: #333;
      font-size: 14px;
    }
    .cube-scroll-content {
      display: inline-block;
    }
    .list-wrapper {
      white-space: nowrap;
    }
    .list-item {
      display: inline-block;
      margin-right: 6px;
    }
  }
  .info {
    padding: 18px 18px 0 18px;
    color: #333;
    .title {
      padding-bottom: 12px;
      line-height: 14px;
      font-size: 14px;
    }
    .info-item {
      padding: 16px 12px;
      line-height: 16px;
      font-size: 12px;
    }
  }
}
</style>