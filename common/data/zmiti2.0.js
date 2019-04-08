var reqCols = [
    {
        title:'参数名称',
        key: 'title',
        align:'center',
        width:130
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
    }
    , {
        title: '默认值',
        key: 'default',
        align: 'center'
    }
];

let resCols = [
    {
        title: '参数名称',
        key: 'title',
        align: 'center',
        width:130
    }, {
        title: '描述',
        key: 'desc',
    }
];

let taskAdminData = {
    title: '任务系统_管理端API文档',
    id: 'taskAdminData',
    list:[
        {
            title: "管理端人员模块接口",
            children: [
                {
                    title: "后台登录接口",
                    content: [{
                        title: "接口功能描述",
                        desc: '后台登录'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/adminlogin/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式 : post",
                        desc: ''
                    }, {
                        title: '请求报文参数说明',
                        desc: [
                            {
                                title: '是否需要传入公共参数',
                                desc: "不需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "username",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "用户名",
                                            default: ''
                                        },
                                        {
                                            title: "userpwd",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "密码",
                                            default: ''
                                        }
                                    ]
                                }
                            }, {
                                title: "示例：",
                                desc: '无'
                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: [
                            {
                                title: "响应报文参数说明",
                                desc: "",
                                table: {
                                    cols: resCols,
                                    data: [{
                                            title: 'getret',
                                            desc: '返回码。为公共返回码；见公共返回码说明'
                                        }, {
                                            title: "getmsg",
                                            desc: "如有错误，返回错误信息"
                                        },
                                        {
                                            title: 'list',
                                            desc: '返回查询信息'
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        title: "返回示例：",
                        className:'codemirror',
                        desc: `{
    getret:0,
    getmsg:'请求成功',
    list:[
        {
            id:1,
            name:'智媒体'
        }
    ]
}`
                    }, {
                        title: "备注：",
                        desc: '无'
                    }]
                },
                {
                    title: "管理员添加员工",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理员添加普通员工'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/addstaff/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "username",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "用户名",
                                            default: ''
                                        },
                                        {
                                            title: "userpwd",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "密码",
                                            default: ''
                                        },
                                        {
                                            title: "realname",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "真实姓名",
                                            default: ''
                                        }, {
                                            title: "sex",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "性别 1男 2女",
                                            default: '1'
                                        }, {
                                            title: "useremail",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "电话",
                                            default: ''
                                        }, {
                                            title: "usersign",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号类型 1超管2员工",
                                            default: 2
                                        }, {
                                            title: "isover",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号使用标识1正常使用 2禁用 3删除",
                                            default: 1
                                        }, {
                                            title: "remarks",
                                            isNotNull: '否',
                                            type: 'text',
                                            desc: "备注",
                                            default: ''
                                        }
                                    ]
                                }
                                
                            }
                        ]
                    },{
                        title: '响应报文参数说明',
                            desc: [
                                {
                                    title: "响应报文参数说明",
                                    desc: "",
                                    table: {
                                        cols: resCols,
                                        data: [{
                                                title: 'getret',
                                                desc: '返回码。为公共返回码；见公共返回码说明'
                                            }, {
                                                title: "getmsg",
                                                desc: "如有错误，返回错误信息"
                                            },
                                            {
                                                title: 'list',
                                                desc: '返回查询信息'
                                            }
                                        ]
                                    },
                                    
                                }
                            ]
                    }]
                },
                {
                    title: "管理端查看员工列表",
                    content: [{
                        title: "接口功能描述",
                        desc: '查看员工列表'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/getstafflist/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式 : post",
                        desc: ''
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [
                                    ]
                                }
                            }
                        ]
                        }, {
                            title: '响应报文参数说明',
                            desc: [{
                                title: "响应报文参数说明",
                                desc: "",
                                table: {
                                    cols: resCols,
                                    data: [{
                                            title: 'getret',
                                            desc: '返回码。为公共返回码；见公共返回码说明'
                                        }, {
                                            title: "getmsg",
                                            desc: "如有错误，返回错误信息"
                                        },
                                        {
                                            title: 'list',
                                            desc: '返回查询信息'
                                        }
                                    ]
                                }
                            }]
                        }]
                },
                {
                    title: "管理端修改密码",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理员修改员工密码'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/updatestaffpwd/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "staffid",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "用户id",
                                            default: ''
                                        },
                                        {
                                            title: "userpwd",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "密码",
                                            default: ''
                                        }
                                    ]
                                }
                                
                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: '无'
                    }]
                },
                {
                    title: "管理端修改员工信息",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理端修改员工信息'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/updatestaffinfo/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "staffid",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "员工id",
                                            default: ''
                                        },
                                        {
                                            title: "realname",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "姓名",
                                            default: ''
                                        },
                                        {
                                            title: "sex",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "性别 1男 2女",
                                            default: '1'
                                        }, {
                                            title: "usermobile",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "电话",
                                            default: ''
                                        }, {
                                            title: "useremail",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "邮箱",
                                            default: ''
                                        }, {
                                            title: "usersign",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号类型 1超管2员工",
                                            default: 2
                                        }, {
                                            title: "updata_user",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "修改人id",
                                            default: ''
                                        }, {
                                            title: "isover",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号使用标识1正常使用 2禁用 3删除",
                                            default: 1
                                        }, {
                                            title: "remarks",
                                            isNotNull: '否',
                                            type: 'text',
                                            desc: "备注",
                                            default: ''
                                        }
                                    ]
                                }

                            }
                        ]
                        }, {
                            title: '响应报文参数说明',
                            desc: [{
                                title: "响应报文参数说明",
                                desc: "",
                                table: {
                                    cols: resCols,
                                    data: [{
                                            title: 'getret',
                                            desc: '返回码。为公共返回码；见公共返回码说明'
                                        }, {
                                            title: "getmsg",
                                            desc: "如有错误，返回错误信息"
                                        }
                                    ]
                                },

                            }]
                        }]
                },
                {
                    title: "管理员删除员工",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理员删除员工'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/delstaff/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "staffid",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "用户id",
                                            default: ''
                                        }
                                    ]
                                }

                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: [{
                            title: "响应报文参数说明",
                            desc: "",
                            table: {
                                cols: resCols,
                                data: [{
                                    title: 'getret',
                                    desc: '返回码。为公共返回码；见公共返回码说明'
                                }, {
                                    title: "getmsg",
                                    desc: "如有错误，返回错误信息"
                                }]
                            },

                        }]
                    }]
                }
            ]
            
        },
        
    ]
}

let taskCompanyData = {
    title: "任务系统_单位端API文档",
    id: 'taskCompanyData',
    list:[
        {
            title: "单位端人员模块接口1112",
            children: [{
                    title: "后台登录接口",
                    content: [{
                        title: "接口功能描述",
                        desc: '后台登录'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/adminlogin/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式 : post",
                        desc: ''
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "不需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "username",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "用户名",
                                            default: ''
                                        },
                                        {
                                            title: "userpwd",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "密码",
                                            default: ''
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: [{
                            title: "响应报文参数说明",
                            desc: "",
                            table: {
                                cols: resCols,
                                data: [{
                                        title: 'getret',
                                        desc: '返回码。为公共返回码；见公共返回码说明'
                                    }, {
                                        title: "getmsg",
                                        desc: "如有错误，返回错误信息"
                                    },
                                    {
                                        title: 'list',
                                        desc: '返回查询信息'
                                    }
                                ]
                            }
                        }]
                    }]
                },
                {
                    title: "管理员添加员工",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理员添加普通员工'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/addstaff/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "username",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "用户名",
                                            default: ''
                                        },
                                        {
                                            title: "userpwd",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "密码",
                                            default: ''
                                        },
                                        {
                                            title: "realname",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "真实姓名",
                                            default: ''
                                        }, {
                                            title: "sex",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "性别 1男 2女",
                                            default: '1'
                                        }, {
                                            title: "useremail",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "电话",
                                            default: ''
                                        }, {
                                            title: "usersign",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号类型 1超管2员工",
                                            default: 2
                                        }, {
                                            title: "isover",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号使用标识1正常使用 2禁用 3删除",
                                            default: 1
                                        }, {
                                            title: "remarks",
                                            isNotNull: '否',
                                            type: 'text',
                                            desc: "备注",
                                            default: ''
                                        }
                                    ]
                                }

                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: [{
                            title: "响应报文参数说明",
                            desc: "",
                            table: {
                                cols: resCols,
                                data: [{
                                        title: 'getret',
                                        desc: '返回码。为公共返回码；见公共返回码说明'
                                    }, {
                                        title: "getmsg",
                                        desc: "如有错误，返回错误信息"
                                    },
                                    {
                                        title: 'list',
                                        desc: '返回查询信息'
                                    }
                                ]
                            },

                        }]
                    }]
                },
                {
                    title: "管理端查看员工列表",
                    content: [{
                        title: "接口功能描述",
                        desc: '查看员工列表'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/getstafflist/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式 : post",
                        desc: ''
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: []
                                }
                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: [{
                            title: "响应报文参数说明",
                            desc: "",
                            table: {
                                cols: resCols,
                                data: [{
                                        title: 'getret',
                                        desc: '返回码。为公共返回码；见公共返回码说明'
                                    }, {
                                        title: "getmsg",
                                        desc: "如有错误，返回错误信息"
                                    },
                                    {
                                        title: 'list',
                                        desc: '返回查询信息'
                                    }
                                ]
                            }
                        }]
                    }]
                },
                {
                    title: "管理端修改密码",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理员修改员工密码'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/updatestaffpwd/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "staffid",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "用户id",
                                            default: ''
                                        },
                                        {
                                            title: "userpwd",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "密码",
                                            default: ''
                                        }
                                    ]
                                }

                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: '无'
                    }]
                },
                {
                    title: "管理端修改员工信息",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理端修改员工信息'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/updatestaffinfo/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                            title: "staffid",
                                            isNotNull: '是',
                                            type: 'string',
                                            desc: "员工id",
                                            default: ''
                                        },
                                        {
                                            title: "realname",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "姓名",
                                            default: ''
                                        },
                                        {
                                            title: "sex",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "性别 1男 2女",
                                            default: '1'
                                        }, {
                                            title: "usermobile",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "电话",
                                            default: ''
                                        }, {
                                            title: "useremail",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "邮箱",
                                            default: ''
                                        }, {
                                            title: "usersign",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号类型 1超管2员工",
                                            default: 2
                                        }, {
                                            title: "updata_user",
                                            isNotNull: '否',
                                            type: 'string',
                                            desc: "修改人id",
                                            default: ''
                                        }, {
                                            title: "isover",
                                            isNotNull: '否',
                                            type: 'int',
                                            desc: "账号使用标识1正常使用 2禁用 3删除",
                                            default: 1
                                        }, {
                                            title: "remarks",
                                            isNotNull: '否',
                                            type: 'text',
                                            desc: "备注",
                                            default: ''
                                        }
                                    ]
                                }

                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: [{
                            title: "响应报文参数说明",
                            desc: "",
                            table: {
                                cols: resCols,
                                data: [{
                                    title: 'getret',
                                    desc: '返回码。为公共返回码；见公共返回码说明'
                                }, {
                                    title: "getmsg",
                                    desc: "如有错误，返回错误信息"
                                }]
                            },

                        }]
                    }]
                },
                {
                    title: "管理员删除员工",
                    content: [{
                        title: "接口功能描述",
                        desc: '管理员删除员工'
                    }, {
                        title: '请求地址',
                        desc: '地址：http://webapi.zmiti.com/v1/admin/delstaff/',
                        class: "zmiti-interface-url"
                    }, {
                        title: "请求方式",
                        desc: 'post'
                    }, {
                        title: '请求报文参数说明',
                        desc: [{
                                title: '是否需要传入公共参数',
                                desc: "需要"
                            },
                            {
                                title: "传入私有参数",
                                desc: "",
                                table: {
                                    cols: reqCols,
                                    data: [{
                                        title: "staffid",
                                        isNotNull: '是',
                                        type: 'string',
                                        desc: "用户id",
                                        default: ''
                                    }]
                                }

                            }
                        ]
                    }, {
                        title: '响应报文参数说明',
                        desc: [{
                            title: "响应报文参数说明",
                            desc: "",
                            table: {
                                cols: resCols,
                                data: [{
                                    title: 'getret',
                                    desc: '返回码。为公共返回码；见公共返回码说明'
                                }, {
                                    title: "getmsg",
                                    desc: "如有错误，返回错误信息"
                                }]
                            },

                        }]
                    }]
                }
            ]

        },
    ]

}


export  {
    taskAdminData,
    taskCompanyData
};