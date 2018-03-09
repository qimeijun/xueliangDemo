<template>
    <div class="main" id="cMain">
    <div class="m-header">
    <Row>
        <Col span="23">
        <div class="m-title">
            <img src="../assets/images/title11.png"/>
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
                <li @click="letterPerson" v-bind:class="{'c-active': isLetterP}"><i class="c-cmenu-v1"></i>信访人员</li>
                <li @click="drugPerson" v-bind:class="{'c-active': isDrugP}"><i class="c-cmenu-v2"></i>吸毒人员</li>
                <li @click="stabilityObj" v-bind:class="{'c-active': isStabilityO}"><i class="c-cmenu-v3"></i>维稳对象</li>
                <li @click="termersCom" v-bind:class="{'c-active': isTermerP}"><i class="c-cmenu-v4"></i>社区服刑</li>
                <li @click="mentalPatients" v-bind:class="{'c-active': isMentalP}"><i class="c-cmenu-v5"></i>精神病人</li>
                <li @click="missPerson" v-bind:class="{'c-active': isMissP}"><i class="c-cmenu-v6"></i>失踪人员</li>
                <li @click="sensitivePerson" v-bind:class="{'c-active': isSensitiveP}"><i class="c-cmenu-v7"></i>敏感人员</li>
            </ul>
        </div>
        </Col>
        <Col span="19">
        <div class="m-ccontent" id="mCcontent">
            <!-- 精神病人 -->
            <div class="m-cconditional" v-show="isMentalP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <input type="text" class="c-input" placeholder="公民身份证号"/>
                <select class="c-input c-select">
                    <option value="">目前整段类型</option>
                    <option value="">目前整段类型</option>
                    <option value="">目前整段类型</option>
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
            <!-- 信访人员 -->
            <div class="m-cconditional" v-show="isLetterP">
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
            <!-- 吸毒人员 -->
            <div class="m-cconditional" v-show="isDrugP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <input type="text" class="c-input" placeholder="监控人姓名"/>
                
                <button class="c-button c-button-search" type="button" @click="search('drugP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('drugP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 维稳对象 -->
            <div class="m-cconditional" v-show="isStabilityO">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <input type="text" class="c-input" placeholder="监控人姓名"/>
                
                <button class="c-button c-button-search" type="button" @click="search('stabilityO')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('stabilityO')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 社区服刑 -->
            <div class="m-cconditional" v-show="isTermerP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <DatePicker type="date" :options="options4" placeholder="释放日期"></DatePicker>至
                <DatePicker type="date" :options="options4" placeholder="释放日期"></DatePicker>
                
                <button class="c-button c-button-search" type="button" @click="search('termerP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('termerP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 失踪人员 -->
            <div class="m-cconditional" v-show="isMissP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <DatePicker type="date" :options="options4" placeholder="释放日期"></DatePicker>至
                <DatePicker type="date" :options="options4" placeholder="释放日期"></DatePicker>
                
                <button class="c-button c-button-search" type="button" @click="search('missP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('missP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <!-- 敏感人员 -->
            <div class="m-cconditional" v-show="isSensitiveP">
                <input type="text" class="c-input" placeholder="姓名"/>
                <select class="c-input c-select">
                    <option value="">请选择性别</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">未说明的性别</option>
                    <option value="">全部</option>
                </select>
                <input type="text" class="c-input" placeholder="公民身份证号"/>
                
                <button class="c-button c-button-search" type="button" @click="search('sensitiveP')">
                    <i></i>
                    查询
                </button>
                <button class="c-button c-button-fresh" type="button" @click="refresh('sensitiveP')">
                    <i></i>
                    刷新
                </button>
            </div>
            <div class="m-ctable" >
                <!-- 精神病人 -->
                <div class="table" v-show="isMentalP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.mentalPatientsInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.mentalPatientsInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix" style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.isAllowance }}</Col>
                            <Col span="6">{{ list.diagnosis }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.isAllowance }}</Col>
                            <Col span="6">{{ list.diagnosis }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 信访人员 -->
                <div class="table" v-show="isLetterP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.letterPersonInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.letterPersonInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 吸毒人员 -->
                <div class="table" v-show="isDrugP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.drugPersonInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.drugPersonInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.measurePhone }}</Col>
                            <Col span="3">{{ list.measure }}</Col>
                            <Col span="3">{{ list.situation }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.measurePhone }}</Col>
                            <Col span="3">{{ list.measure }}</Col>
                            <Col span="3">{{ list.situation }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 维稳对象 -->
               <div class="table" v-show="isStabilityO">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.stabilityObjInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.stabilityObjInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @click="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 社区服刑 -->
                <div class="table" v-show="isTermerP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.termersComInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.termersComInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                <!-- 失踪人员 -->
                <div class="table" v-show="isMissP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.missPersonInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.missPersonInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                    </div>
                </div>
                 <!-- 敏感人员 -->
                <div class="table" v-show="isSensitiveP">
                    <div class="th clearfix"  style="background-color:#1a5d87;">
                      <template v-for="(list) in content.sensitivePersonInfo.list">
                        <Col  :span="list.span" >
                        <strong>{{ list.name }}</strong>
                        </Col>
                      </template>
                      <Col span="2"><strong>操作</strong></Col>
                      <div class="clearfix"></div>
                    </div>
                    <div v-for="(list, i) in content.sensitivePersonInfo.data" >
                        <div v-if="(i % 2) == 0" class="tb clearfix"   style="background-color:#185073;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
                            <Col span="2"><span class="c-table-oper" @onclick="lookMore"></span></Col>
                        </div>
                        <div  v-else  class="tb clearfix" style="background-color: #1a5d87;">
                            <Col span="2">{{ list.name }}</Col>
                            <Col span="2">{{ list.sex }}</Col>
                            <Col span="3">{{ list.jurisdiction }}</Col>
                            <Col span="6">{{ list.id }}</Col>
                            <Col span="3">{{ list.phone }}</Col>
                            <Col span="2">{{ list.work }}</Col>
                            <Col span="4">{{ list.address }}</Col>
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
        <Col span="12">
        <div class="m-foot-l">
            <div class="m-foot-head">
                {{ staticsTitle.left }}
            </div>
            <div class="m-foot-statics" id="mentalPatientsArea"></div>
        </div>
        </Col>
        <Col span="12">
        <div class="m-foot-r" >
            <div class="m-foot-head">
                {{ staticsTitle.right }}
            </div>
            <div class="m-foot-statics" id="mentalPatientsTs"></div>
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
  name: "specialCrowd",
  data() {
    return {
      isLetterP: false,
      isDrugP: false,
      isStabilityO: false,
      isTermerP: false,
      isMentalP: true,
      isMissP: false,
      isSensitiveP: false,
      options4: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      staticsTitle: {
        left: "精神病人区域分布",
        right: "精神病人事件统计"
      },
      // ========================数据 =====================
      content: {
        // ================== 表格数据 ========================
        mentalPatientsInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "是否纳入低保", span: 3 },
            { name: "目前诊断类型", span: 6 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "522135198712135431",
              isAllowance: "是",
              diagnosis: "分裂情感性障碍"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "31010119801234246",
              isAllowance: "是",
              diagnosis: "持久的妄想行障碍(偏执性精神病)"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              isAllowance: "是",
              diagnosis: "持久的妄想行障碍(偏执性精神病)"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              isAllowance: "是",
              diagnosis: "分裂情感性障碍"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "盐山镇",
              id: "370303196104181018",
              isAllowance: "是",
              diagnosis: "持久的妄想行障碍(偏执性精神病)"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              isAllowance: "否",
              diagnosis: "分裂情感性障碍"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196104181018",
              isAllowance: "是",
              diagnosis: "双向(情感)障碍"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              isAllowance: "否",
              diagnosis: "分裂情感性障碍"
            },
            {
              name: "杨金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              isAllowance: "是",
              diagnosis: "持久的妄想行障碍(偏执性精神病)"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              isAllowance: "是",
              diagnosis: "双向(情感)障碍"
            }
          ]
        },
        letterPersonInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "联系方式", span: 3 },
            { name: "职业", span: 2 },
            { name: "现居地址", span: 4 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "522135198712135431",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "31010119801234246",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "盐山镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "杨金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            }
          ]
        },
        drugPersonInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "监控人联系方式", span: 3 },
            { name: "监控人姓名", span: 3 },
            { name: "监控情况", span: 3 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "522135198712135431",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "31010119801234246",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "盐山镇",
              id: "370303196104181018",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196104181018",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "杨金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              measurePhone: "15811215432",
              measure: "张三",
              situation: "在控"
            }
          ]
        },
        stabilityObjInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "联系方式", span: 3 },
            { name: "职业", span: 2 },
            { name: "现居地址", span: 4 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "522135198712135431",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "31010119801234246",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "盐山镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "杨金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            }
          ]
        },
        termersComInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "联系方式", span: 3 },
            { name: "职业", span: 2 },
            { name: "现居地址", span: 4 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "522135198712135431",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "31010119801234246",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "盐山镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "杨金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            }
          ]
        },
        missPersonInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "联系方式", span: 3 },
            { name: "职业", span: 2 },
            { name: "现居地址", span: 4 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "522135198712135431",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "31010119801234246",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "盐山镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "杨金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            }
          ]
        },
        sensitivePersonInfo: {
          list: [
            { name: "姓名", span: 2 },
            { name: "性别", span: 2 },
            { name: "所属管辖", span: 3 },
            { name: "公民身份证", span: 6 },
            { name: "联系方式", span: 3 },
            { name: "职业", span: 2 },
            { name: "现居地址", span: 4 }
          ],
          data: [
            {
              name: "周远民",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "522135198712135431",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张利",
              sex: "男",
              jurisdiction: "玉兰新村",
              id: "31010119801234246",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "张旭鹏",
              sex: "女",
              jurisdiction: "蒋庄村",
              id: "220062198802260018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "熊化艳",
              sex: "女",
              jurisdiction: "德胜村",
              id: "220621197012012362",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "袁旭",
              sex: "男",
              jurisdiction: "盐山镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "李康平",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "王桂荣",
              sex: "女",
              jurisdiction: "顾家桥",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "刘凯",
              sex: "男",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "杨金凤",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            },
            {
              name: "赵红",
              sex: "女",
              jurisdiction: "金山卫镇",
              id: "370303196104181018",
              phone: "15811215432",
              work: "农民",
              address: "金山卫镇创新街8号"
            }
          ]
        },
        // ======================统计图数据===========================
        cvsMentalPatientsArea: {
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
        },
        cvsMentalPatientsTs: {
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
        cvsLetterPersonArea: {
          color: ["#41f5f6", "rgba(64, 237, 241, 0.52)", "#145166"],
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
        },
        cvsLetterPersonTs: {
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
        cvsDrugPersonArea: {
          color: ["#f35e60", "rgba(243, 94, 96, 0.52)", "#31374d"],
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
        },
        cvsDrugPersonTs: {
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
        cvsStabilityObjArea: {
          color: ["#4979ff", "rgba(19, 56, 98, 0.51)", "#133862"],
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
        },
        cvsStabilityObjTs: {
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
        cvsTermersComArea: {
          color: ["#08f746", "rgba(8, 247, 70, 0.52)", "#084d48"],
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
        },
        cvsTermersComTs: {
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
        cvsMissPersonArea: {
          color: ["#6a0af3", "rgba(106, 10, 243, 0.52)", "#292864"],
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
        },
        cvsMissPersonTs: {
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
        cvsSensitivePersonArea: {
          color: ["#e7912e", "rgba(231, 145, 46, 0.52)", "#2e3f46"],
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
        },
        cvsSensitivePersonTs: {
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
        }
      }
    };
  },
  mounted() {
    this.mentalPatientsArea(this.content.cvsMentalPatientsArea);
    this.mentalPatientsTs(this.content.cvsMentalPatientsTs);
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
    letterPerson() {
      this.staticsTitle.left = "信访人员区域分布";
      this.staticsTitle.right = "信访人员事件统计";
      this.isLetterP = true;
      this.isMentalP = false;
      this.isDrugP = false;
      this.isStabilityO = false;
      this.isTermerP = false;
      this.isMissP = false;
      this.isSensitiveP = false;
      this.mentalPatientsArea(this.content.cvsLetterPersonArea);
      this.mentalPatientsTs(this.content.cvsLetterPersonTs);
    },
    drugPerson() {
      this.staticsTitle.left = "吸毒人员区域分布";
      this.staticsTitle.right = "吸毒人员事件统计";
      this.isLetterP = false;
      this.isMentalP = false;
      this.isDrugP = true;
      this.isStabilityO = false;
      this.isTermerP = false;
      this.isMissP = false;
      this.isSensitiveP = false;
      this.mentalPatientsArea(this.content.cvsDrugPersonArea);
      this.mentalPatientsTs(this.content.cvsDrugPersonTs);
    },
    stabilityObj() {
      this.staticsTitle.left = "维稳对象区域分布";
      this.staticsTitle.right = "维稳对象事件统计";
      this.isLetterP = false;
      this.isMentalP = false;
      this.isDrugP = false;
      this.isStabilityO = true;
      this.isTermerP = false;
      this.isMissP = false;
      this.isSensitiveP = false;
      this.mentalPatientsArea(this.content.cvsStabilityObjArea);
      this.mentalPatientsTs(this.content.cvsStabilityObjTs);
    },
    termersCom() {
      this.staticsTitle.left = "社区服刑区域分布";
      this.staticsTitle.right = "社区服刑事件统计";
      this.isLetterP = false;
      this.isMentalP = false;
      this.isDrugP = false;
      this.isStabilityO = false;
      this.isTermerP = true;
      this.isMissP = false;
      this.isSensitiveP = false;
      this.mentalPatientsArea(this.content.cvsTermersComArea);
      this.mentalPatientsTs(this.content.cvsTermersComTs);
    },
    mentalPatients() {
      this.staticsTitle.left = "精神病人区域分布";
      this.staticsTitle.right = "精神病人事件统计";
      this.isLetterP = false;
      this.isMentalP = true;
      this.isDrugP = false;
      this.isStabilityO = false;
      this.isTermerP = false;
      this.isMissP = false;
      this.isSensitiveP = false;
      this.mentalPatientsArea(this.content.cvsMentalPatientsArea);
      this.mentalPatientsTs(this.content.cvsMentalPatientsTs);
    },
    missPerson() {
      this.staticsTitle.left = "失踪人员区域分布";
      this.staticsTitle.right = "失踪人员事件统计";
      this.isLetterP = false;
      this.isMentalP = false;
      this.isDrugP = false;
      this.isStabilityO = false;
      this.isTermerP = false;
      this.isMissP = true;
      this.isSensitiveP = false;
      this.mentalPatientsArea(this.content.cvsMissPersonArea);
      this.mentalPatientsTs(this.content.cvsMissPersonTs);
    },
    sensitivePerson() {
      this.staticsTitle.left = "敏感人员区域分布";
      this.staticsTitle.right = "敏感人员事件统计";
      this.isLetterP = false;
      this.isMentalP = false;
      this.isDrugP = false;
      this.isStabilityO = false;
      this.isTermerP = false;
      this.isMissP = false;
      this.isSensitiveP = true;
      this.mentalPatientsArea(this.content.cvsSensitivePersonArea);
      this.mentalPatientsTs(this.content.cvsSensitivePersonTs);
    },
    mentalPatientsArea(datas) {
      let myChart = echarts.init(document.getElementById("mentalPatientsArea"));
      // let datas = this.content.cvsMentalPatientsArea.data;
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
          left: "5%",
          right: "5%",
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
    mentalPatientsTs(datas) {
      let myChart = echarts.init(document.getElementById("mentalPatientsTs"));
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
          left: "5%",
          right: "5%",
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
          data: datas.legend
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
          data: datas.xAxis
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
            data: datas.data,
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
                datas.data.forEach((e, i) => {
                  arr.push({ value: e, xAxis: i, yAxis: e });
                });
                return arr;
              })()
            },
            z: 3
          },
          {
            name: "上月",
            data: datas.data2,
            type: "line"
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>


