<style lang="less">
.infoBox > img {
  display: none;
}
.point-bg.video-bg {
  background: url(../assets/images/video_bg.png) no-repeat;
}
.point-bg,
.kent-bg {
  padding: 15px;
  position: relative;
  height: 100%;
  color: #fff;
  width: 100%;

  .v-vid {
    height: 20px;
    width: 40px;
    background: #fff;
    position: absolute;
    top: 35px;
    right: 28px;
    background: url(../assets/images/v-vid.png) no-repeat;
    background-size: auto 80%;
    z-index: 33;
    cursor: pointer;
  }
  .v-vid:hover {
    background: url(../assets/images/v-vid-act.png) no-repeat;
    background-size: auto 80%;
  }

  background-size: 100% 100%;
  p {
    font-size: 12px;
  }

  & > img {
    width: 100%;
    display: block;
    margin: auto;
    margin-bottom: 15px;
  }
}

.point-bg {
  background: url(../assets/images/point-bg.png) no-repeat;
  background-size: 100% 100%;
  &:after {
    content: "";
    position: absolute;
    background: url(../assets/images/p_tow_icon.png) no-repeat;
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
  background: url(../assets/images/kent-bg.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  cursor: default;
  .uid {
    white-space: nowrap;
  }
  .sm {
    text-overflow: ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
    line-clamp: 2;
    box-orient: vertical;
  }
  .hd {
    display: block;
    margin: 10px auto;
    width: 140px;
  }

  &.mga-qj::after {
    background: url(../assets/images/mga-qj-act.png);
  }
  &.mga-djdo::after {
    background: url(../assets/images/mga-djdo-act.png);
  }
  &.mga-sqsj::after {
    background: url(../assets/images/mga-sqsj-act.png);
  }
  &.mga-zp::after {
    background: url(../assets/images/mga-zp-act.png);
  }
  &.mga-rlggzx::after {
    background: url(../assets/images/mga-rlggzx-act.png);
  }
  &.mga-db::after {
    background: url(../assets/images/mga-db-act.png);
  }
  &.mga-jtsg::after {
    background: url(../assets/images/mga-jtsg-act.png);
  }
  &.mga-hz::after {
    background: url(../assets/images/mga-hz-act.png);
  }

  &.xfry::after {
    background: url(../assets/images/xfry-p-act.png);
  }
  &.xdry::after {
    background: url(../assets/images/xdry-p-act.png);
  }
  &.wwdx::after {
    background: url(../assets/images/wwdx-p-act.png);
  }
  &.sqfx::after {
    background: url(../assets/images/sqfx-p-act.png);
  }
  &.jsb::after {
    background: url(../assets/images/jsb-p-act.png);
  }
  &.szry::after {
    background: url(../assets/images/szry-p-act.png);
  }
  &.mgry::after {
    background: url(../assets/images/mgry-p-act.png);
  }

  &.factory::after {
    background: url(../assets/images/factory-act.png);
  }
  &.school::after {
    background: url(../assets/images/school-act.png);
  }
  &.hospital::after {
    background: url(../assets/images/hospital-act.png);
  }
  &.gas-station::after {
    background: url(../assets/images/gas-station-act.png);
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
    width: 20px;
    left: 10px;
    top: 0px;
    background: url(../assets/images/title-left.png) no-repeat center center;
    background-size: 15px 12px;
  }

  .title::after {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    right: 10px;
    top: 0px;
    background: url(../assets/images/title-right.png) no-repeat center center;
  }

  &.mga-qj::after,
  &.mga-djdo::after,
  &.mga-sqsj::after,
  &.mga-zp::after,
  &.mga-rlggzx::after,
  &.mga-db::after,
  &.mga-jtsg::after,
  &.mga-hz::after,
  /*----*/ &.xfry::after,
  &.xdry::after,
  &.wwdx::after,
  &.sqfx::after,
  &.jsb::after,
  &.szry::after,
  &.mgry::after,
  /*----*/ &.school::after,
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

.mainMap {
  .tb {
    padding: 10px 0px;
    .ivu-col {
      border-bottom: 1px solid #2ba9c6;
      border-left: 1px solid #2ba9c6;
    }
  }
}
</style>
<style scoped lang="less">
.mainMap {
  &,
  .box {
    height: 715px;
    position: relative;
    overflow: hidden;
  }

  .header {
    height: 135px;
    background: url(../assets/images/mainHead.png) no-repeat center center;
    background-size: auto 100%;
    position: relative;
    z-index: 3;
    margin: 0px;
  }

  .box {
    position: absolute;
    top: 133px;
    height: 578px;
    left: 0px;
    width: 100%;
    overflow: hidden;
  }

  .ry-mg {
    background: url(../assets/images/ry_mg.png) no-repeat;
    background-size: auto 35px;
  }

  .ry-mg:hover,
  .ry-mg_act {
    background: url(../assets/images/ry_mg_act.png) no-repeat;
    background-size: auto 100%;
  }

  .s_c {
    background: url(../assets/images/s_c.png) no-repeat;
    background-size: auto 35px;
    transition: all 0.3s;
  }

  .s_c:hover,
  .s_c_act {
    background: url(../assets/images/s_c_act.png) no-repeat;
    background-size: auto 100%;
  }

  .case_mg {
    background: url(../assets/images/case_mg.png) no-repeat;
    background-size: auto 35px;
  }

  .case_mg:hover,
  .case_mg_act {
    background: url(../assets/images/case_mg_act.png) no-repeat;
    background-size: auto 100%;
  }

  .lj_wf {
    background: url(../assets/images/lj_wf.png) no-repeat;
    background-size: auto 35px;
  }

  .lj_wf:hover,
  .lj_wf_act {
    background: url(../assets/images/lj_wf_act.png) no-repeat;
    background-size: auto 100%;
  }

  .r_pt {
    background: url(../assets/images/r_pt.png) no-repeat;
    background-size: auto 35px;
  }

  .r_pt:hover,
  .r_pt_act {
    background: url(../assets/images/r_pt_act.png) no-repeat;
    background-size: auto 100%;
  }

  .key_enterp {
    background: url(../assets/images/key_enterp.png) no-repeat;
    background-size: auto 35px;
  }

  .key_enterp:hover,
  .key_enterp_act {
    background: url(../assets/images/key_enterp_act.png) no-repeat;
    background-size: auto 100%;
  }

  .max_video {
    background: url(../assets/images/max_video.png) no-repeat;
    background-size: auto 35px;
  }

  .max_video:hover,
  .max_video_act {
    background: url(../assets/images/max_video_act.png) no-repeat;
    background-size: auto 100%;
  }

  .map-mask {
    top: 133px;
    height: 578px;
    background: url("../assets/images/mapMask2.png");
    background-size: 100% 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    z-index: 99;
    pointer-events: none;
  }

  .explain-b,
  .explain-b2,
  .wifi-i {
    position: absolute;
    left: 50px;
    width: 290px;
    padding-top: 39px;
    padding-bottom: 5px;
    background-size: 100%;
    z-index: 1000;
  }

  .explain-b2 {
    width: 270px;
  }

  .ex-title,
  .wifi-title {
    position: absolute;
    top: -25px;
    width: 180px;
    left: 0px;
    font-size: 14px;
    padding: 0px 70px;
    z-index: 20;
    padding-top: 5px;
    color: #0dcca5;
    text-align: center;
    padding: 0px 40px;
    font-weight: bold;
  }

  .ex-title::before,
  .wifi-title::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 15px;
    top: 0px;
    background: url(../assets/images/title-left.png) no-repeat center center;
    background-size: 65% auto;
  }

  .ex-title::after,
  .wifi-title::after {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    right: 15px;
    top: 0px;
    background: url(../assets/images/title-right.png) no-repeat center center;
    background-size: 65% auto;
  }

  .explain-b:before,
  .wifi-i::before {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 72px;
    background: #fff;
    content: "";
    z-index: 2;
    background: url(../assets/images/explain_bg_hd2.png) no-repeat;
    background-size: 100% auto;
  }

  .explain-b:after,
  .wifi-i::after {
    position: absolute;
    bottom: 5px;
    left: 0px;
    width: 100%;
    height: 70px;
    background: #fff;
    content: "";
    z-index: 2;
    background: url(../assets/images/explain_bg_ft2.png) no-repeat;
    background-size: 100% auto;
  }

  .ex-content {
    background: url(../assets/images/explain_bg2.png) no-repeat;
    background-size: 100% 350px;
    position: relative;
    font-size: 12px;
    padding: 10px 30px;
    z-index: 3;
  }

  .m-too {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    z-index: 100;
  }

  .m-too .btn {
    height: 38px;
    width: 120px;
    margin: 0px 5px;
    height: 40px;
    width: 135px;
    margin: -10px 1px;
    display: inline-block;
    transition: all 0.3s;
  }

  ul li {
    display: block;
    clear: both;
    line-height: 35px;
    font-size: 14px;
  }
  .k-e-ep {
    width: 145px;
    position: absolute;
    top: 60px;
    left: 80px;
    z-index: 5;
    ul {
      list-style: none;
      margin: 0px;
      padding: 0px;
      li {
        white-space: nowrap;
        margin-bottom: 15px;
        list-style: none;
        text-align: left;
        line-height: 28px;
        height: 35px;
        display: block;
        padding: 3px 5px;
        font-size: 12px;
        padding-left: 15px;
        background: url(../assets/images/map-let-btn.png);
        background-size: 100% 100%;
        img {
          vertical-align: middle;
          margin-bottom: 4px;
        }
      }
    }
  }
  .managers {
    height: 250px;
    width: 800px;
    position: absolute;
    top: 300px;
    left: 0px;
    right: 0px;
    margin: auto;
    background: url(../assets/images/managers-bg.png);
    background-size: 100% 100%;
    .charts {
      width: 300px;
      height: 228px;
      margin-top: 20px;
      margin-right: 25px;
      float: left;
    }
    .title {
      position: absolute;
      top: 9px;
      width: 180px;
      left: 5px;
      font-size: 12px;
      padding: 0px 70px;
      z-index: 20;
      padding-top: 5px;
      color: #0dcca5;
      text-align: center;
      padding: 0px 40px;
      font-weight: bold;
    }

    .title::before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 15px;
      top: 0px;
      background: url(../assets/images/title-left.png) no-repeat center center;
      background-size: 65% auto;
    }

    .title::after {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      right: 15px;
      top: 0px;
      background: url(../assets/images/title-right.png) no-repeat center center;
      background-size: 65% auto;
    }

    .tb {
      padding-top: 38px;
      height: 235px;
      width: 450px;
      float: left;
      overflow: hidden;
      .th,
      .tr {
        transform: translateX(-1px);
        background: rgba(66, 158, 217, 0.5);
      }
      .td {
        padding: 10px 0px;
        .ivu-col {
          border-bottom: 1px solid #2ba9c6;
        }
      }

      .tr:nth-child(2n) {
        background: rgba(66, 158, 217, 0.3);
      }
    }
  }
  .video-box {
    position: absolute;
    top: 256px;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 890px;
    height: 390px;
    z-index: 80;
    background: #666;
    border-radius: 3px;
  }

  .wifi-content {
    background: url(../assets/images/explain_bg2.png) no-repeat;
    background-size: 100% 350px;
    position: relative;
    font-size: 12px;
    padding: 10px 20px;
    z-index: 3;
    .wifi-number {
      height: 30px;
      width: 250px;
      text-align: left;
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
    .wifi-xj {
      width: 250px;
      height: 50px;
      text-align: left;
      font-size: 16px;
      span {
        display: inline-block;
        height: 45px;
        width: 90px;
        color: #1df0f7;
        font-size: 22px;
        line-height: 45px;
        text-align: center;
        font-weight: bold;
        border: 1px solid #084155;
        background-color: #053343;
      }
    }
    .wifi-xz {
      margin-top: 8px;
    }
    .wifi-xj-area {
      width: 290px;
      text-align: left;
      span {
        display: inline-block;
        height: 30px;
        padding: 5px;
        margin: 8px 5px 0 0;
        background-color: pink;
      }
    }
  }
}
</style>
<template>
  <div class="mainMap" style="background:#000">
    <div class="header"></div>
    <Row>
      <div class="wifi-i" v-if="content.indexMenu === 3">
          <div class="wifi-content">
            <div class="wifi-title">区域实时概况</div>
            <div>
                <div class="wifi-number" v-for="item in content.wifiList.people">
                  <div class="wifi-n-t">
                    {{ item.name }}
                    <div class="wifi-n-p">
                      <span :style="{'width': item.width + '%'}"></span>
                    </div>
                  </div>
                  <span class="wifi-n-t-s">{{ item.number }}</span>
                  <span class="wifi-n-t-b">人</span>
                </div>

                <div class="wifi-xj">
                  涉疆人群 <span>32</span>
                </div>

                <div class="wifi-xj-area">
                  <span v-for="item in content.wifiList.xjArea" :style="{'backgroundColor': item.color}">{{ item.name }}&nbsp;&nbsp;{{ item.number }}人</span>
                </div>

                <div class="wifi-xj wifi-xz">
                  涉藏人群 <span>32</span>
                </div>

                <div class="wifi-xj-area">
                  <span v-for="item in content.wifiList.xzArea" :style="{'backgroundColor': item.color}">{{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.number }}人</span>
                </div>
            </div>
          </div>
      </div>
      <div class="k-e-ep" v-if="content.indexMenu==4||2||3">
        <ul>
          <li v-for="items in content.leftList"><img :src="items.img" width="15"> {{items.name}}：{{items.nb}}</li>
        </ul>
      </div>
      <div class="explain-b" v-if="content.indexMenu==5">
        <div class="ex-content">
          <div class="ex-title">护路巡逻区域</div>
          <ul>
            <li class="clearfix" v-for="items in content.list">
              <Col span="16"> {{items.name}}</Col>
              <Col span="8">
              <span v-if="items.state"><strong>正常</strong></span>
              <span v-else style="color:#ff8486"><strong>未巡逻</strong></span>
              </Col>
            </li>
          </ul>
        </div>
      </div>
    </Row>
    <div class="box" id="mainMap"></div>
    <div class="map-mask"></div>
    <div class="video-box" v-if="content.videoData.show"></div>
    <div class="managers" v-if="content.indexMenu==0">
      <div class="title">人口管理</div>
      <div class="charts" id="charts-managers"></div>
      <div class="tb">
        <Row>
          <div class="th clearfix">
            <Col span="4" v-for="value in ['人口类型','1社区','2社区','3社区','4社区','5社区']">
            <div class="td">{{value}}</div>
            </Col>
          </div>
          <div class="tr clearfix" v-for="itmes in content.managers.list">
            <Col span="4" v-for="value in itmes">
            <div class="td">{{value}}</div>
            </Col>
          </div>
        </Row>
      </div>
    </div>
    <div class="m-too clearfix">
      <div class="btn" v-for="(itme,i) in ['ry-mg','s_c','case_mg','lj_wf','r_pt','key_enterp','max_video']" :class="[itme,(content.indexMenu==i?(itme+'_act'):'')]" @click="clickBtn(i)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cptMap",
  data() {
    return {
      content: {
        Map: null,
        infoBox: null,
        indexMenu: 0,
        videoData: {
          url: "",
          show: false
        },
        railwayListShow: false,
        overlays: [],
        managers: {
          data: [
            {
              value: 278564,
              name: "户籍人口"
            },
            {
              value: 88976,
              name: "境外人员"
            },
            {
              value: 179795,
              name: "来泸人员"
            }
          ],
          list: [
            ["户籍人员", "8540", "9745", "5415", "3447", "1574"],
            ["来泸人员", "8540", "9745", "5415", "3447", "1574"],
            ["竟外人员", "8540", "9745", "5415", "3447", "1574"]
          ]
        },
        specialCrowdList: [
          { name: "信访人员", nb: 13, img: SEVERURL + "/xlgc/icon/xf.png" },
          { name: "吸毒人员", nb: 115, img: SEVERURL + "/xlgc/icon/xd.png" },
          { name: "维稳对象", nb: 21, img: SEVERURL + "/xlgc/icon/wwdx.png" },
          { name: "社区服刑", nb: 543, img: SEVERURL + "/xlgc/icon/sqfx.png" },
          { name: "精神病人", nb: 110, img: SEVERURL + "/xlgc/icon/jsb.png" },
          { name: "失踪人员", nb: 11, img: SEVERURL + "/xlgc/icon/szry.png" },
          { name: "敏感人员", nb: 123, img: SEVERURL + "/xlgc/icon/mgry.png" }
        ],

        specialCrowdPoints: [
          [
            [121.312117, 30.739037],
            1,
            {
              name: "王文祥",
              img: SEVERURL + "/xlgc/imgs/wyx.png",
              sex: "男",
              origin: "上海市金山工区",
              uid: "440232199505050148",
              situation: "无固定工作，喜欢煽动群众无固定工作，喜欢煽动群众，"
            }
          ],
          [
            [121.30802, 30.727366],
            2,
            {
              name: "李建刚",
              img: SEVERURL + "/xlgc/imgs/ljg.png",
              sex: "男",
              origin: "上海市金山工区",
              uid: "310121198912157654",
              situation: "无固定工作，精神萎靡，毒瘾比较严重"
            }
          ],
          [
            [121.353439, 30.751452],
            3,
            {
              name: "李福",
              img: SEVERURL + "/xlgc/imgs/lf.png",
              sex: "男",
              origin: "上海市金山工区",
              uid: "31010219880105323",
              situation: "无业游民，经常与邻里发生冲突，挑衅他人"
            }
          ],
          [
            [121.318009, 30.717431],
            4,
            {
              name: "赖林",
              img: SEVERURL + "/xlgc/imgs/ll.png",
              sex: "男",
              origin: "上海市金山工区",
              uid: "310102198701036443",
              situation: "超市送货员，较为稳定，已婚，育有一子一女"
            }
          ],
          [
            [121.357822, 30.719542],
            5,
            {
              name: "张大桂",
              img: SEVERURL + "/xlgc/imgs/zdg.png",
              sex: "男",
              origin: "上海市金山工区",
              uid: "310102198701036443",
              situation: "持久的妄想性障碍（偏执性精神病）"
            }
          ],
          [
            [121.362062, 30.764548],
            6,
            {
              name: "王小华",
              img: SEVERURL + "/xlgc/imgs/wxh.png",
              sex: "女",
              origin: "湖南省长沙市",
              uid: "430101199310191321",
              situation: "于17.5.2在联建村失踪，至今下落不明"
            }
          ],
          [
            [121.235006, 30.740961],
            7,
            {
              name: "芳华",
              img: SEVERURL + "/xlgc/imgs/fh.png",
              sex: "女",
              origin: "上海市金山工区",
              uid: "31012196905032467",
              situation: "无固定工作，喜欢煽动群众无固定工作，喜欢煽动群众，"
            }
          ]
        ],

        caseManagementList: [
          { name: "抢劫", nb: 13, img: SEVERURL + "/xlgc/icon/mga-qj.png" },
          {
            name: "打架斗殴",
            nb: 15,
            img: SEVERURL + "/xlgc/icon/mga-djdo.png"
          },
          {
            name: "色情事件",
            nb: 21,
            img: SEVERURL + "/xlgc/icon/mga-sqsj.png"
          },
          { name: "诈骗", nb: 143, img: SEVERURL + "/xlgc/icon/mga-zp.png" },
          {
            name: "扰乱公共秩序",
            nb: 10,
            img: SEVERURL + "/xlgc/icon/mga-rlggzx.png"
          },
          { name: "赌博", nb: 110, img: SEVERURL + "/xlgc/icon/mga-db.png" },
          {
            name: "交通事故",
            nb: 23,
            img: SEVERURL + "/xlgc/icon/mga-jtsg.png"
          },
          { name: "火灾", nb: 1, img: SEVERURL + "/xlgc/icon/mga-hz.png" }
        ],

        caseManagementPoints: [
          [
            [121.30802, 30.727366],
            1,
            {
              img: SEVERURL + "/xlgc/imgs/mga-qj.png",
              event: "社区门口小团伙抢劫 ",
              state: "已处理",
              time: "2017.04.06",
              address: "东方红社区",
              liable: "易小东",
              marker: ""
            }
          ],
          [
            [121.312117, 30.739037],
            2,
            {
              img: SEVERURL + "/xlgc/imgs/mga-djdo.png",
              event: "学校门口聚众打架斗殴 ",
              state: "未处理",
              time: "2017.03.05",
              address: "第二中学",
              liable: "林华",
              marker: ""
            }
          ],

          [
            [121.353439, 30.751452],
            3,
            {
              img: SEVERURL + "/xlgc/imgs/mga-sqsj.png",
              event: "清理专营色情表演的舞厅 ",
              state: "未处理",
              time: "2017.05.03",
              address: "怡情歌舞厅",
              liable: "张晓",
              marker: ""
            }
          ],
          [
            [121.318009, 30.717431],
            4,
            {
              img: SEVERURL + "/xlgc/imgs/mga-jtsg.png",
              event: "石化街道骗取老人闲钱 ",
              state: "未处理",
              time: "2017.05.04",
              address: "石化街道",
              liable: "张欢欢",
              marker: ""
            }
          ],
          [
            [121.357822, 30.719542],
            5,
            {
              img: SEVERURL + "/xlgc/imgs/mga-rlggzx.png",
              event: "在公共场合大声喧哗，忽视工作人员警告  ",
              state: "未处理",
              time: "2017.05.10",
              address: "石化街道临潮三村小区",
              liable: " 张欢欢",
              marker: ""
            }
          ],
          [
            [121.362062, 30.764548],
            6,
            {
              img: SEVERURL + "/xlgc/imgs/mga-db.png",
              event: "聚众赌博影响风气 ",
              state: "未处理",
              time: "2017.05.20",
              address: "2017.05.20",
              liable: "陈水风",
              marker: ""
            }
          ],
          [
            [121.235006, 30.740961],
            7,
            {
              img: SEVERURL + "/xlgc/imgs/mga-jtsg.png",
              event: "多张车辆连环碰撞  ",
              state: "已处理",
              time: "2017.05.04",
              address: "金山街道",
              liable: " 陈水风",
              marker: ""
            }
          ],
          [
            [121.235006, 30.740961],
            8,
            {
              img: SEVERURL + "/xlgc/imgs/mga-hz.png",
              event: "联建村一栋楼发生火灾   ",
              state: "已处理",
              time: "2017.03.05",
              address: "自家人生鲜超市",
              liable: "王强",
              marker: ""
            }
          ]
        ],

        leftList: [],

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
        railwayPoints: [
          [121.332778, 30.750986],
          [121.301157, 30.760359],
          [121.362673, 30.758497],
          [121.279023, 30.728762],
          [121.314165, 30.727024],
          [121.379489, 30.74031],
          [121.246971, 30.714233]
        ],
        KeyEnterprisesPoints: [
          [
            [121.362062, 30.764548],
            1,
            {
              name: "工业区第二人民医院",
              img: SEVERURL + "/xlgc/imgs/yy.png",
              license: SEVERURL + "/xlgc/icon/license-icon.png",
              username: "李明清",
              type: "医疗器械",
              address: "上海市金山工业区金石路85号",
              videoUrl: "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
            }
          ],
          [
            [121.235006, 30.740961],
            2,
            {
              name: "工业区第二中学",
              img: SEVERURL + "/xlgc/imgs/xx.png",
              license: SEVERURL + "/xlgc/icon/license-icon.png",
              username: "李明清",
              type: "教育",
              address: "上海市金山工业区金山大道53号",
              videoUrl: "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
            }
          ],
          [
            [121.30802, 30.727366],
            3,
            {
              name: "惠民水泥工厂",
              img: SEVERURL + "/xlgc/imgs/gc.png",
              license: SEVERURL + "/xlgc/icon/license-icon.png",
              username: "李明清",
              type: "工厂",
              address: "上海市金山工业区高桥村3号",
              videoUrl: "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
            }
          ],
          [
            [121.25944, 30.747045],
            4,
            {
              name: "工业区马鞍山路加油站",
              img: SEVERURL + "/xlgc/imgs/jyz.png",
              license: SEVERURL + "/xlgc/icon/license-icon.png",
              username: "李明清",
              type: "生活",
              address: "上海市金山工业区金山大道53号",
              videoUrl: "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
            }
          ]
        ],
        KeyEnterpriseslist: [
          {
            name: "医院单位",
            nb: 13,
            img: SEVERURL + "/xlgc/icon/xf.png"
          },
          { name: "学校单位", nb: 115, img: SEVERURL + "/xlgc/icon/sqfx.png" },
          { name: "工厂单位", nb: 21, img: SEVERURL + "/xlgc/icon/gc.png" },
          { name: "加油站", nb: 543, img: SEVERURL + "/xlgc/icon/jsb.png" }
        ],
        wifiList: {
          people: [
            { name: "实时人数", number: 4227, width: 50 },
            { name: "当日人数", number: 54422, width: 100 },
            { name: "敏感人数", number: 60, width: 20 }
          ],
          xjArea: [
            { name: "乌鲁木齐", number: 7, color: "#25449f" },
            { name: "伊犁", number: 9, color: "#87123e" },
            { name: "和田", number: 6, color: "#71c37b" },
            { name: "阿克苏", number: 8, color: "#d1a866" },
            { name: "柯尔克孜", number: 3, color: "#035481" },
            { name: "吐鲁番市", number: 2, color: "#5360be" }
          ],
          xzArea: [
            { name: "阿坝", number: 11, color: "#2440a1" },
            { name: "那曲市", number: 5, color: "#5da252" },
            { name: "喀什", number: 5, color: "#f75e56" },
            { name: "甘孜", number: 3, color: "#1474c8" },
            { name: "日喀则", number: 4, color: "#538afe" }
          ],
          mapPoints: [
            [
              [121.312117, 30.739037],
              1,
              {
                name: "测试数据",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 4529 },
                { name: "当日人数", value: 4529 },
                { name: "敏感人数", value: 3 }
              ]
            ],
            [
              [121.30802, 30.727366],
              3,
              {
                name: "测试数据",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 1203 },
                { name: "当日人数", value: 1203 },
                { name: "敏感人数", value: 3 }
              ]
            ],
            [
              [121.353439, 30.751452],
              3,
              {
                name: "测试数据",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 4967 },
                { name: "当日人数", value: 4967 },
                { name: "敏感人数", value: 13 }
              ]
            ],
            [
              [121.318009, 30.717431],
              3,
              {
                name: "测试数据",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 4567 },
                { name: "当日人数", value: 4567 },
                { name: "敏感人数", value: 9 }
              ]
            ],
            [
              [121.357822, 30.719542],
              1,
              {
                name: "工业区第二人民医院",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 7812 },
                { name: "当日人数", value: 7812 },
                { name: "敏感人数", value: 10 }
              ]
            ],
            [
              [121.362062, 30.764548],
              1,
              {
                name: "工业区第二人民医院",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 8542 },
                { name: "当日人数", value: 8542 },
                { name: "敏感人数", value: 7 }
              ]
            ],
            [
              [121.235006, 30.740961],
              2,
              {
                name: "工业区第二中学",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 7516 },
                { name: "当日人数", value: 7516 },
                { name: "敏感人数", value: 34 }
              ]
            ],
            [
              [121.186138, 30.768023],
              2,
              {
                name: "工业区第二中学",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 8569 },
                { name: "当日人数", value: 8569 },
                { name: "敏感人数", value: 3 }
              ]
            ],
            [
              [121.25944, 30.747045],
              2,
              {
                name: "工业区第二中学",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 4569 },
                { name: "当日人数", value: 4569 },
                { name: "敏感人数", value: 4 }
              ]
            ],
            [
              [121.25944, 30.747045],
              4,
              {
                name: "工业区马鞍山路加油站",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 12368 },
                { name: "当日人数", value: 12368 },
                { name: "敏感人数", value: 9 }
              ]
            ],
            [
              [121.25944, 30.747045],
              4,
              {
                name: "工业区马鞍山路加油站",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 1526 },
                { name: "当日人数", value: 1256 },
                { name: "敏感人数", value: 10 }
              ]
            ],

            [
              [121.179814, 30.733264],
              4,
              {
                name: "工业区马鞍山路加油站",
                img: SEVERURL + "/xlgc/imgs/yy.png"
              },
              [
                { name: "实到人数", value: 1422 },
                { name: "当日人数", value: 1422 },
                { name: "敏感人数", value: 3 }
              ]
            ]
          ],
          mapList: [
            {
              name: "金山客运站",
              nb: 13,
              img: require("../assets/images/wifi_ky.png")
            },
            {
              name: "复旦大学附属金山医院",
              nb: 115,
              img: require("../assets/images/wifi_yy.png")
            },
            {
              name: "金山区沙滩",
              nb: 21,
              img: require("../assets/images/wifi_st.png")
            },
            {
              name: "金山万达广场",
              nb: 543,
              img: require("../assets/images/wifi_wd.png")
            }
          ]
        }
      }
    };
  },

  mounted() {
    this.initMap(this.content.indexMenu);
  },
  methods: {
    initMap(index) {
      let map = new BMap.Map("mainMap"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(121.332778, 30.750986), 13); // 初始化地图,设置中心点坐标和地图级别
      var b = new BMap.Bounds(
        new BMap.Point(121.076437, 30.489621),
        new BMap.Point(121.523147, 31.242984)
      );
      try {
        BMapLib.AreaRestriction.setBounds(map, b);
      } catch (e) {
        // alert(e);
      }
      // //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_SATELLITE_MAP, BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      this.content.Map = map;
      map.setMapStyle({ style: "midnight" });
      map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的

      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      switch (index) {
        case 0:
          this.clickManagers(this.content.Map);
          break;
        case 1:
          this.clickSpecialCrowd(map);
          break;
        case 2:
          this.clickCaseManagement(this.content.Map);
          break;
        case 3:
          this.wifiSniffing(map);
          break;
        case 4:
          this.clickKeyEnterprises(map);
          break;
        case 5:
          this.clickRailwayProtection(map);
          break;
        case 6:
          console.log(index);
          break;
        default:
          break;
      }
    },
    // 人口管理图表
    chartsManagers() {
      let myChart = echarts.init(document.getElementById("charts-managers"));
      let data = this.content.managers.data;
      let option = {
        tooltip: {
          show: true,
          trigger: "item",
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: "{b}: {c} ({d}%)",
          textStyle: {
            color: "#333"
          }
        },

        series: [
          {
            type: "pie",
            selectedMode: "single",
            center: ["50%", "50%"],
            radius: ["30%", "55%"],
            color: ["#2c82bf", "#76defb", "#2264c2"],

            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 14
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data
          },
          {
            type: "pie",
            center: ["50%", "55%"],
            radius: ["65%", "50%"],
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
                fontSize: 14
              }
            },

            label: {
              normal: {
                formatter: ["{a|{b}\n{c}}"].join("\n"),
                rich: {
                  a: {
                    color: "#8ee4fd",
                    padding: 2,
                    fontSize: 12
                  }
                }
              }
            },
            data: data
          }
        ]
      };

      myChart.setOption(option);
    },
    //人口管理
    clickManagers(map) {
      // map.setMapType(BMAP_HYBRID_MAP);
      setTimeout(e => {
        this.chartsManagers();
      }, 10);
    },
    // 案件管理
    clickCaseManagement(map) {
      this.content.leftList = this.content.caseManagementList;
      // map.setMapType(BMAP_HYBRID_MAP);
      let infoBox = null;
      this.content.infoBox = infoBox = new BMapLib.InfoBox(
        map,
        `<div class="kent-bg">
        <div class="title"></div>
        <img src="` +
          SEVERURL +
          `/xlgc/icon/img.png" ></div>`,
        {
          boxStyle: {
            width: "250px",
            height: "340px",
            padding: "0px",
            marginBottom: "70px",
            pointerEvents: "none"
          },
          closeIconMargin: "0",
          enableAutoPan: false,
          align: INFOBOX_AT_TOP
        }
      );
      this.content.overlays = [];
      map.addEventListener("click", function() {
        infoBox.hide();
      });
      let myIcon = "";
      for (let i = 0; i < this.content.caseManagementList.length; i++) {
        let arr = this.content.caseManagementPoints[i];
        let point = new BMap.Point(arr[0][0], arr[0][1]);
        let className = "";
        switch (arr[1]) {
          case 1:
            className = "mga-qj";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-qj-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 2:
            className = "mga-djdo";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-djdo-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 3:
            className = "mga-sqsj";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-sqsj-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 4:
            className = "mga-zp";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-zp-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 5:
            className = "mga-rlggzx";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-rlggzx-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 6:
            className = "mga-db";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-db-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 7:
            className = "mga-jtsg";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-jtsg-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 8:
            className = "mga-hz";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mga-hz-p.png",
              new BMap.Size(42, 42)
            );
            break;

          default:
            break;
        }
        let marker = new BMap.Marker(point, { icon: myIcon });

        this.content.overlays.push([marker, infoBox]);
        let _this = this;
        marker.addEventListener("click", function(e) {
          let html =
            `<div class="kent-bg ` +
            className +
            `">
        <div class="title">` +
            _this.content.caseManagementList[arr[1] - 1].name +
            `</div>
          <img class="hd" src="` +
            arr[2].img +
            `" >
          <p>事件：` +
            arr[2].event +
            `</p>
          <p>状态：` +
            arr[2].state +
            `</p>
          <p>时间：` +
            arr[2].time +
            `</p>
          <p>地址：` +
            arr[2].address +
            `</p>
          <p>责任人：` +
            arr[2].liable +
            `</p>
          <p>备注：` +
            arr[2].marker +
            `</p>
        </div>`;
          setTimeout(function() {
            infoBox.open(marker);
            infoBox.setContent(html);
          }, 10);
        });
        map.addOverlay(marker);
      }
    },
    // 特殊人群
    clickSpecialCrowd(map) {
      this.content.leftList = this.content.specialCrowdList;
      // map.setMapType(BMAP_HYBRID_MAP);
      let infoBox = null;
      this.content.infoBox = infoBox = new BMapLib.InfoBox(
        map,
        `<div class="kent-bg">
        <div class="title"></div>
        <img src="` +
          SEVERURL +
          `/xlgc/icon/img.png" ></div>`,
        {
          boxStyle: {
            width: "250px",
            height: "320px",
            padding: "0px",
            marginBottom: "70px",
            pointerEvents: "none"
          },
          closeIconMargin: "0",
          enableAutoPan: false,
          align: INFOBOX_AT_TOP
        }
      );
      this.content.overlays = [];
      map.addEventListener("click", function() {
        infoBox.hide();
      });
      let myIcon = "";
      for (let i = 0; i < this.content.specialCrowdPoints.length; i++) {
        let arr = this.content.specialCrowdPoints[i];
        let point = new BMap.Point(arr[0][0], arr[0][1]);
        let className = "";
        switch (arr[1]) {
          case 1:
            className = "xfry";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/xfry-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 2:
            className = "xdry";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/xdry-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 3:
            className = "wwdx";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/wwdx-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 4:
            className = "sqfx";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/sqfx-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 5:
            className = "jsb";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/jsb-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 6:
            className = "szry";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/szry-p.png",
              new BMap.Size(42, 42)
            );
            break;
          case 7:
            className = "mgry";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/mgry-p.png",
              new BMap.Size(42, 42)
            );
            break;
          default:
            break;
        }
        let marker = new BMap.Marker(point, { icon: myIcon });

        this.content.overlays.push([marker, infoBox]);
        let _this = this;
        marker.addEventListener("click", function(e) {
          let html =
            `<div class="kent-bg ` +
            className +
            `">
        <div class="title">` +
            _this.content.specialCrowdList[arr[1] - 1].name +
            `</div>
        
        <img class="hd" src="` +
            arr[2].img +
            `" >
        <p>姓名：` +
            arr[2].name +
            `</p>
        <p>性别：` +
            arr[2].sex +
            `</p>
         <p>籍贯：` +
            arr[2].origin +
            `</p>
         <p class="uid">身份证：` +
            arr[2].uid +
            `</p>
         <p class="sm">当前状况：` +
            arr[2].situation +
            `</p>
        </div>`;
          setTimeout(function() {
            infoBox.open(marker);
            infoBox.setContent(html);
          }, 10);
        });
        map.addOverlay(marker);
      }
    },
    // 铁路护路
    clickRailwayProtection(map) {
      map.setMapType(BMAP_NORMAL_MAP);
      let myIcon = new BMap.Icon(
        SEVERURL + "/xlgc/icon/p_icon2.png",
        new BMap.Size(40, 40)
      );
      let infoBox = null;
      this.content.infoBox = infoBox = new BMapLib.InfoBox(
        map,
        '<div class="point-bg"><img src="' +
          SEVERURL +
          '/xlgc/imgs/img.png" ><p>巡查人：李四</p><p>时间：2017-03-05 14:23:12</p> <p>巡查情况：路面完整，没有异常</p></div>',
        {
          boxStyle: {
            width: "250px",
            height: "270px",
            padding: "0px",
            marginLeft: "93px",
            marginBottom: "70px",
            pointerEvents: "none"
          },
          closeIconMargin: "0",
          enableAutoPan: false,
          align: INFOBOX_AT_TOP
        }
      );
      this.content.overlays = [];
      map.addEventListener("click", function() {
        infoBox.hide();
      });
      for (let i = 0; i < this.content.railwayPoints.length; i++) {
        let arr = this.content.railwayPoints[i];
        let point = new BMap.Point(arr[0], arr[1]);
        let marker = new BMap.Marker(point, { icon: myIcon });

        this.content.overlays.push([marker, infoBox]);

        marker.addEventListener("click", function() {
          setTimeout(function() {
            infoBox.open(marker);
          }, 10);
          // infoBox.setContent('<div class="point-bg">564564685</div>');
        });
        map.addOverlay(marker); // 将标注添加到地图中
      }
    },
    // 重点企业
    clickKeyEnterprises(map) {
      this.content.leftList = this.content.KeyEnterpriseslist;
      // map.setMapType(BMAP_HYBRID_MAP);
      let infoBox = null;
      this.content.infoBox = infoBox = new BMapLib.InfoBox(
        map,
        `<div class="kent-bg">
        <div class="title"></div>
        
        <img src="` +
          SEVERURL +
          `/xlgc/icon/img.png" ></div>`,
        {
          boxStyle: {
            width: "250px",
            height: "320px",
            padding: "0px",
            marginBottom: "70px"
          },
          closeIconMargin: "0",
          enableAutoPan: false,
          align: INFOBOX_AT_TOP
        }
      );
      this.content.overlays = [];
      map.addEventListener("click", function() {
        infoBox.hide();
      });
      let myIcon = "";
      for (let i = 0; i < this.content.KeyEnterprisesPoints.length; i++) {
        let arr = this.content.KeyEnterprisesPoints[i];
        let point = new BMap.Point(arr[0][0], arr[0][1]);
        let className = "";
        switch (arr[1]) {
          case 1:
            className = "hospital";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/hospital.png",
              new BMap.Size(40, 40)
            );
            break;
          case 2:
            className = "school";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/school.png",
              new BMap.Size(40, 40)
            );
            break;
          case 3:
            className = "factory";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/factory.png",
              new BMap.Size(40, 40)
            );
            break;
          case 4:
            className = "gas-station";
            myIcon = new BMap.Icon(
              SEVERURL + "/xlgc/icon/gas-station.png",
              new BMap.Size(40, 40)
            );
            break;
          default:
            break;
        }
        let marker = new BMap.Marker(point, { icon: myIcon });

        this.content.overlays.push([marker, infoBox]);
        let _this = this;
        marker.addEventListener("click", function(e) {
          let html =
            `<div class="kent-bg ` +
            className +
            `">
          <div class="v-vid" data="` +
            arr[2].videoUrl +
            `"></div>
        <div class="title">` +
            _this.content.KeyEnterpriseslist[arr[1] - 1].name +
            `</div>
        <img src="` +
            arr[2].img +
            `" style="margin-top: 20px">
        <p>` +
            arr[2].name +
            `</p>
        <p>单位营业执照：<img class="license" src="` +
            arr[2].license +
            `"></p>
        <p>法人：` +
            arr[2].username +
            `</p>
         <p>经营类别：` +
            arr[2].type +
            `</p>
         <p class="sm">单位地址：` +
            arr[2].address +
            `</p>
        </div>`;
          setTimeout(function() {
            infoBox.open(marker);
            infoBox.setContent(html);
            let odiv = document.getElementsByClassName("v-vid")[0];
            odiv.onclick = function() {
              alert(this.getAttribute("data"));
            };
          }, 10);
        });
        map.addOverlay(marker);
      }
    },
    wifiSniffing(map) {
      map.setMapType(BMAP_NORMAL_MAP);
      let infoBox = null;
      let myIcon = new BMap.Icon(
        SEVERURL + "/xlgc/icon/p_icon2.png",
        new BMap.Size(40, 40)
      );

      this.content.infoBox = infoBox = new BMapLib.InfoBox(map, "", {
        boxStyle: {
          width: "250px",
          height: "320px",
          padding: "0px",
          marginBottom: "70px"
          // pointerEvents: "none"
        },
        closeIconMargin: "0",
        enableAutoPan: false,
        align: INFOBOX_AT_TOP
      });

      this.content.overlays = [];
      map.addEventListener("click", function() {
        infoBox.hide();
      });
      for (let i = 0; i < this.content.wifiList.mapPoints.length; i++) {
        let arr = this.content.wifiList.mapPoints[i];
        let point = new BMap.Point(arr[0][0], arr[0][1]);
        let marker = new BMap.Marker(point, { icon: myIcon });
        let _this = this;
        this.content.overlays.push([marker, infoBox]);
        marker.addEventListener("click", function(e) {
          let html =
            `<div class="wifi-bg">
            <div class="title">` +
            _this.content.wifiList.mapList[arr[1] - 1].name +
            `</div><a target="_blank" href="http://v.youku.com/v_show/id_XMTYxMDk5Njc2NA==.html"><div class="wifi-radio" style="cursor: default;"></div></a>
            <img src="` +
            _this.content.wifiList.mapList[arr[1] - 1].img +
            `" >
            <div class="wifi-n-s"><div class="wifi-number">` +
            `<div class="wifi-n-t">` +
            arr[3][0].name +
            `<div class="wifi-n-p"><span width="40%"></span></div></div>` +
            `<span class="wifi-n-t-s">` +
            arr[3][0].value +
            `</span><span wifi-n-t-b>人</span>` +
            `</div>` +
            `<div class="wifi-number">` +
            `<div class="wifi-n-t">` +
            arr[3][1].name +
            `<div class="wifi-n-p"><span width="40%"></span></div></div>` +
            `<span class="wifi-n-t-s">` +
            arr[3][1].value +
            `</span><span wifi-n-t-b>人</span>` +
            `</div>` +
            `<div class="wifi-number">` +
            `<div class="wifi-n-t">` +
            arr[3][2].name +
            `<div class="wifi-n-p"><span width="40%"></span></div></div>` +
            `<span class="wifi-n-t-s">` +
            arr[3][2].value +
            `</span><span wifi-n-t-b>人</span>` +
            `</div></div>` +
            `</div>`;
          setTimeout(function() {
            infoBox.open(marker);
            infoBox.setContent(html);
          }, 10);
        });
        map.addOverlay(marker);
      }
    },
    // 大数据
    clickBigVedio(map) {
      map.setMapType(BMAP_NORMAL_MAP);
      let myIcon = new BMap.Icon(
        SEVERURL + "/xlgc/icon/p_icon2.png",
        new BMap.Size(40, 40)
      );
      let infoBox = null;
      this.content.infoBox = infoBox = new BMapLib.InfoBox(
        map,
        '<div class="point-bg video-bg"><video src="" loop="loop" autoplay="autoplay"></video></div>',
        {
          boxStyle: {
            width: "200px",
            height: "200px",
            padding: "0px",
            marginLeft: "0",
            marginBottom: "0",
            pointerEvents: "none"
          },
          closeIconMargin: "0",
          enableAutoPan: false,
          align: INFOBOX_AT_TOP
        }
      );
      this.content.overlays = [];
      map.addEventListener("click", function() {
        infoBox.hide();
      });
      for (let i = 0; i < this.content.railwayPoints.length; i++) {
        let arr = this.content.railwayPoints[i];
        let point = new BMap.Point(arr[0], arr[1]);
        let marker = new BMap.Marker(point, { icon: myIcon });

        this.content.overlays.push([marker, infoBox]);

        marker.addEventListener("click", function() {
          setTimeout(function() {
            infoBox.open(marker);
          }, 10);
          // infoBox.setContent('<div class="point-bg">564564685</div>');
        });
        map.addOverlay(marker); // 将标注添加到地图中
      }
    },
    clickBtn(index) {
      // 清除坐标点
      for (let i = 0; i < this.content.overlays.length; i++) {
        this.content.overlays[i][1].close();
        this.content.Map.removeOverlay(this.content.overlays[i][0]);
      }
      this.content.leftList = [];
      this.content.indexMenu = index;
      switch (index) {
        case 0:
          this.clickManagers(this.content.Map);
          break;
        case 1:
          this.clickSpecialCrowd(this.content.Map);
          break;
        case 2:
          this.clickCaseManagement(this.content.Map);
          break;
        case 3:
          this.wifiSniffing(this.content.Map);
          break;
        case 4:
          this.clickKeyEnterprises(this.content.Map);
          break;
        case 5:
          this.clickRailwayProtection(this.content.Map);
          break;
        case 6:
          console.log(index);
          this.clickBigVedio(this.content.Map);
          break;
        default:
          break;
      }
      this.$forceUpdate();
    }
  }
};
</script>
