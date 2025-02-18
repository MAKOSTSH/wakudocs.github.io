import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index.js";
import { Sidebar } from "./sidebar/index.js";

/*const locale = {
  nickError: '报告舰长！昵称不能少于3个字符',
  mailError: '报告舰长！请填写正确的邮件地址',
  placeholder: '公告：评论系统邮箱功能出现问题，请选择第三方【QQ、Weibo、Github、Facebook、X】或者游客评论，敬请谅解！\n\n社交登录现已支持【QQ Weibo GitHub X Facebook】等平台',
  sofa: '前面的区域，以后再来探索吧~',
  admin: '📰 评论管理员',
  level0: 'Lv0',
  level1: 'Lv1',
  level2: 'Lv2',
  level3: 'Lv3',
  level4: 'Lv4',
  level5: 'Lv5',
};*/

export default hopeTheme({
  hostname: "https://mwdocs.info",
  headerDepth: 3,
  navTitle: false,
  navbarLayout: {
    start: ["Brand", "Links", "Search"],
    center: [],
    end: ["Language", "Repo", "Outlook"],
  },
  //pure: true,
  breadcrumb: false,
  toc: true,
  //pageInfo: ["PageView","Word", "ReadingTime","Author","Date","Original"],
  pageInfo: ["Word", "ReadingTime", "Author"],
  logo: "./favicon.ico",
  // navbar
  navbar: Navbar,
  // sidebar
  sidebar: Sidebar,
  lastUpdated: true,
  contributors: false,
  editLink: true,
  docsRepo: "MWDOCS/wakudocs.github.io",
  docsBranch: "gh-page",
  docsDir: "src",
  footer: '<svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H116C124.008 0.5 130.5 6.99187 130.5 15V41.5H15C6.99187 41.5 0.5 35.0081 0.5 27V0.5Z" fill="black" stroke="#ACACAC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.8705 21.5C32.8705 26.6752 28.6752 30.8705 23.5 30.8705C18.3248 30.8705 14.1295 26.6752 14.1295 21.5C14.1295 16.3248 18.3248 12.1295 23.5 12.1295C28.6752 12.1295 32.8705 16.3248 32.8705 21.5ZM35 21.5C35 27.8513 29.8513 33 23.5 33C17.1487 33 12 27.8513 12 21.5C12 15.1487 17.1487 10 23.5 10C29.8513 10 35 15.1487 35 21.5ZM18 24.7606C21.4984 27.7465 26.5016 27.7465 30 24.7606L28.6474 23C25.9376 25.3128 22.0624 25.3128 19.3526 23L18 24.7606ZM19 21V18H21V21H19ZM26 18V21H28V18H26Z" fill="white"></path><path d="M51.5548 15.9804C50.8705 15.6078 49.7231 15.1373 48.5858 14.7745L49.0588 14.2843C50.1961 14.6373 51.4341 15.098 52.1688 15.4706L51.5548 15.9804Z" fill="white"></path><path d="M43 15.4608C44.0769 15.2059 45.4255 14.7059 46.0999 14.2843L46.7943 14.7157C45.9489 15.2157 44.6003 15.7255 43.5234 16C43.4126 15.8529 43.161 15.598 43 15.4608Z" fill="white"></path><path d="M57.2872 7.20854C57.2887 7.14125 57.2901 7.07757 57.2916 7.01961H58.127L58.126 7.06206C58.1179 7.41233 58.107 7.88543 58.062 8.43623C58.2039 9.58915 58.8167 13.7476 62.4044 15.3039C62.183 15.4706 61.9615 15.7255 61.8508 15.9314C59.3205 14.7799 58.2303 12.3598 57.7354 10.5279C57.2612 12.4903 56.1895 14.6847 53.7288 15.9706C53.5979 15.7745 53.3463 15.549 53.1148 15.3922C57.1495 13.4035 57.2497 8.89545 57.2872 7.20854Z" fill="white"></path><path d="M63.753 15.8039C64.679 14.2353 64.8199 11.902 64.8199 10.3039V8.20588H72.2475V7.52941H64.0751V10.3039C64.0751 11.8235 63.9845 13.9314 63.0988 15.4314C63.2901 15.5 63.6121 15.6863 63.753 15.8039Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M68.0908 8.31373C68.0001 8.57897 67.8525 8.92173 67.7036 9.22549H65.7257V12.7843H68.1915V15.1863C68.1915 15.3039 68.1512 15.3431 68.0003 15.3529C67.8493 15.3529 67.3259 15.3529 66.7321 15.3431C66.8328 15.5294 66.9334 15.8039 66.9636 15.9902C67.7486 15.9902 68.2418 15.9902 68.5437 15.8824C68.8457 15.7745 68.9262 15.5784 68.9262 15.1961V12.7843H71.4423V9.22549H68.518C68.6648 8.98303 68.8161 8.7085 68.9564 8.44118L68.0908 8.31373ZM66.4705 11.2745H70.6774V12.2059H66.4705V11.2745ZM66.4705 9.81373H70.6774V10.7255H66.4705V9.81373Z" fill="white"></path><path d="M69.7817 13.6078C70.3855 14.2353 71.1907 15.1176 71.5732 15.6373L72.2072 15.2549C71.7946 14.7451 70.9894 13.8922 70.3755 13.2941L69.7817 13.6078Z" fill="white"></path><path d="M66.4805 13.2745C66.0377 13.9314 65.3734 14.6765 64.7695 15.1765C64.9507 15.2745 65.2627 15.4706 65.4137 15.5784C65.9773 15.049 66.6818 14.2255 67.1951 13.5098L66.4805 13.2745Z" fill="white"></path><path d="M80.9835 15.2745C81.1747 15.2647 81.2552 15.2059 81.2552 15.0294V7.13725H82V15.0294C82 15.5196 81.8692 15.7255 81.5471 15.8431C81.215 15.9608 80.6514 15.9706 79.7154 15.9706C79.6751 15.7843 79.5543 15.4608 79.4436 15.2647C80.1481 15.2941 80.7923 15.2843 80.9835 15.2745Z" fill="white"></path><path d="M76.8772 13.0392C77.0009 12.8928 77.0936 12.4211 77.1689 11.2255H74.985V14.7745C74.985 15.1471 75.0756 15.2157 75.5889 15.2157H77.3502C77.8132 15.2157 77.8937 15.0098 77.944 13.8333C78.105 13.9608 78.407 14.0784 78.6083 14.1176C78.5177 15.4804 78.2963 15.8627 77.4005 15.8627H75.5285C74.5523 15.8627 74.2503 15.6471 74.2503 14.7843V10.5686H77.9239C77.9239 10.5686 77.9138 10.7745 77.9037 10.8627C77.8132 12.5686 77.7125 13.2255 77.481 13.4706C77.32 13.6471 77.159 13.7059 76.9074 13.7255C76.696 13.7451 76.3035 13.7451 75.911 13.7255C75.8908 13.5294 75.8204 13.2647 75.7097 13.0882C76.0921 13.1275 76.4444 13.1373 76.5853 13.1373C76.7161 13.1373 76.7966 13.1176 76.8772 13.0392Z" fill="white"></path><path d="M76.4637 7.6292C76.5351 7.48879 76.6025 7.34757 76.6658 7.20588L75.9714 7C75.4379 8.26471 74.361 9.62745 73.0929 10.5196C73.2539 10.6275 73.5257 10.8824 73.6465 11.0294C74.6418 10.2761 75.4974 9.29021 76.1334 8.22706C76.9288 9.06486 77.8138 10.0904 78.256 10.7451L78.7995 10.2451C78.3152 9.55129 77.3111 8.47342 76.4637 7.6292Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.1912 14.1275V13.5H44.6405V9.06863H47.1768V8.45098H43.473V7.81373H47.1768V7H47.9215V7.81373H51.8668V8.45098H47.9215V9.06863H50.7094V13.5H52.1285V14.1275H43.1912ZM45.3652 13.5H49.9546V12.8137H45.3652V13.5ZM45.3652 12.3431H49.9546V11.7549H45.3652V12.3431ZM45.3652 11.2745H49.9546V10.6961H45.3652V11.2745ZM45.3652 10.2353H49.9546V9.58824H45.3652V10.2353Z" fill="white"></path><path d="M79.2826 13.5784V8.12745H80.0072V13.5784H79.2826Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M105.32 26.2505C105.32 25.9898 105.336 25.4196 105.336 25.4196H101.424V23.8717H105.573C105.764 26.2238 106.11 28.471 106.651 30.2984C105.776 31.2876 104.759 32.1157 103.612 32.7515C104.107 33.2077 104.953 34.2016 105.288 34.7067C106.138 34.1597 106.93 33.5082 107.658 32.7639C108.338 33.9391 109.193 34.6415 110.254 34.6415C111.898 34.6415 112.649 33.9572 113 30.78C112.377 30.5356 111.563 29.9817 111.036 29.4277C110.956 31.4155 110.765 32.2301 110.445 32.2301C110.06 32.2301 109.67 31.686 109.312 30.7655C110.465 29.1244 111.389 27.1985 112.058 25.0611L109.711 24.4908C109.396 25.6095 108.983 26.659 108.478 27.6243C108.264 26.4884 108.09 25.2105 107.974 23.8717H112.84V21.5418H111.142L111.946 20.6945C111.387 20.1568 110.27 19.4399 109.455 19L108.05 20.4175C108.553 20.7329 109.148 21.1437 109.647 21.5418H107.835C107.811 20.7923 107.808 20.0385 107.827 19.2933H105.384C105.387 20.0364 105.403 20.7892 105.433 21.5418H98.9812V26.4297C98.9812 28.5642 98.9014 31.4481 97.7199 33.3707C98.2468 33.6477 99.3006 34.5275 99.6997 35C100.514 33.7498 100.957 32.0088 101.189 30.2753C101.506 30.8638 101.745 31.7506 101.775 32.4257C102.51 32.4257 103.18 32.4094 103.612 32.3279C104.091 32.2301 104.458 32.0672 104.809 31.5947C105.192 31.0733 105.272 29.5743 105.32 26.2505ZM101.197 30.2141C101.316 29.3052 101.378 28.4 101.406 27.5703H103.058C103.023 29.1922 102.963 29.8644 102.829 30.0631C102.701 30.2261 102.558 30.2749 102.35 30.2749C102.102 30.2749 101.674 30.2596 101.197 30.2141Z" fill="white"></path><path d="M86.8673 22.112C87.1314 21.4187 87.3672 20.705 87.565 19.9939L85.1541 19.4399C84.6112 21.6395 83.5893 23.8717 82.3599 25.2077C82.9507 25.5336 83.9885 26.2342 84.4515 26.6415C84.9297 26.0332 85.4007 25.2744 85.839 24.4257H88.9062V26.9185H84.7709V29.1996H88.9062V32.002H82.8708V34.3157H97.4005V32.002H91.3332V29.1996H95.9156V26.9185H91.3332V24.4257H96.5543V22.112H91.3332V19.277H88.9062V22.112H86.8673Z" fill="white"></path><path d="M47.3436 28.4645C47.4377 28.0285 47.4856 27.6141 47.4988 27.2444H43.8462V25.11H47.5026V23.4807H43.6866V21.2811H47.5026V19.3585H49.8018V27C49.8018 29.8513 48.9396 33.0611 45.0278 34.9837C44.6446 34.4134 43.9261 33.6802 43.3672 33.224C44.7784 32.6761 45.7414 31.786 46.3804 30.8057C45.6568 30.9237 44.9507 31.0375 44.2921 31.1436L43.4151 31.2851L43 28.9226C44.1273 28.8236 45.7056 28.6496 47.3436 28.4645Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72.6755 34.3305L67.632 19.7976H64.2697L59.1875 34.3305H62.2986L63.2841 31.3431H68.5306L69.4484 34.3305H72.6755ZM65.9218 23.1202L67.6996 28.8388H64.0861L65.9218 23.1202Z" fill="white"></path><path d="M53.7456 19.3585V21.2811H57.9289V23.4807H53.7456V25.11H57.5457V27.2444H53.7456V28.9063H58.2163V31.1059H53.7456V34.7556H51.4144V19.3585H53.7456Z" fill="white"></path><path d="M75.2125 22.2696V31.8618H73.4582V34.3339H79.719V31.8618H78.169V22.2696H79.719V19.7976H73.4582V22.2696H75.2125Z" fill="white"></path></svg> <img height="100%" width="170" src="https://docs.mwdocs.info/mwdocs-logo-link.png"> <img height="100%" width="100" src="https://docs.mwdocs.info/netfox-logo-round.png"><hr> 用于记录 <font color="#2196F3">现代战舰</font> 与 <font color="#fb8b05">现代战争：坦克</font> 内容的文档网站 🍂<hr>Copyright © 2023-2024 <a href="https://mwdocs.info">MW & MWT 文档</a> by 网狐社 All rights reserved.',
  displayFooter: true,
  print: true,
  fullscreen: true,
  sidebarIcon: true,
  iconAssets: "iconfont",
  darkmode: "toggle",
  encrypt: {
      config: {
        "/dev/": ["mwdocs-dev-netfox"],
      },
    },
  plugins: {
	pwa: {
	  cacheHTML: true,
	},
	searchPro: {
	  indexContent: true,
	  autoSuggestions: true,
      worker: "docs-search.worker.js",
	},
	sitemap: true,
    photoSwipe: {
      delay: 200,
    },
    autoCatalog: true,
    seo: true,
    components: {
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "MW & MWT 文档",
            content: '<img height="100%" width="100%" src="https://docs.mwdocs.info/圆角-655f357fbee72.png" /><br>用于记录 <font color="#2196F3">现代战舰</font> 与 <font color="#fb8b05">现代战争：坦克</font> 内容的文档网站 🍂<hr><font color="#fb8b05">1. </font><strong><font color="#144a74">访问网站请同意声明</font></strong><br>我是个现（现代战舰）批',
            actions: [
              {
                text: "认同并浏览本站",
                type: "primary",
              },
            ],
            confirm: true,
            showOnce: true,
          },
          /*{
                path: "/",
                title: "MW & MWT 文档丨号外",
                content: '<img height="100%" width="100%" src="https://my-img.cc/i/2023/11/25/6561869ad5031.png" /><br>西雅图..........',
                actions: [
                  {
                    text: "恭喜",
                    type: "primary",
                  },
                ],
                confirm: true,
          },*/
          /*{
                path: "/dev/",
                title: "MW & MWT 文档丨文档开发",
                content: '<img height="100%" width="100%" src="https://my-img.cc/i/2023/11/25/6561869ad5031.png" /><br>你访问的为正在开发文档！',
                actions: [
                  {
                    text: "明白",
                    type: "primary",
                  },
                ],
                confirm: true,
              },*/
        ],
      },
      components: [
        // "ArtPlayer",
        "VPCard",
        "VPBanner",
        "BiliBili",
        "Badge",
        "SiteInfo",
      ],
    },
    /*comment: {
		provider: "Twikoo",
		envId: "https://pl.cooing.org.cn",

    provider: "Waline",
    serverURL: "https://comment.mwdocs.info",
    comment: false,
    pageview: true,
    meta: ['nick', 'mail'],
    requiredMeta: ['nick'],
    login: 'enable',
    locale,
    pageSize: '10',
    imageUploader: false,
			provider: "Giscus",
			repo: "Wakudocs/repo",
			repoId: "R_kgDOJiGMcQ",
			category: "Announcements",
			categoryId: "DIC_kwDOJiGMcc4CWb1s",
			lazyLoading: "false",
			inputPosition: "top",
			lightTheme: "light_protanopia",
			darkTheme: "dark_protanopia",
  },*/
    mdEnhance: {
	  tasklist: true,//任务列表
      component: true,//组件
      figure: true,//图片
      imgSize: true,
      imgLazyload: true,
      align: true,//自定义对齐
      chart: true,//图表
      echarts: true,//图表
      gfm: true,//gfm语法
      sub: true,//上下角标
      sup: true,
      tabs: true,//选项卡
      hint: true,//容器
    },
  },
});