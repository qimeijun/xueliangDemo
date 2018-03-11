<template>
<div>
    <div class="main" id="cMain">
    <div class="m-header">
    <Row>
        <Col span="23">
        <div class="m-title">
            <img src="../assets/images/title10.png"/>
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
                <li @click="allPopulation" v-bind:class="{'c-active': isAllP}"><i class="c-cmenu-v1"></i>全部人口</li>
                <li @click="registeredPopulation" v-bind:class="{'c-active': isRegisterP}"><i class="c-cmenu-v2"></i>户籍人口</li>
                <li @click="insidePopulation" v-bind:class="{'c-active': isInsideP}"><i class="c-cmenu-v3"></i>来沪人口</li>
                <li @click="outsidePopulation" v-bind:class="{'c-active': isOutsizeP}"><i class="c-cmenu-v4"></i>境外人口</li>
            </ul>
        </div>
        </Col>
        <Col span="19">
        <div class="m-ccontent" id="mCcontent">
            <!-- 全部人口 -->
            <div class="m-cconditional" v-show="isAllP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <input type="text" class="c-input" placeholder="公民身份证号"/>
                <select class="c-input c-select">
                    <option value="">管理类型</option>
                    <option value="">全部人口</option>
                    <option value="">户籍人口</option>
                    <option value="">来沪人口</option>
                    <option value="">境外人口</option>
                </select>
                <button class="c-button c-button-search" type="button" @click="search('mentalP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('mentalP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 户籍人口 -->
            <div class="m-cconditional" v-show="isRegisterP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <input type="text" class="c-input" placeholder="公民身份证号"/>
                
                <button class="c-button c-button-search" type="button" @click="search('letterP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('letterP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 来沪人口 -->
            <div class="m-cconditional" v-show="isInsideP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <input type="text" class="c-input" placeholder="公民身份证号"/>
                
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
            <div class="m-cconditional" v-show="isOutsizeP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <input type="text" class="c-input" placeholder="公民身份证号"/>
                
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
                <!-- 全部人口 -->
                <div class="table" v-show="isAllP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.allPopulationInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.allPopulationInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix" style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="5">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="3">{{ list.manageType }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="5">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="3">{{ list.manageType }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 户籍人口 -->
                <div class="table" v-show="isRegisterP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.registeredPopulationInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.registeredPopulationInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="5">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="3">{{ list.manageType }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="5">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="3">{{ list.manageType }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 来沪人口 -->
                <div class="table" v-show="isInsideP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.insidePopulationInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.insidePopulationInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="5">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="5">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 境外人口 -->
                <div class="table" v-show="isOutsizeP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.outsidePopulationInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.outsidePopulationInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="5">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="4">{{ list.phone }}</Col>
                            <Col span="5">{{ list.address }}</Col>
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
            <div class="m-foot-statics" id="populationStatics"></div>
        </div>
        </Col>
    </Row>
    </div>
    </div>
    
     <!--<populationManageDetail></populationManageDetail> -->
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
        background: url(../assets/images/c_icon_v1.png) no-repeat center center;
      }
      .c-cmenu-v2 {
        background: url(../assets/images/c_icon_v2.png) no-repeat center center;
      }
      .c-cmenu-v3 {
        background: url(../assets/images/c_icon_v3.png) no-repeat center center;
      }
      .c-cmenu-v4 {
        background: url(../assets/images/c_icon_v4.png) no-repeat center center;
      }
      .c-cmenu-v5 {
        background: url(../assets/images/c_icon_v5.png) no-repeat center center;
      }
      .c-cmenu-v6 {
        background: url(../assets/images/c_icon_v6.png) no-repeat center center;
      }
      .c-cmenu-v7 {
        background: url(../assets/images/c_icon_v7.png) no-repeat center center;
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
  name: "populationManage",
  data() {
    return {
      isAllP: true,
      isRegisterP: false,
      isInsideP: false,
      isOutsizeP: false,
      options4: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      staticsTitle: "全部人口趋势统计",
      // ========================数据 =====================
      content: {
        // ================== 表格数据 ========================
        allPopulationInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 5 },
            { name: "联系方式", span: 3 },
            { name: "管理类型", span: 3 },
            { name: "现居地址", span: 4 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              phone: "13546895448",
              id: "522135198712135431",
              manageType: "来沪人口",
              address: "金山镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "310101198901234246",
              phone: "13485967452",
              manageType: "来沪人口",
              address: "企业大厦6栋1单元104"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "1389686352",
              manageType: "境外人口",
              address: "8号院1号楼3单元302"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "13896552635",
              manageType: "户籍人口",
              address: "8号院1号楼3单元202"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "山阳镇",
              id: "370303196104181018",
              phone: "13181905337",
              manageType: "境外人口",
              address: "临高大厦1栋1单元102"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "310101201408011011",
              phone: "13585968563",
              manageType: "户籍人口",
              address: "名苑大厦5栋1单元102"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196102141346",
              phone: "15053369987",
              manageType: "来沪人口",
              address: "建设花苑1号楼一单元501"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "37030319900109103X",
              phone: "13485996352",
              manageType: "来沪人口",
              address: "东二街南三巷4号楼2单元201"
            },
            {
              name: "刘金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "520306196003121525",
              phone: "13785968566",
              manageType: "来沪人口",
              address: "东二街南三巷4号楼3单元202"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370304198312200047",
              phone: "13002708996",
              manageType: "来沪人口",
              address: "企业大厦6栋1单元105"
            }
          ]
        },
        registeredPopulationInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 5 },
            { name: "联系方式", span: 3 },
            { name: "管理类型", span: 3 },
            { name: "现居地址", span: 4 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              phone: "13546895448",
              id: "522135198712135431",
              manageType: "来沪人口",
              address: "金山镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "310101198901234246",
              phone: "13485967452",
              manageType: "来沪人口",
              address: "企业大厦6栋1单元104"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "1389686352",
              manageType: "境外人口",
              address: "8号院1号楼3单元302"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "13896552635",
              manageType: "户籍人口",
              address: "8号院1号楼3单元202"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "山阳镇",
              id: "370303196104181018",
              phone: "13181905337",
              manageType: "境外人口",
              address: "临高大厦1栋1单元102"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "310101201408011011",
              phone: "13585968563",
              manageType: "户籍人口",
              address: "名苑大厦5栋1单元102"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196102141346",
              phone: "15053369987",
              manageType: "来沪人口",
              address: "建设花苑1号楼一单元501"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "37030319900109103X",
              phone: "13485996352",
              manageType: "来沪人口",
              address: "东二街南三巷4号楼2单元201"
            },
            {
              name: "刘金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "520306196003121525",
              phone: "13785968566",
              manageType: "来沪人口",
              address: "东二街南三巷4号楼3单元202"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370304198312200047",
              phone: "13002708996",
              manageType: "来沪人口",
              address: "企业大厦6栋1单元105"
            }
          ]
        },
        insidePopulationInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "联系方式", span: 4 },
            { name: "现居地址", span: 5 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              phone: "13546895448",
              id: "522135198712135431",
              address: "金山镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "310101198901234246",
              phone: "13485967452",
              address: "企业大厦6栋1单元104"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "1389686352",
              address: "8号院1号楼3单元302"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "13896552635",
              address: "8号院1号楼3单元202"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "山阳镇",
              id: "370303196104181018",
              phone: "13181905337",
              address: "临高大厦1栋1单元102"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "310101201408011011",
              phone: "13585968563",
              address: "名苑大厦5栋1单元102"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196102141346",
              phone: "15053369987",
              address: "建设花苑1号楼一单元501"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "37030319900109103X",
              phone: "13485996352",
              address: "东二街南三巷4号楼2单元201"
            },
            {
              name: "刘金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "520306196003121525",
              phone: "13785968566",
              address: "东二街南三巷4号楼3单元202"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370304198312200047",
              phone: "13002708996",
              address: "企业大厦6栋1单元105"
            }
          ]
        },
        outsidePopulationInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "联系方式", span: 4 },
            { name: "现居地址", span: 5 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              phone: "13546895448",
              id: "522135198712135431",
              address: "金山镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "310101198901234246",
              phone: "13485967452",
              address: "企业大厦6栋1单元104"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "1389686352",
              address: "8号院1号楼3单元302"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "13896552635",
              address: "8号院1号楼3单元202"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "山阳镇",
              id: "370303196104181018",
              phone: "13181905337",
              address: "临高大厦1栋1单元102"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "310101201408011011",
              phone: "13585968563",
              address: "名苑大厦5栋1单元102"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196102141346",
              phone: "15053369987",
              address: "建设花苑1号楼一单元501"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "37030319900109103X",
              phone: "13485996352",
              address: "东二街南三巷4号楼2单元201"
            },
            {
              name: "刘金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "520306196003121525",
              phone: "13785968566",
              address: "东二街南三巷4号楼3单元202"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370304198312200047",
              phone: "13002708996",
              address: "企业大厦6栋1单元105"
            }
          ]
        },
        // ======================统计图数据===========================

        cvsAllPopulationTs: {
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
        cvsRegisteredPopulationTs: {
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
        cvsInsidePopulationTs: {
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
        cvsOutsidePopulationTs: {
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
    this.populationTs(this.content.cvsAllPopulationTs);
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
    allPopulation() {
      this.staticsTitle = "全部人口趋势统计";
      this.isAllP = true;
      this.isRegisterP = false;
      this.isInsideP = false;
      this.isOutsizeP = false;
      this.populationTs(this.content.cvsAllPopulationTs);
    },
    registeredPopulation() {
      this.staticsTitle = "户籍人口趋势统计";
      this.isAllP = false;
      this.isRegisterP = true;
      this.isInsideP = false;
      this.isOutsizeP = false;
      this.populationTs(this.content.cvsRegisteredPopulationTs);
    },
    insidePopulation() {
      this.staticsTitle = "来沪人口趋势统计";
      this.isAllP = false;
      this.isRegisterP = false;
      this.isInsideP = true;
      this.isOutsizeP = false;
      this.populationTs(this.content.cvsInsidePopulationTs);
    },
    outsidePopulation() {
      this.staticsTitle = "境外人口趋势统计";
      this.isAllP = false;
      this.isRegisterP = false;
      this.isInsideP = false;
      this.isOutsizeP = true;
      this.populationTs(this.content.cvsOutsidePopulationTs);
    },

    populationTs(datas) {
      let myChart = echarts.init(document.getElementById("populationStatics"));
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


