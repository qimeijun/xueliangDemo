<style scoped>
.mainMap,
.box {
  width: 3840px;
  height: 2160px;
  position: relative;
  overflow: hidden;
}

.header {
  width: 3840px;
  height: 522px;
  background: url(../assets/images/mainHead.png) no-repeat center center;
  background-size: auto 100%;
  position: relative;
  z-index: 3;
}

.box {
  position: absolute;
  top: 450px;
  left: 0px;
  width: 100%;
  height: 1710px;
  overflow: hidden;
}

.ry-mg {
  background: url(../assets/images/ry_mg.png) no-repeat;
  background-size: auto 100%;
}

.ry-mg:hover,
.ry-mg_act {
  background: url(../assets/images/ry_mg_act.png) no-repeat;
  background-size: auto 100%;
}

.s_c {
  background: url(../assets/images/s_c.png) no-repeat;
  background-size: auto 100%;
  transition: all 0.3s;
}

.s_c:hover,
.s_c_act {
  background: url(../assets/images/s_c_act.png) no-repeat;
  background-size: auto 100%;
}

.case_mg {
  background: url(../assets/images/case_mg.png) no-repeat;
  background-size: auto 100%;
}

.case_mg:hover,
.case_mg_act {
  background: url(../assets/images/case_mg_act.png) no-repeat;
  background-size: auto 100%;
}

.lj_wf {
  background: url(../assets/images/lj_wf.png) no-repeat;
  background-size: auto 100%;
}

.lj_wf:hover,
.lj_wf_act {
  background: url(../assets/images/lj_wf_act.png) no-repeat;
  background-size: auto 100%;
}

.key_enterp {
  background: url(../assets/images/key_enterp.png) no-repeat;
  background-size: auto 100%;
}

.key_enterp:hover,
.key_enterp_act {
  background: url(../assets/images/key_enterp_act.png) no-repeat;
  background-size: auto 100%;
}

.r_pt {
  background: url(../assets/images/r_pt.png) no-repeat;
  background-size: auto 100%;
}

.r_pt:hover,
.r_pt_act {
  background: url(../assets/images/r_pt_act.png) no-repeat;
  background-size: auto 100%;
}

.max_video {
  background: url(../assets/images/max_video.png) no-repeat;
  background-size: auto 100%;
}

.max_video:hover,
.max_video_act {
  background: url(../assets/images/max_video_act.png) no-repeat;
  background-size: auto 100%;
}

.map-mask {
  top: 450px;
  height: 2160px;
  background: url("../assets/images/mapMask2.png");
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  z-index: 99;
  pointer-events: none;
}

.explain-b,
.explain-b2 {
  position: fixed;
  left: 100px;
  width: 700px;
  padding-top: 95px;
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
  top: -60px;
  width: 360px;
  left: 35px;
  font-size: 36px;
  padding: 0px 70px;
  z-index: 20;
  padding-top: 5px;
  color: #0dcca5;
  text-align: center;
  padding: 0px 40px;
  font-weight: bold;
}

.ex-title::before {
  position: absolute;
  content: "";
  height: 50px;
  width: 50px;
  left: 15px;
  top: 0px;
  background: url(../assets/images/title-left.png) no-repeat center center;
  background-size: 65% auto;
}

.ex-title::after {
  position: absolute;
  content: "";
  height: 50px;
  width: 50px;
  right: 15px;
  top: 0px;
  background: url(../assets/images/title-right.png) no-repeat center center;
  background-size: 65% auto;
}

.explain-b:before {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  background: #fff;
  content: "";
  z-index: 2;
  background: url(../assets/images/explain_bg_hd2.png) no-repeat;
  background-size: 100% auto;
}

.explain-b:after {
  position: absolute;
  bottom: 130px;
  left: 0px;
  width: 100%;
  height: 195px;
  background: #fff;
  content: "";
  z-index: 5;
  background: url(../assets/images/explain_bg_ft2.png) no-repeat;
  background-size: 100% auto;
}

.ex-content {
  background: url(../assets/images/explain_bg2.png) no-repeat;
  background-size: 100% auto;
  font-size: 24px;
  position: relative;
  font-size: 30px;
  padding: 10px 30px;
  z-index: 3;
}

.m-too {
  height: 150px;
  width: 100%;
  position: fixed;
  bottom: 30px;
  cursor: pointer;
  z-index: 1000;
}

.m-too .btn {
  height: 100px;
  width: 350px;
  display: inline-block;
  margin: 0px 85px;
  transition: all 0.3s;
}

ul li {
  height: 76px;
  font-size: 34px;
}
</style>
<style>
.point-bg {
  padding: 35px;
  position: relative;
  height: 100%;
  color: #fff;
  width: 100%;
  background: url(../assets/images/point-bg.png) no-repeat;
  background-size: 100% 100%;
  pointer-events: none;
}

.point-bg p {
  font-size: 30px;
}

.point-bg img {
  width: 100%;
  display: block;
  margin: auto;
  padding-bottom: 30px;
}

.point-bg:after {
  content: "";
  position: absolute;
  background: url(../assets/images/p_tow_icon.png) no-repeat;
  background-size: 100% 100%;
  height: 145px;
  width: 75px;
  bottom: -155px;
  left: 45px;
  pointer-events: none;
}
</style>
<template>
  <div class="mainMap" style="background:#000">
    <div class="header"></div>
    <Row>
      <div class="explain-b">
        <div class="ex-content">
          <div class="ex-title">
            护路巡逻区域
          </div>
          <ul>
            <li v-for="items in list">
              <Col span="16"> {{items.name}}</Col>
              <Col span="8">
              <span v-if="items.state">正常</span>
              <span v-else style="color:#bf4a4a">未巡逻</span>
              </Col>
            </li>
          </ul>
        </div>
      </div>
    </Row>
    <div class="box" id="mainMap">
    </div>
    <div class="map-mask"></div>
    <div class="m-too clearfix">
      <div class="btn" v-for="(itme,i) in ['ry-mg','s_c','case_mg','lj_wf','key_enterp','r_pt','max_video']" :class="[itme,(indexMenu==i?(itme+'_act'):'')]" @click="clickBtn(i)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "keyEnterprises",
  data() {
    return {
      indexMenu: 5,
      list: [
        { name: "金山卫镇段面", state: 1 },
        { name: "山阳镇段面", state: 1 },
        { name: "叶榭站段面", state: 1 },
        { name: "顾家滨桥段面", state: 0 },
        { name: "联建村段面", state: 0 },
        { name: "玉兰新村段面", state: 0 },
        { name: "德胜村段面", state: 0 },
        { name: "高桥村段面", state: 0 },
        { name: "下横径桥段面", state: 0 },
        { name: "蒋庄村段面", state: 0 }
      ],
      points: [
        [121.332778, 30.750986],
        [121.301157, 30.760359],
        [121.362673, 30.758497],
        [121.279023, 30.728762],
        [121.314165, 30.727024],
        [121.379489, 30.74031],
        [121.246971, 30.714233]
      ]
    };
  },
  mounted() {
    this.initMap();
    setInterval(e => {
      window.location.reload();
    }, 1000 * 60);
  },
  methods: {
    initMap() {
      let map = new BMap.Map("mainMap"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(121.332778, 30.750986), 15); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );

      map.setMapStyle({ style: "midnight" });
      map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      let myIcon = new BMap.Icon(
        SEVERURL + "/xlgc/icon/p_icon.png",
        new BMap.Size(100, 100)
      );
      let infoBox = new BMapLib.InfoBox(
        map,
        '<div class="point-bg"><img src="' +
          SEVERURL +
          '/xlgc/icon/img.png" ><p>巡查人：李四</p><p>时间：2017-03-05 14:23:12</p> <p>巡查情况：路面完整，没有异常</p></div>',
        {
          boxStyle: {
            width: "700px",
            height: "830px",
            padding: "10px",
            marginLeft: "240px",
            paddingBottom: "140px",
            pointerEvents: "none"
          },
          closeIconMargin: "0",
          enableAutoPan: false,
          align: INFOBOX_AT_TOP
        }
      );

      for (let i = 0; i < this.points.length; i++) {
        let arr = this.points[i];
        let point = new BMap.Point(arr[0], arr[1]);
        let marker = new BMap.Marker(point, { icon: myIcon });

        marker.addEventListener("click", function() {
          infoBox.open(marker);
          // infoBox.setContent('<div class="point-bg">564564685</div>');
        });
        map.addOverlay(marker); // 将标注添加到地图中
      }
    },
    clickBtn(index) {
      this.indexMenu = index;
    }
  }
};
</script>
