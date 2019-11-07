<template>
  <div class="rating-wrapper" v-if="pinglun">
    <ul>
      <li v-for="(list,i) in pinglun" :key="i">
        <div class="avatar">
          <img :src="list.avatar" width="28" height="28" alt />
        </div>
        <div class="content">
          <h1 class="name">{{list.username}}</h1>
          <div class="start-wrapper">
            <start :score="list.score" :size="10" />
            <div class="time">{{list.deliveryTime}}</div>
          </div>
          <div class="text">{{list.text}}</div>
          <div class="recommend" v-if="list.recommend.length > 0">
            <span class="iconfont icon-zan"></span>
            <span v-for="(text,i) in list.recommend" :key="i" class="item">{{text}}</span>
          </div>
          <div class="timee">{{time(list.rateTime)}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import start from "./start";
import moment from "moment";

export default {
  name: "ratingSelect",
  props: {
    pinglun: { type: Array }
  },
  data() {
    return {};
  },
  methods: {
    time(data) {
      return moment(data).format("YYYY-MM-DD hh:mm");
    }
  },
  components: { start }
};
</script>

<style lang="less" scoped>
.rating-wrapper {
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  padding: 0 18px;

  ul {
    li {
      display: flex;
      padding: 18px 0;

      .content {
        flex: 1;
        position: relative;
      }

      .avatar {
        width: 28px;
        margin-right: 12px;

        img {
          border-radius: 50%;
        }
      }

      .name {
        margin-bottom: 4px;
        line-height: 12px;
        font-size: 10px;
        color: #333;
      }

      .start-wrapper {
        display: flex;

        .start {
          margin: 0 0 6px 0;
        }

        .time {
          font-size: 10px;
          color: #999;
          line-height: 170%;
        }
      }

      .text {
        margin-bottom: 8px;
        line-height: 18px;
        color: #333;
        font-size: 12px;
      }

      .recommend {
        .icon-zan {
          color: #00a0dc;
          margin-right: 4px;
        }

        .item {
          padding: 2px 6px;
          border: 1px solid rgba(7, 17, 27, 0.1);
          border-radius: 1px;
          color: #999;
          background: #fff;
          margin: 0 8px 4px 0;
          font-size: 10px;
        }
      }

      .timee {
        position: absolute;
        top: 0;
        right: 0;
        line-height: 12px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>