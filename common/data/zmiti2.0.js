var reqCols = [
    {
        title:'参数名称',
        key: 'username',
        align:'center'
    },
    {
        title: '是否必填',
        key: 'isNotNull',
        align: 'center'
    },
    {
        title: '类型',
        key: 'type',
        align: 'center'
    }, {
        title: '描述',
        key: 'desc',
        align: 'center'
    }
    , {
        title: '默认值',
        key: 'default',
        align: 'center'
    },
     {
         title: '描述',
         key: 'desc',
         align: 'center'
     }
];

let resCols = [
    {
        title: '参数名称',
        key: 'name',
        align: 'center'
    }
];

let zmiti2Data = {
        title: '任务系统_管理端API文档',
        list:[{
                title: "管理端人员模块接口",
                children: [{
                        title: "后台登录接口",
                        content: [{
                            title: "后台登录接口",
                            desc: '后台登录'
                        }, {
                            title: '请求地址',
                            desc: '地址：http://webapi.zmiti.com/v1/admin/adminlogin/'
                        }, {
                            title: "请求方式",
                            desc: 'post'
                        }, {
                            title: '请求报文参数说明',
                            desc: [{
                                    title: '公共传入参数',
                                    desc: "不需要"
                                },
                                {
                                    title: "传入私有参数",
                                    desc: "",
                                    reqTable: {
                                        cols: reqCols,
                                        data: [{
                                                name: "username",
                                                isNotNull: true,
                                                type: 'string',
                                                desc: "用户名",
                                                default: ''
                                            },
                                            {
                                                name: "userpwd",
                                                isNotNull: true,
                                                type: 'string',
                                                desc: "密码",
                                                default: ''
                                            }
                                        ]
                                    },
                                    resTable: {
                                        cols: resCols,
                                        data: [{
                                                name: 'getret',
                                                desc: '返回码。为公共返回码；见公共返回码说明'
                                            }, {
                                                name: "getmsg",
                                                desc: "如有错误，返回错误信息"
                                            },
                                            {
                                                name: 'list',
                                                desc: '返回查询信息'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }]
                    },
                    {
                        title: "管理员添加员工",
                        content: [{
                            title: "管理员添加员工",
                            desc: '管理员添加普通员工'
                        }, {
                            title: '请求地址',
                            desc: '地址：http://webapi.zmiti.com/v1/admin/addstaff/'
                        }, {
                            title: "请求方式",
                            desc: 'post'
                        }, {
                            title: '请求报文参数说明',
                            desc: [{
                                    title: '公共传入参数',
                                    desc: "需要"
                                },
                                {
                                    title: "传入私有参数",
                                    desc: "",
                                    reqTable: {
                                        cols: reqCols,
                                        data: [{
                                                name: "username",
                                                isNotNull: true,
                                                type: 'string',
                                                desc: "用户名",
                                                default: ''
                                            },
                                            {
                                                name: "userpwd",
                                                isNotNull: true,
                                                type: 'string',
                                                desc: "密码",
                                                default: ''
                                            },
                                            {
                                                name: "realname",
                                                isNotNull: true,
                                                type: 'string',
                                                desc: "真实姓名",
                                                default: ''
                                            }, {
                                                name: "sex",
                                                isNotNull: false,
                                                type: 'int',
                                                desc: "性别 1男 2女",
                                                default: '1'
                                            }, {
                                                name: "useremail",
                                                isNotNull: false,
                                                type: 'string',
                                                desc: "电话",
                                                default: ''
                                            }, {
                                                name: "usersign",
                                                isNotNull: false,
                                                type: 'int',
                                                desc: "账号类型 1超管2员工",
                                                default: 2
                                            }, {
                                                name: "isover",
                                                isNotNull: false,
                                                type: 'int',
                                                desc: "账号使用标识1正常使用 2禁用 3删除",
                                                default: 1
                                            }, {
                                                name: "remarks",
                                                isNotNull: false,
                                                type: 'text',
                                                desc: "备注",
                                                default: ''
                                            }
                                        ]
                                    },
                                    resTable: {
                                        cols: resCols,
                                        data: [{
                                                name: 'getret',
                                                desc: '返回码。为公共返回码；见公共返回码说明'
                                            }, {
                                                name: "getmsg",
                                                desc: "如有错误，返回错误信息"
                                            },
                                            {
                                                name: 'list',
                                                desc: '返回查询信息'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }]
                    }
                ]
                
            }
        ]
    }

export default zmiti2Data;