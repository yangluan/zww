<template>
  <div id="app">
    <header>
      <div class="imgBox"></div>
      <div class="logBox"></div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="flex">
        <router-link to="/home"><span class="home"></span></router-link>
        <router-link to="/test"><span class="user"></span></router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
  }
  header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.41333rem;
    background-color: deepskyblue; }
  header .imgBox {
    width: 100%;
    height: 100%;
    background-image: url("./components/images/title_bg.png");
    background-size: 100% 3.41333rem; }
  header .logBox {
    z-index: 2;
    margin: -3.41333rem auto;
    width: 4.26667rem;
    height: 2.51733rem;
    background-image: url("./components/images/title_logo.png");
    -webkit-background-size: 4.26667rem 2.51733rem;
    background-size: 4.26667rem 2.51733rem; }

  footer {
    position: fixed;
    bottom: 0rem;
    left: 0;
    width: 100%;
    height: 2.13333rem;
    background-color: white;
    border-top: 1px solid beige;
    text-align: center; }
  footer .flex {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around; }
  footer span {
    display: inline-block;
    width: 0.85333rem;
    height: 0.85333rem;
    margin-top: 0.64rem; }
  footer .home {
    background-image: url("./components/images/ico_home_active.png");
    -webkit-background-size: 0.85333rem; }
  footer .user {
    background-image: url("./components/images/ico_me_active.png");
    -webkit-background-size: 0.85333rem; }
</style>
