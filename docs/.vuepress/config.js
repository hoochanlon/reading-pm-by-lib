module.exports = {
    title: '《解读文稿思考项目管理》',
    description: '項目管理',
    base: '/reading-pm-by-lib/', //项目文件夹设置目录
    head:[
      ['link', {rel:'icon', href:'favicon.ico'}]
    ],
    plugins: [
      // https://vuepress.github.io/zh/plugins 插件下载
      ['@vuepress/plugin-back-to-top']//安装不了插件,建议非全局安装vue      
      // ['@vuepress/google-analytics',
      // {
      //   'ga': 'UA-157837686-3' // UA-00000000-0
      // }],
      // ['copyright', {
      //   noSelect: false,
      //   authorName:{
      //     "zh-CN": "hoochanlon",
      //     "en-US": "hoochanlon"
      //   }
      // }]
    ],
    themeConfig: {
      repo: 'https://github.com/hoochanlon/reading-pm-by-lib/',
      nav: [
        // { text: '跳转首页', link: '/' },
        { text: '本作品采用by-nc4.0知识协议进行许可', link: 'http://creativecommons.org/licenses/by-nc/4.0/' },
      ],
      editLinks: false,
      // 自定义编辑链接的文本。默认是 "Edit this page"
      editLinkText: '帮助我们改善内容',
      algolia: {
        apiKey: 'e3a0b5346be8aa88622899b7703d9670',
        indexName: 'reading-pm-by-lib'
      },
        sidebar: [ 
            {
                title: '前言',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/','getting-started']
                ]
              },
              {
                title: '通过信息走进企业',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/look/xinxi-jishu','情报学习整合'],
                  ['/look/gebumen-zhineng','各部门职能'],
                  ['/look/ti-analysis','培训机构分析报告'],
                  ['/look/law-sug','解构非规范型服务企业'],
                  ['/look/the-factory-trap','流水线工厂陷阱']
                ]
              },   
              {
                title: '项目成员建设管理',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/pm/member/pm-gaishu','项目概述与项目经理'],
                  ['/pm/member/pm-zhu','项目组结构及阶段发展'],
                  ['/pm/member/pm-hr','项目人才资源管理'],
                  ['/pm/member/pm-talk2','项目沟通管理']
                ]
              },
              {
                title: '项目范围与进度管理',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/pm/area_time/fanwei','​项目范围过程'],
                  ['/pm/area_time/time-manager','项目进度预估及管控'],
                  ['/pm/area_time/caigou.md','项目采购管理']
                ]
              },          
              {
                title: '项目交付管理',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/pm/jiaofu/cost.md','投入成本'],
                  ['/pm/jiaofu/fengxian.md','风险概论'],
                  ['/pm/jiaofu/duice.md','风险对策'],
                  ['/pm/jiaofu/qc.md','质量管理'],
                  ['/pm/jiaofu/ie.md','改善管理'],
                  ['/pm/jiaofu/shouwei.md','项目收尾管理']
                ]
              },
              {
                title: '项目各阶段标书对照',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/bid/ji-du-bao-gao.md','桌维驻场服务季度报告'],
                  ['/bid/gan-wei-man-gs.md','岗位手册编写格式'],
                  ['/bid/gan-wei-man.md','甲方公司岗位工作手册'],
                  ['/bid/tou-biao-shu-ge-shi.md','​桌维项目标书编写格式'],
                  ['/bid/tou-biao-shu.md','​甲方代维项目服务（投标书）']
                ]
              },
              {
                title: '由项目管理到个人函数',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/gyakuten/nengli-moxin','人才管理能力模型升维'],
                  ['/gyakuten/tabo','台波的使用'],
                  ['/gyakuten/feiduichen','非对称风险'],
                  ['/gyakuten/ppt','答辩也是述职与自我反省的过程']
                ]
              }
            ]
          }
  }