<style scoped>
.video,
.box {
  width: 3840px;
  height: 1070px;
  position: relative;
  overflow: hidden;
}

.explain-b,
.explain-b2 {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  padding-top: 54px;
  padding-bottom: 195px;
  z-index: 4;
  background-size: 100%;
  z-index: 1000;
}

.explain-b2 {
  width: 600px;
}

.ex-title {
  position: absolute;
  top: -44px;
  width: 200px;
  left: 20px;
  font-size: 24px;
  padding: 0px 50px;
  z-index: 20;
  padding-top: 5px;
  color: #0dcca5;
  text-align: center;
  padding: 7px 40px;
  font-weight: bold;
}

.ex-title::before {
  position: absolute;
  content: '';
  height: 50px;
  width: 50px;
  left: 0px;
  top: 0px;
  background: url(../assets/images/title-left.png) no-repeat center center;
  background-size: 50% auto;
}

.ex-title::after {
  position: absolute;
  content: '';
  height: 50px;
  width: 50px;
  right: 0px;
  top: 0px;
  background: url(../assets/images/title-right.png) no-repeat center center;
  background-size: 50% auto;
}

.explain-b:before {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 55px;
  background: #FFF;
  content: '';
  z-index: 2;
  background: url(../assets/images/explain_bg_hd2.png) no-repeat;
  background-size: 100% auto;
}

.explain-b:after {
  position: absolute;
  bottom: 173px;
  left: 0px;
  width: 100%;
  height: 98px;
  background: #FFF;
  content: '';
  z-index: 5;
  background: url(../assets/images/explain_bg_ft2.png) no-repeat;
  background-size: 100% auto;
}

.ex-content {
  background: url(../assets/images/explain_bg2.png) no-repeat;
  background-size: 100% 100%;
  font-size: 24px;
  position: relative;
  font-size: 15px;
  padding: 10px 30px;
  z-index: 3;
}

ul li {
  height: 38 px;
  font-size: 18px;
  text-align: left;
  color: #20aab4
}

.m-v {
  height: 1070px;
  width: 1920px;
}

</style>
<template>
  <div class="video">
    <Row>
      <Col span="12" class="m-v">
      <div class="explain-b">
        <div class="ex-content">
          <div class="ex-title">
            主要干道
          </div>
          <ul>
            <li v-for="items in list">
              {{items.name}}
            </li>
          </ul>
        </div>
      </div>
      <video src="http://libo.toumaps.com/xlgc/video/a.mp4" ontrols="controls" autoplay="autoplay" loop="loop"></video>
      </Col>
      <Col span="12" class="m-v">
      	 <video src="http://libo.toumaps.com/xlgc/video/b.mp4" ontrols="controls" autoplay="autoplay" loop="loop"></video>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'video',
  data() {
    return {
      list: [
        { name: "5嘉金高速 （省道）" },
        { name: "亭卫公里 （区道）" },
        { name: "松卫公路 （省道）" },
        { name: "A6新卫高速 （国道）" },
        { name: "金石公路 （区道））" },
        { name: "金廊公路 （区道）" },
        { name: "亭枫公路 （国道）" },
        { name: "A30、A7亭枫高速公路 （国、省道）" },
        { name: "朱吕公路 （区道）" },
        { name: "漕廊公路 （区道）" },
        { name: "A4莘奉金高速公路 （省道）" },
        { name: "金山大道 （国道）" },
      ],
    }
  },
  mounted() {

  },
  methods: {

  }
}

</script>
