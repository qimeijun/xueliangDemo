<template>
  <div class="content">
    <Row>
      <Col span="6">
      <div class="index">
        <div class="header">
          <div class="move" @click="popUpIndex"><span>详情</span>
            <Icon type="qr-scanner"></Icon>
          </div>
        </div>
        <Row class="box">
          <Col span="12">
          <div class="display">
            <div class="title">所有人口总量</div>
            <div class="charts" id="total-population"></div>
          </div>
          </Col>
          <Col span="12">
          <div class="display">
            <div class="title">来泸人口的户籍统计</div>
            <div class="charts-legend">
              <div class="pull-right legend" v-for="(name,i) in content.cvsHouseholdRegistration.city">
                <div class="symbol" :style="{background:content.cvsHouseholdRegistration.color[i]}"></div>{{name}} </div>
            </div>
            <div class="charts" id="household-registration"></div>
          </div>
          </Col>
          <Col span="12">
          <div class="display2">
            <div class="title">全部人口统计</div>
            <Col span="9" style="height:100%">
            <div class="charts" id="all-total-population-male"></div>
            </Col>
            <Col span="9" style="height:100%">
            <div class="charts" id="all-total-population-female"></div>
            </Col>
            <Col span="6" style="height:100%">
            <div class="m-f-p">
              <span>&nbsp;全部人口男女比例</span>
              <div class="male">
                <span v-for="i in content.cvsAllTotalPopulation.male.number" :class="{active:!i}"></span>
                <strong>{{content.cvsAllTotalPopulation.male.value}}%</strong>
              </div>
              <div class="female">
                <span v-for="i in content.cvsAllTotalPopulation.female.number" :class="{active:!i}"></span>
                <strong>{{content.cvsAllTotalPopulation.female.value}}%</strong>
              </div>
            </div>
            </Col>
          </div>
          </Col>
          <Col span="12">
          <div class="display2">
            <div class="title">户籍人口统计</div>
            <Col span="9" style="height:100%">
            <div class="charts" id="all-total-household-male"></div>
            </Col>
            <Col span="9" style="height:100%">
            <div class="charts" id="all-total-household-female"></div>
            </Col>
            <Col span="6" style="height:100%">
            <div class="m-f-p">
              <span>&nbsp;户籍人口男女比例</span>
              <div class="male">
                <span v-for="i in content.cvsTotalhousehold.male.number" :class="{active:!i}"></span>
                <strong>{{content.cvsTotalhousehold.male.value}}%</strong>
              </div>
              <div class="female">
                <span v-for="i in content.cvsTotalhousehold.female.number" :class="{active:!i}"></span>
                <strong>{{content.cvsTotalhousehold.female.value}}%</strong>
              </div>
            </div>
            </Col>
          </div>
          </Col>
        </Row>
      </div>
      <div class="specialcrowd">
        <div class="header">
          <div class="move" @click="popUpIndex"><span>详情</span>
            <Icon type="qr-scanner"></Icon>
          </div>
        </div>
        <Row class="box ">
          <Col span="15">
          <div class="display special-p-s">
            <div class="title">特殊人群事件统计</div>
            <div class="charts" id="special-p-s"></div>
            <div class="charts-legend">
              <div class="pull-right legend" v-for="(name,i) in content.cvsSaseStatistics.legend">
                <div class="symbol" :style="{background:content.cvsSaseStatistics.color[i]}"></div>{{name}} </div>
            </div>
          </div>
          <div class="display special-crowd">
            <div class="title">特殊人群人员统计</div>
            <div class="charts" id="special-crowd"></div>
          </div>
          </Col>
          <Col span="9">
          <div style="margin-left:20px;">
            <div class="display special-trend">
              <div class="title">特殊人群趋势统计</div>
              <div class="charts-legend" style="top:75px">
                <div class="pull-right legend" v-for="(name,i) in content.cvsSpecialTrend.legend" style="width:80px">
                  <div class="symbol" :style="{background:content.cvsSpecialTrend.color[i]}"></div>{{name}} </div>
              </div>
              <div class="charts" id="special-trend"> </div>
            </div>
          </div>
          </Col>
        </Row>
      </div>
      <div class="managementCase">
        <div class="header">
          <div class="move" @click="popUpIndex"><span>详情</span>
            <Icon type="qr-scanner"></Icon>
          </div>
        </div>
        <Row class="box">
          <div class="display">
            <div class="title">案件数量统计</div>
            <div class="charts" id="case-statistics"> </div>
          </div>
          <Col span="24" style="margin-top:10px">
          <Col span="8">
          <div class="display type-statistics">
            <div class="title">案件详情详细统计</div>
            <div class="radar-b"></div>
            <div class="charts" id="type-statistics"> </div>
          </div>
          </Col>
          <Col span="16" style="padding-left:20px;">
          <div class="display table-b">
            <div class="title">重点案件情况</div>
            <div class="charts" style="padding:80px 30px 0px 30px;">
              <div class="table">
                <div class="th clearfix">
                  <Col span="3"><strong>类型</strong></Col>
                  <Col span="11"><strong>内容</strong></Col>
                  <Col span="3"><strong>李明</strong></Col>
                  <Col span="3"><strong>状态</strong></Col>
                  <Col span="4"><strong>时间</strong></Col>
                  <div class="clearfix"></div>
                </div>
                <div class="tb clearfix" v-for="list in content.table.list">
                  <Col span="3">{{list.type}}</Col>
                  <Col span="11" style="text-align: left;">{{list.content}}</Col>
                  <Col span="3">{{list.head}}</Col>
                  <Col span="3">{{list.state}}</Col>
                  <Col span="4">{{list.date}}</Col>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          </Col>
          </Col>
        </Row>
      </div>
      </Col>
      <Col span="12">
      <div class="mainMap" style="background:#000">
        <div class="header"></div>
        <Row>
          <div class="explain-b">
            <div class="ex-content">
              <div class="ex-title">
                护路巡逻区域
              </div>
              <ul>
                <li v-for="items in content.Mlist">
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
          <div class="btn" v-for="(itme,i) in ['ry-mg','s_c','case_mg','lj_wf','key_enterp','r_pt','max_video']" :class="[itme,(content.MindexMenu==i?(itme+'_act'):'')]" @click="clickBtn(i)"></div>
        </div>
      </div>
      <div class="video">
        <Row>
          <Col span="12" class="m-v">
          <div class="explain-b">
            <div class="ex-content">
              <div class="ex-title">
                主要干道
              </div>
              <ul>
                <li v-for="items in content.Vlist">
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
      </Col>
      <Col span="6">
      <div class="keyEnterprises">
        <div class="header">
          <div class="move" @click="popUpIndex"><span>详情</span>
            <Icon type="qr-scanner"></Icon>
          </div>
        </div>
        <Row class="box">
          <Col span="8">
          <div class="display" id="zdwh">
            <div class="title">重点企业占比</div>
            <div class="pie-name">{{content.cvsProportion.name[0]}} {{content.cvsProportion.value[0]}} 所</div>
            <div class="pie-name" style="left:380px">{{content.cvsProportion.name[1]}} {{content.cvsProportion.value[1]}} 所</div>
            <div class="pie-name" style="top:800px;">{{content.cvsProportion.name[2]}} {{content.cvsProportion.value[2]}} 所</div>
            <div class="pie-name" style="top:800px;left:380px">{{content.cvsProportion.name[3]}} {{content.cvsProportion.value[3]}} 所</div>
            <div class="charts" id="proportion"></div>
          </div>
          </Col>
          <Col span="16">
          <div class="display" id="inspect-bg" style="margin-left:20px">
            <div class="title">重点企业检查</div>
            <div class="charts" id="inspect">
              <div class="b-m tb-title clearfix">
                <Col span="2" class="b-r ellipsis">序号</Col>
                <Col span="9" class="b-r ellipsis">问题</Col>
                <Col span="6" class="b-r ellipsis">企业名称</Col>
                <Col span="2" class="b-r ellipsis">企业法人</Col>
                <Col span="3" class="b-r ellipsis">检查时间</Col>
                <Col span="2" class="ellipsis">状态</Col>
              </div>
              <div class="b-m tbs clearfix" v-for="(items,i) in content.keyEnterprisesTb">
                <Col span="2" class="b-r ellipsis"><strong>{{i+1}}</strong></Col>
                <Col span="9" class="b-r ellipsis">{{items.problem}}</Col>
                <Col span="6" class="b-r ellipsis">{{items.company}}</Col>
                <Col span="2" class="b-r ellipsis">{{items.name}}</Col>
                <Col span="3" class="b-r ellipsis">{{items.time}}</Col>
                <Col span="2" class="ellipsis">
                <span v-if="items.state">已处理</span>
                <span v-else style="color:#bf4a4a">未处理</span>
                </Col>
              </div>
              <div class="display2">
                <div class="charts-legend">
                  <div class="pull-right legend" v-for="(name,i) in content.cvsContrast.legend">
                    <div class="symbol" :style="{background:content.cvsContrast.color[i]}"></div>{{name}} </div>
                </div>
                <div id="contrast"></div>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </div>
      <div class="railwayProtection">
        <div class="header">
          <div class="move" @click="popUpIndex"><span>详情</span>
            <Icon type="qr-scanner"></Icon>
          </div>
        </div>
        <Row class="box">
          <Col span="24">
          <div class="display" style="height:430px;">
            <div class="title">特殊人群事件统计</div>
            <div class="charts-legend">
              <div class="pull-right legend" v-for="(name,i) in content.cvsRailwaySituation.legend">
                <div class="symbol" :style="{background:content.cvsRailwaySituation.color[i]}"></div>{{name}} </div>
            </div>
            <div class="charts" id="railway-situation"></div>
          </div>
          </Col>
          <Col span="5">
          <div class="display" id="ranking">
            <div class="title">铁路时间排名</div>
            <div class="charts" style="padding-top:90px;">
              <ul>
                <li class="l-title">
                  <Col span="5" class="l-r-p">序号</Col>
                  <Col span="15" class="l-r-p">段面</Col>
                  <Col span="4" class="l-r-p">数量</Col>
                </li>
                <li v-for="(item,i) in content.cvsRanking">
                  <Col span="5" class="l-r-p">{{i+1}}</Col>
                  <Col span="15" class="l-r-p">{{item.name}}</Col>
                  <Col span="4" class="l-r-p">{{item.numbers}}</Col>
                </li>
              </ul>
            </div>
          </div>
          </Col>
          <Col span="13">
          <div class="display r-map-st">
            <div class="title">铁路段面状态</div>
            <div class="charts-legend">
              <div class="pull-right legend" v-for="(name,i) in content.cvsRState.legend">
                <div class="symbol" :style="{background:content.cvsRState.color[i]}"></div>{{name}} </div>
            </div>
            <div class="charts" id="r-map-st">
            </div>
          </div>
          </Col>
          <Col span="6">
          <div class="display" id="security-bg">
            <div class="title">铁路安全指数</div>
            <div class="charts" id="security">
              <div class="nb">
                77%
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </div>
      <div class="wifiFixed">
        <div class="header">
          <div class="move" @click="popUpIndex"><span>详情</span>
            <Icon type="qr-scanner"></Icon>
          </div>
        </div>
        <Row class="box">
          <Col span="16">
          <div class="display progress-r-b">
            <div class="title">区域概况</div>
            <div class="charts">
              <div class="progress-r">
                <div class="progress">
                  <span class="f-l">实时人数</span>
                  <span class="f-r">12442人</span>
                  <div class="progress-b">
                    <div class="progress-v" style="width:30%"></div>
                  </div>
                </div>
              </div>
              <div class="progress-r">
                <div class="progress">
                  <span class="f-l">当日人数</span>
                  <span class="f-r">13442人数</span>
                  <div class="progress-b">
                    <div class="progress-v" style="width:40%"></div>
                  </div>
                </div>
              </div>
              <div class="progress-r">
                <div class="progress">
                  <span class="f-l">警告区域</span>
                  <span class="f-r">12人</span>
                  <div class="progress-b">
                    <div class="progress-v" style="width:2%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Col>
          <Col span="8">
          <div class="charts" id="wifi">
          </div>
          </Col>
          <Col span="24" class="region">
          <div class="title">
            <span>涉疆人群</span> <span class="br"> 132 </span>
          </div>
          <div class="r-list">
            <ul>
              <li style="background:#24419f">乌鲁木齐 <span>22人</span></li>
              <li style="background:#d4a659"> 阿克苏<span>21人</span></li>
              <li style="background:#8b103e">伊犁 <span>34人</span></li>
              <li style="background:#20509a">昌吉回族自治县 <span>2人</span></li>
              <li style="background:#73bf7e">和田 <span>11人</span></li>
              <li style="background:#065381">柯尔克孜<span>12人</span></li>
              <li style="background:#5360c0">吐鲁番市<span>13人</span></li>
              <li style="background:#2299ad">伊宁市 <span>13人</span></li>
            </ul>
          </div>
          <div class="title">
            <span>涉疆人群</span> <span class="br"> 110 </span>
          </div>
          <div class="r-list" style="margin-bottom:0px">
            <ul>
              <li style="background:#2299ad">西藏 <span>22人</span></li>
              <li style="background:#1474c8">甘孜<span>21人</span></li>
              <li style="background:#24419f">阿贝 <span>34人</span></li>
              <li style="background:#5ea152">那曲市<span>2人</span></li>
              <li style="background:#f35e60">喀什<span>11人</span></li>
              <li style="background:#5189f8">日喀则<span>12人</span></li>
              <li style="background:#b57535">昌都市<span>13人</span></li>
              <li style="background:#145dac">林芝市 <span>13人</span></li>
            </ul>
          </div>
          </Col>
        </Row>
      </div>
      </Col>
    </Row>
    <specialCrowd  v-show="specialCrowd"></specialCrowd>
  </div>
  
</template>
<script>
// var echarts = require("echarts");
import echarts from "echarts"
import specialCrowd from "@/components/specialCrowd.vue";
export default {
  name: "index",
  data() {
    return {
      content: {
        cvsTotalPopulation: {
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
          ]
        },
        cvsHouseholdRegistration: {
          city: [
            "江西省",
            "广西路",
            "贵州省",
            "湖南省",
            "湖北省",
            "河南省",
            "山西省",
            "山东省",
            "浙江省",
            "江苏省",
            "四川省",
            "重庆市"
          ],
          // color: ['#81c1ff', '#374b94', '#5e6eaa', '#0ab120', '#c0d7ff', '#405a8d', "#557dee", '#24419f', '#23559c', '#336fd1', '#365f93', '#276ca3', '#03589b', '#03589b']
          color: [
            "#7ec0ff",
            "#364996",
            "#5d6cae",
            "#bed7ff",
            "#405790",
            "#537aef",
            "#223ca4",
            "#1b4681",
            "#306bd4",
            "#345f94",
            "#226ca6",
            "#02559a",
            "#70a1c8 ",
            "#71a2cb",
            "#5f96ff",
            "#4f91d4",
            "#3d55b5",
            "#5d6dac"
          ]
        },
        cvsAllTotalPopulation: {
          male: { number: [true, true, true, true, false], value: 65 },
          female: { number: [true, true, true, false], value: 35 },
          maleData: [
            {
              value: 442,
              name: "1-10岁"
            },
            {
              value: 350,
              name: "10-18岁"
            },
            {
              value: 500,
              name: "18-40岁"
            },
            {
              value: 432,
              name: "40-70岁"
            },
            {
              value: 380,
              name: "70-100岁"
            }
          ],
          femaleData: [
            {
              value: 442,
              name: "1-10岁"
            },
            {
              value: 350,
              name: "10-18岁"
            },
            {
              value: 500,
              name: "18-40岁"
            },
            {
              value: 432,
              name: "40-70岁"
            },
            {
              value: 380,
              name: "70-100岁"
            }
          ]
        },
        cvsTotalhousehold: {
          male: { number: [true, true, true, true, false], value: 65 },
          female: { number: [true, true, true, false], value: 35 },
          maleData: [
            {
              value: 442,
              name: "1-10岁"
            },
            {
              value: 350,
              name: "10-18岁"
            },
            {
              value: 500,
              name: "18-40岁"
            },
            {
              value: 432,
              name: "40-70岁"
            },
            {
              value: 380,
              name: "70-100岁"
            }
          ],
          femaleData: [
            {
              value: 442,
              name: "1-10岁"
            },
            {
              value: 350,
              name: "10-18岁"
            },
            {
              value: 500,
              name: "18-40岁"
            },
            {
              value: 432,
              name: "40-70岁"
            },
            {
              value: 380,
              name: "70-100岁"
            }
          ]
        },
        // 特殊人群
        cvsSaseStatistics: {
          color: ["#145ca9", "#5475c6"],
          legend: ["本月", "上月"],
          data: (function(argument) {
            let arr = [];
            for (var i = 0; i < 12; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          })(),
          data2: (function(argument) {
            let arr = [];
            for (var i = 0; i < 12; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          })(),
          xAxis: (function() {
            let arr = [];
            for (var i = 0; i < 12; i++) {
              let n = Number(i) + 1;
              n = n < 10 ? "0" + n : n;
              arr.push("2017." + n);
            }
            return arr;
          })()
        },
        cvsSpecialTrend: {
          color: [
            "#449caa",
            "#4990e2",
            "#377dff",
            "#7b7eff",
            "#1474c8",
            "#2d6483",
            "#303f60"
          ],
          legend: []
        },
        cvsSpecialCrowd: {
          data: [
            { name: "吸毒人员", value: 420 },
            { name: "信访人员", value: 154 },
            { name: "维稳对象", value: 251 },
            { name: "精神病人", value: 340 },
            { name: "失踪人员", value: 305 },
            { name: "敏感人员", value: 380 },
            { name: "社区服刑", value: 343 }
          ],
          color: [
            "#449caa",
            "#4990e2",
            "#377dff",
            "#7b7eff",
            "#1474c8",
            "#2d6483",
            "#344998"
          ]
        },
        // 案件管理
        cvsMSaseStatistics: {
          data: function(argument) {
            let arr = [];
            for (var i = 0; i < 12; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          },
          xAxis: function() {
            let arr = [];
            for (var i = 0; i < 12; i++) {
              arr.push("2017年" + (Number(i) + 1) + "月");
            }
            return arr;
          }
        },
        cvsTypeStatistics: {
          indicator: [
            { text: "抢劫", max: 100 },
            { text: "打架斗殴", max: 100 },
            { text: "诈骗", max: 100 },
            { text: "赌博", max: 100 },
            { text: "扰乱公共秩序", max: 100 },
            { text: "色情", max: 100 }
          ],
          data: [60, 73, 85, 40, 50, 60]
        },
        table: {
          list: [
            {
              type: "打架",
              content: "聚众打架斗殴",
              head: "李明",
              state: "未解决",
              date: "2017-09-25"
            },
            {
              type: "火灾",
              content:
                "住宅区1栋5楼发生重大火灾，由于可燃物较多，火势较猛，已经造成10人严重烧伤 ",
              head: "李明",
              state: "未解决",
              date: "2017-09-25"
            },
            {
              type: "色情",
              content: "已抓获多名来沪卖淫女子，有涉及团伙作案嫌疑，有待排查",
              head: "秦晓峰",
              state: "未解决",
              date: "2017-09-25"
            },
            {
              type: "两抢",
              content:
                "昨夜凌晨2点，于栈桥后方小道，发生抢劫时间，受害人金某多处受伤严重，正在调查",
              head: "徐浪波",
              state: "已解决",
              date: "2017-09-25"
            },
            {
              type: "赌博",
              content:
                "昨日工抓获6位聚赌人员，抓获地点于新奇便利店后方，拘留处理",
              head: "黄佳林",
              state: "已解决",
              date: "2017-09-25"
            },
            {
              type: "火灾",
              content:
                "住宅区1栋5楼发生重大火灾，由于可燃物较多，火势较猛，已经造成10人严重烧伤  ",
              head: "李明",
              state: "未解决",
              date: "2017-09-25"
            },
            {
              type: "色情",
              content: "已抓获多名来沪卖淫女子，有涉及团伙作案嫌疑，有待排查",
              head: "秦晓峰",
              state: "未解决",
              date: "2017-09-25"
            }
          ]
        },
        MindexMenu: 5,
        Mlist: [
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
        Mpoints: [
          [121.332778, 30.750986],
          [121.301157, 30.760359],
          [121.362673, 30.758497],
          [121.279023, 30.728762],
          [121.314165, 30.727024],
          [121.379489, 30.74031],
          [121.246971, 30.714233]
        ],
        Vlist: [
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
          { name: "金山大道 （国道）" }
        ],
        // 重点企业
        cvsProportion: {
          name: ["学校", "医院", "加油站", "工厂"],
          value: [10, 30, 80, 37]
        },
        cvsContrast: {
          legend: ["上月", "本月"],
          color: ["#7a7efc", "#21ebdd"]
        },

        keyEnterprisesTb: [
          {
            problem: "生产污水排量过大，已命令其整改",
            company: "惠农科技生物有限公司",
            name: "黄有龙",
            time: "2017.02.04",
            state: 1
          },
          {
            problem: "学校门口发生聚众斗殴事件，已责罚有关涉事人员",
            company: "华东师范大学第三附属中学",
            name: "李国富",
            time: "2017.03.23",
            state: 1
          },
          {
            problem: "医院住院处发生医闹，一名医生受伤",
            company: "复旦大学附属金山医院",
            name: "王宇翔",
            time: "2017.04.06",
            state: 0
          },
          {
            problem: "三级加油站埋地油罐距三类建筑物间距不足10米",
            company: "中国石油天然气股份有限公司",
            name: "周吉平",
            time: "2017.06.15",
            state: 1
          },
          {
            problem: "作业现场有易燃易爆类化学用品",
            company: "上海宝钢集团公司",
            name: "袁开福",
            time: "2017.06.05",
            state: 1
          },
          {
            problem: "生产废弃排量过大，已命令其整改",
            company: "上海宝钢集团公司",
            name: "李开来",
            time: "2017.07.06",
            state: 1
          },
          {
            problem: "排污废水铜含量超过0.2毫克/升",
            company: "上海市金山铜加工厂",
            name: "郑永元",
            time: "2017.08.13",
            state: 1
          },
          {
            problem: "学校操场发生严重欺凌事件，已责罚校长加强管理",
            company: "金山中学",
            name: "陈建斌",
            time: "2017.10.21",
            state: 1
          },
          {
            problem: "炼钢厂作业噪音过大，影响周边居民休息，被举报",
            company: "金山钢厂第三炼钢加工厂",
            name: "张建武",
            time: "2017.11.09",
            state: 1
          }
        ],

        // 铁路护路
        cvsRailwaySituation: {
          color: ["#1beff2", "#7b7eff"],
          legend: ["本月", "上月"],
          data: (function(argument) {
            let arr = [];
            for (var i = 0; i < 12; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          })(),
          data2: (function(argument) {
            let arr = [];
            for (var i = 0; i < 12; i++) {
              arr.push(Math.round(Math.random() * 100 + 1));
            }
            return arr;
          })(),
          xAxis: [
            "金山卫镇段面",
            "山阳镇段面",
            "蒋庄村段面",
            "叶榭站段面",
            "联建村段面",
            "顾家滨桥段面",
            "龙泉港段面",
            "玉兰新村段面",
            "德胜村段面",
            "高桥村段面",
            "下横径桥段面"
          ]
        },
        cvsRanking: [
          { name: "金山卫镇段面", numbers: 35 },
          { name: "山阳镇段面", numbers: 27 },
          { name: "叶榭站段面", numbers: 25 },
          { name: "顾家滨桥段面", numbers: 22 },
          { name: "联建村段面", numbers: 20 },
          { name: "玉兰新村段面", numbers: 16 },
          { name: "德胜村段面", numbers: 12 },
          { name: "高桥村段面", numbers: 10 },
          { name: "下横径桥段面", numbers: 8 },
          { name: "蒋庄村段面", numbers: 6 }
        ],
        cvsRState: {
          legend: ["未处理", "已解决", "没问题"],
          color: ["#f45e60", "#f5a623", "#4fe3c1"]
        },

        // wifi
        Rpoints: [
          {
            color: "#f45e60",
            p: [
              new BMap.Point(121.310359, 30.719422),
              new BMap.Point(121.313988, 30.72085)
            ]
          },
          {
            color: "#f5a623",
            p: [
              new BMap.Point(121.313988, 30.72085),
              new BMap.Point(121.318659, 30.720741)
            ]
          },
          {
            color: "#4fe3c1",
            p: [
              new BMap.Point(121.318659, 30.720741),
              new BMap.Point(121.32669, 30.721587)
            ]
          },
          {
            color: "#f45e60",
            p: [
              new BMap.Point(121.32669, 30.721587),
              new BMap.Point(121.331155, 30.722426)
            ]
          }
        ]
      },
      date: "",
      MentalPatientspopUp: false
    };
  },
  mounted() {
    // setInterval(e => {
    //   window.location.reload()
    // }, 1000 * 60)

    this.totalPopulation();
    this.householdRegistration();
    this.allTotalPopulation();
    this.totalhousehold();

    // ===============特殊人群=====================

    this.specialProblemStatistics();
    this.specialCrowd();
    this.specialTrend();
    // =================案件管理===================
    this.caseStatistics();
    this.typeStatistics();
    // =================大地图===================
    this.initMap();
    // =================重点企业===================
    this.proportion();
    this.contrast();
    // =================铁路护路===================
    this.railwayProtection();
    this.rMap();
    // ===============wifi 嗅探====================
    this.oneYearTurnover();
  },
  components: {
    specialCrowd
  },
  methods: {
    // 全部人口总量
    totalPopulation() {
      let myChart = echarts.init(document.getElementById("total-population"));
      let data = this.content.cvsTotalPopulation.data;
      let option = {
        title: {
          text: 0,
          subtext: "人口总量",
          x: "center",
          y: "255",
          textStyle: {
            fontWeight: "bold",
            fontSize: 40,
            color: "#8ee4fd"
          },
          subtextStyle: {
            fontWeight: "normal",
            fontSize: 30,
            color: "#8ee4fd"
          }
        },
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
            center: ["50%", "55%"],
            radius: ["35%", "70%"],
            color: ["#2c82bf", "#76defb", "#2264c2"],

            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 25
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
            radius: ["70%", "80%"],
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)"
              }
            },
            label: {
              normal: {
                formatter: ["{a|{b}\n{c}}"].join("\n"),
                rich: {
                  a: {
                    color: "#8ee4fd",
                    padding: 5,
                    fontSize: 25
                  }
                }
              }
            },
            data: data
          }
        ]
      };

      data.forEach(e => {
        option.title.text = option.title.text + e.value;
      });
      myChart.setOption(option);
    },
    // 来泸人口的户籍统计
    householdRegistration() {
      let myChart = echarts.init(
        document.getElementById("household-registration")
      );
      let cvsHouseholdRegistration = this.content.cvsHouseholdRegistration;
      let color = cvsHouseholdRegistration.color;
      let option = {
        tooltip: {
          formatter: "{b}：{c} 人",
          backgroundColor: "RGBA(255,255,255,0.8)",
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: cvsHouseholdRegistration.city,
            axisLabel: {
              color: "#7b8493",
              margin: 25,
              align: "center",
              rotate: 25
            },

            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "#315265"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "#7b8493"
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#315265"]
              }
            },
            axisLine: {
              lineStyle: {
                color: "#315265"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            barWidth: "35",
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c} 人",
                color: "#73eae0"
              }
            },
            data: (function() {
              let arr = [];
              cvsHouseholdRegistration.city.forEach((e, i) => {
                let data = {
                  name: e,
                  value: parseInt(
                    Math.random() * 10 * (Math.random() + 1 * 10)
                  ),
                  itemStyle: {
                    color: color[i]
                  }
                };
                arr.push(data);
              });
              return arr;
            })()
          }
        ]
      };

      myChart.setOption(option);
    },
    // 全部人口统计
    allTotalPopulation() {
      let myChart = echarts.init(
        document.getElementById("all-total-population-male")
      );
      let data = this.content.cvsAllTotalPopulation.maleData;
      let giftImageUrl =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABCCAYAAAA2RtSlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRGQzFBQ0U0MEJEMzExRThBQkU4QTc0M0Q1MTQ2MTUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRGQzFBQ0U1MEJEMzExRThBQkU4QTc0M0Q1MTQ2MTUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEZDMUFDRTIwQkQzMTFFOEFCRThBNzQzRDUxNDYxNTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEZDMUFDRTMwQkQzMTFFOEFCRThBNzQzRDUxNDYxNTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4mhbU9AAAB30lEQVR42uyaPUsDQRCGLyYQLC30B1ikUPALEdJY6D+wsQkINlqoYKUWWsfqQCsrC1GwEVIEbBT8aBSxEVEQLOwECzkUiZqc78KIIne3O5ddsJiFl0luJ+8+O3e3yXLJhGHocdvYam0cYR4aoEOXkL+3kN/lemW4ABh8DWE2pnsdEHPOADB4CWFLk1YCxLapZwuzYosGOUtOKoDZdyA8Gvq2owpPtivQ5iKXA6Bmb1KukFEpcwCU9Bnh1CD1BLmBq4twGWok9Ku+FY4hCwAzO0KYhuoR3erYFOW4W4jojuimxahfedBKqBaha+croe2WS5ilOj0j0CjUCeWZ3jXoHjqADlGdhnEFMPgQwibUZWmi6tRMAuJcC4DBBxGOoVbL1X6DhgFxobsLfAeDe+Tpm9yGRYfXXNEEIOsQINvsSmi9CYAJwARUTuFdps82DRBwvt///H4I5BoQAAEQAAEQAAFIA/AZscFI2z403pEAG79e39AeIa6dkeKa2qjexnhHA2DjMINQgHqgPrx/TRhgnxS3m35B6CWvAnnr94ZIvLN1juH1jnAld4EACIAACIAACIAACIAACMC/BcgZ5j0wj+v62BWoQOrPCd/PC9UDqCq0Q6p6Pw8065RbMTH+EmAAVTKHpcZlcyQAAAAASUVORK5CYII=";

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
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: giftImageUrl,
                width: 25
              },
              left: "48%",
              top: "53%"
            }
          ]
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            center: ["52%", "60%"],
            radius: ["25%", "55%"],
            roseType: true,
            color: ["#366dd2", "#72a2c8", "#254689", "#557dee", "#20509a"],
            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 16
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
            center: ["52%", "60%"],
            radius: ["50%", "50%"],
            labelLine: {
              show: false,
              length: 30,
              length2: 0,
              smooth: true
            },
            itemStyle: {
              normal: {
                // color: 'rgba(0,0,0,0)'
              }
            },
            label: {
              normal: {
                formatter: ["{a|{b}\n{c}}"].join("\n"),
                rich: {
                  a: {
                    color: "#b6bcbc",
                    padding: 2,
                    fontSize: 14
                  }
                }
              }
            },
            data: data
          }
        ]
      };
      myChart.setOption(option);

      // 女性==================

      let myChart2 = echarts.init(
        document.getElementById("all-total-population-female")
      );
      let data2 = this.content.cvsAllTotalPopulation.femaleData;
      let giftImageUrl2 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABCCAYAAAA2RtSlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU1NjZFQUZEMEJEMzExRTg4N0MxQjQxN0EzMDBCOUMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU1NjZFQUZFMEJEMzExRTg4N0MxQjQxN0EzMDBCOUMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTU2NkVBRkIwQkQzMTFFODg3QzFCNDE3QTMwMEI5QzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTU2NkVBRkMwQkQzMTFFODg3QzFCNDE3QTMwMEI5QzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5m7lYYAAAC/klEQVR42uyZTUhVQRTHr9dqUSFIpQujZxlFr6QQauN7PqEPRBBUiD53hUJrlaSNrvpw50YRWtr2KRTRrqIWhS1aVNAHZBoFbVMES/sfOBeGacaZuW+GCO6BP1zHuef87sycuWfuq/py+WbkaJuhfugKdITb3kB3oUlo1cXZJsfg26EHUJvUfhQah85CndBPW4exI8CkIrhoRWjKxaELwEHokkW/C9zXO8BJh76nQwDsdOi7IwTAokPfryEAHlqm2CpnineAb9Ati363uW+QNByFJgxpOhJyI/oNXYOmoavQYWknfOa6rboCJPacVbHZAByCLkJ5qNphpN5C96B3aQGqeNEN8rWr9UI3oDHoOrTuuggHoKGUwcWHGGJfTllAQz0c+bNh3fTpANqhWo8AtezTGqA78m/dtgA0bz0BAHpU60kFcAJqCABAPo/bAIR4ejE1jQDyXC1DhRTB6J4l0zqQAfKKcuoR1JwCoJnvlcu6/EYAvQpHZV0KGYzumTFNQ2yY/19cXKQFuM8+tDFEgD1Qi9T5Kdd39SkA6llPpPYWjvUXgG74SxWs+gL70GaaCWA25fCL0zC70TpIAOqgVqnTK2jBAwBV03OKkakTAboUC5KGbn+Fu2ID+ygr0r9LBFAN/0yFT2+VjgRQA52S/vmBC82CB4ASl2fvpXaKWRPzcXqL4ukjTyNQlHwmRjE7Y83Lh+asEcp5AMixL2U6EkCH1PgdeuHp6cV18FJxYuoggBVF7q8FAFhT7AkrBHAOes0Nn4TzX8kzQHJu/MjXFPM8nQseQ8egbfzup/p9N8+bL8vx/v8ZOgBtTWoFcfNZEg4PPoc/seTb0rpYqMSGIYsCTIP1ueCfAdD8NwUAaGLfRoBiwKq43QagFBCgaHM83wfNC39TyuzSOJwX0kxlPzi1E9trA3BGUcuXNQEahdRSWZ/mVZz6I5V3ywAygAwgA8gAMoAMIAP4LwAWNO2LmuvIot0JgD5W3ZGKS/pptl+q/cSfa5f5njmT8z8CDABgQ4DWHERJfAAAAABJRU5ErkJggg==";

      let option2 = {
        tooltip: {
          show: true,
          trigger: "item",
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: "{b}: {c} ({d}%)",
          textStyle: {
            color: "#333"
          }
        },
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: giftImageUrl2,
                width: 25
              },
              left: "48%",
              top: "53%"
            }
          ]
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            center: ["52%", "60%"],
            radius: ["25%", "55%"],
            roseType: true,
            color: ["#5dd5d4", "#8b103e", "#ff9a2c", "#e34856", "#065381"],
            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 16
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data2
          },
          {
            type: "pie",
            center: ["52%", "60%"],
            radius: ["50%", "50%"],
            labelLine: {
              show: false,
              length: 30,
              length2: 0,
              smooth: true
            },
            itemStyle: {
              normal: {
                // color: 'rgba(0,0,0,0)'
              }
            },
            label: {
              normal: {
                formatter: ["{a|{b}\n{c}}"].join("\n"),
                rich: {
                  a: {
                    color: "#b6bcbc",
                    padding: 2,
                    fontSize: 14
                  }
                }
              }
            },
            data: data2
          }
        ]
      };
      myChart2.setOption(option2);
    },
    // 户籍人口统计
    totalhousehold() {
      let myChart = echarts.init(
        document.getElementById("all-total-household-male")
      );
      let data = this.content.cvsTotalhousehold.maleData;
      let giftImageUrl =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABCCAYAAAA2RtSlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRGQzFBQ0U0MEJEMzExRThBQkU4QTc0M0Q1MTQ2MTUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRGQzFBQ0U1MEJEMzExRThBQkU4QTc0M0Q1MTQ2MTUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEZDMUFDRTIwQkQzMTFFOEFCRThBNzQzRDUxNDYxNTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEZDMUFDRTMwQkQzMTFFOEFCRThBNzQzRDUxNDYxNTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4mhbU9AAAB30lEQVR42uyaPUsDQRCGLyYQLC30B1ikUPALEdJY6D+wsQkINlqoYKUWWsfqQCsrC1GwEVIEbBT8aBSxEVEQLOwECzkUiZqc78KIIne3O5ddsJiFl0luJ+8+O3e3yXLJhGHocdvYam0cYR4aoEOXkL+3kN/lemW4ABh8DWE2pnsdEHPOADB4CWFLk1YCxLapZwuzYosGOUtOKoDZdyA8Gvq2owpPtivQ5iKXA6Bmb1KukFEpcwCU9Bnh1CD1BLmBq4twGWok9Ku+FY4hCwAzO0KYhuoR3erYFOW4W4jojuimxahfedBKqBaha+croe2WS5ilOj0j0CjUCeWZ3jXoHjqADlGdhnEFMPgQwibUZWmi6tRMAuJcC4DBBxGOoVbL1X6DhgFxobsLfAeDe+Tpm9yGRYfXXNEEIOsQINvsSmi9CYAJwARUTuFdps82DRBwvt///H4I5BoQAAEQAAEQAAFIA/AZscFI2z403pEAG79e39AeIa6dkeKa2qjexnhHA2DjMINQgHqgPrx/TRhgnxS3m35B6CWvAnnr94ZIvLN1juH1jnAld4EACIAACIAACIAACIAACMC/BcgZ5j0wj+v62BWoQOrPCd/PC9UDqCq0Q6p6Pw8065RbMTH+EmAAVTKHpcZlcyQAAAAASUVORK5CYII=";

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
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: giftImageUrl,
                width: 25
              },
              left: "48%",
              top: "53%"
            }
          ]
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            center: ["52%", "60%"],
            radius: ["25%", "55%"],
            roseType: true,
            color: ["#366dd2", "#72a2c8", "#254689", "#557dee", "#20509a"],
            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 16
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
            center: ["52%", "60%"],
            radius: ["50%", "50%"],
            labelLine: {
              show: false,
              length: 30,
              length2: 0,
              smooth: true
            },
            itemStyle: {
              normal: {
                // color: 'rgba(0,0,0,0)'
              }
            },
            label: {
              normal: {
                formatter: ["{a|{b}\n{c}}"].join("\n"),
                rich: {
                  a: {
                    color: "#b6bcbc",
                    padding: 2,
                    fontSize: 14
                  }
                }
              }
            },
            data: data
          }
        ]
      };
      myChart.setOption(option);

      // 女性==================

      let myChart2 = echarts.init(
        document.getElementById("all-total-household-female")
      );
      let data2 = this.content.cvsTotalhousehold.femaleData;
      let giftImageUrl2 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABCCAYAAAA2RtSlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU1NjZFQUZEMEJEMzExRTg4N0MxQjQxN0EzMDBCOUMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU1NjZFQUZFMEJEMzExRTg4N0MxQjQxN0EzMDBCOUMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTU2NkVBRkIwQkQzMTFFODg3QzFCNDE3QTMwMEI5QzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTU2NkVBRkMwQkQzMTFFODg3QzFCNDE3QTMwMEI5QzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5m7lYYAAAC/klEQVR42uyZTUhVQRTHr9dqUSFIpQujZxlFr6QQauN7PqEPRBBUiD53hUJrlaSNrvpw50YRWtr2KRTRrqIWhS1aVNAHZBoFbVMES/sfOBeGacaZuW+GCO6BP1zHuef87sycuWfuq/py+WbkaJuhfugKdITb3kB3oUlo1cXZJsfg26EHUJvUfhQah85CndBPW4exI8CkIrhoRWjKxaELwEHokkW/C9zXO8BJh76nQwDsdOi7IwTAokPfryEAHlqm2CpnineAb9Ati363uW+QNByFJgxpOhJyI/oNXYOmoavQYWknfOa6rboCJPacVbHZAByCLkJ5qNphpN5C96B3aQGqeNEN8rWr9UI3oDHoOrTuuggHoKGUwcWHGGJfTllAQz0c+bNh3fTpANqhWo8AtezTGqA78m/dtgA0bz0BAHpU60kFcAJqCABAPo/bAIR4ejE1jQDyXC1DhRTB6J4l0zqQAfKKcuoR1JwCoJnvlcu6/EYAvQpHZV0KGYzumTFNQ2yY/19cXKQFuM8+tDFEgD1Qi9T5Kdd39SkA6llPpPYWjvUXgG74SxWs+gL70GaaCWA25fCL0zC70TpIAOqgVqnTK2jBAwBV03OKkakTAboUC5KGbn+Fu2ID+ygr0r9LBFAN/0yFT2+VjgRQA52S/vmBC82CB4ASl2fvpXaKWRPzcXqL4ukjTyNQlHwmRjE7Y83Lh+asEcp5AMixL2U6EkCH1PgdeuHp6cV18FJxYuoggBVF7q8FAFhT7AkrBHAOes0Nn4TzX8kzQHJu/MjXFPM8nQseQ8egbfzup/p9N8+bL8vx/v8ZOgBtTWoFcfNZEg4PPoc/seTb0rpYqMSGIYsCTIP1ueCfAdD8NwUAaGLfRoBiwKq43QagFBCgaHM83wfNC39TyuzSOJwX0kxlPzi1E9trA3BGUcuXNQEahdRSWZ/mVZz6I5V3ywAygAwgA8gAMoAMIAP4LwAWNO2LmuvIot0JgD5W3ZGKS/pptl+q/cSfa5f5njmT8z8CDABgQ4DWHERJfAAAAABJRU5ErkJggg==";

      let option2 = {
        tooltip: {
          show: true,
          trigger: "item",
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: "{b}: {c} ({d}%)",
          textStyle: {
            color: "#333"
          }
        },
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: giftImageUrl2,
                width: 25
              },
              left: "48%",
              top: "53%"
            }
          ]
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            center: ["52%", "60%"],
            radius: ["25%", "55%"],
            roseType: true,
            color: ["#5dd5d4", "#8b103e", "#ff9a2c", "#e34856", "#065381"],
            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 16
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data2
          },
          {
            type: "pie",
            center: ["52%", "60%"],
            radius: ["50%", "50%"],
            labelLine: {
              show: false,
              length: 30,
              length2: 0,
              smooth: true
            },
            itemStyle: {
              normal: {
                // color: 'rgba(0,0,0,0)'
              }
            },
            label: {
              normal: {
                formatter: ["{a|{b}\n{c}}"].join("\n"),
                rich: {
                  a: {
                    color: "#b6bcbc",
                    padding: 2,
                    fontSize: 14
                  }
                }
              }
            },
            data: data2
          }
        ]
      };
      myChart2.setOption(option2);
    },
    popUpIndex() {
      this.specialCrowdpopUp = true;
    },
    // ============================特殊人群==============================
    //特殊人群事件统计
    specialProblemStatistics() {
      let myChart = echarts.init(document.getElementById("special-p-s"));
      let datas = this.content.cvsSaseStatistics.data;
      let datas2 = this.content.cvsSaseStatistics.data2;
      let option = {
        color: this.content.cvsSaseStatistics.color,
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: function(e) {
            let html = "";
            e.forEach(e => {
              html += e.seriesName + e.name + "：" + e.value + "件<br/>";
            });
            return html;
          },
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          top: "25%",
          left: "4%",
          right: "2%",
          bottom: "12%"
        },
        legend: {
          show: false,
          top: 30,
          right: 35,
          textStyle: {
            color: "#9b9b9b",
            fontSize: 14
          },
          itemGap: 34,
          itemWidth: 10,
          itemHeight: 10,
          data: this.content.cvsSaseStatistics.legend
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: "#9b9b9b"
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["rgba(19, 92, 143,0.5)"]
            }
          },
          axisTick: {
            alignWithLabel: true,
            inside: true,
            length: 260,
            lineStyle: {
              color: "rgba(19, 92, 143,0.5)"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#9b9b9b"
            }
          },
          data: this.content.cvsSaseStatistics.xAxis
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#9b9b9b"
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#9b9b9b"]
            }
          },
          axisTick: {
            show: false
            // alignWithLabel:true,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#9b9b9b"
            }
          }
        },
        series: [
          {
            name: "本月",
            data: datas,
            type: "line",
            markPoint: {
              // symbol: "roundRect",
              symbolSize: [10, 10],
              label: {
                fontSize: 14,
                width: "5px",
                padding: [3, 15],
                borderRadius: 100,
                offset: [5, 6],
                backgroundColor: "#5475c6"
              },
              data: (function() {
                let arr = [];
                datas.forEach((e, i) => {
                  arr.push({ value: e, xAxis: i, yAxis: e });
                });
                return arr;
              })()
            },
            z: 3
          },
          {
            name: "上月",
            data: datas2,
            type: "line"
          }
        ]
      };
      myChart.setOption(option);
    },

    // 户籍人口统计
    specialCrowd() {
      let myChart = echarts.init(document.getElementById("special-crowd"));
      let datas = this.content.cvsSpecialCrowd.data;
      let color = this.content.cvsSpecialCrowd.color;
      let option = {
        tooltip: {
          show: true,
          trigger: "item",
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: "{b}: {c} 人",
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          top: "20%",
          left: "10%",
          right: "4%",
          bottom: "15%"
        },
        xAxis: {
          axisLabel: {
            color: "#9b9b9b",
            fontSize: 22
          },
          axisTick: {
            lineStyle: {
              width: 2,
              color: "#9b9b9b"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#9b9b9b"]
            }
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: "#9b9b9b"
            }
          },
          z: 10
        },
        yAxis: {
          z: 10,
          type: "category",
          axisLabel: {
            color: "#9b9b9b",
            fontSize: 18
          },
          axisTick: {
            lineStyle: {
              width: 2,
              color: "#9b9b9b"
            }
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: "#9b9b9b"
            }
          },
          data: (function() {
            let arr = [];
            let length = datas.length - 1;
            datas.forEach((e, i) => {
              arr.push(e.name);
            });
            return arr;
          })()
        },
        series: [
          {
            type: "bar",
            data: (function() {
              let arr = [];
              datas.forEach((e, i) => {
                let data = {
                  name: e.name,
                  value: e.value,
                  itemStyle: {
                    color: color[i]
                  }
                };
                arr.push(data);
              });
              return arr;
            })()
          }
        ]
      };
      myChart.setOption(option);
    },

    // 特殊人群统计
    specialTrend() {
      let webkitDep = {
        type: "force",
        categories: [
          {
            name: "吸毒人员",
            itemStyle: {
              normal: {
                color: "#449caa"
              }
            }
          },
          {
            name: "信访人员",
            itemStyle: {
              normal: {
                color: "#4990e2"
              }
            }
          },
          {
            name: "维稳人员",
            itemStyle: {
              normal: {
                color: "#377dff"
              }
            }
          },
          {
            name: "精神病人",
            itemStyle: {
              normal: {
                color: "#7b7eff"
              }
            }
          },
          {
            name: "失踪人员",
            itemStyle: {
              normal: {
                color: "#1474c8"
              }
            }
          },
          {
            name: "敏感人员",
            itemStyle: {
              normal: {
                color: "#2d6483"
              }
            }
          },
          {
            name: "社区服刑",
            itemStyle: {
              normal: {
                color: "#303f60"
              }
            }
          }
        ],
        nodes: [
          {
            name: "特殊人群趋势统计",
            symbolSize: 0
          },
          {
            name: "吸毒人员",
            category: "吸毒人员",
            symbolSize: 20,
            draggable: "true"
          },
          {
            name: "信访人员",
            category: "信访人员",
            symbolSize: 20,
            draggable: "true"
          },
          {
            name: "维稳人员",
            category: "维稳人员",
            symbolSize: 20,
            draggable: "true"
          },
          {
            name: "精神病人",
            category: "精神病人",
            symbolSize: 20,
            draggable: "true"
          },
          {
            name: "失踪人员",
            category: "失踪人员",
            symbolSize: 20,
            draggable: "true"
          },
          {
            name: "敏感人员",
            category: "敏感人员",
            symbolSize: 20,
            draggable: "true"
          },
          {
            name: "社区服刑",
            category: "社区服刑",
            symbolSize: 20,
            draggable: "true"
          }
        ],
        links: [
          {
            source: 0,
            target: 1
          },
          {
            source: 0,
            target: 2
          },
          {
            source: 0,
            target: 3
          },
          {
            source: 0,
            target: 4
          },
          {
            source: 0,
            target: 5
          },
          {
            source: 0,
            target: 6
          },
          {
            source: 0,
            target: 7
          }
        ]
      };

      // webkitDep.nodes
      let setData = function() {
        for (let i = 0; i < 300; i++) {
          let n1 = Math.floor(Math.random() * 7 + 1);
          let data = {
            name: webkitDep.nodes[n1].name + "第" + i + "个",
            category: webkitDep.nodes[n1].name,
            draggable: "true"
          };
          webkitDep.nodes.push(data);

          // 一级连接线
          data = {
            source: n1,
            target: webkitDep.nodes.length - 1
          };

          webkitDep.links.push(data);

          // 二级连接线
          n1 = Math.floor(Math.random() * webkitDep.nodes.length - 1);
          data = {
            source: n1,
            target: webkitDep.nodes.length - 1
          };
          webkitDep.links.push(data);
        }
      };
      setData();

      let myChart = echarts.init(document.getElementById("special-trend"));
      let legend = (this.content.cvsSpecialTrend.legend = (function() {
        let arr = [];
        webkitDep.categories.forEach((e, i) => {
          arr.push(e.name);
        });
        return arr;
      })());

      let option = {
        color: [
          "#37a2da",
          "#32c5e9",
          "#67e0e3",
          "#9fe6b8",
          "#ffdb5c",
          "#303f60"
        ],
        tooltip: {
          formatter: function(e) {
            return e.data.name;
          }
        },
        legend: {
          show: false,
          selectedMode: false,
          top: 80,
          left: 35,
          textStyle: {
            color: "#9b9b9b",
            fontSize: 14
          },
          itemGap: 34,
          itemWidth: 10,
          itemHeight: 10,
          data: legend
        },
        animation: false,
        series: [
          {
            roam: true,
            type: "graph",
            layout: "force",
            emphasis: {
              label: {
                show: false
              }
            },
            force: {
              repulsion: 80
            },
            data: webkitDep.nodes.map(function(node, idx) {
              node.id = idx;
              return node;
            }),
            categories: webkitDep.categories,

            edges: webkitDep.links
          }
        ]
      };
      myChart.setOption(option);
    },

    // ============================案件管理==============================
    caseStatistics() {
      let myChart = echarts.init(document.getElementById("case-statistics"));
      let datas = this.content.cvsMSaseStatistics.data;
      let option = {
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: "{b}: {c} 起",
          textStyle: {
            color: "#333"
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
          data: this.content.cvsMSaseStatistics.xAxis()
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#5e7383"
          },
          splitLine: {
            lineStyle: {
              color: ["#5e7383"]
            }
          },
          axisLine: {
            lineStyle: {
              color: "#5e7383"
            }
          }
        },
        series: [
          {
            data: datas(),
            type: "line",
            smooth: true, //这句就是让曲线变平滑的
            showSymbol: false,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(199, 9, 70, 0.52)"
                  },
                  {
                    offset: 1,
                    color: "#1e2432"
                  }
                ])
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    typeStatistics() {
      let myChart = echarts.init(document.getElementById("type-statistics"));
      let cvsTypeStatistics = this.content.cvsTypeStatistics;
      let indicator = cvsTypeStatistics.indicator;
      let option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: matter => {
            var html = "";
            matter.value.forEach((e, i) => {
              html += indicator[i].text + "：" + e + " 件 <br/>";
            });
            return html;
          },
          textStyle: {
            color: "#333",
            align: "left"
          }
        },
        radar: [
          {
            indicator: indicator,
            splitNumber: 1,
            nameGap: 30,
            name: {
              fontSize: 18
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#cecece"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#b74c1a"
                  },
                  {
                    offset: 0.3,
                    color: "#c22f4d"
                  },
                  {
                    offset: 0.6,
                    color: "#952945"
                  },
                  {
                    offset: 0.9,
                    color: "#8eb871"
                  },
                  {
                    offset: 1,
                    color: "#05b5cb"
                  }
                ])
              }
            },
            center: ["50%", "56%"],
            splitArea: {
              show: false
            },
            radius: "60%"
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [
              {
                value: cvsTypeStatistics.data,
                name: "详情"
              }
            ],
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: "#275dc4",
                width: 2,
                shadowColor: "#000",
                shadowBlur: 20
              }
            },
            areaStyle: {
              normal: {
                color: "rgba(82, 146, 226, 0.7)",
                shadowColor: "#000",
                shadowBlur: 20
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    // ============================大地图==============================
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

      for (let i = 0; i < this.content.Mpoints.length; i++) {
        let arr = this.content.Mpoints[i];
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
      this.content.MindexMenu = index;
    },

    // ============================重点企业==============================
    proportion() {
      let myChart = echarts.init(document.getElementById("proportion"));

      function getData(color, value) {
        return [
          {
            value: value,
            label: {
              normal: {
                position: "center",
                formatter: " {d}%",
                textStyle: {
                  color: "#0dcba7",
                  padding: [60, 10, 10, 10],
                  fontSize: 50
                }
              }
            },
            itemStyle: {
              normal: {
                color: color
              }
            }
          },
          {
            silent: true,
            animation: false,
            value: 1 - value,
            label: {
              normal: {
                position: "center",
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#2d6483"
              }
            }
          }
        ];
      }

      let option = {
        series: [
          {
            type: "pie",
            name: "",
            radius: ["30%", "39%"],
            center: ["25%", "25%"],
            data: getData("#20aab4", 0.3),
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500
          },
          {
            type: "pie",
            name: "",
            radius: ["30%", "39%"],
            center: ["73%", "25%"],
            data: getData("#73bf7e", 0.24),
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500
          },
          {
            type: "pie",
            name: "",
            radius: ["30%", "39%"],
            center: ["25%", "70%"],
            data: getData("#f35e60", 0.5),
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500
          },
          {
            type: "pie",
            name: "",
            radius: ["30%", "39%"],
            center: ["73%", "70%"],
            data: getData("#5189f8", 0.8),
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500
          }
        ]
      };
      myChart.setOption(option);
    },
    contrast() {
      let myChart = echarts.init(document.getElementById("contrast"));
      let option = {
        color: this.content.cvsContrast.color,
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: function(e) {
            let html = "";
            e.forEach(e => {
              html += e.seriesName + " " + e.name + "：" + e.value + "件<br/>";
            });
            return html;
          },
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#0a344c"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#cbd1d5"
              }
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#cbd1d5"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: "#0a344c"
              }
            }
          }
        ],
        series: [
          {
            name: "去年",
            type: "line",
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 5
              }
            },
            data: [
              8.3,
              7,
              32.5,
              56.6,
              34.1,
              14.8,
              39.6,
              24.1,
              50.1,
              32.4,
              21.8,
              15.7
            ]
          },
          {
            name: "今年",
            type: "line",
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 5
              }
            },
            data: [
              18.3,
              7,
              32.5,
              36.6,
              24.1,
              14.8,
              29.6,
              34.1,
              40.1,
              22.4,
              21.8,
              12.7
            ]
          }
        ]
      };
      myChart.setOption(option);
    },

    // ============================铁路护路==============================
    rMap() {
      let map = new BMap.Map("r-map-st"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(121.321763, 30.721421), 17); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );

      map.setMapStyle({ style: "midnight" });
      map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

      var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
        scale: 0.5, //图标缩放大小
        strokeColor: "#fff", //设置矢量图标的线填充颜色
        strokeWeight: "2" //设置线宽
      });
      this.content.Rpoints.forEach(e => {
        var icons = new BMap.IconSequence(sy, "10", "30");
        // 创建polyline对象
        var pois = e.p;
        var polyline = new BMap.Polyline(pois, {
          enableEditing: false, //是否启用线编辑，默认为false
          enableClicking: false, //是否响应点击事件，默认为true
          icons: [icons],
          strokeWeight: "8", //折线的宽度，以像素为单位
          strokeOpacity: 0.8, //折线的透明度，取值范围0 - 1
          strokeColor: e.color //折线颜色
        });

        map.addOverlay(polyline); //增加折线
      });
    },
    railwayProtection() {
      let myChart = echarts.init(document.getElementById("railway-situation"));
      let datas = this.content.cvsRailwaySituation.data;
      let datas2 = this.content.cvsRailwaySituation.data2;
      let option = {
        color: this.content.cvsRailwaySituation.color,
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "rgba(0,0,0,0)"
            }
          },
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: function(e) {
            let html = "";
            e.forEach(e => {
              html += e.seriesName + e.name + "：" + e.value + "件<br/>";
            });
            return html;
          },
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          top: "25%",
          left: "4%",
          right: "3%",
          bottom: "15%"
        },
        legend: {
          show: false,
          top: 30,
          right: 35,
          textStyle: {
            color: "#9b9b9b",
            fontSize: 14
          },
          itemGap: 34,
          itemWidth: 10,
          itemHeight: 10,
          data: this.content.cvsRailwaySituation.legend
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            margin: 15,
            color: "#c5cbce"
          },
          splitLine: {
            lineStyle: {
              color: ["rgba(19, 92, 143,0.5)"]
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "rgba(19, 92, 143,0.5)"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#9b9b9b"
            }
          },
          data: this.content.cvsRailwaySituation.xAxis
        },
        yAxis: {
          type: "value",
          axisLabel: {
            margin: 20,
            color: "#c5cbce"
          },
          splitLine: {
            lineStyle: {
              color: ["#305167"]
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#9b9b9b"
            }
          }
        },
        series: [
          {
            name: "上月",
            data: datas,
            symbolSize: 13,
            areaStyle: { normal: {} },
            type: "line"
          },
          {
            name: "本月",
            data: datas2,
            symbolSize: 13,
            areaStyle: { normal: {} },
            type: "line"
          }
        ]
      };
      myChart.setOption(option);
    },
    // ============================wifi 嗅探==============================
    oneYearTurnover() {
      let _data = {
        rank: [
          {
            name: "下横径桥",
            value: 53.28
          },
          {
            name: "金山卫镇",
            value: 43.39
          },
          {
            name: "顾家滨桥",
            value: 40.67
          },
          {
            name: "联建村",
            value: 39.18
          },
          {
            name: "高桥村",
            value: 38.7
          },
          {
            name: "蒋庄村",
            value: 38.52
          },
          {
            name: "山阳镇",
            value: 38.3
          },
          {
            name: "德胜村",
            value: 36.4
          },
          {
            name: "联建村",
            value: 35.03
          },
          {
            name: "玉兰新村",
            value: 30.98
          }
        ],
        data: [
          {
            category: "下横径桥",
            name: "下横径桥",
            value: 10,
            draggable: "true",
            symbolSize: 10
          },
          {
            category: "金山卫镇",
            name: "金山卫镇",
            value: 53.28,
            draggable: "true",
            symbolSize: 53.28
          },
          {
            category: "顾家滨桥",
            name: "顾家滨桥",
            value: 43.39,
            draggable: "true",
            symbolSize: 43.39
          },
          {
            category: "高桥村",
            name: "高桥村",
            value: 39.18,
            draggable: "true",
            symbolSize: 39.18
          },
          {
            category: "蒋庄村",
            name: "蒋庄村",
            value: 38.7,
            draggable: "true",
            symbolSize: 38.7
          },
          {
            category: "山阳镇",
            name: "山阳镇",
            value: 38.52,
            draggable: "true",
            symbolSize: 38.52
          },
          {
            category: "德胜村",
            name: "德胜村",
            value: 38.3,
            draggable: "true",
            symbolSize: 38.3
          },
          {
            category: "联建村",
            name: "联建村",
            value: 36.4,
            draggable: "true",
            symbolSize: 36.4
          },
          {
            category: "玉兰新村",
            name: "玉兰新村",
            value: 35.03,
            draggable: "true",
            symbolSize: 35.03
          }
        ],

        categories: [
          {
            name: "玉兰新村"
          },
          {
            name: "联建村"
          },
          {
            name: "德胜村"
          },
          {
            name: "山阳镇"
          },
          {
            name: "蒋庄村"
          },
          {
            name: "高桥村"
          },
          {
            name: "联建村"
          },
          {
            name: "顾家滨桥"
          },
          {
            name: "金山卫镇"
          },
          {
            name: "下横径桥"
          }
        ]
      };

      let myChart = echarts.init(document.getElementById("wifi"));
      let option = {
        color: [
          "#7ec0ff",
          "#364996",
          "#5d6cae",
          "#bed7ff",
          "#405790",
          "#537aef",
          "#223ca4",
          "#1b4681",
          "#306bd4",
          "#345f94",
          "#226ca6",
          "#02559a",
          "#70a1c8 ",
          "#71a2cb",
          "#5f96ff",
          "#4f91d4",
          "#3d55b5",
          "#5d6dac"
        ],
        // title: {
        //   x: '10',
        //   y: '20',
        //   textStyle: {
        //     color: '#05b5f8'
        //   }
        // },
        tooltip: {
          show: true,
          backgroundColor: "RGBA(255,255,255,0.8)",
          formatter: "{b}:{c} 人",
          textStyle: {
            align: "left",
            color: "#333"
          }
        },
        animationDuration: 3000,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            cursor: "pointer",
            name: "wifi",
            type: "graph",
            layout: "force",
            force: {
              repulsion: 600,
              gravity: 0.3
            },
            data: _data.data,
            categories: _data.categories,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(255, 255, 255, 0.5)"
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 16
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "source",
                type: "solid"
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
<style scoped lang="less">
.header {
  position: relative;
  .move {
    cursor: pointer;
    padding-top: 5px;
    width: 100px;
    height: 50px;
    color: #026e75;
    font-size: 28px;
    position: absolute;
    right: 50px;
    top: 30px;
    margin: auto;
    i {
      font-weight: bold;
      transform: translateY(4px);
    }
    span {
      font-size: 18px;
    }
  }
}

.index {
  width: 1920px;
  height: 1080px;
  .header {
    background: url(../assets/images/title1.png) no-repeat center center;
  }

  .box {
    padding: 10px;
  }

  .display {
    background: url(../assets/images/cvs1.png) no-repeat;
  }

  .display2 {
    background: url(../assets/images/cvs2.png) no-repeat;
  }

  .display,
  .display2 {
    /*background-color: #08304a;*/
    margin: 10px;
    padding: 10px;
    position: relative;
  }

  .display .m-f-p,
  .display2 .m-f-p {
    text-align: left;
    position: absolute;
    width: 100%;
    top: 0px;
    bottom: 0px;
    margin: auto;
    height: 200px;
    font-size: 16px;
    padding-left: 10px;
    padding-top: 30px;
  }

  .display2 .m-f-p .male {
    margin-top: 30px;
  }

  .display2 .m-f-p .male span {
    background: url(../assets/images/male.png) no-repeat center center;
  }

  .display2 .m-f-p .female span {
    background: url(../assets/images/female.png) no-repeat center center;
  }

  .display2 .m-f-p .male span.active {
    background: url(../assets/images/male-b.png) no-repeat center center;
  }

  .display2 .m-f-p .female span.active {
    background: url(../assets/images/female-b.png) no-repeat center center;
  }

  .display2 .m-f-p .male,
  .display2 .m-f-p .female {
    position: relative;
  }

  .display2 .m-f-p .male span,
  .display2 .m-f-p .female span {
    display: inline-block;
    width: 25px;
    height: 50px;
  }

  .display2 .m-f-p .male strong,
  .display2 .m-f-p .female strong {
    position: absolute;
    height: 100%;
    line-height: 50px;
    top: 0px;
    right: 30px;
    bottom: 0px;
    margin: auto;
  }

  .display .charts-legend {
    height: 80px;
    width: 570px;
    position: absolute;
    top: 10px;
    right: 30px;
    z-index: 10;
  }

  .display .charts-legend .legend {
    width: 75px;
    margin-top: 10px;
    margin-left: 5px;
  }

  .display .charts-legend .legend .symbol {
    float: left;
    margin-top: 5px;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }

  .display .charts,
  .display2 .charts {
    height: 100%;
    width: 100%;
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
  }

  .display {
    height: 560px;
  }

  .display2 {
    height: 340px;
  }
}

.specialcrowd {
  width: 1920px;
  height: 1080px;
  .header {
    background: url(../assets/images/title2.png) no-repeat center center;
  }

  .box {
    margin: 20px;
  }

  .special-p-s {
    background: url(../assets/images/cvs1172x400.png) no-repeat;
    height: 400px;
    margin-bottom: 20px;
  }

  .special-crowd {
    height: 500px;
    background: url(../assets/images/cvs1172x500.png) no-repeat;
  }

  .special-trend {
    height: 920px;
    background: url(../assets/images/cvs683x920.png) no-repeat;
  }

  .display {
    position: relative;
  }

  .display .charts-legend {
    height: 80px;
    width: 100%;
    position: absolute;
    top: 10px;
    right: 30px;
    z-index: 10;
  }

  .display .charts-legend .legend {
    width: 50px;
    margin-top: 10px;
    margin-left: 25px;
  }

  .display .charts-legend .legend .symbol {
    float: left;
    margin-top: 5px;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }
}

.managementCase {
  width: 1920px;
  height: 1080px;
  .header {
    background: url(../assets/images/title3.png) no-repeat center center;
  }

  .box {
    margin: 20px;
  }

  .table-b {
    background: url(../assets/images/cvs5.png) no-repeat;
    background-size: 100% 100%;
  }

  .type-statistics {
    background: url(../assets/images/cvs4.png) no-repeat;
    background-size: 100% 100%;
  }

  .display {
    position: relative;
    height: 450px;
    /*background: url(../assets/images/cvs3.png) no-repeat;*/
  }

  strong {
    font-size: 16px;
  }

  #case-statistics {
    background: url(../assets/images/1875x450.png) no-repeat !important;
    background-size: 100% 100%;
  }

  .radar-b {
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    margin: auto;
    width: 100%;
    height: 100%;
    background: url(../assets/images/radar.png) no-repeat center 27px;
    background-size: 455px 450px;
  }
}

.mainMap {
  &,
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
    position: absolute;
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
    position: absolute;
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
}

.video {
  &,
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
    content: "";
    height: 50px;
    width: 50px;
    left: 0px;
    top: 0px;
    background: url(../assets/images/title-left.png) no-repeat center center;
    background-size: 50% auto;
  }

  .ex-title::after {
    position: absolute;
    content: "";
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
    background: #fff;
    content: "";
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
    background: #fff;
    content: "";
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
    color: #20aab4;
  }

  .m-v {
    height: 1070px;
    width: 1920px;
  }
}

.keyEnterprises {
  .header {
    background: url(../assets/images/title4.png) no-repeat center center;
  }

  #zdwh {
    background: url(../assets/images/627x920.png) no-repeat;
    background-size: 100% 100%;
  }

  .box {
    margin: 20px;
    color: #94d5d9;
  }

  .display {
    background-size: 100% 100%;
    height: 920px;
    position: relative;
  }

  #inspect {
    padding-top: 90px;
  }

  #inspect-bg {
    background: url(../assets/images/1234x920.png) no-repeat;
    background-size: 100% 100%;
  }

  .pie-name {
    position: absolute;
    top: 380px;
    left: 80px;
    padding: 8px;
    font-size: 18px;
    width: 150px;
    background: #0d3d54;
    border: 1px solid #0a445c;
    border-radius: 3px;
    color: #fff;
  }

  .b-r {
    border-right: 1px solid #0f5167;
    height: 40px;
    line-height: 40px;
  }

  .b-l {
    border-left: 1px solid #0f5167;
    height: 40px;
    line-height: 40px;
  }

  .b-m {
    border-bottom: 1px solid #0f5167;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }

  .tb-title {
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
  }

  #contrast {
    margin-top: 30px;
    height: 350px;
  }

  .display .charts-legend {
    height: 80px;
    width: 100%;
    position: absolute;
    top: 10px;
    right: 30px;
    z-index: 10;
  }

  .display .charts-legend .legend {
    width: 50px;
    margin-top: 10px;
    margin-left: 25px;
  }

  .display .charts-legend .legend .symbol {
    float: left;
    margin-top: 5px;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }
}

.railwayProtection {
  .header {
    background: url(../assets/images/title5.png) no-repeat center center;
  }

  .box {
    padding: 20px;
  }

  .display {
    position: relative;
    height: 470px;
    margin-bottom: 0px;
  }

  #wf-l {
    margin: 0px;
  }

  #railway-situation {
    background: url(../assets/images/1875x430.png) no-repeat !important;
  }

  .r-map-st {
    margin: 20px 20px 0px 20px;
    background: url(../assets/images/976x470.png) no-repeat;
    padding: 30px;
    padding-top: 80px;
  }

  #r-map-st {
    border: 3px solid #163a52;
  }

  #security,
  #ranking {
    margin: 0px;
    margin-top: 20px;
  }

  #security-bg {
    background: url(../assets/images/469x470.png) no-repeat;
  }

  #ranking {
    text-align: left;
    background: url(../assets/images/391x470.png) no-repeat;
    background-size: 100% 100%;
  }

  .display .charts-legend {
    height: 45px;
    width: 100%;
    position: absolute;
    top: 25px;
    right: 30px;
    z-index: 10;
  }

  .display .charts-legend .legend {
    margin-top: 10px;
    margin-left: 25px;
  }

  .display .charts-legend .legend .symbol {
    float: left;
    margin-top: 5px;
    margin-right: 10px;
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }

  #ranking li:nth-child(2) {
    padding-top: 0px;
  }

  #ranking li:last-child {
    border: none;
  }

  #ranking li {
    padding: 0px 10px;
    height: 34px;
    border-bottom: 1px solid #163a52;
  }

  #ranking .l-title {
    padding: 0px 10px;
    font-size: 16px;
    height: 40px;
    line-height: 30px;
    background: #0e465d;
    border: none;
  }

  .l-r-p {
    padding: 5px;
  }

  #security {
    background: url(../assets/images/security-bg.gif) no-repeat;
    background-position-x: center;
    background-position-y: 120px;
    background-size: 50%;
  }

  .nb {
    position: absolute;
    height: 50px;
    width: 100px;
    text-align: center;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: auto;
    font-size: 55px;
    font-weight: bold;
    color: #fff;
  }
}

.wifiFixed {
  .region {
    padding: 30px;
    padding-top: 80px;
  }

  #wifi {
    padding-top: 50px;
    height: 400px;
  }

  .region .title {
    text-align: left;
    line-height: 60px;
    font-size: 34px;
    position: relative;
  }

  .r-list {
    padding-top: 30px;
    height: 90px;
    margin-bottom: 80px;
  }

  .r-list li {
    width: 200px;
    height: 55px;
    background: #000;
    float: left;
    border-radius: 5px;
    margin-left: 30px;
    font-size: 18px;
    position: relative;
    text-align: center;
    padding: 14px 50px 14px 20px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .r-list li:hover {
    transform: scale(1.2);
    z-index: 99;
  }

  .r-list li:nth-child(1) {
    margin-left: 0px;
  }

  .r-list li span {
    position: absolute;
    top: 15px;
    right: 10px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
  }

  .title .br {
    position: absolute;
    display: inline-block;
    border: 1px solid #0e5569;
    border-radius: 3px;
    height: 60px;
    line-height: 58px;
    background: #0d3d54;
    color: #1cf2f4;
    margin-left: 30px;
    padding: 0px 30px;
    font-size: 45px;
    font-weight: bold;
  }

  .header {
    background: url(../assets/images/title6.png) no-repeat center center;
  }

  .box {
    margin: 20px;
    background: url(../assets/images/1867x886.png) no-repeat;
    background-size: 100% 100%;
  }

  .display {
  }

  .progress-r-b {
    height: 400px;
  }

  .progress-r-b .charts {
    padding: 30px;
    padding-top: 110px;
  }

  .progress-r {
    height: 65px;
    background: #0c4056;
    border-left: 3px solid #20aab4;
    position: relative;
    padding: 10px;
    padding-left: 120px;
    margin-right: 200px;
    margin-bottom: 30px;
  }

  .progress-r .progress-v {
    margin-top: 8px;
    height: 30px;
    background: #20aab4;
    border-radius: 30px;
    position: relative;
    z-index: 2;
    transition: all 0.3s;
  }

  .progress-r .progress-b {
    z-index: 1;
    width: 100%;
    height: 30px;
    border-radius: 30px;
    background: #0e5569;
  }

  .progress-r .f-l {
    position: absolute;
    font-size: 18px;
    top: 19px;
    left: 20px;
  }

  .progress-r .f-r {
    position: absolute;
    white-space: nowrap;
    font-size: 30px;
    top: 10px;
    left: 102%;
    font-weight: bold;
  }
}
</style>
