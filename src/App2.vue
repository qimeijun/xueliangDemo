<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {

  }
}

</script>
<style>
body,
html {
  width: 7680px;
  height: 3240px;
}

#app {
  width: 7680px;
  height: 3240px;
  font-family: "微软雅黑", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  background-color: #061d2d;
  /*transform: scale(0.25);*/
}

.header {
  height: 120px;
}

.display,
.display2 {
  position: relative;
}

.display .title,
.display2 .title {
  position: absolute;
  top: 30px;
  left: 30px;
  color: #0dcba7;
  z-index: 10;
  font-size: 24px;
  padding: 0px 40px;
  font-weight: bold;
}

.display .title::before,
.display2 .title::before {
  position: absolute;
  content: '';
  height: 30px;
  width: 30px;
  left: 0px;
  top: 3px;
  background: url(./assets/images/title-left.png) no-repeat center center;
}

.display .title::after,
.display2 .title::after {
  position: absolute;
  content: '';
  height: 30px;
  width: 30px;
  right: 0px;
  top: 3px;
  background: url(./assets/images/title-right.png) no-repeat center center;
}


.charts {
  height: 100%;
  width: 100%;
}

.anchorBL,
.anchorTR {
  z-index: -100;
  transform: translateX(-100000px);
}

html,
body {
  padding: 0px;
  margin: 0px;
  background-color: #061d2d;
}


.table {
  border-top: 1px solid #0b5060;
  border-right: 1px solid #0b5060;
  color: #cecece;
}


.th,
.tb {
  /*border-left: 1px solid 1px;*/
  height: 42px;
}

.th {
  border-bottom: 1px solid #0b5060
}

.th .ivu-col,
.tb .ivu-col {
  border-left: 1px solid #0b5060;
  border-bottom: 1px solid #0b5060;
  padding: 0px 5px;
  line-height: 42px;
  height: 42px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.clearfix::after {
  content: '';
  clear: both;
}

.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

.text-center {
  text-align: center;
}

.ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

*::-webkit-scrollbar-button {
  background-color: rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar-track-piece {}

*::-webkit-scrollbar-thumb {
  background: #d9d9d9;
  border-radius: 10px;
}

*::-webkit-scrollbar-corner {
  background: #82AFFF;
}

*::-webkit-scrollbar-resizer {
  background: #FF0BEE;
}

</style>
<style>
.point-bg {
  padding: 35px;
  position: relative;
  height: 100%;
  color: #fff;
  width: 100%;
  background: url(./assets/images/point-bg.png) no-repeat;
  background-size: 100% 100%;
  pointer-events: none;
}

.point-bg p {
  font-size: 30PX;
}

.point-bg img {
  width: 100%;
  display: block;
  margin: auto;
  padding-bottom: 30px;
}

.point-bg:after {
  content: '';
  position: absolute;
  background: url(./assets/images/p_tow_icon.png) no-repeat;
  background-size: 100% 100%;
  height: 145px;
  width: 75px;
  bottom: -155px;
  left: 45px;
  pointer-events: none;
}

</style>