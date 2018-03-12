<template>
<div>
    <div class="main" id="cMain">
    <div class="m-header">
    <Row>
        <Col span="23">
        <div class="m-title">
            <img src="../assets/images/title13.png"/>
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
                <li @click="enterpirseInfo" v-bind:class="{'c-active': isPInfo}"><i class="c-cmenu-v1"></i>企业信息</li>
                <li @click="enterpirseCheck" v-bind:class="{'c-active': isPCheck}"><i class="c-cmenu-v2"></i>企业检查</li>
                <li @click="enterpirseRectification" v-bind:class="{'c-active': isPRectif}"><i class="c-cmenu-v3"></i>企业整改</li>
                <li @click="enterpirseForecast" v-bind:class="{'c-active': isPForecast}"><i class="c-cmenu-v4"></i>预测预警</li>
            </ul>
        </div>
        </Col>
        <Col span="19">
        <div class="m-ccontent" id="mCcontent">
            <!-- 企业信息 -->
            <div class="m-cconditional" v-show="isPInfo">
                <select class="c-input c-select">
                    <option value="">企业类型</option>
                    <option value="">学校</option>
                    <option value="">医院</option>
                    <option value="">加油站</option>
                </select>
                <input type="text" class="c-input" placeholder="输入查询条件"/>
                <button class="c-button c-button-search" type="button" @click="search('isPInfo')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('isPInfo')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 企业检查 -->
            <div class="m-cconditional" v-show="isPCheck">
                <select class="c-input c-select">
                    <option value="">企业类型</option>
                    <option value="">学校</option>
                    <option value="">医院</option>
                    <option value="">加油站</option>
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
            <!-- 企业整改 -->
            <div class="m-cconditional" v-show="isPRectif">
                 <select class="c-input c-select">
                    <option value="">企业类型</option>
                    <option value="">学校</option>
                    <option value="">医院</option>
                    <option value="">加油站</option>
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
            <!-- 预测预警 -->
            <div class="m-cconditional" v-show="isPForecast">
                <select class="c-input c-select">
                    <option value="">企业类型</option>
                    <option value="">学校</option>
                    <option value="">医院</option>
                    <option value="">加油站</option>
                </select>
                <select class="c-input c-select">
                    <option value="">区域</option>
                    <option value="">学校</option>
                    <option value="">医院</option>
                    <option value="">加油站</option>
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
            <div class="m-ctable" >
                <!-- 企业信息 -->
                <div class="table" v-show="isPInfo">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.enterpirseInfoInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.enterpirseInfoInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix" style="background-color:#185073;">
                            <Col span="4">{{ list.type }}</Col>
                            <Col span="4">{{ list.name }}</Col>
                            <Col span="6">{{ list.adress }}</Col>
                            <Col span="4">{{ list.legal }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 1)"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="4">{{ list.type }}</Col>
                            <Col span="4">{{ list.name }}</Col>
                            <Col span="6">{{ list.adress }}</Col>
                            <Col span="4">{{ list.legal }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 1)"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 企业检查 -->
                <div class="table" v-show="isPCheck">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.enterpirseCheckInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.enterpirseCheckInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.type }}</Col>
                            <Col span="5">{{ list.name }}</Col>
                            <Col span="5">{{ list.problem }}</Col>
                            <Col span="2">{{ list.legalPerson }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="2">{{ list.checkPeson }}</Col>
                            <Col span="2">{{ list.status }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 2)"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.type }}</Col>
                            <Col span="5">{{ list.name }}</Col>
                            <Col span="5">{{ list.problem }}</Col>
                            <Col span="2">{{ list.legalPerson }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="2">{{ list.checkPeson }}</Col>
                            <Col span="2">{{ list.status }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 2)"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 企业整改 -->
                <div class="table" v-show="isPRectif">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.enterpirseRectificationInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.enterpirseRectificationInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.type }}</Col>
                            <Col span="6">{{ list.name }}</Col>
                            <Col span="6">{{ list.problem }}</Col>
                            <Col span="3">{{ list.rectificationPeople }}</Col>
                            <Col span="4">{{ list.rectificationPhone }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 3)"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.type }}</Col>
                            <Col span="6">{{ list.name }}</Col>
                            <Col span="6">{{ list.problem }}</Col>
                            <Col span="3">{{ list.rectificationPeople }}</Col>
                            <Col span="4">{{ list.rectificationPhone }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 3)"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 预测预警 -->
                <div class="table" v-show="isPForecast">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.enterpirseForecastInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.enterpirseForecastInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="2">{{ list.type }}</Col>
                            <Col span="7">{{ list.name }}</Col>
                            <Col span="7">{{ list.reason }}</Col>
                            <Col span="3">{{ list.forecastPerson }}</Col>
                            <Col span="2">{{ list.dealInfo }}</Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="2">{{ list.type }}</Col>
                            <Col span="7">{{ list.name }}</Col>
                            <Col span="7">{{ list.reason }}</Col>
                            <Col span="3">{{ list.forecastPerson }}</Col>
                            <Col span="2">{{ list.dealInfo }}</Col>
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
            <div class="m-foot-head">
                {{ staticsTitle.left }}
            </div>
            <div class="m-foot-statics" id="enterpiseProblem"></div>
        </div>
        </Col>
        <Col span="12">
        <div class="m-foot-r" >
            <div class="m-foot-head">
                {{ staticsTitle.right }}
            </div>
            <div class="m-foot-statics" id="enterpiseProblemArea"></div>
        </div>
        </Col>
    </Row>
    </div>
    <div class="m-foot" v-show="isPInfo">
      <div class="m-foot-key">
        <div class="m-foot-head">
           {{ staticsTitle.left }}
        </div>
      <Row>
        <Col span="14">
        <div class="m-foot-key-l">
          <div class="m-foot-key-l-t" id="keyEnterpriseInfoPie"></div>
          <div class="m-foot-key-l-f">
              <div></div>
              <span>重点企业总数:
                <span class="e-f-font">912</span>
              </span>
              <div></div>
          </div>
        </div>
        </Col>
        <Col span="10">
        <div class="m-foot-key-r" id="keyEnterpriseInfoBar"></div>
        </Col>
      </Row>
      </div>
    </div>
    </div>
    <showDetail v-show="isDetailShow" @change="close" @changingType="lookMore" :msg="msg"></showDetail>
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
        background: url(../assets/images/k_icon_v1.png) no-repeat center center;
      }
      .c-cmenu-v2 {
        background: url(../assets/images/k_icon_v2.png) no-repeat center center;
      }
      .c-cmenu-v3 {
        background: url(../assets/images/k_icon_v3.png) no-repeat center center;
      }
      .c-cmenu-v4 {
        background: url(../assets/images/k_icon_v4.png) no-repeat center center;
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
      font-size: 16px;
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
  font-size: 14px;
  color: #f0f1f3;
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
  width: 98%;
  height: 260px;
  margin: 10px auto 0;
  .m-foot-l {
    width: 598px;
    height: 213px;
    margin: auto;
    background: url(../assets/images/c_f_l.png) no-repeat center center;
  }
  .m-foot-r {
    width: 599px;
    height: 213px;
    margin: auto;
    background: url(../assets/images/c_f_r.png) no-repeat center center;
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
    font-weight: bolder;
    font-size: 16px;
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
    width: 590px;
    height: 175px;
    top: 30px;
  }
  .m-foot-key {
    position: relative;
    width: 1225px;
    height: 213px;
    margin: 20px auto 0;
    background: url(../assets/images/c_case_bg4.png) no-repeat center center;
    .m-foot-key-l {
      margin-top: 25px;
      width: 700px;
      height: 180px;
    }
    .m-foot-key-l-t {
      width: 100%;
      height: 150px;
    }
    .m-foot-key-l-f {
      width: 100%;
      height: 25px;
    }
    .m-foot-key-r {
      margin-top: 25px;
      width: 500px;
      height: 180px;
    }
    .m-foot-key-l-f {
      font-size: 16px;
      font-weight: bold;
      div {
        display: inline-block;
        border: 1px solid #0dcba7;
        width: 200px;
      }
      span {
        display: inline-block;
        margin-top: -3px;
      }
      .e-f-font {
        color: #0dcba7;
        font-size: 26px;
      }
    }
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

#cMain .k-arrowdrop {
  position: absolute;
  font-size: 18px;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 3px;
}
#cMain .k-arrowdrop:hover {
  color: #01bbb8;
}

.k-dropup {
  top: 30%;
}
.k-dropdown {
  bottom: 23%;
}
#cMain .ivu-icon-android-arrow-dropdown {
  position: absolute;
  top: -7px;
  left: -1px;
}
#cMain .ivu-icon-android-arrow-dropup {
  position: absolute;
  top: -4px;
  left: -1px;
}
</style>


<script>
import echarts from "echarts";
import showDetail from "@/components/showDetail";
export default {
  name: "keyEnterprise",
  data() {
    return {
      isPInfo: true,
      isPCheck: false,
      isPRectif: false,
      isPForecast: false,
      isShow: false,
      isDetailShow: false,
      msg: {
        id: 0,
        type: 0,
        parent: "key"
      },
      staticsTitle: {
        left: "企业信息问题整改统计",
        right: "企业问题预警区域"
      },
      // ========================数据 =====================
      content: {
        // ================== 表格数据 ========================
        enterpirseInfoInfo: {
          list: [
            { name: "企业类型", span: 4 },
            { name: "企业名称", span: 4 },
            { name: "企业地址", span: 6 },
            { name: "企业联系人", span: 4 },
            { name: "联系电话", span: 4 }
          ],
          data: [
            {
              type: "学校",
              name: "华东理工大学(金山科技园区)",
              adress: "近郊金山区学府路1300号",
              legal: "周远民",
              phone: "021-57317438"
            },
            {
              type: "医院",
              name: "复旦大学附属金山医院",
              adress: "上海市金山区龙航路1508号",
              legal: "张利",
              phone: "021-95105888"
            },
            {
              type: "加油站",
              name: "加油站(西河沿路)",
              adress: "上海市金山区金张公路348",
              legal: "张旭鹏",
              phone: "021-64739253"
            },
            {
              type: "客运站",
              name: "金山客运站",
              adress: "上海市金山区龙平路776号",
              legal: "熊化艳",
              phone: "021-6439253"
            },
            {
              type: "医院",
              name: "上海市金山区亭林医院",
              adress: "上海市金山区亭林镇寺平北路80号",
              legal: "袁旭",
              phone: "021-6255530"
            },
            {
              type: "学校",
              name: "金山中学",
              adress: "上海市金山区众益街899号",
              legal: "李康平",
              phone: "021-64955368"
            },
            {
              type: "客运站",
              name: "枫景汽车站",
              adress: "上海市金山区泾宾路888号",
              legal: "王桂荣",
              phone: "021-57747298"
            },
            {
              type: "加油站",
              name: "中国石化(兴塔加油站)",
              adress: "上海市金山区亭枫公路6701号",
              legal: "刘凯",
              phone: "021-58222525"
            },
            {
              type: "加油站",
              name: "北方石油加油站(留溪佳园南)",
              adress: "亭枫公路253",
              legal: "杨金凤",
              phone: "021-62645484"
            },
            {
              type: "学校",
              name: "华东理工大学(金山科技园区)",
              adress: "近郊金山区学府路1300号",
              legal: "周远民",
              phone: "021-57317438"
            }
          ]
        },
        enterpirseCheckInfo: {
          list: [
            { name: "企业类型", span: 3 },
            { name: "企业名称", span: 5 },
            { name: "存在问题", span: 5 },
            { name: "企业法人", span: 2 },
            { name: "检查时间", span: 3 },
            { name: "检查人", span: 2 },
            { name: "状态", span: 2 }
          ],
          data: [
            {
              type: "学校",
              name: "华东理工大学(金山科技园区)",
              problem: "校门口经常社会青年聚集",
              legalPerson: "周远们",
              time: "2014.03.02",
              checkPeson: "陈子鸿",
              status: "已整改"
            },
            {
              type: "医院",
              name: "复旦大学附属金山医院",
              problem: "医闹",
              legalPerson: "张利",
              time: "2014.06.04",
              checkPeson: "全娟",
              status: "未整改"
            },
            {
              type: "加油站",
              name: "加油站(西河沿路)",
              problem: "溢油",
              legalPerson: "张旭鹏",
              time: "2014.08.23",
              checkPeson: "孙嫣然",
              status: "未整改"
            },
            {
              type: "客运站",
              name: "金山客运站",
              problem: "站内没有安全检查设备",
              legalPerson: "熊化艳",
              time: "2015.05.12",
              checkPeson: "周志广",
              status: "已整改"
            },
            {
              type: "医院",
              name: "上海市金山区亭林医院",
              problem: "设备设施不完善",
              legalPerson: "袁旭",
              time: "2015.05.12",
              checkPeson: "孙洪山",
              status: "未整改"
            },
            {
              type: "学校",
              name: "金山中学",
              problem: "有时卖剩饭菜或过期变质食品",
              legalPerson: "李康平",
              time: "2016.07.11",
              checkPeson: "胡丹丹",
              status: "已整改"
            },
            {
              type: "客运站",
              name: "枫景汽车站",
              problem: "人流浪密集",
              legalPerson: "王桂荣",
              time: "2016.10.30",
              checkPeson: "秦婷婷",
              status: "未整改"
            },
            {
              type: "工厂",
              name: "上海金山水泥厂",
              problem: "污染源乱排放",
              legalPerson: "刘凯",
              time: "2017.01.06",
              checkPeson: "陈秀春",
              status: "已整改"
            },
            {
              type: "客运站",
              name: "金山亭林汽车站",
              problem: "治安事件",
              legalPerson: "杨金凤",
              time: "2017.07.22",
              checkPeson: "刘英雪",
              status: "已整改"
            },
            {
              type: "学校",
              name: "华东理工大学(金山科技园区)",
              problem: "校门口经常社会青年聚集",
              legalPerson: "周远们",
              time: "2014.03.02",
              checkPeson: "陈子鸿",
              status: "已整改"
            }
          ]
        },
        enterpirseRectificationInfo: {
          list: [
            { name: "企业类型", span: 3 },
            { name: "企业名称", span: 6 },
            { name: "整改问题", span: 6 },
            { name: "企业整改人", span: 3 },
            { name: "整改人电话", span: 4 }
          ],
          data: [
            {
              type: "学校",
              name: "华东理工大学(金山科技园去)",
              problem: "校门口经常社会青年聚集",
              rectificationPeople: "周远民",
              rectificationPhone: "15811215432"
            },
            {
              type: "医院",
              name: "复旦大学附属金山医院",
              problem: "医闹",
              rectificationPeople: "张利",
              rectificationPhone: "13485967452"
            },
            {
              type: "加油站",
              name: "加油站(西河沿路)",
              problem: "溢油",
              rectificationPeople: "张旭鹏",
              rectificationPhone: "13896856352"
            },
            {
              type: "客运站",
              name: "金山客运站",
              problem: "站内没有安全检查设备",
              rectificationPeople: "熊化艳",
              rectificationPhone: "13896552635"
            },
            {
              type: "医院",
              name: "上海市金山区亭林医院",
              problem: "设备设施不完善",
              rectificationPeople: "袁旭",
              rectificationPhone: "13181905337"
            },
            {
              type: "学校",
              name: "金山中学",
              problem: "有时卖剩饭菜或过期变质食品",
              rectificationPeople: "李康平",
              rectificationPhone: "13585968563"
            },
            {
              type: "客运站",
              name: "枫景汽车站",
              problem: "人流量密集",
              rectificationPeople: "王桂荣",
              rectificationPhone: "15053369987"
            },
            {
              type: "工厂",
              name: "上海金山水泥厂",
              problem: "治安事件",
              rectificationPeople: "刘凯",
              rectificationPhone: "13485996352"
            },
            {
              type: "客运站",
              name: "金山亭林汽车站",
              problem: "治安事件",
              rectificationPeople: "杨金凤",
              rectificationPhone: "13785968566"
            },
            {
              type: "学校",
              name: "华东理工大学(金山科技园去)",
              problem: "校门口经常社会青年聚集",
              rectificationPeople: "周远民",
              rectificationPhone: "15811215432"
            }
          ]
        },
        enterpirseForecastInfo: {
          list: [
            { name: "所属辖区", span: 3 },
            { name: "企业类型", span: 2 },
            { name: "企业名称", span: 7 },
            { name: "预警原因", span: 7 },
            { name: "预警人员", span: 3 },
            { name: "处理情况", span: 2 }
          ],
          data: [
            {
              area: "金山卫镇",
              type: "学校",
              name: "华东理工大学(金山科技园去)",
              reason: "校门口经常社会青年聚集",
              forecastPerson: "周远民",
              dealInfo: "已处理"
            },
            {
              area: "玉兰新村",
              type: "医院",
              name: "复旦大学附属金山医院",
              reason: "医闹",
              forecastPerson: "张利",
              dealInfo: "未处理"
            },
            {
              area: "蒋庄村",
              type: "加油站",
              name: "加油站(西河沿路)",
              reason: "溢油",
              forecastPerson: "张旭鹏",
              dealInfo: "未处理"
            },
            {
              area: "德胜村",
              type: "客运站",
              name: "金山客运站",
              reason: "站内没有安全检查设备",
              forecastPerson: "熊化艳",
              dealInfo: "已处理"
            },
            {
              area: "山阳镇",
              type: "医院",
              name: "上海市金山区亭林医院",
              reason: "设备设施不完善",
              forecastPerson: "袁旭",
              dealInfo: "未处理"
            },
            {
              area: "金山卫镇",
              type: "学校",
              name: "金山中学",
              reason: "有时卖剩饭菜或过期变质食品",
              forecastPerson: "李康平",
              dealInfo: "已处理"
            },
            {
              area: "金山卫镇",
              type: "工厂",
              name: "上海金山水泥厂",
              reason: "治安事件",
              forecastPerson: "刘凯",
              dealInfo: "已处理"
            },
            {
              area: "金山卫镇",
              type: "客运站",
              name: "金山亭林汽车站",
              reason: "治安事件",
              forecastPerson: "杨金凤",
              dealInfo: "处理中"
            },
            {
              area: "金山卫镇",
              type: "学校",
              name: "华东理工大学(金山科技园去)",
              reason: "校门口经常社会青年聚集",
              forecastPerson: "周远民",
              dealInfo: "已处理"
            },
            {
              area: "金山卫镇",
              type: "学校",
              name: "华东理工大学(金山科技园去)",
              reason: "校门口经常社会青年聚集",
              forecastPerson: "周远民",
              dealInfo: "已处理"
            }
          ]
        },
        // ======================统计图数据===========================
        cvsEnterpirsePie: {
          data: [
            {
              name: "学校",
              color: "#399FFD",
              total: 321,
              value: 321,
              center: ["13%", "50%"]
            },
            {
              name: "工厂",
              color: "#3BBBBA",
              total: 321,
              value: 37,
              center: ["32%", "50%"]
            },
            {
              name: "医院",
              color: "#E6C335",
              total: 321,
              value: 121,
              center: ["51%", "50%"]
            },
            {
              name: "加油站",
              color: "#E17184",
              total: 321,
              value: 156,
              center: ["70%", "50%"]
            },
            {
              name: "客运站",
              color: "#9B69DF",
              total: 321,
              value: 156,
              center: ["90%", "50%"]
            }
          ]
        },
        cvsEnterpirseTs: {
          yAxis: ["学校", "工厂", "医院", "加油站", "客运站"],
          data: [12, 14, 39, 39, 45],
          color: ["#147484", "#3161ab", "#437f66", "#894957", "#2b57ae"]
        },
        cvsEnterpirseCheckPie: {
          data: [
            { name: "总问题", total: 321, value: 321, center: ["15%", "50%"] },
            { name: "待整改", total: 321, value: 37, center: ["38%", "50%"] },
            { name: "已整改", total: 321, value: 121, center: ["62%", "50%"] },
            { name: "整改中", total: 321, value: 156, center: ["85%", "50%"] }
          ]
        },
        cvsEnterpirseCheckTs: {
          plantCap: [
            {
              name: "玉兰新村",
              value: "120"
            },
            {
              name: "顾家冰桥",
              value: "115"
            },
            {
              name: "下横径桥",
              value: "113"
            },
            {
              name: "德胜村",
              value: "95"
            },
            {
              name: "高桥村",
              value: "92"
            },
            {
              name: "金山卫镇",
              value: "87"
            },
            {
              name: "联建村",
              value: "87"
            },
            {
              name: "蒋庄村",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "50"
            },
            {
              name: "玉兰新村",
              value: "120"
            },
            {
              name: "顾家冰桥",
              value: "115"
            },
            {
              name: "下横径桥",
              value: "113"
            },
            {
              name: "德胜村",
              value: "95"
            },
            {
              name: "高桥村",
              value: "92"
            },
            {
              name: "金山卫镇",
              value: "87"
            },
            {
              name: "联建村",
              value: "87"
            },
            {
              name: "蒋庄村",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "50"
            }
          ],
          datalist: (function(argument) {
            let arr = [];
            let obj;
            for (var i = 0; i < 20; i++) {
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
        cvsEnterpirseRectificationPie: {
          data: [
            { name: "总问题", total: 321, value: 321, center: ["15%", "50%"] },
            { name: "待整改", total: 321, value: 37, center: ["38%", "50%"] },
            { name: "已整改", total: 321, value: 121, center: ["62%", "50%"] },
            { name: "整改中", total: 321, value: 156, center: ["85%", "50%"] }
          ]
        },
        cvsEnterpirseRectificationTs: {
          plantCap: [
            {
              name: "玉兰新村",
              value: "120"
            },
            {
              name: "顾家冰桥",
              value: "115"
            },
            {
              name: "下横径桥",
              value: "113"
            },
            {
              name: "德胜村",
              value: "95"
            },
            {
              name: "高桥村",
              value: "92"
            },
            {
              name: "金山卫镇",
              value: "87"
            },
            {
              name: "联建村",
              value: "87"
            },
            {
              name: "蒋庄村",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "50"
            },
            {
              name: "玉兰新村",
              value: "120"
            },
            {
              name: "顾家冰桥",
              value: "115"
            },
            {
              name: "下横径桥",
              value: "113"
            },
            {
              name: "德胜村",
              value: "95"
            },
            {
              name: "高桥村",
              value: "92"
            },
            {
              name: "金山卫镇",
              value: "87"
            },
            {
              name: "联建村",
              value: "87"
            },
            {
              name: "蒋庄村",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "50"
            }
          ],
          datalist: (function(argument) {
            let arr = [];
            let obj;
            for (var i = 0; i < 20; i++) {
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
        cvsEnterpirseForecastPie: {
          data: [
            { name: "总问题", total: 321, value: 321, center: ["15%", "50%"] },
            { name: "待整改", total: 321, value: 37, center: ["38%", "50%"] },
            { name: "已整改", total: 321, value: 121, center: ["62%", "50%"] },
            { name: "整改中", total: 321, value: 156, center: ["85%", "50%"] }
          ]
        },
        cvsEnterpirseForecastTs: {
          plantCap: [
            {
              name: "玉兰新村",
              value: "120"
            },
            {
              name: "顾家冰桥",
              value: "115"
            },
            {
              name: "下横径桥",
              value: "113"
            },
            {
              name: "德胜村",
              value: "95"
            },
            {
              name: "高桥村",
              value: "92"
            },
            {
              name: "金山卫镇",
              value: "87"
            },
            {
              name: "联建村",
              value: "87"
            },
            {
              name: "蒋庄村",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "50"
            },
            {
              name: "玉兰新村",
              value: "120"
            },
            {
              name: "顾家冰桥",
              value: "115"
            },
            {
              name: "下横径桥",
              value: "113"
            },
            {
              name: "德胜村",
              value: "95"
            },
            {
              name: "高桥村",
              value: "92"
            },
            {
              name: "金山卫镇",
              value: "87"
            },
            {
              name: "联建村",
              value: "87"
            },
            {
              name: "蒋庄村",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "60"
            },
            {
              name: "山阳镇",
              value: "50"
            }
          ],
          datalist: (function(argument) {
            let arr = [];
            let obj;
            for (var i = 0; i < 20; i++) {
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
        }
      }
    };
  },
  mounted() {
    this.keyEnterpriseInfoPie(this.content.cvsEnterpirsePie);
    this.keyEnterpriseInfoBar(this.content.cvsEnterpirseTs);
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
       * 1-企业信息
       * 2-企业检查
       * 3-企业整改
       */
      this.msg.id = id;
      this.msg.type = type;
      this.isDetailShow = true;
    },
    close() {
      this.isDetailShow = false;
    },
    popClose() {},
    dropdown() {},
    dropup() {},
    getPage(page) {
      // 根据接口获取新的数据
    },
    enterpirseInfo() {
      this.staticsTitle.left = "企业问题整改统计";
      this.staticsTitle.right = "企业问题预警区域";
      this.isShow = false;
      this.isPInfo = true;
      this.isPCheck = false;
      this.isPRectif = false;
      this.isPForecast = false;
      this.keyEnterpriseInfoPie(this.content.cvsEnterpirsePie);
      this.keyEnterpriseInfoBar(this.content.cvsEnterpirseTs);
    },
    enterpirseCheck() {
      this.staticsTitle.left = "企业问题整改统计";
      this.staticsTitle.right = "企业问题预警区域";
      this.isShow = true;
      this.isPInfo = false;
      this.isPCheck = true;
      this.isPRectif = false;
      this.isPForecast = false;
      this.enterpiseProblem(this.content.cvsEnterpirseCheckPie);
      this.enterpiseProblemArea(this.content.cvsEnterpirseCheckTs);
    },
    enterpirseRectification() {
      this.staticsTitle.left = "企业问题整改统计";
      this.staticsTitle.right = "企业问题预警区域";
      this.isShow = true;
      this.isPInfo = false;
      this.isPCheck = false;
      this.isPRectif = true;
      this.isPForecast = false;
      this.enterpiseProblem(this.content.cvsEnterpirseRectificationPie);
      this.enterpiseProblemArea(this.content.cvsEnterpirseRectificationTs);
    },
    enterpirseForecast() {
      this.staticsTitle.left = "企业问题整改统计";
      this.staticsTitle.right = "企业问题预警区域";
      this.isShow = true;
      this.isPInfo = false;
      this.isPCheck = false;
      this.isPRectif = false;
      this.isPForecast = true;
      this.enterpiseProblem(this.content.cvsEnterpirseForecastPie);
      this.enterpiseProblemArea(this.content.cvsEnterpirseForecastTs);
    },
    enterpiseProblem(datas) {
      let myChart = echarts.init(document.getElementById("enterpiseProblem"));
      let labelFromatter = {
        normal: {
          label: {
            formatter: function(params) {
              return 100 - params.value + "%";
            },
            textStyle: {
              baseline: "top"
            }
          }
        }
      };

      let labelTop;
      let labelBottom = {
        normal: {
          color: "#2d6483",
          label: {
            show: true,
            position: "center",
            textStyle: {
              color: "#c00", //低于60红色,
              fontSize: 14
            },
            borderColor: "#2d6483",
            borderWidth: 0
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          borderColor: "#2d6483",
          borderWidth: 0
        }
      };
      let labelStyle = {
        normal: {
          formatter: "{d} %",
          textStyle: {
            fontSize: 20
          }
        }
      };
      var radius = [45, 55];
      var option = {
        backgroundColor: "#08304a",
        color: ["#399FFD", "#3BBBBA", "#E6C335", "#E17184", "#9B69DF"],
        series: []
      };

      for (let i = 0; i < datas.data.length; i++) {
        labelTop = {
          normal: {
            label: {
              show: true,
              position: "center",
              formatter: "{b}",
              textStyle: {
                baseline: "bottom",
                fontSize: 9
              }
            },
            labelLine: {
              show: true
            },
            borderColor: option.color[i],
            borderWidth: 4
          },
          emphasis: {
            borderColor: option.color[i],
            borderWidth: 4
          }
        };
        option.series.push({
          type: "pie",
          center: datas.data[i].center,
          radius: radius,
          x: "60%", // for funnel
          itemStyle: labelFromatter,
          startAngle: "30",
          label: {
            normal: {
              position: "center"
            }
          },
          data: [
            {
              name: datas.data[i].name,
              value: datas.data[i].value,
              itemStyle: labelTop,
              label: labelStyle
            },
            {
              name: "",
              value: datas.data[i].total - datas.data[i].value,
              itemStyle: labelBottom,
              label: {
                normal: {
                  formatter: "\n" + datas.data[i].name,
                  textStyle: {
                    color: "#fbfbfb"
                  }
                }
              }
            }
          ]
        });
      }
      myChart.setOption(option);
    },
    enterpiseProblemArea(datas) {
      let myChart = echarts.init(
        document.getElementById("enterpiseProblemArea")
      );
      let datasList = [];
      for (let i = 0; i < datas.plantCap.length; i++) {
        let item = datas.plantCap[i];
        let itemToStyle = datas.datalist[i];
        datasList.push({
          name: item.name,
          number: item.value,
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
          formatter: function(params) {
            return params.data.name + ":" + params.data.number + "起";
          }
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
    keyEnterpriseInfoPie(datas) {
      let myChart = echarts.init(
        document.getElementById("keyEnterpriseInfoPie")
      );
      let labelFromatter = {
        normal: {
          label: {
            formatter: function(params) {
              return params.value;
            },
            textStyle: {
              baseline: "top"
            }
          }
        }
      };

      let labelTop;
      let labelBottom = {
        normal: {
          color: "#2d6483",
          label: {
            show: true,
            position: "center",
            textStyle: {
              color: "#c00", //低于60红色,
              fontSize: 14
            }
          },
          labelLine: {
            show: false
          },
          borderColor: "#2d6483",
          borderWidth: 0
        },
        emphasis: {
          borderColor: "#2d6483",
          borderWidth: 0
        },
        hoverAnimation: false
      };
      let labelStyle = {
        normal: {
          formatter: "{d}df",
          textStyle: {
            fontSize: 20
          }
        }
      };
      var radius = [50, 60];
      var option = {
        backgroundColor: "#08304a",
        color: ["#399FFD", "#3BBBBA", "#E6C335", "#E17184", "#9B69DF"],
        series: []
      };

      for (let i = 0; i < datas.data.length; i++) {
        labelTop = {
          normal: {
            label: {
              show: true,
              position: "center",
              formatter: "{b}",
              textStyle: {
                baseline: "bottom",
                fontSize: 9
              }
            },
            labelLine: {
              show: true
            },
            borderColor: datas.data[i].color,
            borderWidth: 4
          },
          emphasis: {
            borderWidth: 4
          }
        };
        option.series.push({
          type: "pie",
          center: datas.data[i].center,
          radius: radius,
          x: "60%", // for funnel
          itemStyle: labelFromatter,
          startAngle: "30",
          label: {
            normal: {
              position: "center"
            }
          },
          data: [
            {
              name: datas.data[i].name,
              value: datas.data[i].value,
              itemStyle: labelTop,
              label: {
                normal: {
                  formatter: datas.data[i].value + "",
                  textStyle: {
                    fontSize: 20
                  }
                }
              }
            },
            {
              name: "",
              value: datas.data[i].total - datas.data[i].value,
              itemStyle: labelBottom,
              label: {
                normal: {
                  formatter: "\n" + datas.data[i].name,
                  textStyle: {
                    color: "#fbfbfb"
                  }
                }
              }
            }
          ]
        });
      }
      myChart.setOption(option);
    },
    keyEnterpriseInfoBar(datas) {
      let myChart = echarts.init(
        document.getElementById("keyEnterpriseInfoBar")
      );

      var data = [17, 20, 45, 56, 60, 64];
      var xMax = 100;
      var option = {
        tooltip: {
          show: true,
          formatter: "{b} {c}"
        },
        grid: {
          left: "15%",
          top: "5%",
          bottom: "5%",
          right: "5%"
        },
        xAxis: [
          {
            max: xMax,
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            data: datas.yAxis,
            nameTextStyle: {
              fontSize: "18px"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#e1e6e9"
              }
            }
          }
        ],
        series: [
          {
            name: " ",
            type: "bar",
            barWidth: 16,
            silent: true,
            itemStyle: {
              normal: {
                color: "#08304a"
              }
            },
            barGap: "-100%",
            barCategoryGap: "50%",
            data: data.map(function(d) {
              return xMax;
            })
          },
          {
            name: " ",
            type: "bar",
            barWidth: 16,
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{c}%"
              }
            },
            data: []
          }
        ]
      };
      for (let i = 0; i < datas.data.length; i++) {
        option.series[1].data.push({
          value: datas.data[i],
          itemStyle: {
            normal: {
              color: datas.color[i]
            }
          },
          label: {
            color: "#fbfbfb",
            fontSize: 16
          }
        });
      }
      myChart.setOption(option);
    }
  }
};
</script>


