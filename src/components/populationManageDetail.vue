<template>
<div class="main" id="cMain">
    <div class="d-header">
    <Row>
        <Col span="22">
        <div class="d-header-title">
            张丽-女-310101198901234246
        </div>
        </Col>
        <Col span="2">
        <div class="d-header-close">
            <span></span>
        </div>
        </Col>
    </Row>
    </div>

    <div class="d-content">
        <div class="d-content-pro">
            <div class="d-content-pro-line"></div>
            <ul>
                <li class="active">基本信息</li>
                <li>特殊人群</li>
                <li>住房信息</li>
                <li>来沪人口</li>
            </ul>
        </div>
        <div class="d-content-c">
        <Row>
            <Col span="7">
            <div class="d-content-c-l">
                <div class="d-content-c-l-h">
                    <img src="../assets/images/469x470.png"/>
                </div>
                <p>张莉</p>
                <ul>
                    <li>基本信息</li>
                </ul>
            </div>
            </Col>
            <Col span="17">
            <div class="d-content-c-r">
                <ul>
                    <template v-for="(item, index) in content.showList">
                    <li style="background-color: #134f73;">
                        <span class="d-l-l">{{ item.name }}</span>
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
        margin-right: 30px;
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
                background: url(../assets/images/c_icon_v1.png) no-repeat center center;
            }
            li {
                display: inline-block;
                width: 200px;
                text-align: center;
            }
            .active::before  {
                background: url(../assets/images/c_icon_v2.png) no-repeat center center;
            }
        }
    }

    .d-content-c {
        width: 1240px;
        height: 750px;
        .d-content-c-l {
            width: 345px;
            height: 700px;
            border: 1px solid red;
            //background: url(../assets/images) no-repeat center center;

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
            border: 1px solid blue;
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
                    border-bottom:1px solid #1d6785;
                    .d-l-l {
                        display: inline-block;
                        padding-left: 15px;
                        width: 160px;
                        height: 55px;
                        overflow:hidden;
                    }
                    .d-l-r {
                        display: inline-block;
                        width: 250px;
                        height: 55px;
                        padding-left: 10px;
                        overflow:hidden;
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
    data() {
        return {
            content: {
                showList: [
                    {name: "所属辖区", value: "金山卫镇"},
                    {name: "公民身份号码", value: "230221198901234246"},
                    {name: "姓名", value: "周远民"},
                    {name: "性别", value: "男"},
                    {name: "曾用名", value: "周民"},
                    {name: "出生日期", value: "1987-07-09"},
                    {name: "民族", value: "汉族"},
                    {name: "籍贯", value: "河南省新乡市"},
                    {name: "婚姻状况", value: "未婚"},
                    {name: "政治面貌", value: "群众"},
                    {name: "学历", value: "专科毕业"},
                    {name: "宗教信仰", value: "五"},
                    {name: "职业类别", value: "专业技术人员"},
                    {name: "职业", value: "企业人员"},
                    {name: "居住地址", value: "创新街8号"},
                    {name: "联系方式", value: "18576462985"},
                    {name: "办证类型", value: "居住证"},
                    {name: "流动人员证件号码", value: "123466789"},
                    {name: "登记日期", value: "2017-04-12"},
                    {name: "证件到期日期", value: "2027-04-12"},
                    {name: "是否重点关注人员", value: "否"},
                    {name: "户籍地", value: "甘肃省兰州市"},
                    {name: "工作地址", value: "金山卫镇商业街08-32"},
                    {name: "户籍地址", value: "企业大厦6栋1单元106"}
                ]
            }
        }
    },
    watch: {
        content: (newValue, oldValue) => {
            console.log("数据更新");
        }
    }
};
</script>