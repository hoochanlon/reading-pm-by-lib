module.exports = {
    title: '《阅读文稿思考项目管理与流程决策》',
    description: '从文库资料解读项目九大领域管理与自我管理。对项目范围及进度、人才与沟通、风险评估及措施、项目质量改善与交付进行思考解读',
    base: '/reading-pm-by-lib/', //项目文件夹设置目录
    theme: 'antdocs',
    head:[
      ['link', {rel:'icon', href:'favicon.ico'}],
      ['link', { rel: 'stylesheet', href: '/css/style.css' }],
      ['meta', { name: 'keywords', content: '项目管理,流程决策'}]
    ],
    plugins: [
      // https://vuepress.github.io/zh/plugins 插件下载
      ['@vuepress/plugin-back-to-top'],//安装不了插件,建议非全局安装vue    
      // ['flexsearch'], 
      ['@vuepress/last-updated']
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
      lastUpdated: '最近一次更新', 
      nav: [
        { text: '跳转首页', link: '/' },
      ],
        sidebar: [ 
            {
                title: 'getting-started',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/into/qianyan','前言'],
                  ['/into/changelog','更新日志']
                ]
              },
              {
                title: '通过信息了解企业资本运作职业化的人们（序章）',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/look/xinxi-jishu','情报学习整合'],
                  ['/look/ti-analysis','培训机构分析报告'],
                  ['/look/law-sug','解构非规范型服务企业'],
                  ['/look/the-factory-trap','流水线工厂陷阱'],
                  ['/process/pc/gebumen-zhineng.md','企业各部门职能初见']
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
                title: '项目招投标与人才培训',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/bid/tou-biao-shu-ge-shi.md','​桌维项目标书编写格式'],
                  ['/bid/tou-biao-shu.md','​甲方代维项目服务（投标书）']
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
                title: '供应链交易市场',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/chain/vc','供应链物流交易']]
              },
              {
                title: '生产分工标准化信息流程',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/process/pc/active','初步解读生产人员职责范围与工作活动']
                ]
              },
              {
                title: '由项目及流程管理到个人函数',   // 必要的
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