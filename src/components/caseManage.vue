<template>
<div>
    <div class="main" id="cMain">
    <div class="m-header">
    <Row>
        <Col span="23">
        <div class="m-title">
            <img src="../assets/images/title9.png"/>
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
                <li @click="casePandect" v-bind:class="{'c-active': isPandect}"><i class="c-cmenu-v1"></i>案件总览</li>
                <li @click="caseInfo" v-bind:class="{'c-active': isInfo}"><i class="c-cmenu-v2"></i>案件信息</li>
                <li @click="casePolice" v-bind:class="{'c-active': isPolice}"><i class="c-cmenu-v4"></i>报警信息</li>
                <li @click="caseTreat" v-bind:class="{'c-active': isTreat}"><i class="c-cmenu-v5"></i>重点防治</li>
                <li @click="casePerson" v-bind:class="{'c-active': isPerson}"><i class="c-cmenu-v6"></i>关注人员</li>
            </ul>
        </div>
        </Col>
        <Col span="19">
        <!-- 案件总览 -->
        <div class="m-ccontent m-case-all" v-show="isPandect">
            <div class="c-case-all-t">
              <Row>
              <Col span="9">
              <div class="c-case-all-t-l">
                <div class="c-case-all-head">
                  <div class="c-case-all-title">案件事件统计</div>
                  <div class="m-foot-head-select opt-select">
                    <select class="c-input c-select ">
                      <option>2017.12</option>
                      <option>2017.11</option>
                      <option>2017.10</option>
                    </select>
                  </div>
                </div>
                <div class="c-case-all-ts" id="cCaseStatics"></div>
              </div>
              </Col>
              <Col span="9">
              <div class="c-case-all-t-c">
                <div class="c-case-all-head">
                  <div class="c-case-all-title">今日案件统计</div>
                  <div class="m-foot-head-select opt-select">
                    <select class="c-input c-select ">
                      <option>2017.12.31</option>
                    </select>
                  </div>
                </div>
                <div class="c-case-all-ts" id="cCaseTodayStatic"></div>
              </div>
              </Col>
              <Col span="6">
              <div class="c-case-all-t-r">
                <div class="c-case-all-head">
                  <div class="c-case-all-title">案件频发地区</div>
                </div>
                <div class="c-case-all-r-ts" id="cCaseOftenArea"></div>
              </div>
              </Col>
            </Row>
            </div>
            <div class="c-case-all-f">
                <div class="c-case-all-head">
                  <div class="c-case-all-title">案件数量统计</div>
                </div>
                <div class="c-case-all-f-ts" id="cCaseNumberStatic"></div>
            </div>
        </div>
        <div class="m-ccontent" id="mCcontent" v-show="isShow">
            <!-- 案件信息 -->
            <div class="m-cconditional" v-show="isInfo">
                <select class="c-input c-select">
                    <option value="">案件类型</option>
                    <option value="">民事案件</option>
                    <option value="">刑事案件</option>
                    <option value="">行政案件</option>
                </select>
                <select class="c-input c-select">
                    <option value="">案件状态</option>
                    <option value="">调差案件</option>
                    <option value="">结案案件</option>
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
            <!-- 报警信息 -->
            <div class="m-cconditional" v-show="isPolice">
                <select class="c-input c-select">
                    <option value="">案件类型</option>
                    <option value="">火灾</option>
                    <option value="">抢劫</option>
                </select>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">已出警</option>
                    <option value="">未出警</option>
                </select>
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
            <!-- 重点防治 -->
            <div class="m-cconditional" v-show="isTreat">
                
                <select class="c-input c-select">
                    <option value="">区域</option>
                    <option value="">区域1</option>
                    <option value="">区域2</option>
                    <option value="">区域3</option>
                    <option value="">区域4</option>
                </select>
                <select class="c-input c-select">
                    <option value="">类型</option>
                    <option value="">火灾</option>
                    <option value="">抢劫</option>
                    <option value="">打架</option>
                </select>
                <input type="text" class="c-input" placeholder="输入查询条件"/>
                
                <button class="c-button c-button-search" type="button" @click="search('termerP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('termerP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 关注人员 -->
            <div class="m-cconditional" v-show="isPerson">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">区域</option>
                    <option value="">区域2</option>
                    <option value="">区域3</option>
                </select>
                <input type="text" class="c-input" placeholder="输入查询条件"/>
                
                <button class="c-button c-button-search" type="button" @click="search('missP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('missP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <div class="m-ctable">
                
                <!-- 案件信息 -->
                <div class="table" v-show="isInfo">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.caseInfoInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.caseInfoInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.reason }}</Col>
                            <Col span="5">{{ list.caseType }}</Col>
                            <Col span="4">{{ list.policeAdress }}</Col>
                            <Col span="3">{{ list.policeMan }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 1)"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.reason }}</Col>
                            <Col span="5">{{ list.caseType }}</Col>
                            <Col span="4">{{ list.policeAdress }}</Col>
                            <Col span="3">{{ list.policeMan }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 1)"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 报警信息 -->
                <div class="table" v-show="isPolice">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.casePoliceInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.casePoliceInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="5">{{ list.address }}</Col>
                            <Col span="2">{{ list.type }}</Col>
                            <Col span="2">{{ list.reason }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="2">{{ list.alarmPerson }}</Col>
                            <Col span="4">{{ list.alarmPersonPhone }}</Col>
                            <Col span="2">{{ list.isPolice }}</Col>
                            <Col span="2">{{ list.policeMan }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 2)"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="5">{{ list.address }}</Col>
                            <Col span="2">{{ list.type }}</Col>
                            <Col span="2">{{ list.reason }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="2">{{ list.alarmPerson }}</Col>
                            <Col span="4">{{ list.alarmPersonPhone }}</Col>
                            <Col span="2">{{ list.isPolice }}</Col>
                            <Col span="2">{{ list.policeMan }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 2)"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 重点防治 -->
                <div class="table" v-show="isTreat">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.caseTreatInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.caseTreatInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="4">{{ list.area }}</Col>
                            <Col span="3">{{ list.areaType }}</Col>
                            <Col span="3">{{ list.oftenCase }}</Col>
                            <Col span="7">{{ list.unit }}</Col>
                            <Col span="3">{{ list.unitMan }}</Col>
                            <Col span="4">{{ list.unitPhone }}</Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="4">{{ list.area }}</Col>
                            <Col span="3">{{ list.areaType }}</Col>
                            <Col span="3">{{ list.oftenCase }}</Col>
                            <Col span="7">{{ list.unit }}</Col>
                            <Col span="3">{{ list.unitMan }}</Col>
                            <Col span="4">{{ list.unitPhone }}</Col>
                        </div>
                    </div>
                </div>
                 <!-- 关注人员 -->
                <div class="table" v-show="isPerson">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.casePersonInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.casePersonInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="5">{{ list.id }}</Col>
                            <Col span="6">{{ list.address }}</Col>
                            <Col span="3">{{ list.unitPhone }}</Col>
                            <Col span="3">{{ list.unitMan }}</Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="5">{{ list.id }}</Col>
                            <Col span="6">{{ list.address }}</Col>
                            <Col span="3">{{ list.unitPhone }}</Col>
                            <Col span="3">{{ list.unitMan }}</Col>
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
    <div class="m-foot" v-show="isShow">
    <Row>
        <Col span="12">
        <div class="m-foot-l">
            <div class="c-case-all-head">
              <div class="c-case-all-title">{{ staticsTitle.left }}</div>                
            </div>
              <div class="m-foot-head-select">
                <select class="c-input c-select" @change="cvsCaseInfoChange">
                  <option>2017.12</option>
                  <option>2017.11</option>
                  <option>2017.10</option>
                </select>
              </div>
            <div class="m-foot-statics" id="caseManageArea"></div>
        </div>
        </Col>
        <Col span="12">
        <div class="m-foot-r" >
            <div class="c-case-all-head">
              <div class="c-case-all-title">{{ staticsTitle.right }}</div>                
            </div>
            <div class="m-foot-statics" id="caseManageTs"></div>
        </div>
        </Col>
    </Row>
    </div>
    <div class="m-foot" v-show="isPandect">
        <div class="m-foot-case">
          <div class="c-case-all-head">
            <div class="c-case-all-title">案件事件统计</div>
          </div>
          <div class="m-foot-case-table">
            <div class="">
              <div class="th clearfix" style="background-color: #0d455c; font-weight: bold;">
                <Col span="2"><strong>类型</strong></Col>
                <Col span="11"><strong>案件内容</strong></Col>
                <Col span="4"><strong>时间</strong></Col>
                <Col span="3"><strong>负责人</strong></Col>
                <Col span="4"><strong>状态</strong></Col>
              </div>
              <div class="tb clearfix" v-for="list in this.content.caseAlarmTips.list">
                <Col span="2">{{ list.type }}</Col>
                <Col span="11">{{ list.content }}</Col>
                <Col span="4">{{ list.time }}</Col>
                <Col span="3">{{ list.policeMan }}</Col>
                <template v-if="list.status == 'yes'">
                  <Col span="4"><span style="color:#0b9d8a;">已解决</span></Col>
                </template>
                <template v-else>
                  <Col span="4"><span style="color: #b65d59;">未解决</span></Col>
                </template>
                
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    <showDetail v-show="isDetailShow" @change="close" @changingType="lookMore" :msg="msg"></showDetail>
</div>
</template>
<style scoped lang="less">
@import "../assets/style.less";

.c-input {
  width: 110px;
  height: 40px;
  padding-left: 10px;
  margin-left: 4px;
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
  width: 120px;
  color: #fbfbfb;
  option {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #14375f;
    background-color: #14375f;
    color: #fbfbfb;
  }
}

.m-foot {
  .m-foot-l,
  .m-foot-r {
    width: 465px;
    height: 213px;
    margin: auto;
    background: url(../assets/images/c_f_l.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .m-foot-statics {
    position: absolute;
    width: 465px;
    height: 175px;
    top: 30px;
  }
}

.m-foot-head::before,
.c-case-all-title::before {
  content: "";
  position: absolute;
  left: -30px;
  width: 30px;
  height: 30px;
  background: url(../assets/images/title-left.png) no-repeat center center;
}
.m-foot-head,
.c-case-all-title {
  position: absolute;
  left: 50px;
  top: 5px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  color: #0dcba5;
  font-weight: bolder;
}
.m-foot-head-select {
  position: absolute;
  right: 40px;
  top: 10px;
  z-index: 2;
  select {
    width: 100px;
    height: 25px;
    font-size: 12px;
  }
}
.opt-select {
  right: 0px;
  top: 5px;
}
.m-foot-head::after,
.c-case-all-title::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: url(../assets/images/title-right.png) no-repeat center center;
}

/* 案件统计*/
.m-case-all {
  margin-top: 30px;
  width: 100%;
  height: 565px;
  .c-case-all-title {
    font-size: 16px;
  }
  .c-case-all-t-l,
  .c-case-all-t-c {
    position: relative;
    width: 275px;
    height: 337px;
    margin: auto;
    overflow: hidden;
    background: url(../assets/images/c_case_bg1.png) no-repeat center center;
    background-size: 100% 100%;
  }
  .c-case-all-t-r {
    position: relative;
    width: 190px;
    height: 337px;
    margin: auto;
    overflow: hidden;
    background: url(../assets/images/c_case_bg2.png) no-repeat center center;
    background-size: 100% 100%;
  }
  .c-case-all-ts {
    width: 230px;
    height: 290px;
    margin: 40px auto 0;
  }
  .c-case-all-r-ts {
    width: 210px;
    height: 290px;
    margin: 40px auto 0;
  }
  .c-case-all-f {
    position: relative;
    margin: 10px auto 0;
    width: 100%;
    height: 215px;
    background: url(../assets/images/c_case_bg3.png) no-repeat center center;
  }
  .c-case-all-f-ts {
    width: 760px;
    height: 180px;
    margin: 10px auto 0;
  }
}
.c-case-all-title {
  font-size: 16px;
}
.m-foot-case {
  position: relative;
  width: 910px;
  height: 240px;
  margin: 20px auto 0;
  overflow: hidden;
  background: url(../assets/images/c_case_bg5.png) no-repeat center center;
  background-size: 100% 100%;
  .m-foot-case-table {
    position: absolute;
    height: 200px;
    width: 910px;
    margin: 33px auto 0;
    font-size: 14px;
  }
  .c-case-status-yes {
    color: "#0b9d8a" !important;
  }
  .c-case-status-no {
    color: "#b65d59" !important;
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
  width: 110px;
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

/* 表格小图标 */
#cMain .ivu-icon-android-arrow-dropup {
  position: absolute;
  top: 12%;
  margin-left: 3px;
  color: #719ba9;
}
#cMain .ivu-icon-android-arrow-dropdown {
  position: absolute;
  bottom: 12%;
  margin-left: 3px;
  color: #719ba9;
}
#cMain .ivu-icon-android-arrow-dropup:hover {
  color: #1c9795;
}
#cMain .ivu-icon-android-arrow-dropdown:hover {
  color: #1c9795;
}
#cMain .th .ivu-col,
#cMain .tb .ivu-col {
  line-height: 42px;
}
</style>


<script>
import echarts from "echarts";
import showDetail from "@/components/showDetail";
export default {
  name: "specialCrowd",
  data() {
    return {
      isShow: true,
      isPandect: false,
      isInfo: true,
      isPolice: false,
      isTreat: false,
      isPerson: false,
      isDetailShow: false,
      msg: {
        id: 0,
        type: 0,
        parent: "case"
      },
      options4: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      staticsTitle: {
        left: "案件类型信息",
        right: "案件区域时间统计"
      },
      // ========================数据 =====================
      content: {
        // ================== 表格数据 ========================
        caseInfoInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "案由", span: 3 },
            { name: "案件类型", span: 5 },
            { name: "办案人单位", span: 4 },
            { name: "办案民警", span: 3 },
            { name: "登记时间", span: 3 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              reason: "杀人",
              caseType: "民事案件",
              policeAdress: "金山区枫景派出所",
              policeMan: "张三",
              time: "2014.03.02"
            },
            {
              name: "张利",
              sex: "男",
              reason: "打架斗殴",
              caseType: "刑事案件",
              policeAdress: "金山区干巷派出所",
              policeMan: "杨兴元",
              time: "2014.06.04"
            },
            {
              name: "张旭鹏",
              sex: "女",
              reason: "偷窃",
              caseType: "行政案件",
              policeAdress: "金山区廊下派出所",
              policeMan: "方刚",
              time: "2014.08.23"
            },
            {
              name: "熊化艳",
              sex: "男",
              reason: "纵火",
              caseType: "民事案件",
              policeAdress: "金山区吕巷派出所",
              policeMan: "刘晓琪",
              time: "2015.12.29"
            },
            {
              name: "袁旭",
              sex: "男",
              reason: "杀人",
              caseType: "刑事案件",
              policeAdress: "金山区山阳派出所",
              policeMan: "秦伟",
              time: "2016.07.11"
            },
            {
              name: "李康平",
              sex: "男",
              reason: "杀人",
              caseType: "行政案件",
              policeAdress: "金山区松隐派出所",
              policeMan: "赖俊杰",
              time: "2016.07.11"
            },
            {
              name: "王桂荣",
              sex: "女",
              reason: "杀人",
              caseType: "刑事案件",
              policeAdress: "金山区亭林派出所",
              policeMan: "郭巧",
              time: "2016.10.31"
            },
            {
              name: "刘凯",
              sex: "男",
              reason: "杀人",
              caseType: "民事案件",
              policeAdress: "金山区新农派出所",
              policeMan: "罗征宇",
              time: "2017.01.06"
            },
            {
              name: "杨金凤",
              sex: "女",
              reason: "杀人",
              caseType: "行政案件",
              policeAdress: "金山区兴塔派出所",
              policeMan: "汪涵",
              time: "2017.07.22"
            },
            {
              name: "王凤来",
              sex: "男",
              reason: "杀人",
              caseType: "行政案件",
              policeAdress: "金山区张堰派出所",
              policeMan: "李四",
              time: "2017.12.13"
            }
          ]
        },
        casePoliceInfo: {
          list: [
            { name: "地点", span: 5 },
            { name: "类型", span: 2 },
            { name: "报警原因", span: 2 },
            { name: "报警人", span: 3 },
            { name: "记录时间", span: 2 },
            { name: "报警人电话", span: 4 },
            { name: "是否出警", span: 2 },
            { name: "出警人", span: 2 }
          ],
          data: [
            {
              address: "金山卫镇创新街8号",
              type: "紧急",
              reason: "火灾",
              time: "2014.02.03",
              alarmPerson: "周远明",
              alarmPersonPhone: "15800215432",
              isPolice: "是",
              policeMan: "周远明"
            },
            {
              address: "8号院1号楼3单元302",
              type: "紧急",
              reason: "打架",
              time: "2014.08.23",
              alarmPerson: "张利",
              alarmPersonPhone: "13485967452",
              isPolice: "是",
              policeMan: "张利"
            },
            {
              address: "8号院1号楼3单元202",
              type: "紧急",
              reason: "抢劫",
              time: "2015.05.12",
              alarmPerson: "张旭鹏",
              alarmPersonPhone: "13896552635",
              isPolice: "是",
              policeMan: "张旭鹏"
            },
            {
              address: "企业大厦6栋1单元104",
              type: "紧急",
              reason: "抢劫",
              time: "2015.05.12",
              alarmPerson: "熊化艳",
              alarmPersonPhone: "13896552635",
              isPolice: "是",
              policeMan: "熊化艳"
            },
            {
              address: "临高大厦1栋1单元102",
              type: "紧急",
              reason: "打架",
              time: "2015.12.29",
              alarmPerson: "袁旭",
              alarmPersonPhone: "13181905337",
              isPolice: "是",
              policeMan: "袁旭"
            },
            {
              address: "名苑大厦5栋1单元102",
              type: "紧急",
              reason: "入室盗窃",
              time: "2016.07.11",
              alarmPerson: "李康平",
              alarmPersonPhone: "13585968563",
              isPolice: "是",
              policeMan: "李康平"
            },
            {
              address: "建设花苑1号楼一单元501",
              type: "紧急",
              reason: "打架",
              time: "2016.10.31",
              alarmPerson: "王桂荣",
              alarmPersonPhone: "15053369987",
              isPolice: "是",
              policeMan: "王桂荣"
            },
            {
              address: "东二街南三巷4号楼2单元201",
              type: "紧急",
              reason: "贪污行贿",
              time: "2017.01.06",
              alarmPerson: "刘凯",
              alarmPersonPhone: "13485968566",
              isPolice: "是",
              policeMan: "刘凯"
            },
            {
              address: "东二街南三巷7号楼3单元202",
              type: "紧急",
              reason: "抢劫",
              time: "2017.07.22",
              alarmPerson: "刘金凤",
              alarmPersonPhone: "13785968566",
              isPolice: "是",
              policeMan: "杨金凤"
            },
            {
              address: "企业大厦6栋1单元105",
              type: "紧急",
              reason: "打架",
              time: "2017.12.13",
              alarmPerson: "王凤来",
              alarmPersonPhone: "13002708996",
              isPolice: "否",
              policeMan: "王凤来"
            }
          ]
        },
        caseTreatInfo: {
          list: [
            { name: "区域", span: 4 },
            { name: "涉事区域类型", span: 3 },
            { name: "频发事件", span: 3 },
            { name: "整治单位", span: 7 },
            { name: "整治单位负责人", span: 3 },
            { name: "负责人电话", span: 4 }
          ],
          data: [
            {
              area: "金山卫镇",
              areaType: "学校",
              oftenCase: "火灾",
              unit: "金山区派出所",
              unitMan: "周远民",
              unitPhone: "15800215432"
            },
            {
              area: "玉兰新村",
              areaType: "超市",
              oftenCase: "打架",
              unit: "金山区干巷派出所",
              unitMan: "张利",
              unitPhone: "13485967452"
            },
            {
              area: "蒋庄村",
              areaType: "KTV",
              oftenCase: "打架",
              unit: "金山区廊下派出所",
              unitMan: "张旭鹏",
              unitPhone: "13896552635"
            },
            {
              area: "德胜村",
              areaType: "加油站",
              oftenCase: "抢劫",
              unit: "金山区吕巷派出所",
              unitMan: "熊化艳",
              unitPhone: "13896552635"
            },
            {
              area: "山阳镇",
              areaType: "学校",
              oftenCase: "打架",
              unit: "金山区派出所",
              unitMan: "袁旭",
              unitPhone: "13181905337"
            },
            {
              area: "金山卫镇",
              areaType: "学校",
              oftenCase: "入室盗窃",
              unit: "金山区松隐派出所",
              unitMan: "李康平",
              unitPhone: "13585968563"
            },
            {
              area: "顾家桥",
              areaType: "学校",
              oftenCase: "打架",
              unit: "金山区亭林派出所",
              unitMan: "王桂荣",
              unitPhone: "15053369987"
            },
            {
              area: "金山卫镇",
              areaType: "学校",
              oftenCase: "贪污行贿",
              unit: "金山区新农派出所",
              unitMan: "刘凯",
              unitPhone: "13485968566"
            },
            {
              area: "金山卫镇",
              areaType: "银行",
              oftenCase: "抢劫",
              unit: "金山区兴塔派出所",
              unitMan: "杨金凤",
              unitPhone: "13785968566"
            },
            {
              area: "金山卫镇",
              areaType: "超市",
              oftenCase: "打架",
              unit: "金山区张堰派出所",
              unitMan: "王凤来",
              unitPhone: "13002708996"
            }
          ]
        },
        casePersonInfo: {
          list: [
            { name: "区域", span: 3 },
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "公民身份证", span: 5 },
            { name: "居住地址", span: 6 },
            { name: "区域负责人", span: 3 },
            { name: "负责人电话", span: 3 }
          ],
          data: [
            {
              area: "金山卫镇",
              name: "周远民",
              sex: "男",
              id: "522135198712135431",
              unitMan: "周远明",
              unitPhone: "15811215432",
              address: "金山卫镇创新街8号"
            },
            {
              area: "玉兰新村",
              name: "张利",
              sex: "男",
              id: "310101198901234246",
              unitMan: "张利",
              unitPhone: "13485967452",
              address: "企业大厦6栋1单元104"
            },
            {
              area: "蒋庄村",
              name: "张旭鹏",
              sex: "女",
              id: "220062198802260018",
              unitMan: "张旭鹏",
              unitPhone: "13896856352",
              address: "8好远1号楼3单元302"
            },
            {
              area: "德胜村",
              name: "熊化艳",
              sex: "女",
              id: "220621197012012362",
              unitMan: "熊化艳",
              unitPhone: "13896552635",
              address: "8号院1号楼3单元202"
            },
            {
              area: "山阳镇",
              name: "袁旭",
              sex: "男",
              id: "370303196104181018",
              unitMan: "袁旭",
              unitPhone: "13181905337",
              address: "临高大厦1栋1单元102"
            },
            {
              area: "金山卫镇",
              name: "李康平",
              sex: "男",
              id: "310101201408011011",
              unitMan: "李康平",
              unitPhone: "13585968563",
              address: "名苑大厦5栋1单元102"
            },
            {
              area: "金山卫镇",
              name: "刘凯",
              sex: "男",
              id: "37030319900109103X",
              unitMan: "刘凯",
              unitPhone: "13485996352",
              address: "东二街南三巷4号楼2单元201"
            },
            {
              area: "金山卫镇",
              name: "杨金凤",
              sex: "女",
              id: "520306196003121525",
              unitMan: "杨金凤",
              unitPhone: "13785968566",
              address: "东二街南三巷7号楼3单元202"
            },
            {
              area: "金山卫镇",
              name: "赵红",
              sex: "女",
              id: "370304198312200047",
              unitMan: "赵红",
              unitPhone: "13002708996",
              address: "企业大厦6栋1单元105"
            },
            {
              area: "金山卫镇",
              name: "周远民",
              sex: "男",
              id: "522135198712135431",
              unitMan: "周远明",
              unitPhone: "15811215432",
              address: "金山卫镇创新街8号"
            }
          ]
        },
        caseAlarmTips: {
          list: [
            {
              type: "火灾",
              content: "涌泉光住在去A栋5楼发生重大火灾",
              time: "2014.02.03",
              policeMan: "张明",
              status: "yes"
            },
            {
              type: "火灾",
              content: "涌泉光住在去A栋5楼发生重大火灾",
              time: "2014.02.03",
              policeMan: "张明",
              status: "no"
            },
            {
              type: "火灾",
              content: "涌泉光住在去A栋5楼发生重大火灾",
              time: "2014.02.03",
              policeMan: "张明",
              status: "yes"
            },
            {
              type: "火灾",
              content: "涌泉光住在去A栋5楼发生重大火灾",
              time: "2014.02.03",
              policeMan: "张明",
              status: "yes"
            }
          ]
        },

        // ======================统计图数据===========================

        cvsCaseInfo: {
          data: [
            { color: "#4675f7", name: "859\n案件总数", value: 100 },
            { color: "#42d4ed", name: "687\n民事案件", value: 80 },
            { color: "#ff9a2b", name: "678\n刑事案件", value: 80 },
            { color: "#f35e60", name: "678\n政治案件", value: 80 }
          ]
        },
        cvsCaseInfoTs: {
          color: ["#20336e", "#2084a8"],
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
        cvsCaseTotal: {
          data: [
            { color: "#4675f7", name: "859\n案件总数", value: 100 },
            { color: "#42d4ed", name: "687\n民事案件", value: 80 },
            { color: "#ff9a2b", name: "678\n刑事案件", value: 80 },
            { color: "#f35e60", name: "678\n政治案件", value: 80 }
          ]
        },
        cvsCaseTotalTs: {
          color: ["#20336e", "#2084a8"],
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
        cvsCasePolice: {
          data: [
            { color: "#4675f7", name: "859\n案件总数", value: 100 },
            { color: "#42d4ed", name: "687\n民事案件", value: 80 },
            { color: "#ff9a2b", name: "678\n刑事案件", value: 80 },
            { color: "#f35e60", name: "678\n政治案件", value: 80 }
          ]
        },
        cvsCasePoliceTs: {
          color: ["#20336e", "#2084a8"],
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
        cvsCaseTreat: {
          data: [
            { color: "#4675f7", name: "859\n案件总数", value: 100 },
            { color: "#42d4ed", name: "687\n民事案件", value: 80 },
            { color: "#ff9a2b", name: "678\n刑事案件", value: 80 },
            { color: "#f35e60", name: "678\n政治案件", value: 80 }
          ]
        },
        cvsCaseTreatTs: {
          color: ["#20336e", "#2084a8"],
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
        cvsCasePerson: {
          data: [
            { color: "#4675f7", name: "859\n案件总数", value: 100 },
            { color: "#42d4ed", name: "687\n民事案件", value: 80 },
            { color: "#ff9a2b", name: "678\n刑事案件", value: 80 },
            { color: "#f35e60", name: "678\n政治案件", value: 80 }
          ]
        },
        cvsCasePersonTs: {
          color: ["#20336e", "#2084a8"],
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
        cvsCaseAllStatic: {
          data: [
            {
              name: "案件总数",
              value: 256,
              color: "#4878ff",
              center: ["30.0%", "25%"]
            },
            {
              name: "已结案",
              value: "123",
              color: "#2499ad",
              center: ["70.0%", "25%"]
            },
            {
              name: "受理中",
              value: "123",
              color: "#9e6f37",
              center: ["30.0%", "70%"]
            },
            {
              name: "未解决",
              value: "123",
              color: "#974b58",
              center: ["70.0%", "70%"]
            }
          ]
        },
        cvsCaseAllTodayStatic: {
          data: [
            {
              name: "结案量",
              value: 39,
              color: "#2c82bf",
              center: ["30.0%", "25%"]
            },
            {
              name: "有效案件",
              value: "123",
              color: "#24419f",
              center: ["70.0%", "25%"]
            },
            {
              name: "无效案件",
              value: "20",
              color: "#21519b",
              center: ["30.0%", "70%"]
            },
            {
              name: "重点案件",
              value: "1",
              color: "#5e1775",
              center: ["70.0%", "70%"]
            }
          ]
        },
        cvsCaseAllOftenStatic: {
          plantCap: [
            {
              name: "四川",
              value: "120"
            },
            {
              name: "河北",
              value: "115"
            },
            {
              name: "江苏",
              value: "113"
            },
            {
              name: "河南",
              value: "95"
            },
            {
              name: "上海",
              value: "92"
            },
            {
              name: "北京",
              value: "87"
            },
            {
              name: "深圳",
              value: "87"
            },
            {
              name: "广州",
              value: "60"
            },
            {
              name: "江西",
              value: "60"
            },
            {
              name: "浙江",
              value: "50"
            }
          ],
          datalist: (function(argument) {
            let arr = [];
            let obj;
            for (var i = 0; i < 10; i++) {
              obj = {
                offset: [
                  Math.round(Math.random() * 100 + 1),
                  Math.round(Math.random() * 100 + 1)
                ],
                symbolSize: Math.round(Math.random() * 100 + 1),
                opacity: 0.88,
                fontSize: 12
              };
              arr.push(obj);
            }
            return arr;
          })()
        },
        cvsCaseNumberStatic: {
          color: ["#ec035e", "rgba(199, 9, 70, 0.52)", "#1e2432"],
          data: function(argument) {
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
    this.caseArea(this.content.cvsCaseInfo);
    this.caseTs(this.content.cvsCaseInfoTs);
  },
  components: {
    showDetail: showDetail
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
    lookMore(id, type) {
      /**
       * type
       * 1-案件信息
       * 2-报警信息
       */
      this.msg.id = id;
      this.msg.type = type;
      this.isDetailShow = true;
    },
    close() {
      this.isDetailShow = false;
    },
    popClose() {
      this.$emit("on-close");
    },
    cvsCaseInfoChange() {
      // 根据接口获取新的数据
    },
    getPage(page) {
      // 根据接口获取新的数据
    },
    casePandect() {
      this.staticsTitle.left = "报警案件信息";
      this.staticsTitle.right = "报警案件区域统计";
      this.isShow = false;
      this.isPandect = true;
      this.isInfo = false;
      this.isPolice = false;
      this.isTreat = false;
      this.isPerson = false;
      this.caseAllStatic(this.content.cvsCaseAllStatic);
      this.caseAllTodayStatic(this.content.cvsCaseAllTodayStatic);
      this.caseAllOftenArea(this.content.cvsCaseAllOftenStatic);
      this.caseNumberStatic(this.content.cvsCaseNumberStatic);
    },
    caseInfo() {
      this.staticsTitle.left = "案件类型信息";
      this.staticsTitle.right = "案件区域事件统计";
      this.isShow = true;
      this.isPandect = false;
      this.isInfo = true;
      this.isPolice = false;
      this.isTreat = false;
      this.isPerson = false;
      this.caseArea(this.content.cvsCaseInfo);
      this.caseTs(this.content.cvsCaseInfoTs);
    },
    casePolice() {
      this.staticsTitle.left = "报警案件信息";
      this.staticsTitle.right = "报警案件区域统计";
      this.isShow = true;
      this.isPandect = false;
      this.isInfo = false;
      this.isPolice = true;
      this.isTreat = false;
      this.isPerson = false;
      this.caseArea(this.content.cvsCasePolice);
      this.caseTs(this.content.cvsCasePoliceTs);
    },
    caseTreat() {
      this.staticsTitle.left = "报警案件信息";
      this.staticsTitle.right = "报警案件区域统计";
      this.isShow = true;
      this.isPandect = false;
      this.isInfo = false;
      this.isPolice = false;
      this.isTreat = true;
      this.isPerson = false;
      this.caseArea(this.content.cvsCaseTreat);
      this.caseTs(this.content.cvsCaseTreatTs);
    },
    casePerson() {
      this.staticsTitle.left = "报警案件信息";
      this.staticsTitle.right = "报警案件区域统计";
      this.isShow = true;
      this.isPandect = false;
      this.isInfo = false;
      this.isPolice = false;
      this.isTreat = false;
      this.isPerson = true;
      this.caseArea(this.content.cvsCasePerson);
      this.caseTs(this.content.cvsCasePersonTs);
    },
    caseAllStatic(datas) {
      let myChart = echarts.init(document.getElementById("cCaseStatics"));
      let option = {
        series: []
      };
      var series = [];
      datas.data.forEach((item, index) => {
        option.series.push({
          name: " ",
          type: "pie",
          center: item.center,
          radius: ["31%", "35%"],
          color: item.color,
          label: {
            normal: {
              position: "center"
            }
          },
          data: [
            {
              value: item.value,
              name: item.name,

              label: {
                normal: {
                  formatter: item.value + "\n" + item.name,
                  textStyle: {
                    fontSize: 18,
                    color: "#fbfbfb",
                    fontWeight: "bold"
                  },
                  borderWidth: 8
                }
              }
            }
          ]
        });
      });
      myChart.setOption(option);
    },
    caseAllTodayStatic(datas) {
      let myChart = echarts.init(document.getElementById("cCaseTodayStatic"));
      let option = {
        series: []
      };
      var series = [];
      datas.data.forEach((item, index) => {
        option.series.push({
          name: " ",
          type: "pie",
          center: item.center,
          radius: ["31%", "35%"],
          color: item.color,
          label: {
            normal: {
              position: "center"
            }
          },
          data: [
            {
              value: item.value,
              name: item.name,

              label: {
                normal: {
                  formatter: item.value + "\n" + item.name,
                  textStyle: {
                    fontSize: 18,
                    color: "#fbfbfb",
                    fontWeight: "bold"
                  },
                  borderWidth: 8
                }
              }
            }
          ]
        });
      });
      myChart.setOption(option);
    },
    caseAllOftenArea(datas) {
      let myChart = echarts.init(document.getElementById("cCaseOftenArea"));
      let datasList = [];
      for (let i = 0; i < datas.plantCap.length; i++) {
        let item = datas.plantCap[i];
        let itemToStyle = datas.datalist[i];
        datasList.push({
          name: item.name,
          value: itemToStyle.offset,
          symbolSize: itemToStyle.symbolSize,
          label: {
            normal: {
              textStyle: {
                fontSize: itemToStyle.fontSize
              }
            }
          },
          itemStyle: {
            normal: {
              opacity: itemToStyle.opacity
            }
          }
        });
      }
      let option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "#414e5f",
          textStyle: {
            color: "#fbfbfb"
          },
          formatter: "{b}"
        },
        xAxis: [
          {
            gridIndex: 0,
            type: "value",
            show: false,
            min: 0,
            max: 100,
            nameLocation: "middle",
            nameGap: 30
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: "middle",
            nameGap: 30
          }
        ],
        series: []
      };
      let colors = [
        "#2299ad",
        "#4878ff",
        "#24419f",
        "#974b58",
        "#5d1875",
        "#9e6f37",
        "#2c8684"
      ];
      let index = 0;
      for (let i = 0; i < datasList.length; i++) {
        index++;
        if (i > index) {
          index = 0;
        }
        option.series.push({
          type: "scatter",
          symbol: "circle",
          symbolSize: 120,
          label: {
            normal: {
              show: true,
              formatter: "{b}",
              color: "#fff",
              textStyle: {
                fontSize: "20"
              }
            }
          },

          itemStyle: {
            normal: {
              color: colors[index]
            },
            emphasis: {
              color: colors[index],
              opacity: 1
            }
          },
          data: [datasList[i]]
        });
      }
      myChart.setOption(option);
    },
    caseNumberStatic(datas) {
      let myChart = echarts.init(document.getElementById("cCaseNumberStatic"));
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
          formatter: "{b}: {c} 人",
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
        color: datas.color[0],
        series: [
          {
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
                    color: datas.color[2]
                  }
                ])
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    caseArea(datas) {
      let myChart = echarts.init(document.getElementById("caseManageArea"));
      let option = {
        series: [
          {
            center: ["15.0%", "50%"],
            radius: ["55%", "55%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  },
                  position: "center"
                },
                labelLine: {
                  show: false
                },
                color: datas.data[0].color,
                borderColor: datas.data[0].color,
                borderWidth: 8
              },
              emphasis: {
                label: {
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  }
                },
                color: datas.data[0].color,
                borderColor: datas.data[0].color,
                borderWidth: 8
              }
            },
            data: [
              {
                value: datas.data[0].value,
                name: datas.data[0].name
              },
              {
                name: " ",
                value: 0,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: datas.data[0].color,
                    borderColor: datas.data[0].color,
                    borderWidth: 1
                  },
                  emphasis: {
                    color: datas.data[0].color,
                    borderColor: datas.data[0].color,
                    borderWidth: 1
                  }
                }
              }
            ]
          },
          {
            center: ["37.0%", "50%"],
            radius: ["55%", "55%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  },
                  position: "center"
                },
                labelLine: {
                  show: false
                },
                color: datas.data[1].color,
                borderColor: datas.data[1].color,
                borderWidth: 8
              },
              emphasis: {
                label: {
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  }
                },
                color: datas.data[1].color,
                borderColor: datas.data[1].color,
                borderWidth: 8
              }
            },
            data: [
              {
                value: datas.data[1].value,
                name: datas.data[1].name
              },
              {
                name: " ",
                value: 52.7,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: datas.data[1].color,
                    borderColor: datas.data[1].color,
                    borderWidth: 1
                  },
                  emphasis: {
                    color: datas.data[1].color,
                    borderColor: datas.data[1].color,
                    borderWidth: 1
                  }
                }
              }
            ]
          },
          {
            center: ["60.0%", "50%"],
            radius: ["55%", "55%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  },
                  position: "center"
                },
                labelLine: {
                  show: false
                },
                color: datas.data[2].color,
                borderColor: datas.data[2].color,
                borderWidth: 8
              },
              emphasis: {
                label: {
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  }
                },
                color: datas.data[2].color,
                borderColor: datas.data[2].color,
                borderWidth: 8
              }
            },
            data: [
              {
                value: datas.data[2].value,
                name: datas.data[2].name
              },
              {
                name: " ",
                value: 52.7,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: datas.data[2].color,
                    borderColor: datas.data[2].color,
                    borderWidth: 1
                  },
                  emphasis: {
                    color: datas.data[2].color,
                    borderColor: datas.data[2].color,
                    borderWidth: 1
                  }
                }
              }
            ]
          },
          {
            center: ["83.0%", "50%"],
            radius: ["55%", "55%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  },
                  position: "center"
                },
                labelLine: {
                  show: false
                },
                color: datas.data[3].color,
                borderColor: datas.data[3].color,
                borderWidth: 8
              },
              emphasis: {
                label: {
                  textStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fbfbfb"
                  }
                },
                color: datas.data[3].color,
                borderColor: datas.data[3].color,
                borderWidth: 8
              }
            },
            data: [
              {
                value: datas.data[3].value,
                name: datas.data[3].name
              },
              {
                name: " ",
                value: 52.7,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: datas.data[3].color,
                    borderColor: datas.data[3].color,
                    borderWidth: 1
                  },
                  emphasis: {
                    color: datas.data[3].color,
                    borderColor: datas.data[3].color,
                    borderWidth: 1
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    caseOftenArea(data) {},
    caseTs(datas) {
      let myChart = echarts.init(document.getElementById("caseManageTs"));
      let option = {
        color: datas.color,
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
          left: "8%",
          right: "5%",
          bottom: "18%"
        },
        legend: {
          show: false,
          top: 30,
          right: 35,
          textStyle: {
            color: "#9b9b9b",
            fontSize: 12
          },
          itemGap: 34,
          itemWidth: 10,
          itemHeight: 10,
          data: datas.legend
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
          data: datas.xAxis
        },
        yAxis: {
          type: "value",
          axisLabel: {
            margin: 20,
            color: "#c5cbce"
          },
          splitLine: {
            lineStyle: {
              color: ["#0c4061"]
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0c4061"
            }
          }
        },
        series: [
          {
            name: "上月",
            data: datas.data,
            symbolSize: 13,
            areaStyle: { normal: {} },
            type: "line"
          },
          {
            name: "本月",
            data: datas.data2,
            symbolSize: 13,
            areaStyle: { normal: {} },
            type: "line"
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>


