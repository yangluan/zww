<template>
  <div class="myDoll">
    <div class="a1">
      奖品寄存时间为抓取成功之后的15天，如果15天未申请发货，系统将自动为你兑换为娃娃币。
    </div>
    <div class="list">
      <div class="dateShow"></div>
      <div class="titleText">
        <p>哈哈哈哈哈</p>
        <p>（3个）</p>
      </div>
      <div class="">
        <input type="checkbox" class="inputs">
      </div>
    </div>
    <div class="btns">
      <div class="display">
        <button class="btn1">兑换娃娃币</button>
        <button class="btn2">申请发货</button>
      </div>
    </div>

  </div>
</template>
<script>
  export default {}
</script>

<style lang="scss" scoped="" type="text/css">
  .myDoll{
    padding-top: 2rem;
  }
  .a1{
    margin-top: 1.3rem;
    width: 100%;
    font-size: .5rem;
    color: white;
    height: 1.3rem;
    background-color: transparent;
  }
  .list{
    display: flex;
    justify-content: space-around;
    margin-top: .3rem;
    height: 4rem;
    width: 100%;
    background-color: yellow;
  }
  .list div{
    width: 4rem;
    height:4rem;
    background-color: red;
  }
  .titleText{
    font-size: .7rem;
    text-align: center;
  }
  .inputs{
    border: 1px solid white;
    width: 1rem;
    height:1rem;
    margin-left: 1.5rem;
    margin-top: 1.5rem;
  }
  .btns{
    background-color: transparent;
    position: fixed;
    bottom: 2.2rem;
    width: 100%;
    height: 3rem;
  }
  .display{
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
  }
  .btn1,.btn2{
    border-radius: 25%;
    width: 4rem;
    text-align: center;
    outline: none;
    color: white;
    background-color: #ddd;
  }

</style>
