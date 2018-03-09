<template>
    <div class="main" id="cMain">
    <div class="m-header">
    <Row>
        <Col span="23">
        <div class="m-title">
            <img src="../assets/images/title8.png"/>
        </div>
        </Col>
        <Col span="1">
        <div class="m-close">
            <span @click="popClose"></span>
        </div>
        </Col>
    </Row>
    </div>
    <div class="m-content">
    <Row>
        <Col span="5">
        <div class="m-cmenu">
            <ul>
                <li @click="wifiPopulation" v-bind:class="{'c-active': isWPopulation}"><i class="c-cmenu-v1"></i>人流计数</li>
                <li @click="wifiWarning" v-bind:class="{'c-active': isWWarning}"><i class="c-cmenu-v2"></i>报警预警</li>
                <li @click="wifiSearch" v-bind:class="{'c-active': isWSearch}"><i class="c-cmenu-v3"></i>探侦查询</li>
                <li @click="wifiTrack" v-bind:class="{'c-active': isWTrack}"><i class="c-cmenu-v4"></i>活动轨迹</li>
            </ul>
        </div>
        </Col>
        <Col span="19">
        <div class="m-ccontent" id="mCcontent">
            <!-- 人流计数 -->
            <div class="m-cconditional" v-show="isWPopulation">
              <select class="c-input c-select">
                    <option value="">选择场所</option>
                    <option value="">地铁</option>
                    <option value="">广场</option>
                    <option value="">客运站</option>
                    <option value="">火车站</option>
                </select>
                <input type="text" class="c-input" placeholder="输入查询条件"/>
                <button class="c-button c-button-search" type="button" @click="search('mentalP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('mentalP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 报警预警 -->
            <div class="m-cconditional" v-show="isWWarning">
                <select class="c-input c-select">
                    <option value="">选择区域</option>
                    <option value="">金山卫镇</option>
                    <option value="">玉兰新村</option>
                    <option value="">蒋庄村</option>
                    <option value="">德胜村</option>
                </select>
                <input type="text" class="c-input" placeholder="输入查询条件"/>                
                <button class="c-button c-button-search" type="button" @click="search('letterP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('letterP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 探侦查询 -->
            <div class="m-cconditional" v-show="isWSearch">
                <select class="c-input c-select">
                    <option value="">探测类型</option>
                    <option value="">QQ号</option>
                    <option value="">陌陌</option>
                    <option value="">微博</option>
                    <option value="">淘宝</option>
                </select>
                <input type="text" class="c-input" placeholder="输入查询条件"/>
                
                <button class="c-button c-button-search" type="button" @click="search('drugP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('drugP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 境外人口 -->
            <div class="m-cconditional" v-show="isWTrack">
                <input type="text" class="c-input" placeholder="输入查询条件"/>                
                <button class="c-button c-button-search" type="button" @click="search('stabilityO')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('stabilityO')">
                    <i></i>
                    刷新
                </button>
            </div>
            <div class="m-ctable" >
                <!-- 人流计数 -->
                <div class="table" v-show="isWPopulation">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.wifiPopulationInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.wifiPopulationInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix" style="background-color:#185073;">
                            <Col span="4">{{ list.place }}</Col>
                            <Col span="5">{{ list.time }}</Col>
                            <Col span="5">{{ list.wifiName }}</Col>
                            <Col span="5">{{ list.macIP }}</Col>
                            <Col span="3">{{ list.stayTime }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="4">{{ list.place }}</Col>
                            <Col span="5">{{ list.time }}</Col>
                            <Col span="5">{{ list.wifiName }}</Col>
                            <Col span="5">{{ list.macIP }}</Col>
                            <Col span="3">{{ list.stayTime }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 报警预警 -->
                <div class="table" v-show="isWWarning">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.wifiWarningInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.wifiWarningInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="6">{{ list.address }}</Col>
                            <Col span="4">{{ list.time }}</Col>
                            <Col span="4">{{ list.from }}</Col>
                            <Col span="5">{{ list.reason }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="6">{{ list.address }}</Col>
                            <Col span="4">{{ list.time }}</Col>
                            <Col span="4">{{ list.from }}</Col>
                            <Col span="5">{{ list.reason }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 探侦查询 -->
                <div class="table" v-show="isWSearch">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.wifiSearchInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.wifiSearchInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="4">{{ list.type }}</Col>
                            <Col span="6">{{ list.macIP }}</Col>
                            <Col span="7">{{ list.address }}</Col>
                            <Col span="5">{{ list.time }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="4">{{ list.type }}</Col>
                            <Col span="6">{{ list.macIP }}</Col>
                            <Col span="7">{{ list.address }}</Col>
                            <Col span="5">{{ list.time }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 境外人口 -->
                <div class="table" v-show="isWTrack">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.wifiTrackInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.wifiTrackInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="7">{{ list.macIP }}</Col>
                            <Col span="5">{{ list.number }}</Col>
                            <Col span="10">{{ list.track }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="7">{{ list.macIP }}</Col>
                            <Col span="5">{{ list.number }}</Col>
                            <Col span="10">{{ list.track }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-page">
            <Row type="flex" justify="space-between" class="code-row-bg">
                <Col span="12">
                <div class="c-page-l">
                    <span>每页显示</span>
                    <input type="number" value="10"/>
                    <span>当前显示第一个页至10项</span>
                </div>
                </Col>
                <Col span="12">
                <div class="c-page-r"  id="cPageR">
                    <Page :total="324" size="small" show-total @on-change="getPage"></Page>
                </div>
                </Col>
            </Row>
            </div>
        </div>
        </Col>
    </Row>
    </div>
    <div class="m-foot">
    <Row>
        <Col span="24">
        <div class="m-foot-l">
            <div class="m-foot-head">
                {{ staticsTitle }}
            </div>
            <div class="m-foot-statics" id="wifiStatics"></div>
        </div>
        </Col>
    </Row>
    </div>
    </div>
</template>
<style scoped lang="less">
.main {
  position: absolute;
  left: 50%;
  transform: translate(-25%);
  width: 1265px;
  height: 963px;
  font-size: 16px;
  overflow: hidden;
  z-index: 1001;
  background: url(../assets/images/c_bg1.png) no-repeat center center;
}
.m-header {
  margin-top: 50px;
  height: 45px;
}
.m-title {
  height: 45px;
  width: 100%;
  img {
    width: 60%;
  }
}
.m-close span {
  display: inline-block;
  margin-right: 30px;
  width: 23px;
  height: 23px;
  cursor: pointer;
  background: url(../assets/images/close.png) no-repeat center center;
}
.m-content {
  width: 1245px;
  height: 600px;
}
.m-cmenu {
  width: 100%;
  height: 600px;
  background: url(../assets/images/c_r_bg.png) no-repeat center center;
  ul {
    height: 557px;
    width: 220px;
    list-style: none;
    margin-top: 10px;
    padding: 10px;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 3px;
    .c-active {
      background: url(../assets/images/m_button_2.png) no-repeat center center;
    }
    li {
      width: 158px;
      height: 42px;
      margin: 30px 0 30px 40px;
      line-height: 42px;
      text-align: center;
      cursor: pointer;
      background: url(../assets/images/m_button_1.png) no-repeat center center;
      i::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
      .c-cmenu-v1 {
        background: url(../assets/images/w_icon_v1.png) no-repeat center center;
      }
      .c-cmenu-v2 {
        background: url(../assets/images/w_icon_v2.png) no-repeat center center;
      }
      .c-cmenu-v3 {
        background: url(../assets/images/w_icon_v3.png) no-repeat center center;
      }
      .c-cmenu-v4 {
        background: url(../assets/images/w_icon_v4.png) no-repeat center center;
      }
    }
    li:hover {
      background: url(../assets/images/m_button_2.png) no-repeat center center;
    }
  }
}
.m-ccontent {
  width: 100%;
  height: 600px;
  .m-cconditional {
    margin-top: 30px;
    text-align: left;
    .c-input {
      width: 150px;
      height: 40px;
      padding-left: 10px;
      margin-left: 10px;
      color: #92a1b4;
      background-color: #14375f;
      border: none;
    }
    .c-input:hover,
    .c-input:focus {
      outline: 0;
      border: 1px solid #01bbb8;
    }
    .c-select {
      width: 150px;
      color: #fbfbfb;
      option {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        background-color: #14375f;
        background-color: #14375f;
        color: #fbfbfb;
      }
    }
    .c-button {
      margin-left: 20px;
      height: 40px;
      width: 95px;
      outline: none;
      border: none;
      border-radius: 50px 50px 50px 50px;
      color: #fbfbfb;
      line-height: 40px;
      background-color: #01bbb8;
    }
    .c-button:hover {
      background-color: #21fcf6;
    }
    .c-button-search i::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      background: url(../assets/images/c_search.png) no-repeat center center;
    }
    .c-button-fresh i::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      background: url(../assets/images/c_refresh.png) no-repeat center center;
    }
  }
}
.m-ctable {
  margin-top: 20px;
  .c-table-oper {
    display: inline-block;
    width: 22px;
    height: 22px;
    cursor: pointer;
    background: url(../assets/images/c_operation.png) no-repeat center center;
  }
  .c-table-oper:hover {
    background: url(../assets/images/c_operation_2.png) no-repeat center center;
  }
  .th .ivu-col,
  .tb .ivu-col {
    border-left: none;
  }
}

.m-page {
  margin-top: 10px;
  color: #f0f1f3;
  font-size: 14px;
  .c-page-l {
    text-align: left;
    input {
      color: white;
      width: 50px;
      background-color: #05283b;
      border: 1px solid white;
      outline: none;
    }
  }
  .c-page-r {
    text-align: right;
  }
}

.m-foot {
  width: 1225px;
  height: 260px;
  margin: 10px auto 0;
  .m-foot-l {
    width: 1225px;
    height: 213px;
    margin: auto;
    background: url(../assets/images/c_case_bg4.png) no-repeat center center;
  }
  .m-foot-head::before {
    content: "";
    position: absolute;
    left: -30px;
    width: 30px;
    height: 30px;
    background: url(../assets/images/title-left.png) no-repeat center center;
  }
  .m-foot-head {
    position: absolute;
    left: 50px;
    top: 5px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    color: #0dcba5;
    font-size: 16px;
    font-weight: bolder;
  }
  .m-foot-head::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: url(../assets/images/title-right.png) no-repeat center center;
  }
  .m-foot-statics {
    position: absolute;
    width: 1225px;
    height: 175px;
    top: 20px;
  }
}
</style>

<style>
/*  覆盖iview中分页组件的颜色 */
#cMain .ivu-page-item,
#cMain .ivu-page-prev,
#cMain .ivu-page-next {
  background-color: #032737;
  border: 1px solid #5a6368;
}
#cMain .ivu-page-item a {
  color: white;
}
#cMain .ivu-page-item-active {
  background-color: #0dcba5;
}
#cMain .ivu-page-item:hover {
  color: #0dcba5;
}
/* 修改日期的颜色 */
#cMain .ivu-date-picker-rel {
  top: -2px;
}
#cMain .ivu-date-picker {
  margin: 0 5px 0 5px;
}
#cMain .ivu-input {
  background-color: #14375f;
  height: 40px;
  width: 150px;
  border: none;
  border-radius: 0px;
  color: #92a1b4;
}
#cMain .ivu-select-dropdown {
  color: #fbfbfb;
  background-color: #34aadc;
}
#cMain span.ivu-date-picker-cells-cell-disabled,
span.ivu-date-picker-cells-cell-disabled:hover {
  color: #fbfbfb;
  background-color: #34aadc;
}
#cMain .ivu-date-picker-cells-cell {
  color: #fbfbfb;
  background-color: #50b5e1;
}
#cMain .ivu-date-picker-cells-cell:hover em {
  color: #fbfbfb;
  background-color: #20aab4;
}
</style>


<script>
import echarts from "echarts";
export default {
  name: "wifiSniffing",
  data() {
    return {
      isWPopulation: true,
      isWWarning: false,
      isWSearch: false,
      isWTrack: false,
      staticsTitle: "人流趋势统计",
      // ========================数据 =====================
      content: {
        // ================== 表格数据 ========================
        wifiPopulationInfo: {
          list: [
            { name: "采集场所", span: 4 },
            { name: "采集时间", span: 5 },
            { name: "wifi热点名称", span: 5 },
            { name: "Mac地址", span: 5 },
            { name: "停留时间", span: 3 }
          ],
          data: [
            {
              place: "地铁",
              time: "2017/05/07 15:00:00",
              wifiName: "ZP-LINK2334",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "5分钟"
            },
            {
              place: "广场",
              time: "2017/05/13 12:10:03",
              wifiName: "ZP-LINK2156",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "3分钟"
            },
            {
              place: "客运站",
              time: "2017/06/16 16:25:11",
              wifiName: "ZP-LINK2374",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "6分钟"
            },
            {
              place: "火车站",
              time: "2017/06/31 09:00:00",
              wifiName: "ZP-LINK2377",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "5分钟"
            },
            {
              place: "机场",
              time: "2017/07/07 15:00:00",
              wifiName: "ZP-LINK2143",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "1分钟"
            },
            {
              place: "火车站",
              time: "2017/07/28 15:23:09",
              wifiName: "ZP-LINK5634",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "2分钟"
            },
            {
              place: "广场",
              time: "2017/08/08 21:06:37",
              wifiName: "ZP-LINK2765",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "7分钟"
            },
            {
              place: "机场",
              time: "2017/08/08 07:59:05",
              wifiName: "ZP-LINK2765",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "9分钟"
            },
            {
              place: "客运站",
              time: "2017/09/19 18:21:54",
              wifiName: "ZP-LINK1524",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "2分钟"
            },
            {
              place: "地铁",
              time: "2017/10/23 19:51:13",
              wifiName: "ZP-LINK8763",
              macIP: "7C:91:22:E2:23:C7",
              stayTime: "5分钟"
            }
          ]
        },
        wifiWarningInfo: {
          list: [
            { name: "所属辖区", span: 3 },
            { name: "采集地址", span: 6 },
            { name: "采集时间", span: 4 },
            { name: "报警预警来源", span: 4 },
            { name: "报警预警原因", span: 5 }
          ],
          data: [
            {
              area: "金山卫镇",
              address: "近郊金山区学府路1300号",
              time: "2017/05/03 15:00:00",
              from: "云平台计算",
              reason: "出现轨迹分析中的在逃人员"
            },
            {
              area: "玉兰新村",
              address: "上海市金山区龙航路1508号",
              time: "2017/05/13 12:10:03",
              from: "云平台计算",
              reason: "出现轨迹分析中的在逃人员"
            },
            {
              area: "蒋庄村",
              address: "上海市金山区金张公路348",
              time: "2017/06/16 16:25:11",
              from: "云平台计算",
              reason: "出现轨迹分析中的在逃人员"
            },
            {
              area: "德胜村",
              address: "上海市金山区隆平路776号",
              time: "2017/06/31 09:00:00",
              from: "云平台计算",
              reason: "出现轨迹分析中在涉疆人员"
            },
            {
              area: "山阳镇",
              address: "上海市金山区亭林镇寺平北路80号",
              time: "2017/07/07 15:00:00",
              from: "云平台计算",
              reason: "出现轨迹分析中在涉藏人员"
            },
            {
              area: "金山卫镇",
              address: "上海市金山区众益街899号",
              time: "2017/07/28 15:23:09",
              from: "云平台计算",
              reason: "出现轨迹分析中在敏感人员"
            },
            {
              area: "顾家桥",
              address: "上海市金山区泾宾路888",
              time: "2017/08/08 21:06:37",
              from: "云平台计算",
              reason: "出现轨迹分析中的在逃人员"
            },
            {
              area: "金山卫镇",
              address: "上海市亭枫公路6701号",
              time: "2017/08/08 07:59:05",
              from: "云平台计算",
              reason: "出现轨迹分析中的敏感人员"
            },
            {
              area: "金山卫镇",
              address: "亭枫公路253",
              time: "2017/09/19 18:21:54",
              from: "云平台计算",
              reason: "出现轨迹分析中的涉藏人员"
            },
            {
              area: "金山卫镇",
              address: "近郊金山区学府路1300号",
              time: "2017/05/03 15:00:00",
              from: "云平台计算",
              reason: "出现轨迹分析中的在逃人员"
            }
          ]
        },
        wifiSearchInfo: {
          list: [
            { name: "探测类型", span: 4 },
            { name: "Mac地址", span: 6 },
            { name: "探测地址", span: 7 },
            { name: "探测时间", span: 5 }
          ],
          data: [
            {
              type: "QQ号",
              macIP: "7C:91:22:E2:23:C7",
              address: "近郊金山区学府路1300号",
              time: "2017/05/07 15:00:00"
            },
            {
              type: "陌陌",
              macIP: "7C:91:22:E2:23:C7",
              address: "上海市金山区龙航路1508号",
              time: "2017/05/13 12:10:03"
            },
            {
              type: "微博",
              macIP: "7C:91:22:E2:23:C7",
              address: "上海市金山区金张公路348",
              time: "2017/06/16 16:25:11"
            },
            {
              type: "手机号",
              macIP: "7C:91:22:E2:23:C7",
              address: "上海市金山区隆平路776号",
              time: "2017/06/31 09:00:00"
            },
            {
              type: "淘宝",
              macIP: "7C:91:22:E2:23:C7",
              address: "上海市金山区亭林镇寺平北路80号",
              time: "2017/07/07 15:00:00"
            },
            {
              type: "滴滴打车",
              macIP: "7C:91:22:E2:23:C7",
              address: "上海市金山区众益街899号",
              time: "2017/07/28 15:23:09"
            },
            {
              type: "美团",
              macIP: "7C:91:22:E2:23:C7",
              address: "上海市金山区泾宾路888",
              time: "2017/08/08 21:06:37"
            },
            {
              type: "携程旅游",
              macIP: "7C:91:22:E2:23:C7",
              address: "上海市亭枫公路6701号",
              time: "2017/08/08 07:59:05"
            },
            {
              type: "IMSI",
              macIP: "7C:91:22:E2:23:C7",
              address: "亭枫公路253",
              time: "2017/09/19 18:21:54"
            },
            {
              type: "IMEI",
              macIP: "7C:91:22:E2:23:C7",
              address: "近郊金山区学府路1300号",
              time: "2017/05/07 15:00:00"
            }
          ]
        },
        wifiTrackInfo: {
          list: [
            { name: "Mac地址", span: 7 },
            { name: "出现次数", span: 5 },
            { name: "活动轨迹", span: 10 }
          ],
          data: [
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "5次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "5次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "6次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "4次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "4次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "8次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "4次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "5次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "5次",
              track: "XX酒店...XX路口...网吧"
            },
            {
              macIP: "7C:91:22:E2:23:C7",
              number: "5次",
              track: "XX酒店...XX路口...网吧"
            }
          ]
        },
        // ======================统计图数据===========================

        cvsWifiPopulationTs: {
          color: ["#0dcba5", "rgba(13, 203, 165, 0.53)", "#1d5375"],
          color2: ["#37a4ff", "rgba(55, 164, 255, 0.52)", "#134e5b"],
          data: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          data2: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          xAxis: function() {
            let arr = [
              "金山卫镇",
              "山阳镇",
              "蒋庄村",
              "也谢站",
              "联建村",
              "顾家滨桥",
              "龙泉港",
              "玉兰新村",
              "德胜村",
              "高桥村",
              "下横金桥"
            ];

            return arr;
          }
        },
        cvsWifiWarningTs: {
          color: ["#f45e60", "rgba(244, 94, 96, 0.52)", "#3e3b50"],
          color2: ["#37a4ff", "rgba(55, 164, 255, 0.52)", "#134e5b"],
          data: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          data2: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          xAxis: function() {
            let arr = [
              "金山卫镇",
              "山阳镇",
              "蒋庄村",
              "也谢站",
              "联建村",
              "顾家滨桥",
              "龙泉港",
              "玉兰新村",
              "德胜村",
              "高桥村",
              "下横金桥"
            ];

            return arr;
          }
        },
        cvsWifiSearchTs: {
          color: ["#4878ff", "rgba(72, 120, 255, 0.52)", "#133a65"],
          color2: ["#37a4ff", "rgba(55, 164, 255, 0.52)", "#205081"],
          data: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          data2: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          xAxis: function() {
            let arr = [
              "金山卫镇",
              "山阳镇",
              "蒋庄村",
              "也谢站",
              "联建村",
              "顾家滨桥",
              "龙泉港",
              "玉兰新村",
              "德胜村",
              "高桥村",
              "下横金桥"
            ];

            return arr;
          }
        },
        cvsWifiTrackTs: {
          color: ["#37a4ff", "rgba(18, 200, 63, 0.52)", "#0b4c4d"],
          color2: ["#12c83f", "rgba(55, 164, 255, 0.52)", "#134e5b"],
          data: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          data2: function(argument) {
            let arr = [];
            for (var i = 0; i < 11; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          xAxis: function() {
            let arr = [
              "金山卫镇",
              "山阳镇",
              "蒋庄村",
              "也谢站",
              "联建村",
              "顾家滨桥",
              "龙泉港",
              "玉兰新村",
              "德胜村",
              "高桥村",
              "下横金桥"
            ];

            return arr;
          }
        }
      }
    };
  },
  mounted() {
    this.wifiTs(this.content.cvsWifiPopulationTs);
  },
  watch: {
    // 监听数据是否有改变
    content: (newValue, oldValue) => {
      console.log(newValue);
      console.log("========================旧数据=============");
      console.log(oldValue);
    }
  },
  methods: {
    search(type) {
      switch (type) {
        case "mentalP":
          break;
        case "letterP":
          break;
        case "drugp":
          break;
        case "stabilityO":
          break;
        case "termerP":
          break;
        case "missP":
          break;
        case "sensitiveP":
          break;
      }
    },
    refresh(type) {
      switch (type) {
        case "mentalP":
          break;
        case "letterP":
          break;
        case "drugp":
          break;
        case "stabilityO":
          break;
        case "termerP":
          break;
        case "missP":
          break;
        case "sensitiveP":
          break;
      }
    },
    lookMore() {},
    popClose() {},
    getPage(page) {
      // 根据接口获取新的数据
    },
    wifiPopulation() {
      this.isWPopulation = true;
      this.isWWarning = false;
      this.isWSearch = false;
      this.isWTrack = false;
      this.wifiTs(this.content.cvsWifiPopulationTs);
    },
    wifiWarning() {
      this.isWPopulation = false;
      this.isWWarning = true;
      this.isWSearch = false;
      this.isWTrack = false;
      this.wifiTs(this.content.cvsWifiWarningTs);
    },
    wifiSearch() {
      this.isWPopulation = false;
      this.isWWarning = false;
      this.isWSearch = true;
      this.isWTrack = false;
      this.wifiTs(this.content.cvsWifiSearchTs);
    },
    wifiTrack() {
      this.isWPopulation = false;
      this.isWWarning = false;
      this.isWSearch = false;
      this.isWTrack = true;
      this.wifiTs(this.content.cvsWifiTrackTs);
    },

    wifiTs(datas) {
      let myChart = echarts.init(document.getElementById("wifiStatics"));
      let option = {
        legend: {
          data: ["本月", "上月"],
          x: "right",
          textStyle: {
            color: "#fbfbfb"
          }
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          backgroundColor: "RGBA(255,255,255,0.8)",
          // formatter: "{b}: <br /> {c0}人<br/>{c1}人",
          textStyle: {
            color: "#333"
          },
          formatter: function(e) {
            let html = "";
            e.forEach(e => {
              html += e.seriesName + e.name + ":" + e.value + "件<br/>";
            });
            return html;
          }
        },

        grid: {
          top: "20%",
          left: "3%",
          right: "3%",
          bottom: "12%"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: "#5e7383"
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#5e7383"]
            }
          },

          axisLine: {
            lineStyle: {
              color: "#5e7383"
            }
          },
          data: datas.xAxis()
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#5e7383"
          },
          splitLine: {
            lineStyle: {
              color: ["#0c4061"]
            }
          },
          axisLine: {
            lineStyle: {
              color: "#0c4061"
            }
          }
        },
        color: [datas.color[0], datas.color2[0]],
        series: [
          {
            name: "本月",
            data: datas.data(),
            type: "line",
            smooth: true, //这句就是让曲线变平滑的
            showSymbol: false,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: datas.color[1]
                  },
                  {
                    offset: 1,
                    color: datas.color2[2]
                  }
                ])
              }
            }
          },
          {
            name: "上月",
            data: datas.data2(),
            type: "line",
            smooth: true, //这句就是让曲线变平滑的
            showSymbol: false,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: datas.color2[1]
                  },
                  {
                    offset: 1,
                    color: datas.color2[2]
                  }
                ])
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>


