<template>
  <div class="main">
    <goodss :data="goods" />
    <fter :data="goods"/>
  </div>
</template>

<script>

import fter from "./fter";
import goodss from "./good"

export default {
  name: "commodity",
  props:['goods'],
  data() {
    return {
      fade: {
        fade: true
      }
    };
  },
  components: { fter, goodss }
};
</script>

<style lang="less">
.main {
  position: fixed;
  top: 178px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>