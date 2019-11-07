<template>
  <div class="headerr">
    <div class="coment-wrapper">
      <div class="imgBox">
        <img src="../assets/imgs/商家.jpg" width="64" height="64" alt class="img" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <p class="description">蜂鸟专送/38分钟送达</p>
        <div class="support">
          <span class="decrease"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="supprot-count">
        <span class="count" @click="falg = !falg">5个 ></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="falg = !falg">
      <span class="bulletin-title"></span>
      <span
        class="bulletin-text"
      >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <span class="right">></span>
    </div>
    <div class="background">
      <img src="../assets/imgs/商家.jpg" alt width="100%" height="100%" />
    </div>
    <transition>
      <div class="detail" v-show="falg">
        <div class="detail-main">
          <h1 class="title">粥品香坊（回龙观）</h1>
          <div class="start">
            <span class="on"></span>
            <span class="on"></span>
            <span class="on"></span>
            <span class="on"></span>
            <span class="off"></span>
          </div>
          <div class="titleBox">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <div class="supprots">
            <ul>
              <li>
                <span class="decrease"></span>
                <span class="text">在线支付满28减5</span>
              </li>
              <li>
                <span class="decrease"></span>
                <span class="text">VC无限橙果汁全场8折</span>
              </li>
              <li>
                <span class="decrease"></span>
                <span class="text">单人精彩套餐</span>
              </li>
              <li>
                <span class="decrease"></span>
                <span class="text">该商家支持发票,请下单写好发票抬头</span>
              </li>
              <li>
                <span class="decrease"></span>
                <span class="text">已加入“外卖保”计划,食品安全保障</span>
              </li>
            </ul>
          </div>
          <div class="titleBox">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p
              class="content"
            >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
          </div>
        </div>
        <div class="btn">
          <span class="iconfont icon-shanchu_" @click="falg = !falg"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "heade",
  data() {
    return {
      falg: false
    };
  }
};
</script>

<style lang="less">
.headerr {
  position: relative;
  overflow: hidden;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
  .coment-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    display: flex;
    .imgBox {
      .img {
        display: inline-block;
      }
    }
    .content {
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          display: inline-block;
          width: 30px;
          height: 18px;
          background: url("../assets/imgs/pPai.png");
          background-size: 100% 100%;
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
          vertical-align: top;
          display: inline-block;
        }
      }
      .description {
        font-size: 12px;
        line-height: 12px;
      }
      .support {
        display: flex;
        margin-top: 10px;
        .decrease {
          display: block;
          width: 12px;
          height: 12px;
          background: url("../assets/imgs/mJian.png");
          background-size: 100%;
          margin-right: 4px;
        }
        .text {
          display: block;
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
    .supprot-count {
      position: absolute;
      right: 14px;
      bottom: 24px;
      height: 24px;
      line-height: 24px;
      padding: 0 8px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);
      .count {
        font-size: 10px;
      }
    }
  }
  .bulletin-wrapper {
    padding: 0 22px 0 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 28px;
    line-height: 28px;
    white-space: nowrap;
    position: relative;
    background: rgba(7, 17, 27, 0.2);
    .bulletin-title {
      display: inline-block;
      background: url("../assets/imgs/gGao.png") no-repeat;
      background-size: 22px 12px;
      width: 22px;
      height: 12px;
    }
    .bulletin-text {
      margin: 0 4px;
      font-size: 10px;
      vertical-align: top;
    }
    .right {
      position: absolute;
      right: 10px;
      bottom: 0;
      font-size: 10px;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    -webkit-filter: blur(10px);
    filter: blur(10px);
  }
  .detail {
    z-index: 99999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7, 17, 27, 0.8);
    transition: all 0.5 linera;

    .detail-main {
      margin: 64px 0;
      padding-bottom: 64px;
      .title {
        text-align: center;
        font-weight: 700;
      }
      .start {
        margin-top: 18px;
        padding: 2px 0;
        display: flex;
        justify-content: center;
        span {
          display: block;
          width: 20px;
          height: 20px;
          margin-right: 22px;
          background: url("../assets/imgs/xX.png") no-repeat;
          background-size: 100%;
        }
        .off {
          background: url("../assets/imgs/kX.png");
          background-size: 100%;
        }
      }
      .titleBox {
        display: flex;
        width: 80vw;
        margin: 28px auto 24px auto;
        align-items: center;
        .text {
          font-weight: 700;
          font-size: 14px;
          padding: 0 12px;
        }
        .line {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          flex: 1;
        }
      }
      .supprots {
        width: 80vw;
        margin: 0 auto;
        font-size: 12px;
        ul {
          li {
            padding: 0 12px;
            margin-bottom: 12px;
            .decrease {
              width: 16px;
              height: 16px;
              display: inline-block;
              background: url("../assets/imgs/mJian.png") no-repeat;
              background-size: 100%;
              margin-right: 6px;
              vertical-align: top;
            }
            .text {
              display: inline-block;
              vertical-align: top;
            }
          }
          li .decrease:nth-child(2) {
            background: url("../assets/imgs/zKuo.png") no-repeat;
          }
        }
      }
      .bulletin {
        width: 80vw;
        margin: 0 auto;
        .content {
          padding: 0 12px;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
    .btn {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      span {
        font-size: 32px;
      }
    }
  }
  .isActive {
    display: none;
    opacity: 0;
  }
}
</style>