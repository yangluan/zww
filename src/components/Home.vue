<template>
  <div id="home">
    <div class="show">
          <div class="swiper-slide" ><img src="./images/banner/timg.jpg" alt="" id="imgfirst"></div>
      <div class="userPalyRoom">
        <div>
          <div></div>
          <!--  v-for="i in data" :key="data.item>  -->
          <p>{{dollName}}</p>
          <p><span><img src="./images/coin.png" alt=""></span><span>  10币/次</span></p>
        </div>
        <div>
          <div></div>
          <p>潘潘达熊猫</p>
          <p><span><img src="./images/coin.png" alt=""></span><span> 10币/次</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default{
    name: 'home',
    data () {
      return {
        dollName: '酷红兔小帅'
      }
    },
    created: function () {
//      this.getData()
      this.datas()
    },
    methods: {
//      getData () {
//        console.log(this.dollName)
//      },
      datas: function () {
        var _self = this.dollName
        var url = 'http://zhuawawa-debug.hljoy.com/api/1.0.3/play/GetRoomList/0/Id/Name/Device/Product/?token=10004:1512099830:0af71dc955a2b146fbd93ab6d84900b1'
        $.get(url, function (data) {
          _self = data.data[0].Product.Name
          console.log(_self)
        })
      }
    }
  }
</script>


<style lang="scss" scoped="" type="text/css">
  .show {
    flex-grow: 1;
    background-color: #AFD3F7;
    padding-top: 3.41333rem;
    padding-bottom: 3.2rem;
    font-size: 20px; }
  #imgfirst{
    width: 100%;
    height:9rem;
  }
  .show .userPalyRoom {
    width: 100%;
    display: flex;
    justify-content: space-between; }
  .show .userPalyRoom div {
    text-align: center;
    font-size: 0.32rem;
    margin: 0.21333rem;
    width: 7.68rem;
    height: 7.68rem; }
  .show .userPalyRoom div span {
    display: inline-block; }
  .show .userPalyRoom div span img {
    width: 0.74667rem;
    height: 0.74667rem; }
  .show .userPalyRoom div div {
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid transparent;
    margin: auto;
    background-image: url("./images/product_frame.png");
    -webkit-background-size: 6.4rem 6.4rem; }

</style>
