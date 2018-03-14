<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: "App",
  mounted() {}
};
</script>



<style>
body,
html {
  width: 1920px;
  height: 1080px;
  /*overflow: hidden;*/
}

* {
  /*font-weight: 300;*/
}

#app {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  font-family: "微软雅黑", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #061d2d;
  /*transform: scale(0.34);*/
}

.header {
  margin-top: 10px;
  height: 30px;
}

.display,
.display2 {
  position: relative;
}

.display .title,
.display2 .title {
  position: absolute;
  top: 5px;
  left: 5px;
  color: #0dcba7;
  z-index: 10;
  font-size: 13px;
  padding: 0px 27px;
  font-weight: bold;
}

.display .title::before,
.display2 .title::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 15px;
  left: 10px;
  top: 1px;
  background: url(./assets/images/title-left.png) no-repeat center center;
  background-size: 15px 12px;
}

.display .title::after,
.display2 .title::after {
  position: absolute;
  content: "";
  height: 20px;
  width: 15px;
  right: 10px;
  top: 1px;
  background: url(./assets/images/title-right.png) no-repeat center center;
  background-size: 15px 12px;
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
  /*  height: 25px;*/
}

.th {
  border-bottom: 1px solid #0b5060;
}

.th .ivu-col,
.tb .ivu-col {
  border-left: 1px solid #0b5060;
  border-bottom: 1px solid #0b5060;
  padding: 0px 5px;
  line-height: 27px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.clearfix::after {
  content: "";
  clear: both;
  display: block;
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

*::-webkit-scrollbar-track-piece {
}

*::-webkit-scrollbar-thumb {
  background: #d9d9d9;
  border-radius: 10px;
}

*::-webkit-scrollbar-corner {
  background: #82afff;
}

*::-webkit-scrollbar-resizer {
  background: #ff0bee;
}
</style>
<style lang="less">
.infoBox > img {
  display: none;
}

.point-bg,
.kent-bg {
  padding: 15px;
  position: relative;
  height: 100%;
  color: #fff;
  width: 100%;

  background-size: 100% 100%;
  p {
    font-size: 14px;
  }

  & > img {
    width: 100%;
    display: block;
    margin: auto;
    margin-bottom: 15px;
  }
}

.point-bg {
  background: url(./assets/images/point-bg.png) no-repeat;
  background-size: 100% 100%;
  &:after {
    content: "";
    position: absolute;
    background: url(./assets/images/p_tow_icon.png) no-repeat;
    background-size: 100% 100%;
    height: 95px;
    width: 42px;
    bottom: -93px;
    left: 11px;
    pointer-events: none;
  }
}

.kent-bg {
  padding: 25px;
  padding-top: 40px;
  background: url(./assets/images/kent-bg.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  cursor: default;
  &.factory::after {
    background: url(./assets/images/factory-act.png);
  }
  &.school::after {
    background: url(./assets/images/school-act.png);
  }
  &.hospital::after {
    background: url(./assets/images/hospital-act.png);
  }
  &.gas-station::after {
    background: url(./assets/images/gas-station-act.png);
  }
  .title {
    width: 150px;
    text-align: center;
    padding: 0px 30px;
    height: 20px;
    position: absolute;
    top: 13px;
    left: 10px;
    color: #0dcba7;
  }
  .title::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 15px;
    left: 10px;
    top: 0px;
    background: url(./assets/images/title-left.png) no-repeat center center;
    // background-size: 15px 12px;
    background-size: 100% 100%;
  }

  .title::after {
    position: absolute;
    content: "";
    height: 20px;
    width: 15px;
    right: 10px;
    top: 0px;
    background: url(./assets/images/title-right.png) no-repeat center center;
    background-size: 100% 100%;
  }

  &.school::after,
  &.hospital::after,
  &.gas-station::after,
  &.factory::after,
  &:after {
    content: "";
    position: absolute;
    background-size: 100% 100%;
    height: 95px;
    width: 42px;
    bottom: -93px;
    left: 41%;
    pointer-events: none;
  }
  & > img {
    margin-left: -3px;
    border: 1px solid #0dcba7;
  }
  .license {
    width: 30px;
    vertical-align: middle;
  }
}

.wifi-bg {
  position: relative;
  background: url(./assets/images/point-bg.png) no-repeat;
  background-size: 100% 100%;
  height: 320px;
  left: 105px;
  &:after {
    content: "";
    position: absolute;
    background: url(./assets/images/p_tow_icon.png) no-repeat;
    background-size: 100% 100%;
    height: 95px;
    width: 42px;
    bottom: -93px;
    pointer-events: none;
  }
  .title {
    width: 160px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    padding: 0px 30px;
    height: 20px;
    position: absolute;
    top: 5px;
    left: 0px;
    color: #0dcba7;
  }
  .title::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 10px;
    top: 0px;
    background: url(./assets/images/title-left.png) no-repeat center center;
    background-size: 15px 12px;
  }

  .title::after {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    right: 10px;
    top: 0px;
    background: url(./assets/images/title-right.png) no-repeat center center;
  }
  .wifi-radio {
    position: absolute;
    right: 15px;
    top: 7px;
    width: 50px;
    height: 20px;
    background-color: #01bbba;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  a {
    display: inline-block;
    cursor: pointer;
  }
  .wifi-radio::after {
    content: "";
    position: absolute;
    left: 10px;
    top: 2px;
    height: 15px;
    width: 30px;
    background: url(./assets/images/wifi_voice.png) no-repeat center center;
    background-size: 100% 100%;
  }
  & > img {
    margin: 35px 0 0 15px;
    border: 1px solid #0dcba7;
    width: 220px;
  }
  .wifi-n-s {
    margin: 10px auto;
  }
  .wifi-number {
    height: 30px;
    width: 220px;
    margin: 5px auto;
    text-align: left;
    color: #fbfbfb;
    .wifi-n-t {
      float: left;
      width: 150px;
      padding-left: 10px;
      font-size: 14px;
      background-color: #0a3546;
      border-left: 1px solid #459ba8;
      .wifi-n-p {
        position: relative;
        display: inline-block;
        height: 10px;
        width: 70px;
        margin-left: 5px;
        background-color: #094d5a;
        -moz-border-radius: 10px;
        border-radius: 10px;
        span {
          position: absolute;
          display: inline-block;
          height: 10px;
          width: 50%;
          background-color: #1fa9b3;
          -moz-border-radius: 10px;
          border-radius: 10px;
        }
      }
    }
    .wifi-n-t-s {
      display: inline-block;
      margin: -5px 0 0 10px;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
