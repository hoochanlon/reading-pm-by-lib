new Docute({
    detectSystemDarkTheme: true,
    darkThemeToggler: true,
    nav: [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'GitHub',
    link: 'https://github.com/hoochanlon'
  }
  ],
    sidebar: [
      // A sidebar item, with child links
      {
        title: '前言',
        children: [
          {
            title: 'getting started',
            link: '/'
          }
        ]
      },
      {
        title: '项目成员建设管理',
        children: [
          {
            title: '项目概述与项目经理',
            link: '/program/pm-gaishu'
          },
          {
            title: '项目组结构及阶段发展',
            link: '/program/xiangmuzhu'
          },
          {
            title: '人才资源管理',
            link: '/program/hrm'
          },
          {
            title: '沟通管理',
            link: '/program/goutong'
          }
        ]
      },
      {
        title: '项目范围与进度管理',
        children: [
          {
            title: '项目范围过程',
            link: '/program/fanwei'
          },
          {
            title: '项目进度预估及管控',
            link: '/program/time-manager'
          }
        ]
      },
      {
        title: '项目交付管理',
        children: [
        {
            title: '采购管理',
            link: '/program/caigou'
          },
          {
            title: '投入成本',
            link: '/program/cost'
          },
          {
            title: '风险概论',
            link: '/program/fengxian'
          },
          {
            title: '风险对策',
            link: '/program/duice'
          },
          {
            title: '质量管理',
            link: '/program/zhiliang'
          },
          {
            title: '项目收尾管理',
            link: '/program/shouwei'
          }
        ]
      },
      {
        title: '服务标书与岗位手册(输出)',
        children: [
          {
            title: '桌维驻场服务季度报告',
            link: '/bid/ji-du-bao-gao'
          },
          {
            title: '岗位手册编写格式',
            link: '/bid/gan-wei-man-gs'
          },
          {
            title: '甲方公司岗位工作手册',
            link: '/bid/gan-wei-man'
          },
          {
            title: '桌维项目标书编写格式',
            link: '/bid/tou-biao-shu-ge-shi'
          },
          {
            title: '甲方代维项目服务（投标书）',
            link: '/bid/tou-biao-shu'
          }
        ]
      }
    ]
  })
