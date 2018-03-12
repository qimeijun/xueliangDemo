<template>
<div class="main" id="cMain">
    <div class="d-header">
    <Row>
        <Col span="22">
        <div class="d-header-title">
            <template v-if="msg.parent == 'key' || msg.parent == 'railway'">
            {{ content.baseInfo.name }}
            </template>
            <template v-else>
            {{ content.baseInfo.name }}-{{ content.baseInfo.sex }}-{{ content.baseInfo.id }}
            </template>
        </div>
        </Col>
        <Col span="2">
        <div class="d-header-close">
            <span @click="close"></span>
        </div>
        </Col>
    </Row>
    </div>

    <div class="d-content">
        <div class="d-content-pro">
            <div class="d-content-pro-line"></div>
            <ul>
                <template v-for="item in content.titleList">
                <li v-bind:class="{'active': item.isActive}">{{ item.name }}</li>
                </template>
            </ul>
        </div>
        <div class="d-content-c">
        <Row>
            <Col span="7">
            <div class="d-content-c-l">
                <div class="d-content-c-l-h">
                    <img v-bind:src="content.imgUrl"/>
                </div>
                <p>{{ content.baseInfo.name }}</p>
                <ul>
                    <li>{{content.menu}}</li>
                </ul>
            </div>
            </Col>
            <Col span="17">
            <div class="d-content-c-r">
                <ul>
                    <template v-for="item in content.showList">
                    <li v-bind:style="{'backgroundColor': item.color, 'height': item.height + 'px', 'width': item.width + 'px', 'lineHeight': item.height + 'px'}">
                        <span class="d-l-l">{{ item.name }}:</span>
                        <span class="d-l-r">{{ item.value }}</span>
                    </li>
                    </template>
                </ul>
            </div>
            </Col>
        </Row>
        </div>
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
.d-header {
  height: 45px;
  width: 1240px;
  margin: 50px auto 0;
  .d-header-title {
    font-size: 26px;
    font-weight: bold;
    color: #00bbb7;
  }
  .d-header-close span {
    display: inline-block;
    margin-left: 40px;
    width: 23px;
    height: 23px;
    cursor: pointer;
    background: url(../assets/images/close.png) no-repeat center center;
  }
}
.d-content {
  width: 1240px;
  height: 900px;
  margin: auto;
  .d-content-pro {
    position: relative;
    width: 1240px;
    height: 100px;
    margin: 40px auto 0;
    .d-content-pro-line {
      position: absolute;
      height: 10px;
      width: 1200px;
      margin: 40px auto 0;
      border-radius: 5px;
      border: 1px solid #08786f;
      background-color: #03414c;
    }
    ul {
      position: relative;
      list-style: none;
      font-size: 22px;
      color: #29bebb;
      text-align: left;
      li::before {
        content: "";
        position: absolute;
        top: 30px;
        margin-left: 25px;
        width: 30px;
        height: 30px;
        background: url(../assets/images/d_icon.png) no-repeat center center;
      }
      li {
        display: inline-block;
        width: 200px;
        text-align: center;
      }
      .active::before {
        background: url(../assets/images/d_icon.png) no-repeat center center;
      }
    }
  }

  .d-content-c {
    width: 1240px;
    height: 750px;
    .d-content-c-l {
      width: 345px;
      height: 700px;
      border: 1px solid #0b243a;
      background: url(../assets/images/d_r_bg.png);

      .d-content-c-l-h {
        width: 280px;
        height: 280px;
        margin: 80px auto 0;
        border-top: 4px solid #3c8de5;
        border-right: 4px solid #2779ca;
        border-bottom: 4px solid #4dbfe2;
        border-left: 4px solid #49d3d0;
        border-radius: 50%;
        img {
          margin: 11px auto 0;
          height: 250px;
          width: 250px;
          border: 1px solid #4796f0;
          border-radius: 50%;
        }
      }
      p {
        margin-top: 20px;
        font-size: 28px;
        font-weight: bold;
      }
      ul {
        margin-top: 20px;
        list-style: none;
        font-size: 22px;
        font-weight: bold;
        line-height: 50px;
        color: #00bbb7;
        li {
          height: 50px;
          background-color: #114a78;
        }
      }
    }
    .d-content-c-r {
      width: 850px;
      height: 700px;
      ul {
        width: 850px;
        list-style: none;
        text-align: left;
        font-size: 16px;
        line-height: 55px;
        margin: 0;
        padding: 0;
        li {
          float: left;
          width: 422px;
          height: 55px;
          border-bottom: 1px solid #1d6785;
          .d-l-l {
            display: inline-block;
            padding-left: 15px;
            // width: 160px;
            width: 38%;
            height: 100%;
            overflow: hidden;
          }
          .d-l-r {
            display: inline-block;
            // width: 250px;
            width: 58%;
            height: 100%;
            padding-left: 10px;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "populationManageDetail",
  props: {
    msg: {
      type: Object,
      default: function() {
        return {
          id: 1,
          type: 1
        };
      }
    }
  },
  create() {
    this.getPopulationData();
    this.getSpecialData();
    this.getRailwayData();
    this.getKeyData();
    this.getCaseData();
  },
  data() {
    return {
      content: {
        showList: [],
        baseInfo: {},
        titleList: [],
        imgUrl: require("../assets/images/469x470.png"),
        menu: "基本信息"
      }
    };
  },
  watch: {
    content: (newValue, oldValue) => {
      console.log("数据更新");
    },
    msg: {
      handler(newValue, oldValue) {
        if (newValue.parent === "population") {
          this.getPopulationData();
        } else if (newValue.parent === "special") {
          this.getSpecialData();
        } else if (newValue.parent === "railway") {
          this.getRailwayData();
        } else if (newValue.parent === "key") {
          this.getKeyData();
        } else if (newValue.parent === "case") {
          this.getCaseData();
        }
      },
      deep: true
    }
  },
  methods: {
    close() {
      this.$emit("change");
    },
    getPopulationData() {
      let sWidth = 422;
      let colorV1 = "#1c5c88";
      let colorV2 = "#124d6f";
      let sHeight = 55;
      if (this.msg.type === 1 || this.msg.type === 3) {
        this.content.titleList = [
          { name: "基本信息", isActive: true },
          { name: "特殊人群", isActive: false },
          { name: "住房信息", isActive: false },
          { name: "来沪人口", isActive: false }
        ];
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "所属辖区",
            value: "金山卫镇",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "公民身份号码",
            value: "230221198901234246",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "姓名",
            value: "周远民",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "性别",
            value: "男",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "曾用名",
            value: "周民",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "出生日期",
            value: "1987-07-09",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "民族",
            value: "汉族",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "籍贯",
            value: "河南省新乡市",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "婚姻状况",
            value: "未婚",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "政治面貌",
            value: "群众",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "学历",
            value: "专科毕业",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "宗教信仰",
            value: "五",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业类别",
            value: "专业技术人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业",
            value: "企业人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "居住地址",
            value: "创新街8号",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系方式",
            value: "18576462985",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "办证类型",
            value: "居住证",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "流动人员证件号码",
            value: "123466789",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "登记日期",
            value: "2017-04-12",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "证件到期日期",
            value: "2027-04-12",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "是否重点关注人员",
            value: "否",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地",
            value: "甘肃省兰州市",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "工作地址",
            value: "金山卫镇商业街08-32",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地址",
            value: "企业大厦6栋1单元106",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      } else if (this.msg.type === 2) {
        this.content.titleList = [
          { name: "基本信息", isActive: true },
          { name: "住房信息", isActive: false }
        ];
        this.content.baseInfo.name = "张莉";
        this.content.baseInfo.sex = "女";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "所属辖区",
            value: "金山区",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "公民身份号码",
            value: "230221198901234246",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "姓名",
            value: "张莉",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "性别",
            value: "女",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "曾用名",
            value: "无",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "出生日期",
            value: "1990-05-17",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "民族",
            value: "汉族",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "籍贯",
            value: "上海市金山区",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "婚姻状况",
            value: "未婚",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "政治面貌",
            value: "群众",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "学历",
            value: "专科毕业",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "宗教信仰",
            value: "佛教",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业类别",
            value: "专业技术人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业",
            value: "企业人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "居住地址",
            value: "创新街8号",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系方式",
            value: "18576462985",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "人户一致标识",
            value: "一致",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地",
            value: "上海市金山区",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户号",
            value: "220621197012012362",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "与户主关系",
            value: "户主",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "是否重点关注人员",
            value: "否",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "工作单位",
            value: "金山区邮政局",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "工作地址",
            value: "金山卫镇商业街08-32",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地址",
            value: "8号院1号楼3单元302",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      } else {
        this.content.titleList = [
          { name: "基本信息", isActive: true },
          { name: "住房信息", isActive: false }
        ];
        this.content.baseInfo.name = "杰克";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "所属辖区",
            value: "金山区",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "外文姓",
            value: "zhamjsi",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "外文名",
            value: "杰克",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "国籍",
            value: "英国",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "中文姓名",
            value: "无",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "出生日期",
            value: "1990-05-17",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "性别",
            value: "男",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "宗教信仰",
            value: "基督教",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "证件类型",
            value: "临时居民身份证",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "证件号码",
            value: "13215677734556",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "证件有效期",
            value: "2016-12-29",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系方式",
            value: "1543153636",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "来华目的",
            value: "商务",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业类别",
            value: "负责人",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业",
            value: "计算机",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "服务处所",
            value: "金山区人口管理处",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "抵达日期",
            value: "2017-02-03",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地",
            value: "上海市金山区",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户号",
            value: "220621197012012362",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "预计离开日期",
            value: "无",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "是否重点关注人员",
            value: "否",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "工作单位",
            value: "无",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "工作地址",
            value: "金山卫镇商业街08-32",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地址",
            value: "8号院1号楼3单元302",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      }
    },
    getSpecialData() {
      let sWidth = 422;
      let colorV1 = "#1c5c88";
      let colorV2 = "#124d6f";
      let sHeight = 55;
      this.content.menu = "特殊人群";
      this.content.titleList = [
        { name: "基本信息", isActive: false },
        { name: "特殊人群", isActive: true },
        { name: "住房信息", isActive: false },
        { name: "来沪人口", isActive: false }
      ];
      if (this.msg.type === 1) {
        this.content.menu = "基本信息";
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "所属辖区",
            value: "金山卫镇",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "公民身份号码",
            value: "230221198901234246",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "姓名",
            value: "周远民",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "性别",
            value: "男",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "曾用名",
            value: "周民",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "出生日期",
            value: "1987-07-09",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "民族",
            value: "汉族",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "籍贯",
            value: "河南省新乡市",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "婚姻状况",
            value: "未婚",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "政治面貌",
            value: "群众",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "学历",
            value: "专科毕业",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "宗教信仰",
            value: "五",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业类别",
            value: "专业技术人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业",
            value: "企业人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "居住地址",
            value: "创新街8号",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系方式",
            value: "18576462985",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "办证类型",
            value: "居住证",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "流动人员证件号码",
            value: "123466789",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "登记日期",
            value: "2017-04-12",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "证件到期日期",
            value: "2027-04-12",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "是否重点关注人员",
            value: "否",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地",
            value: "甘肃省兰州市",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "工作地址",
            value: "金山卫镇商业街08-32",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "户籍地址",
            value: "企业大厦6栋1单元106",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      } else if (this.msg.type === 2) {
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "初次发现日期",
            value: "2016-12-28",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "监控情况",
            value: "在控",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管控人姓名",
            value: "杨兴元",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管控人联系方式",
            value: "13785968574",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮扶人姓名",
            value: "李新龙",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮扶人联系方式",
            value: "13896526385",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮扶情况",
            value: "帮扶正常",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "有无犯罪史",
            value: "是",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "犯罪情况",
            value: "无",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "吸毒原因",
            value: "被诱惑",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "吸毒后果",
            value: "严重",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          }
        ];
      } else if (this.msg.type === 3) {
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "初次发现日期",
            value: "2016-12-28",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "监控情况",
            value: "在控",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管控人姓名",
            value: "杨兴元",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管控人联系方式",
            value: "13785968574",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮扶人姓名",
            value: "李新龙",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮扶人联系方式",
            value: "13896526385",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮扶情况",
            value: "帮扶正常",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "有无犯罪史",
            value: "是",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "犯罪情况",
            value: "无",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "维稳原因",
            value: "拆迁问题",
            color: colorV1,
            width: sWidth,
            height: sHeight
          }
        ];
      } else if (this.msg.type === 4) {
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "是否累犯",
            value: "是",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "原罪名",
            value: "危害公共安全罪",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "原判刑期",
            value: "2年",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "服刑场所",
            value: "鹤壁淇滨区劳改所",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "危险性评估类型",
            value: "一般帮教人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "衔接日期",
            value: "帮扶正常",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "安置情况",
            value: "从事个体经营",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "释放日期",
            value: "2016-12-07",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "未安置原因",
            value: "生病住院观察",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮教情况",
            value: "帮教情况正常",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "是否重新犯罪",
            value: "是",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "重新犯罪罪名",
            value: "无",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      } else if (this.msg.type === 5) {
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "家庭经济情况",
            value: "低收入家庭",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "是否纳入低保",
            value: "是",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "监护人姓名",
            value: "张三",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "监护人公民身份证号",
            value: "410603197510013072",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "监护人联系方式",
            value: "13485967485",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "初次发病日期",
            value: "2016-01-05",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "目前诊断类型",
            value: "持久的妄想性障碍(偏执性精神病)",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "有无肇事肇祸史",
            value: "2014-01-28",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "目前危险性评估等级",
            value: "1级",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "治疗情况",
            value: "居家服用抗精神药物治疗",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "治疗医院名称",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "实施住院治疗原因",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "接受康复训练结构名称",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "参与管理人员",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "帮扶情况",
            value: "",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          }
        ];
      } else if (this.msg.type === 6) {
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "失踪日期",
            value: "2016-12-28",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "失踪情况",
            value: "无",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "失踪人姓名",
            value: "杨兴元",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "家属联系方式",
            value: "13485967485",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "寻找人姓名",
            value: "李新龙",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "寻找人联系方式",
            value: "13485967485",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "寻找情况",
            value: "没有音信",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管辖机构",
            value: "金山区派出所",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      } else {
        this.content.baseInfo.name = "周远民";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "初次发现日期",
            value: "2016-12-28",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "有无犯罪史",
            value: "无",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "敏感人姓名",
            value: "杨兴元",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "敏感人联系方式",
            value: "13485967485",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管控人姓名",
            value: "李新龙",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管控人联系方式",
            value: "13485967485",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "敏感原因",
            value: "传销可疑分子",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管辖机构",
            value: "金山区派出所",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      }
    },
    getRailwayData() {
      let sWidth = 422;
      let colorV1 = "#1c5c88";
      let colorV2 = "#124d6f";
      let sHeight = 55;
      this.content.menu = "特殊人群";
      this.content.titleList = [
        { name: "基本信息", isActive: false },
        { name: "事件信息", isActive: true }
      ];

      if (this.msg.type === 1) {
        this.content.baseInfo.name = "金山卫镇面段";
        this.content.showList = [
          {
            name: "所属辖区",
            value: "鹤壁市淇滨区黎阳路街道黎阳社区一网",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "名称",
            value: "淇县站",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "路线类型",
            value: "铁路",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "隶属单位名称",
            value: "淇县车站",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "隶属单位详址",
            value: "淇县火车站",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "隶属单位联系方式",
            value: "075525180231",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "隶属单位负责人姓名",
            value: "李四",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "隶属单位负责人联系方式",
            value: "18129832475",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管辖单位名称",
            value: "社区综治办",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管辖单位详址",
            value: "社区综治办地址",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "管辖单位联系方式",
            value: "075525180231",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "分管治保负责人姓名",
            value: "李四",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "分管治保负责人联系方式",
            value: "18576462983",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "治安隐患等级",
            value: "高",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "治安隐患情况",
            value: "治安隐患情况",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "地图绑定",
            value: "已设置",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "路线背景色",
            value: "红色",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "路线边线颜色",
            value: "绿色",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "路线宽度",
            value: "1",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "地图缩放级别",
            value: "14",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      } else {
        this.content.baseInfo.name = "金山卫镇面段";
        this.content.showList = [
          {
            name: "所属辖区",
            value: "鹤壁市淇滨区黎阳路街道黎阳社区一网",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "案(事)件名称",
            value: "淇县站案件信息",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "案(事)件性质",
            value: "行政案件",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "案(事)件编号",
            value: "987654321",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "发生日期",
            value: "2017-04-12",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "发生地点",
            value: "淇县火车站",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "作案人数",
            value: "5",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "主犯(嫌疑人)姓名",
            value: "张三",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "主犯(嫌疑人)证件类型",
            value: "居民身份证",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "主犯(嫌疑人)证件号码",
            value: "610102198707091525",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "是否破案",
            value: "否",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "在逃人数",
            value: "5",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "抓捕人数",
            value: "0",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "案(事)件情况",
            value: "案件情况",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "案件侦破情况",
            value: "案件侦破情况案件侦破情况案件侦破情况案件侦破情况",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight + 30
          }
        ];
      }
    },
    getKeyData() {
      let sWidth = 422;
      let colorV1 = "#1c5c88";
      let colorV2 = "#124d6f";
      let sHeight = 55;
      this.content.menu = "基本信息";
      this.content.titleList = [{ name: "基本信息", isActive: true }];

      if (this.msg.type === 1) {
        this.content.baseInfo.name = "企业信息";
        this.content.showList = [
          {
            name: "企业名称",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "公司法人",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "企业地址",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "法人联系电话",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "组织结构代码",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "法人证件号码",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "统一社会信用代码",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "安全隐患类型",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "企业类型",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "关注重点",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "成立日期",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "关注程度",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "企业员工数",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "经营范围",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "登机机关",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "所属行业",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          }
        ];
      } else if (this.msg.type === 2) {
        this.content.baseInfo.name = "企业信息";
        this.content.showList = [
          {
            name: "企业名称",
            value: "",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "企业地址",
            value: "",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "检查人/单位",
            value: "",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "检查人/单位联系方式",
            value: "",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "检查地点",
            value: "",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "存在问题",
            value: "",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "检查人/单位意见",
            value: "",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "照片",
            value: "",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "文件",
            value: "",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          }
        ];
      } else {
        this.content.baseInfo.name = "企业信息";
        this.content.showList = [
          {
            name: "企业名称",
            value: "上海石油化工公司",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "问题",
            value: "公司依旧使用老旧设备",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "整改措施",
            value: "暂停生产，找到源头",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "整改人",
            value: "陈婷婷",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "整改人电话",
            value: "15698632511",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "整改时间",
            value: "三个月",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "整改结果",
            value: "已整改",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "图片",
            value: "",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "文件",
            value: "",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          }
        ];
      }
    },
    getCaseData() {
      let sWidth = 422;
      let colorV1 = "#1c5c88";
      let colorV2 = "#124d6f";
      let sHeight = 55;
      this.content.menu = "基本信息";
      this.content.titleList = [
        { name: "基本信息", isActive: true },
        { name: "犯罪嫌疑人", isActive: false },
        { name: "受害者", isActive: false }
      ];

      if (this.msg.type === 1) {
        this.content.baseInfo.name = "李元福";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "报案单位",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "报案人",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "报案时间",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "类型",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "接案人",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "档案号",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "发现时间",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "发生地点",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系电话",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "事主姓名",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "性别",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "年龄",
            value: "12",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "文化程度",
            value: "高中",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业",
            value: "企业人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "案发时间",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系电话",
            value: "18576462985",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "住址",
            value: "居住证",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "赴现场人",
            value: "张三",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "电话",
            value: "2017-04-12",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "案件简要经过及现场状况",
            value: "2027-04-12",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "受害情况、损失物品数量等",
            value: "否",
            color: colorV2,
            width: sWidth * 2,
            height: sHeigh
          }
        ];
      } else {
        this.content.baseInfo.name = "张三";
        this.content.baseInfo.sex = "男";
        this.content.baseInfo.id = "230221198901234246";
        this.content.showList = [
          {
            name: "报案单位",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "报案人",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "报案时间",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "类型",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "接案人",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "档案号",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "发现时间",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "发生地点",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系电话",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "事主姓名",
            value: "",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "性别",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "年龄",
            value: "12",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "文化程度",
            value: "高中",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "职业",
            value: "企业人员",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "案发时间",
            value: "",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "联系电话",
            value: "18576462985",
            color: colorV2,
            width: sWidth,
            height: sHeight
          },
          {
            name: "住址",
            value: "居住证",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "赴现场人",
            value: "张三",
            color: colorV1,
            width: sWidth,
            height: sHeight
          },
          {
            name: "电话",
            value: "2017-04-12",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "案件简要经过及现场状况",
            value: "2027-04-12",
            color: colorV1,
            width: sWidth * 2,
            height: sHeight
          },
          {
            name: "受害情况、损失物品数量等",
            value: "否",
            color: colorV2,
            width: sWidth * 2,
            height: sHeight
          }
        ];
      }
    }
  }
};
</script>