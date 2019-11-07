<template>
  <div class="footer">
    <div class="tabar">
      <div class="logoBox">
        <div :class="{logo:true,active:zonghe>0}">
          <span class="iconfont icon-weibiaoti--" ></span>
        </div>
      </div>
      <div class="money" :style="{color:zonghe>0? '#fff':''}">
        <span>￥</span>
        <span>{{zonghe}}</span>
      </div>
      <div class="desc">另需配送费4￥</div>
      <div class="content-right" 
        :style="{background:isActive?'#00b43c':'#333',color:isActive?'#fff':''}"
        @click="jiesuan"
        >
          {{cha()}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
	name:"footerr",
	props:{
		data:{
			type:Array
		}
	},
	data(){
		return{
			isActive:false
		}
	},
	computed:{
		zonghe(){
			let num = 0;
			this.data.forEach(list=>{
				list.foods.forEach((item)=>{
					if(item.oldPrice){
						num += item.oldPrice * item.price
					}
				})
			})
			return num
		}
	},
	methods:{
		cha(){
			let num = 20 - this.zonghe;
			let str = '';
			if(num > 0){
				this.isActive = false;
				str = `还差${num}￥起送`
			}else{
				this.isActive = true;
				str = '去结算'
			}
			return str
    },
    jiesuan(){
      if(this.isActive){
        alert('付款成功');
      }
    }
	}
};
</script>

<style lang="less">
.footer {
  height: 48px;
  .tabar {
    z-index: 999;
    height: 48px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #07111b;
    color: #999;
    display: flex;
    align-items: center;
    .logoBox {
      width: 44px;
      height: 44px;
      margin: 0 12px;
      padding-right: 6px;
    }
    .logo {
      position: absolute;
      top: -10px;
      width: 44px;
      height: 44px;
      line-height: 44px;
      font-size: 24px;
      border: 5px solid #07111b;
      background: #333;
      border-radius: 50%;
      text-align: center;
      .icon-weibiaoti-- {
        font-size: 24px;
			}

		}
		.active{
			background:#00a0dc;
			color:#fff
		}
    .money {
      height: 24px;
      line-height: 24px;
      padding-right: 12px;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      span {
        font-weight: 700;
			}
    }
    .desc {
      font-size: 10px;
      line-height: 24px;
      padding-left: 12px;
    }
    .content-right {
      font-size: 12px;
      font-weight: 700;
      height: 48px;
      line-height: 48px;
      width: 105px;
      position: absolute;
      right: 0;
      top: 0;
      text-align: center;
      background: #333;
    }
  }
}
</style>