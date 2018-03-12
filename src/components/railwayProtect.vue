<template>
<div>
    <div class="main" id="cMain">
    <div class="m-header">
    <Row>
        <Col span="23">
        <div class="m-title">
            <img src="../assets/images/title12.png"/>
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
                <li @click="railwayInfo" v-bind:class="{'c-active': isRWInfo}"><i class="c-cmenu-v1"></i>线路信息</li>
                <li @click="railwayCase" v-bind:class="{'c-active': isRWCase}"><i class="c-cmenu-v2"></i>涉路事件</li>
                <li @click="railwayTroops" v-bind:class="{'c-active': isRWTroops}"><i class="c-cmenu-v3"></i>护路队伍</li>
                <li @click="railwaySearch" v-bind:class="{'c-active': isRWSearch}"><i class="c-cmenu-v4"></i>护路查询</li>
            </ul>
        </div>
        </Col>
        <Col span="19">
        <div class="m-ccontent" id="mCcontent">
            <!-- 线路信息 -->
            <div class="m-cconditional" v-show="isRWInfo">
                <select class="c-input c-select">
                    <option value="">线路类型</option>
                    <option value="">铁路</option>
                    <option value="">公路</option>
                    <option value="">电信设施</option>
                </select>
                <select class="c-input c-select">
                    <option value="">治安隐患等级</option>
                    <option value="">高</option>
                    <option value="">中</option>
                    <option value="">低</option>
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
            <!-- 涉路事件 -->
            <div class="m-cconditional" v-show="isRWCase">
               <select class="c-input c-select">
                    <option value="">线路类型</option>
                    <option value="">铁路</option>
                    <option value="">公路</option>
                    <option value="">电信设施</option>
                </select>
                <select class="c-input c-select">
                    <option value="">治安隐患等级</option>
                    <option value="">高</option>
                    <option value="">中</option>
                    <option value="">低</option>
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
            <!-- 护路队伍 -->
            <div class="m-cconditional" v-show="isRWTroops">
                 <select class="c-input c-select">
                    <option value="">护路单位</option>
                    <option value="">上海市</option>
                    <option value="">金山区公路</option>
                    <option value="">通信局</option>
                </select>
                <select class="c-input c-select">
                    <option value="">护路类型</option>
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
            <!-- 护路查询 -->
            <div class="m-cconditional" v-show="isRWSearch">
                <select class="c-input c-select">
                    <option value="">线路类型</option>
                    <option value="">铁路</option>
                    <option value="">公路</option>
                    <option value="">电信设施</option>
                </select>
                <select class="c-input c-select">
                    <option value="">查询单位</option>
                    <option value="">上海市金山办事处</option>
                    <option value="">通信局</option>
                    <option value="">金山区公路局</option>
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
                <!-- 线路信息 -->
                <div class="table" v-show="isRWInfo">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.railwayInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.railwayInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix" style="background-color:#185073;">
                            <Col span="4">{{ list.area }}</Col>
                            <Col span="4">{{ list.lineName }}</Col>
                            <Col span="3">{{ list.lineType }}</Col>
                            <Col span="5">{{ list.unit }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="2">{{ list.grade }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 1)"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="4">{{ list.area }}</Col>
                            <Col span="4">{{ list.lineName }}</Col>
                            <Col span="3">{{ list.lineType }}</Col>
                            <Col span="5">{{ list.unit }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="2">{{ list.grade }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 1)"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 涉路事件 -->
                <div class="table" v-show="isRWCase">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.railwayCaseInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.railwayCaseInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="4">{{ list.caseName }}</Col>
                            <Col span="4">{{ list.caseNature }}</Col>
                            <Col span="5">{{ list.scene }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="3">{{ list.crimeName }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 2)"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="4">{{ list.caseName }}</Col>
                            <Col span="4">{{ list.caseNature }}</Col>
                            <Col span="5">{{ list.scene }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                            <Col span="3">{{ list.crimeName }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore(1, 2)"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 护路队伍 -->
                <div class="table" v-show="isRWTroops">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.railwayTroopsInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.railwayTroopsInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="7">{{ list.unit }}</Col>
                            <Col span="6">{{ list.line }}</Col>
                            <Col span="4">{{ list.unitPerson }}</Col>
                            <Col span="4">{{ list.unitPhone }}</Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="7">{{ list.unit }}</Col>
                            <Col span="6">{{ list.line }}</Col>
                            <Col span="4">{{ list.unitPerson }}</Col>
                            <Col span="4">{{ list.unitPhone }}</Col>
                        </div>
                    </div>
                </div>
                <!-- 护路查询 -->
                <div class="table" v-show="isRWSearch">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.railwaySearchInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        <span @click="dropup" class="k-arrowdrop k-dropup"><Icon type="android-arrow-dropup"></Icon></span>
                        <span @click="dropdown" class="k-arrowdrop k-dropdown"><Icon type="android-arrow-dropdown"></Icon></span>
                        </Col>
                      </template>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.railwaySearchInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="5">{{ list.line }}</Col>
                            <Col span="6">{{ list.unit }}</Col>
                            <Col span="2">{{ list.unitPerson }}</Col>
                            <Col span="5">{{ list.task }}</Col>
                            <Col span="3">{{ list.time }}</Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="3">{{ list.area }}</Col>
                            <Col span="5">{{ list.line }}</Col>
                            <Col span="6">{{ list.unit }}</Col>
                            <Col span="2">{{ list.unitPerson }}</Col>
                            <Col span="5">{{ list.task }}</Col>
                            <Col span="3">{{ list.time }}</Col>
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
      <div class="m-foot-key">
        <div class="m-foot-head">
           {{ staticsTitle }}
        </div>
      <Row>
        <Col span="14">
        <div class="m-foot-key-l">
          <div class="m-foot-key-l-t" id="railwayProtectProblemPie"></div>
        </div>
        </Col>
        <Col span="10">
        <div class="m-foot-key-r" id="railwayProtectProblemBar"></div>
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
    letter-spacing: 3px;
    font-weight: bold;
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
        background: url(../assets/images/r_icon_v1.png) no-repeat center center;
      }
      .c-cmenu-v2 {
        background: url(../assets/images/r_icon_v2.png) no-repeat center center;
      }
      .c-cmenu-v3 {
        background: url(../assets/images/r_icon_v3.png) no-repeat center center;
      }
      .c-cmenu-v4 {
        background: url(../assets/images/r_icon_v4.png) no-repeat center center;
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
  name: "railwayProtect",
  data() {
    return {
      isRWInfo: true,
      isRWCase: false,
      isRWTroops: false,
      isRWSearch: false,
      isDetailShow: false,
      msg: {
        id: 0,
        type: 0,
        parent: "railway"
      },
      staticsTitle: "路线隐患统计",
      // ========================数据 =====================
      content: {
        // ================== 表格数据 ========================
        railwayInfo: {
          list: [
            { name: "所属辖区", span: 4 },
            { name: "路线名称", span: 4 },
            { name: "路线类型", span: 3 },
            { name: "隶属单位", span: 5 },
            { name: "隶属单位联系方式", span: 4 },
            { name: "治安隐患等级", span: 2 }
          ],
          data: [
            {
              area: "金山卫镇",
              lineName: "金山卫镇断面",
              lineType: "铁路",
              unit: "上海市铁路局金山办事处",
              phone: "021-57317438",
              grade: "高"
            },
            {
              area: "玉兰新村",
              lineName: "玉兰新村断面",
              lineType: "电信设施",
              unit: "通信局",
              phone: "021-95105888",
              grade: "低"
            },
            {
              area: "蒋庄村",
              lineName: "蒋庄村断面",
              lineType: "公路",
              unit: "金山区公路局",
              phone: "021-95105888",
              grade: "中"
            },
            {
              area: "德胜村",
              lineName: "德胜村断面",
              lineType: "水路",
              unit: "金山区公路局",
              phone: "021-64739253",
              grade: "高"
            },
            {
              area: "山阳镇",
              lineName: "山羊镇断面",
              lineType: "公路",
              unit: "上海市铁路局金山办事处",
              phone: "021-57317438",
              grade: "低"
            },
            {
              area: "金山卫镇",
              lineName: "金山卫镇断面",
              lineType: "铁路",
              unit: "上海市铁路局金山办事处",
              phone: "021-57317438",
              grade: "高"
            },
            {
              area: "顾家桥",
              lineName: "顾家桥断面",
              lineType: "铁路",
              unit: "上海市铁路局金山办事处",
              phone: "021-57315849",
              grade: "中"
            },
            {
              area: "金山卫镇",
              lineName: "金山卫镇断面",
              lineType: "公路",
              unit: "金山区公路局",
              phone: "021-54358454",
              grade: "低"
            },
            {
              area: "金山卫镇",
              lineName: "金山卫镇断面",
              lineType: "铁路",
              unit: "上海市铁路局金山办事处",
              phone: "021-57317438",
              grade: "高"
            },
            {
              area: "金山卫镇",
              lineName: "金山卫镇断面",
              lineType: "铁路",
              unit: "上海市铁路局金山办事处",
              phone: "021-57317438",
              grade: "高"
            }
          ]
        },
        railwayCaseInfo: {
          list: [
            { name: "所属辖区", span: 3 },
            { name: "案(事)件名称", span: 4 },
            { name: "案(事)件性质", span: 4 },
            { name: "发生地点", span: 5 },
            { name: "发生日期", span: 3 },
            { name: "主犯(嫌疑人)姓名", span: 3 }
          ],
          data: [
            {
              area: "金山卫镇",
              caseName: "路线安全",
              caseNature: "行政案件",
              scene: "金山卫镇断面",
              time: "2014.03.02",
              crimeName: "陈子鸿"
            },
            {
              area: "玉兰新村",
              caseName: "路线安全",
              caseNature: "民事案件",
              scene: "玉兰新村断面",
              time: "2014.05.07",
              crimeName: "张利"
            },
            {
              area: "蒋庄村",
              caseName: "公路治安维护",
              caseNature: "其他",
              scene: "蒋庄村公路口",
              time: "2016.10.02",
              crimeName: "张旭鹏"
            },
            {
              area: "山阳镇",
              caseName: "公路治安维护",
              caseNature: "行政案件",
              scene: "山阳镇断面",
              time: "2015.12.02",
              crimeName: "袁旭"
            },
            {
              area: "德胜村",
              caseName: "治安维护",
              caseNature: "治安案件",
              scene: "德胜村公路交口",
              time: "2015.10.18",
              crimeName: "熊化艳"
            },
            {
              area: "金山卫镇",
              caseName: "跌入轨道事件",
              caseNature: "民事案件",
              scene: "金山卫镇断面",
              time: "2016.07.12",
              crimeName: "李康平"
            },
            {
              area: "顾家桥",
              caseName: "路线安全",
              caseNature: "其他",
              scene: "顾家桥断面",
              time: "2014.03.02",
              crimeName: "王桂荣"
            },
            {
              area: "金山卫镇",
              caseName: "公路治安维护",
              caseNature: "其他",
              scene: "金山卫镇45号",
              time: "2017.07.22",
              crimeName: "杨金凤"
            },
            {
              area: "金山卫镇",
              caseName: "路线安全",
              caseNature: "民事案件",
              scene: "金山卫镇断面",
              time: "2014.03.02",
              crimeName: "万丰来"
            },
            {
              area: "金山卫镇",
              caseName: "路线安全",
              caseNature: "行政案件",
              scene: "金山卫镇断面",
              time: "2014.03.02",
              crimeName: "陈子鸿"
            }
          ]
        },
        railwayTroopsInfo: {
          list: [
            { name: "所属辖区", span: 3 },
            { name: "护路单位", span: 7 },
            { name: "负责路线", span: 6 },
            { name: "护路单位负责人", span: 4 },
            { name: "负责人电话", span: 4 }
          ],
          data: [
            {
              area: "金山卫镇",
              unit: "上海市铁路局金山办事处",
              line: "金山卫镇段面",
              unitPerson: "周远民",
              unitPhone: "15811215432"
            },
            {
              area: "玉兰新村",
              unit: "通信局",
              line: "村南新村断面",
              unitPerson: "张利",
              unitPhone: "13485967452"
            },
            {
              area: "蒋庄村",
              unit: "金山区公路局",
              line: "蒋庄村公路口",
              unitPerson: "张旭鹏",
              unitPhone: "13896856352"
            },
            {
              area: "德胜村",
              unit: "金山区公路局",
              line: "德胜村交叉路口",
              unitPerson: "熊化艳",
              unitPhone: "13896552635"
            },
            {
              area: "山阳镇",
              unit: "金山区公路局",
              line: "山阳镇大姐",
              unitPerson: "袁旭",
              unitPhone: "13181905337"
            },
            {
              area: "金山卫镇",
              unit: "上海市铁路局金山办事处",
              line: "金山卫镇段面",
              unitPerson: "李康平",
              unitPhone: "13585968563"
            },
            {
              area: "金山卫镇",
              unit: "金山区公路局",
              line: "金山卫镇45号",
              unitPerson: "刘凯",
              unitPhone: "13485996352"
            },
            {
              area: "金山卫镇",
              unit: "上海市铁路局金山办事处",
              line: "金山卫镇段面",
              unitPerson: "杨金凤",
              unitPhone: "13785968566"
            },
            {
              area: "金山卫镇",
              unit: "上海市铁路局金山办事处",
              line: "金山卫镇段面",
              unitPerson: "王凤来",
              unitPhone: "13002708996"
            },
            {
              area: "金山卫镇",
              unit: "上海市铁路局金山办事处",
              line: "金山卫镇段面",
              unitPerson: "周远民",
              unitPhone: "15811215432"
            }
          ]
        },
        railwaySearchInfo: {
          list: [
            { name: "所属辖区", span: 3 },
            { name: "巡查路线", span: 5 },
            { name: "巡查单位", span: 6 },
            { name: "巡查人", span: 2 },
            { name: "巡查任务", span: 5 },
            { name: "发生日期", span: 3 }
          ],
          data: [
            {
              area: "金山卫镇",
              line: "金山卫镇段面",
              unit: "上海市铁路局金山办事处",
              unitPerson: "周远民",
              task: "巡查铁路周围",
              time: "2014.03.02"
            },
            {
              area: "玉兰新村",
              line: "玉兰新村段面",
              unit: "通信局",
              unitPerson: "张利",
              task: "巡查光纤电缆周围",
              time: "2014.06.04"
            },
            {
              area: "蒋庄村",
              line: "蒋庄村公路交叉口",
              unit: "金山区公路局",
              unitPerson: "张旭鹏",
              task: "巡查公路周围",
              time: "2015.05.12"
            },
            {
              area: "德胜村",
              line: "德胜公路交叉路口",
              unit: "金山区公路局",
              unitPerson: "熊艳华",
              task: "巡查铁路周围",
              time: "2015.05.12"
            },
            {
              area: "山阳镇",
              line: "山阳镇段面",
              unit: "上海市铁路局金山办事处",
              unitPerson: "李康平",
              task: "巡查铁路周围",
              time: "2016.07.11"
            },
            {
              area: "金山卫镇",
              line: "金山卫镇段面",
              unit: "上海市铁路局金山办事处",
              unitPerson: "王桂荣",
              task: "巡查铁路周围",
              time: "2016.10.31"
            },
            {
              area: "金山卫镇",
              line: "金山卫镇45号",
              unit: "金山区公路局",
              unitPerson: "杨金凤",
              task: "巡查铁路周围",
              time: "2017.07.22"
            },
            {
              area: "金山卫镇",
              line: "金山卫镇段面",
              unit: "上海市铁路局金山办事处",
              unitPerson: "王凤来",
              task: "巡查铁路周围",
              time: "2017.12.13"
            },
            {
              area: "金山卫镇",
              line: "金山卫镇段面",
              unit: "上海市铁路局金山办事处",
              unitPerson: "周远民",
              task: "巡查铁路周围",
              time: "2014.03.02"
            },
            {
              area: "金山卫镇",
              line: "金山卫镇段面",
              unit: "上海市铁路局金山办事处",
              unitPerson: "周远民",
              task: "巡查铁路周围",
              time: "2014.03.02"
            }
          ]
        },
        // ======================统计图数据===========================
        cvsRailwayInfoPie: {
          data: [
            {
              name: "所有路线",
              color: "#399FFD",
              total: 125,
              value: 125,
              center: ["13%", "50%"]
            },
            {
              name: "正常路线",
              color: "#3BBBBA",
              total: 125,
              value: 54,
              center: ["32%", "50%"]
            },
            {
              name: "地隐患路线",
              color: "#E6C335",
              total: 125,
              value: 65,
              center: ["51%", "50%"]
            },
            {
              name: "中隐患路线",
              color: "#E17184",
              total: 125,
              value: 21,
              center: ["70%", "50%"]
            },
            {
              name: "高隐患路线",
              color: "#9B69DF",
              total: 125,
              value: 5,
              center: ["90%", "50%"]
            }
          ]
        },
        cvsRailwayInfoBar: {
          yAxis: ["公路", "铁路", "水路", "电信设施"],
          data: [12, 14, 39, 39],
          color: ["#147484", "#3161ab", "#437f66", "#894957", "#2b57ae"]
        },
        cvsRailwayCasePie: {
          data: [
            {
              name: "所有路线",
              color: "#399FFD",
              total: 125,
              value: 125,
              center: ["13%", "50%"]
            },
            {
              name: "正常路线",
              color: "#3BBBBA",
              total: 125,
              value: 54,
              center: ["32%", "50%"]
            },
            {
              name: "地隐患路线",
              color: "#E6C335",
              total: 125,
              value: 65,
              center: ["51%", "50%"]
            },
            {
              name: "中隐患路线",
              color: "#E17184",
              total: 125,
              value: 21,
              center: ["70%", "50%"]
            },
            {
              name: "高隐患路线",
              color: "#9B69DF",
              total: 125,
              value: 5,
              center: ["90%", "50%"]
            }
          ]
        },
        cvsRailwayCasePBar: {
          yAxis: ["公路", "铁路", "水路", "电信设施"],
          data: [12, 14, 39, 39],
          color: ["#147484", "#3161ab", "#437f66", "#894957", "#2b57ae"]
        },
        cvsRailwayTroopsPie: {
          data: [
            {
              name: "所有路线",
              color: "#399FFD",
              total: 125,
              value: 125,
              center: ["13%", "50%"]
            },
            {
              name: "正常路线",
              color: "#3BBBBA",
              total: 125,
              value: 54,
              center: ["32%", "50%"]
            },
            {
              name: "地隐患路线",
              color: "#E6C335",
              total: 125,
              value: 65,
              center: ["51%", "50%"]
            },
            {
              name: "中隐患路线",
              color: "#E17184",
              total: 125,
              value: 21,
              center: ["70%", "50%"]
            },
            {
              name: "高隐患路线",
              color: "#9B69DF",
              total: 125,
              value: 5,
              center: ["90%", "50%"]
            }
          ]
        },
        cvsRailwayTroopsBar: {
          yAxis: ["公路", "铁路", "水路", "电信设施"],
          data: [12, 14, 39, 39],
          color: ["#147484", "#3161ab", "#437f66", "#894957", "#2b57ae"]
        },
        cvsRailwaySearchPie: {
          data: [
            {
              name: "所有路线",
              color: "#399FFD",
              total: 125,
              value: 125,
              center: ["13%", "50%"]
            },
            {
              name: "正常路线",
              color: "#3BBBBA",
              total: 125,
              value: 54,
              center: ["32%", "50%"]
            },
            {
              name: "地隐患路线",
              color: "#E6C335",
              total: 125,
              value: 65,
              center: ["51%", "50%"]
            },
            {
              name: "中隐患路线",
              color: "#E17184",
              total: 125,
              value: 21,
              center: ["70%", "50%"]
            },
            {
              name: "高隐患路线",
              color: "#9B69DF",
              total: 125,
              value: 5,
              center: ["90%", "50%"]
            }
          ]
        },
        cvsRailwaySearchBar: {
          yAxis: ["公路", "铁路", "水路", "电信设施"],
          data: [12, 14, 39, 39],
          color: ["#147484", "#3161ab", "#437f66", "#894957", "#2b57ae"]
        }
      }
    };
  },
  mounted() {
    this.railwayProtectProblemPie(this.content.cvsRailwayInfoPie);
    this.railwayProtectProblemBar(this.content.cvsRailwayInfoBar);
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
       * 1- 路线信息
       * 2-涉路事件
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
    railwayInfo() {
      this.isRWInfo = true;
      this.isRWCase = false;
      this.isRWTroops = false;
      this.isRWSearch = false;
      this.railwayProtectProblemPie(this.content.cvsRailwayInfoPie);
      this.railwayProtectProblemBar(this.content.cvsRailwayInfoBar);
    },
    railwayCase() {
      this.isRWInfo = false;
      this.isRWCase = true;
      this.isRWTroops = false;
      this.isRWSearch = false;
      this.railwayProtectProblemPie(this.content.cvsRailwayCasePie);
      this.railwayProtectProblemBar(this.content.cvsRailwayCasePBar);
    },
    railwayTroops() {
      this.isRWInfo = false;
      this.isRWCase = false;
      this.isRWTroops = true;
      this.isRWSearch = false;
      this.railwayProtectProblemPie(this.content.cvsRailwayTroopsPie);
      this.railwayProtectProblemBar(this.content.cvsRailwayTroopsBar);
    },
    railwaySearch() {
      this.isRWInfo = false;
      this.isRWCase = false;
      this.isRWTroops = false;
      this.isRWSearch = true;
      this.railwayProtectProblemPie(this.content.cvsRailwaySearchPie);
      this.railwayProtectProblemBar(this.content.cvsRailwaySearchBar);
    },
    railwayProtectProblemPie(datas) {
      let myChart = echarts.init(
        document.getElementById("railwayProtectProblemPie")
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
    railwayProtectProblemBar(datas) {
      let myChart = echarts.init(
        document.getElementById("railwayProtectProblemBar")
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


