<template>
  <div id="Test">
    <router-view></router-view>
    <div class="listShow">
      <ul>
        <router-link to="myDoll"><li>我的娃娃 <span></span></li></router-link>
        <router-link to="grabRecord"><li>抓取记录 <span></span></li></router-link>
        <router-link to="myDoll"><li>我的订单 <span></span></li></router-link>
          <router-link to="myDoll"><li>收货地址 <span></span></li></router-link>
      </ul>
      <ul class="secondUl">
        <li>音乐 <div class="switch">
          <input id="myInput" type="checkbox" value="0" name="myinput"/>
        </div></li>
        <li>音效 <div class="switch">
          <input id="myInput" type="checkbox" value="0" name="myinput"/>
        </div></li>
      </ul>
      <ul class="secondUl">
        <li @click="tanceng()">客服</li>
      </ul>
      <ul class="outlog">
          <li style="color: red;text-align: center" @click="out()">退出登录</li>
      </ul>
    </div>

    <!--  退出登录弹层     -->
    <div class="outTc" id="outTc">
      <div class="titlePic"><span class="spanClose" @click="outShow()"></span></div>
      <div class="centerH1">真的要退出登录吗?</div>
      <div class="btnTwo"><img src="./images/btn_cancel.png" alt="" @click="outShow()">
        <img src="./images/btn_ok.png" alt=""></div>
    </div>


    <!--   客服弹层 -->
    <div class="tanCeng">
      <div class="head"><span id="clos" @click='hide()'>X</span></div>
      <div class="log">
        <div class="logoPic"></div>
        快来天天乐抓娃娃
      </div>
      <span class="qunSize">QQ群号：683602805</span>
      <div class="rwm"></div>
      <span class="qunSize">或扫码加入</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Test',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      tanceng: function () {
        var tanceng = document.getElementsByClassName('tanCeng')[0]
        tanceng.style.display = 'block'
        console.log('事件触发')
      },
      hide: function () {
        var tanceng = document.getElementsByClassName('tanCeng')[0]
        tanceng.style.display = 'none'
      },
      out: function () {
        var outTc = document.getElementById('outTc')
        outTc.style.display = 'block'
      },
      outShow: function () {
        var outTc = document.getElementById('outTc')
        outTc.style.display = 'none'
      }
    }
  }
</script>
<style type="text/css" scoped="" lang="scss">
  ul{
    padding: 0;
    margin: 0;
  }
  #Test{
    flex-grow: 1;
    /*margin-left: -1rem;*/
    padding-top: 3.51333rem;
    padding-bottom: 3.2rem;
    font-size: 20px;
    width: 100%;
  }
  .listShow{
    width: 100%;
    /*height: 30rem;*/
    /*background-color: red;*/
  }
  .listShow ul li{
    list-style: none;
    background-color: #1d74ff;
    width: 16rem;
    height: 2rem;
    line-height: 2rem;
    font-size: .6rem;
    color: white;
    position: relative;
    border-bottom: 1px solid deepskyblue;
  }
  a{
    text-decoration: none;
  }
  .listShow ul li span{
    display: inline-block;
    position: absolute;
    width: 0.64rem;
    height: 1.06667rem;
    background-image: url("./images/more.png");
    line-height: 1.06667rem;
    right: 0.42667rem;
    top: .5rem;
    -webkit-background-size: 0.64rem 1.06667rem;
  }
  .secondUl{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .switch {
    margin-top: .5rem;
    display: inline-block;
    position: relative;
    float: right;
    margin-right: 1.06667rem;
    font-size: 12px;
    width: 0.85333rem;
    height: 0.32rem;
    line-height: 13px; }
  .switch input {
    width: 0.85333rem;
    height: 13px;
    position: absolute;
    z-index: 2;
    border: 0;
    background: 0 0;
    -webkit-appearance: none;
    outline: 0; }
  .switch input:before {
    content: '';
    width: 1.06667rem;
    height: 12px;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    border-radius: 20px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: top;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    -webkit-transition: border .4s, background-color .4s;
    transition: border 1s, background-color 1s;
    -webkit-background-clip: content-box;
    background-clip: content-box; }
  .switch input:after {
    content: '';
    width: 10px;
    height: 11px;
    position: absolute;
    top: 1px;
    left: 0;
    border-radius: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    -webkit-transition: left .2s;
    transition: left .2s; }
  .switch input:checked:before {
    border-color: green;
    -webkit-box-shadow: green 0 0 0 16px inset;
    box-shadow: green 0 0 0 16px inset;
    background-color: green;
    transition: background-color .4s;
    -webkit-transition: background-color .4s; }
  .switch input:checked:after {
    left: 11px; }

  /* 弹出层 */
  .tanCeng {
    display: none;
    text-align: center;
    z-index: 3;
    left: 1.70667rem;
    top: 2.13333rem;
    width: 12.8rem;
    height: 19.2rem;
    background-color: white;
    position: absolute; }
  .tanCeng .head {
    width: 12.8rem;
    height: 1.92rem;
    opacity: 1}
  .tanCeng .head span {
    display: inline-block;
    width: 1.06667rem;
    height: 1.06667rem;
    border-radius: 50%;
    background-color: red;
    color: whitesmoke;
    font-size: 0.64rem;
    text-align: center;
    line-height: 1.06667rem;
    float: right; }
  .tanCeng .log {
    width: 10.66667rem;
    height: 7.46667rem;
    border: 1px solid transparent;
    margin-left: 1.06667rem;
    text-align: center;
    border-bottom: 1px solid deepskyblue;
    font-size: 0.32rem; }
  .tanCeng .log .logoPic {
    width: 6.4rem;
    height: 4.26667rem;
    border: 1px solid transparent;
    margin-left: 2.13333rem;
    margin-top: 1.06667rem;
    background-image: url("./images/service_logo.png");
    -webkit-background-size: 6.4rem 4.48rem;
    padding-bottom: 0.42667rem; }
  .tanCeng .rwm {
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid transparent;
    margin-left: 3.2rem;
    background-image: url("./images/qq_group.jpg");
    -webkit-background-size: 6.4rem 6.4rem; }
  .tanCeng .qunSize {
    font-size: 0.21333rem; }
  /*  退出登录弹出层 */
  .outTc{
    width: 13rem;
    height: 10rem;
    background-color: white;
    position: absolute;
    top: 6rem;
    left: 1.2rem;
    z-index: 5;
    display: none;
  }
  .titlePic{
    width: 100%;
    height: 2rem;
    background-image: url('./images/title_bg.png');
    -webkit-background-size:100% 2rem;
  }
  .spanClose{
    width: 1.5rem;
    height: 1.5rem;
    background-color: green;
    display: inline-block;
    border-radius: 50%;
    float: right;
    background-image: url(./images/btn_close.png);
    -webkit-background-size:100% 100%;
  }
  .centerH1{
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
  .btnTwo{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 3rem;
    background-color: white;
  }
  .btnTwo img{
    width: 3rem;
    height: 2rem;
    margin-top: .5rem;
  }
</style>
