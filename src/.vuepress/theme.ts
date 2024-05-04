import { hopeTheme } from "vuepress-theme-hope";
import { zhCNNavbar, enUSNavbar } from "./navbar/index.js";
import { zhCNSidebar, enUSSidebar } from "./sidebar/index.js";

/*const locale = {
  nickError: '昵称不能少于3个字符',
  mailError: '请填写正确的邮件地址',
  placeholder: '建议使用邮箱登录（社交登录仅支持 GitHub 平台）',
  sofa: '前面的区域，以后再来探索吧~',
  admin: '评论管理员',
  level0: 'Lv0',
  level1: 'Lv1',
  level2: 'Lv2',
  level3: 'Lv3',
  level4: 'Lv4',
  level5: 'Lv5',
};*/

export default hopeTheme({
  hostname: "https://mw.netfox.wiki",

  favicon: "favicon.ico",
  headerDepth: 3,
  navbarTitle: '',
  navbarLayout: {
    start: ["Brand", "Links"],
    center: [],
    end: ["Search", "Outlook", "Language", "Repo"],
  },

  logo: "MWDOCS-Dark.png",
  logoDark: "MWDOCS.png",

  breadcrumb: true,
  breadcrumbIcon: true,
  toc: true,
  pageInfo: ["Word", "ReadingTime", "Author", "Original"],

  lastUpdated: true,
  contributors: false,
  titleIcon: true,

  repo: "https://github.com/MWDOCS/MW-MWT-DOCS/",

  displayFooter: true,

  editLink: true,
  docsRepo: "MWDOCS/MW-MWT-DOCS",
  docsBranch: "gh-page",
  docsDir: "src",

  print: true,
  fullscreen: true,
  iconAssets: "fontawesome",
  darkmode: "switch",

  locales: {
    "/zh/": {
      // navbar
      navbar: zhCNNavbar,

      // sidebar
      sidebar: zhCNSidebar,

      footer: '<svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H116C124.008 0.5 130.5 6.99187 130.5 15V41.5H15C6.99187 41.5 0.5 35.0081 0.5 27V0.5Z" fill="black" stroke="#ACACAC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.8705 21.5C32.8705 26.6752 28.6752 30.8705 23.5 30.8705C18.3248 30.8705 14.1295 26.6752 14.1295 21.5C14.1295 16.3248 18.3248 12.1295 23.5 12.1295C28.6752 12.1295 32.8705 16.3248 32.8705 21.5ZM35 21.5C35 27.8513 29.8513 33 23.5 33C17.1487 33 12 27.8513 12 21.5C12 15.1487 17.1487 10 23.5 10C29.8513 10 35 15.1487 35 21.5ZM18 24.7606C21.4984 27.7465 26.5016 27.7465 30 24.7606L28.6474 23C25.9376 25.3128 22.0624 25.3128 19.3526 23L18 24.7606ZM19 21V18H21V21H19ZM26 18V21H28V18H26Z" fill="white"></path><path d="M51.5548 15.9804C50.8705 15.6078 49.7231 15.1373 48.5858 14.7745L49.0588 14.2843C50.1961 14.6373 51.4341 15.098 52.1688 15.4706L51.5548 15.9804Z" fill="white"></path><path d="M43 15.4608C44.0769 15.2059 45.4255 14.7059 46.0999 14.2843L46.7943 14.7157C45.9489 15.2157 44.6003 15.7255 43.5234 16C43.4126 15.8529 43.161 15.598 43 15.4608Z" fill="white"></path><path d="M57.2872 7.20854C57.2887 7.14125 57.2901 7.07757 57.2916 7.01961H58.127L58.126 7.06206C58.1179 7.41233 58.107 7.88543 58.062 8.43623C58.2039 9.58915 58.8167 13.7476 62.4044 15.3039C62.183 15.4706 61.9615 15.7255 61.8508 15.9314C59.3205 14.7799 58.2303 12.3598 57.7354 10.5279C57.2612 12.4903 56.1895 14.6847 53.7288 15.9706C53.5979 15.7745 53.3463 15.549 53.1148 15.3922C57.1495 13.4035 57.2497 8.89545 57.2872 7.20854Z" fill="white"></path><path d="M63.753 15.8039C64.679 14.2353 64.8199 11.902 64.8199 10.3039V8.20588H72.2475V7.52941H64.0751V10.3039C64.0751 11.8235 63.9845 13.9314 63.0988 15.4314C63.2901 15.5 63.6121 15.6863 63.753 15.8039Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M68.0908 8.31373C68.0001 8.57897 67.8525 8.92173 67.7036 9.22549H65.7257V12.7843H68.1915V15.1863C68.1915 15.3039 68.1512 15.3431 68.0003 15.3529C67.8493 15.3529 67.3259 15.3529 66.7321 15.3431C66.8328 15.5294 66.9334 15.8039 66.9636 15.9902C67.7486 15.9902 68.2418 15.9902 68.5437 15.8824C68.8457 15.7745 68.9262 15.5784 68.9262 15.1961V12.7843H71.4423V9.22549H68.518C68.6648 8.98303 68.8161 8.7085 68.9564 8.44118L68.0908 8.31373ZM66.4705 11.2745H70.6774V12.2059H66.4705V11.2745ZM66.4705 9.81373H70.6774V10.7255H66.4705V9.81373Z" fill="white"></path><path d="M69.7817 13.6078C70.3855 14.2353 71.1907 15.1176 71.5732 15.6373L72.2072 15.2549C71.7946 14.7451 70.9894 13.8922 70.3755 13.2941L69.7817 13.6078Z" fill="white"></path><path d="M66.4805 13.2745C66.0377 13.9314 65.3734 14.6765 64.7695 15.1765C64.9507 15.2745 65.2627 15.4706 65.4137 15.5784C65.9773 15.049 66.6818 14.2255 67.1951 13.5098L66.4805 13.2745Z" fill="white"></path><path d="M80.9835 15.2745C81.1747 15.2647 81.2552 15.2059 81.2552 15.0294V7.13725H82V15.0294C82 15.5196 81.8692 15.7255 81.5471 15.8431C81.215 15.9608 80.6514 15.9706 79.7154 15.9706C79.6751 15.7843 79.5543 15.4608 79.4436 15.2647C80.1481 15.2941 80.7923 15.2843 80.9835 15.2745Z" fill="white"></path><path d="M76.8772 13.0392C77.0009 12.8928 77.0936 12.4211 77.1689 11.2255H74.985V14.7745C74.985 15.1471 75.0756 15.2157 75.5889 15.2157H77.3502C77.8132 15.2157 77.8937 15.0098 77.944 13.8333C78.105 13.9608 78.407 14.0784 78.6083 14.1176C78.5177 15.4804 78.2963 15.8627 77.4005 15.8627H75.5285C74.5523 15.8627 74.2503 15.6471 74.2503 14.7843V10.5686H77.9239C77.9239 10.5686 77.9138 10.7745 77.9037 10.8627C77.8132 12.5686 77.7125 13.2255 77.481 13.4706C77.32 13.6471 77.159 13.7059 76.9074 13.7255C76.696 13.7451 76.3035 13.7451 75.911 13.7255C75.8908 13.5294 75.8204 13.2647 75.7097 13.0882C76.0921 13.1275 76.4444 13.1373 76.5853 13.1373C76.7161 13.1373 76.7966 13.1176 76.8772 13.0392Z" fill="white"></path><path d="M76.4637 7.6292C76.5351 7.48879 76.6025 7.34757 76.6658 7.20588L75.9714 7C75.4379 8.26471 74.361 9.62745 73.0929 10.5196C73.2539 10.6275 73.5257 10.8824 73.6465 11.0294C74.6418 10.2761 75.4974 9.29021 76.1334 8.22706C76.9288 9.06486 77.8138 10.0904 78.256 10.7451L78.7995 10.2451C78.3152 9.55129 77.3111 8.47342 76.4637 7.6292Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.1912 14.1275V13.5H44.6405V9.06863H47.1768V8.45098H43.473V7.81373H47.1768V7H47.9215V7.81373H51.8668V8.45098H47.9215V9.06863H50.7094V13.5H52.1285V14.1275H43.1912ZM45.3652 13.5H49.9546V12.8137H45.3652V13.5ZM45.3652 12.3431H49.9546V11.7549H45.3652V12.3431ZM45.3652 11.2745H49.9546V10.6961H45.3652V11.2745ZM45.3652 10.2353H49.9546V9.58824H45.3652V10.2353Z" fill="white"></path><path d="M79.2826 13.5784V8.12745H80.0072V13.5784H79.2826Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M105.32 26.2505C105.32 25.9898 105.336 25.4196 105.336 25.4196H101.424V23.8717H105.573C105.764 26.2238 106.11 28.471 106.651 30.2984C105.776 31.2876 104.759 32.1157 103.612 32.7515C104.107 33.2077 104.953 34.2016 105.288 34.7067C106.138 34.1597 106.93 33.5082 107.658 32.7639C108.338 33.9391 109.193 34.6415 110.254 34.6415C111.898 34.6415 112.649 33.9572 113 30.78C112.377 30.5356 111.563 29.9817 111.036 29.4277C110.956 31.4155 110.765 32.2301 110.445 32.2301C110.06 32.2301 109.67 31.686 109.312 30.7655C110.465 29.1244 111.389 27.1985 112.058 25.0611L109.711 24.4908C109.396 25.6095 108.983 26.659 108.478 27.6243C108.264 26.4884 108.09 25.2105 107.974 23.8717H112.84V21.5418H111.142L111.946 20.6945C111.387 20.1568 110.27 19.4399 109.455 19L108.05 20.4175C108.553 20.7329 109.148 21.1437 109.647 21.5418H107.835C107.811 20.7923 107.808 20.0385 107.827 19.2933H105.384C105.387 20.0364 105.403 20.7892 105.433 21.5418H98.9812V26.4297C98.9812 28.5642 98.9014 31.4481 97.7199 33.3707C98.2468 33.6477 99.3006 34.5275 99.6997 35C100.514 33.7498 100.957 32.0088 101.189 30.2753C101.506 30.8638 101.745 31.7506 101.775 32.4257C102.51 32.4257 103.18 32.4094 103.612 32.3279C104.091 32.2301 104.458 32.0672 104.809 31.5947C105.192 31.0733 105.272 29.5743 105.32 26.2505ZM101.197 30.2141C101.316 29.3052 101.378 28.4 101.406 27.5703H103.058C103.023 29.1922 102.963 29.8644 102.829 30.0631C102.701 30.2261 102.558 30.2749 102.35 30.2749C102.102 30.2749 101.674 30.2596 101.197 30.2141Z" fill="white"></path><path d="M86.8673 22.112C87.1314 21.4187 87.3672 20.705 87.565 19.9939L85.1541 19.4399C84.6112 21.6395 83.5893 23.8717 82.3599 25.2077C82.9507 25.5336 83.9885 26.2342 84.4515 26.6415C84.9297 26.0332 85.4007 25.2744 85.839 24.4257H88.9062V26.9185H84.7709V29.1996H88.9062V32.002H82.8708V34.3157H97.4005V32.002H91.3332V29.1996H95.9156V26.9185H91.3332V24.4257H96.5543V22.112H91.3332V19.277H88.9062V22.112H86.8673Z" fill="white"></path><path d="M47.3436 28.4645C47.4377 28.0285 47.4856 27.6141 47.4988 27.2444H43.8462V25.11H47.5026V23.4807H43.6866V21.2811H47.5026V19.3585H49.8018V27C49.8018 29.8513 48.9396 33.0611 45.0278 34.9837C44.6446 34.4134 43.9261 33.6802 43.3672 33.224C44.7784 32.6761 45.7414 31.786 46.3804 30.8057C45.6568 30.9237 44.9507 31.0375 44.2921 31.1436L43.4151 31.2851L43 28.9226C44.1273 28.8236 45.7056 28.6496 47.3436 28.4645Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72.6755 34.3305L67.632 19.7976H64.2697L59.1875 34.3305H62.2986L63.2841 31.3431H68.5306L69.4484 34.3305H72.6755ZM65.9218 23.1202L67.6996 28.8388H64.0861L65.9218 23.1202Z" fill="white"></path><path d="M53.7456 19.3585V21.2811H57.9289V23.4807H53.7456V25.11H57.5457V27.2444H53.7456V28.9063H58.2163V31.1059H53.7456V34.7556H51.4144V19.3585H53.7456Z" fill="white"></path><path d="M75.2125 22.2696V31.8618H73.4582V34.3339H79.719V31.8618H78.169V22.2696H79.719V19.7976H73.4582V22.2696H75.2125Z" fill="white"></path></svg> <img height="100%" width="170" src="https://statics.netfox.wiki/20240302/mwdocs-logo-link.8hg7t2v6wm.webp"> <img height="100%" width="100" src="https://statics.netfox.wiki/20240302/netfox-logo-round.60tze5ob17.webp"><hr> 用于记录 <font color="#2196F3">现代战舰</font> 与 <font color="#fb8b05">现代战争：坦克</font> 内容的文档网站 🍂<br>Copyright © 2023-2024 <a href="https://mw.netfox.wiki">MW & MWT 文档</a> by <font color="#3b818c">网狐社</font> All rights reserved.',

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      // navbar
      navbar: enUSNavbar,

      // sidebar
      sidebar: enUSSidebar,

      footer: '<svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H116C124.008 0.5 130.5 6.99187 130.5 15V41.5H15C6.99187 41.5 0.5 35.0081 0.5 27V0.5Z" fill="black" stroke="#ACACAC"/><path d="M45.196 14.3654C45.5918 14.3654 45.9201 14.2007 46.1808 13.8714C46.4447 13.5389 46.5767 13.0434 46.5767 12.3847C46.5767 11.9833 46.5185 11.6383 46.4023 11.3497C46.1824 10.7946 45.7803 10.517 45.196 10.517C44.6085 10.517 44.2064 10.8102 43.9896 11.3968C43.8734 11.7104 43.8152 12.1087 43.8152 12.5917C43.8152 12.9807 43.8734 13.3116 43.9896 13.5844C44.2095 14.1051 44.6116 14.3654 45.196 14.3654ZM43 9.9195H43.8247V10.5876C43.9943 10.3586 44.1797 10.1814 44.3807 10.0559C44.6666 9.86775 45.0027 9.77365 45.3892 9.77365C45.9609 9.77365 46.4463 9.9932 46.8453 10.4323C47.2442 10.8683 47.4437 11.4924 47.4437 12.3048C47.4437 13.4025 47.1563 14.1866 46.5814 14.6571C46.217 14.955 45.7928 15.104 45.309 15.104C44.9289 15.104 44.6101 15.0209 44.3524 14.8547C44.2016 14.7606 44.0336 14.5991 43.8482 14.3701V16.9435H43V9.9195Z" fill="white"/><path d="M48.0756 9.89597H48.8814V10.7663C48.9474 10.597 49.1091 10.3915 49.3668 10.15C49.6244 9.90538 49.9212 9.78306 50.2574 9.78306C50.2731 9.78306 50.2998 9.78463 50.3375 9.78777C50.3752 9.7909 50.4396 9.79718 50.5307 9.80659V10.7005C50.4804 10.6911 50.4333 10.6848 50.3893 10.6817C50.3485 10.6785 50.3029 10.6769 50.2527 10.6769C49.8254 10.6769 49.4971 10.815 49.2678 11.091C49.0385 11.3638 48.9238 11.679 48.9238 12.0366V14.9347H48.0756V9.89597Z" fill="white"/><path d="M52.8825 14.3889C53.4449 14.3889 53.8297 14.1772 54.0371 13.7538C54.2475 13.3272 54.3528 12.8536 54.3528 12.333C54.3528 11.8625 54.2774 11.4799 54.1266 11.185C53.8878 10.7209 53.4763 10.4888 52.892 10.4888C52.3736 10.4888 51.9966 10.6864 51.761 11.0815C51.5254 11.4767 51.4076 11.9535 51.4076 12.5118C51.4076 13.0481 51.5254 13.495 51.761 13.8526C51.9966 14.2101 52.3705 14.3889 52.8825 14.3889ZM52.9155 9.75013C53.5658 9.75013 54.1156 9.96654 54.5648 10.3994C55.0141 10.8322 55.2387 11.4689 55.2387 12.3095C55.2387 13.1218 55.0408 13.793 54.6449 14.3231C54.2491 14.8531 53.6349 15.1181 52.8024 15.1181C52.1081 15.1181 51.5568 14.8845 51.1484 14.4171C50.74 13.9467 50.5358 13.3163 50.5358 12.5259C50.5358 11.679 50.751 11.0047 51.1814 10.5029C51.6118 10.001 52.1898 9.75013 52.9155 9.75013Z" fill="white"/><path d="M56.403 12.4741C56.403 13.0136 56.5177 13.4652 56.747 13.8291C56.9764 14.1929 57.3439 14.3748 57.8497 14.3748C58.2424 14.3748 58.5644 14.207 58.8158 13.8714C59.0702 13.5327 59.1974 13.0481 59.1974 12.4177C59.1974 11.781 59.0671 11.3105 58.8063 11.0063C58.5456 10.6989 58.2236 10.5452 57.8403 10.5452C57.413 10.5452 57.0659 10.7083 56.7989 11.0345C56.535 11.3607 56.403 11.8406 56.403 12.4741ZM57.6801 9.80659C58.0665 9.80659 58.3901 9.88813 58.6508 10.0512C58.8016 10.1453 58.9728 10.31 59.1645 10.5452V8H59.9797V14.9347H59.2163V14.2337C59.0184 14.5442 58.7843 14.7684 58.5142 14.9064C58.244 15.0444 57.9345 15.1134 57.5858 15.1134C57.0235 15.1134 56.5365 14.8782 56.125 14.4077C55.7135 13.9341 55.5077 13.3053 55.5077 12.5212C55.5077 11.7872 55.6946 11.1521 56.0685 10.6158C56.4454 10.0763 56.9826 9.80659 57.6801 9.80659Z" fill="white"/><path d="M61.7001 9.89597V13.241C61.7001 13.4982 61.7409 13.7083 61.8226 13.8714C61.9734 14.1725 62.2546 14.3231 62.6661 14.3231C63.2567 14.3231 63.6588 14.0596 63.8725 13.5327C63.9887 13.2504 64.0468 12.863 64.0468 12.3706V9.89597H64.895V14.9347H64.0939L64.1034 14.1913C63.9934 14.3826 63.8568 14.5442 63.6934 14.6759C63.3698 14.9394 62.9771 15.0711 62.5153 15.0711C61.7959 15.0711 61.3058 14.8312 61.0451 14.3513C60.9037 14.0941 60.833 13.7507 60.833 13.321V9.89597H61.7001Z" fill="white"/><path d="M67.7841 9.75013C68.3527 9.75013 68.8145 9.88813 69.1695 10.1641C69.5277 10.4401 69.7429 10.9153 69.8151 11.5896H68.9904C68.9402 11.2791 68.8255 11.022 68.6464 10.8181C68.4674 10.6111 68.1799 10.5076 67.7841 10.5076C67.2437 10.5076 66.8573 10.771 66.6249 11.298C66.4741 11.6398 66.3987 12.0617 66.3987 12.5635C66.3987 13.0685 66.5055 13.4935 66.7191 13.8385C66.9327 14.1835 67.2689 14.356 67.7275 14.356C68.0794 14.356 68.3574 14.2493 68.5616 14.0361C68.769 13.8197 68.9119 13.5248 68.9904 13.1516H69.8151C69.7209 13.8197 69.4852 14.3089 69.1083 14.6194C68.7313 14.9268 68.249 15.0805 67.6616 15.0805C67.0018 15.0805 66.4756 14.8406 66.0829 14.3607C65.6902 13.8777 65.4939 13.2755 65.4939 12.5541C65.4939 11.6696 65.7091 10.9812 66.1395 10.4888C66.5699 9.99634 67.1181 9.75013 67.7841 9.75013Z" fill="white"/><path d="M72.379 9.78306C72.7371 9.78306 73.0843 9.86775 73.4204 10.0371C73.7566 10.2033 74.0126 10.4198 74.1885 10.6864C74.3582 10.9404 74.4713 11.2368 74.5278 11.5755C74.5781 11.8076 74.6032 12.1777 74.6032 12.6858H70.904C70.9197 13.1971 71.0407 13.6079 71.2669 13.9185C71.4931 14.2258 71.8434 14.3795 72.3177 14.3795C72.7607 14.3795 73.1141 14.2337 73.378 13.942C73.5288 13.7726 73.6356 13.5766 73.6985 13.3539H74.5325C74.5105 13.5389 74.4367 13.7459 74.3111 13.9749C74.1885 14.2007 74.0503 14.3858 73.8964 14.5301C73.6388 14.781 73.3199 14.9503 72.9398 15.0382C72.7356 15.0883 72.5047 15.1134 72.2471 15.1134C71.6187 15.1134 71.0862 14.886 70.6496 14.4313C70.2129 13.9733 69.9946 13.3335 69.9946 12.5118C69.9946 11.7026 70.2145 11.0455 70.6543 10.5405C71.0941 10.0355 71.669 9.78306 72.379 9.78306ZM73.7314 12.0131C73.6969 11.6461 73.6168 11.3528 73.4911 11.1333C73.2586 10.7256 72.8707 10.5217 72.3272 10.5217C71.9376 10.5217 71.6109 10.6628 71.347 10.9451C71.0831 11.2243 70.9433 11.5802 70.9276 12.0131H73.7314Z" fill="white"/><path d="M75.8005 12.4741C75.8005 13.0136 75.9152 13.4652 76.1445 13.8291C76.3739 14.1929 76.7414 14.3748 77.2472 14.3748C77.6399 14.3748 77.9619 14.207 78.2133 13.8714C78.4677 13.5327 78.595 13.0481 78.595 12.4177C78.595 11.781 78.4646 11.3105 78.2038 11.0063C77.9431 10.6989 77.6211 10.5452 77.2378 10.5452C76.8105 10.5452 76.4634 10.7083 76.1964 11.0345C75.9325 11.3607 75.8005 11.8406 75.8005 12.4741ZM77.0776 9.80659C77.464 9.80659 77.7876 9.88813 78.0483 10.0512C78.1991 10.1453 78.3703 10.31 78.562 10.5452V8H79.3772V14.9347H78.6138V14.2337C78.4159 14.5442 78.1818 14.7684 77.9117 14.9064C77.6415 15.0444 77.332 15.1134 76.9833 15.1134C76.421 15.1134 75.9341 14.8782 75.5225 14.4077C75.111 13.9341 74.9052 13.3053 74.9052 12.5212C74.9052 11.7872 75.0921 11.1521 75.466 10.6158C75.843 10.0763 76.3802 9.80659 77.0776 9.80659Z" fill="white"/><path d="M82.4834 8H83.3081V10.5076C83.4934 10.2661 83.7149 10.0826 83.9725 9.95714C84.2301 9.82854 84.5097 9.76424 84.8113 9.76424C85.4396 9.76424 85.9485 9.98066 86.3381 10.4135C86.7308 10.8432 86.9271 11.4783 86.9271 12.3189C86.9271 13.1155 86.7339 13.7773 86.3475 14.3042C85.9611 14.8312 85.4255 15.0946 84.7406 15.0946C84.3573 15.0946 84.0338 15.0021 83.7699 14.817C83.6128 14.7073 83.4447 14.5316 83.2656 14.2901V14.9347H82.4834V8ZM84.6888 14.3466C85.1474 14.3466 85.4899 14.1647 85.7161 13.8008C85.9454 13.437 86.0601 12.9571 86.0601 12.3612C86.0601 11.8312 85.9454 11.3921 85.7161 11.0439C85.4899 10.6958 85.1553 10.5217 84.7123 10.5217C84.3259 10.5217 83.9866 10.6644 83.6945 10.9498C83.4054 11.2352 83.2609 11.7057 83.2609 12.3612C83.2609 12.8348 83.3206 13.219 83.44 13.5139C83.663 14.069 84.0793 14.3466 84.6888 14.3466Z" fill="white"/><path d="M90.688 9.89597H91.6257C91.5063 10.219 91.2409 10.9561 90.8293 12.1072C90.5215 12.9728 90.2638 13.6785 90.0565 14.2243C89.5664 15.5102 89.2208 16.2943 89.0198 16.5766C88.8187 16.8589 88.4732 17 87.9831 17C87.8637 17 87.771 16.9953 87.705 16.9859C87.6422 16.9765 87.5637 16.9592 87.4694 16.9341V16.1626C87.6171 16.2033 87.7239 16.2284 87.7899 16.2378C87.8558 16.2473 87.914 16.252 87.9642 16.252C88.1213 16.252 88.236 16.2253 88.3082 16.172C88.3836 16.1218 88.4465 16.0591 88.4967 15.9838C88.5124 15.9587 88.569 15.8301 88.6664 15.598C88.7638 15.3659 88.8344 15.1934 88.8784 15.0805L87.0123 9.89597H87.9736L89.3261 13.9984L90.688 9.89597Z" fill="white"/><path d="M94.2748 8H95.123V10.5781C95.3241 10.3241 95.5047 10.1453 95.6649 10.0418C95.9383 9.86304 96.2791 9.77365 96.6875 9.77365C97.4195 9.77365 97.9159 10.0293 98.1766 10.5405C98.318 10.8197 98.3887 11.207 98.3887 11.7026V14.9347H97.5169V11.759C97.5169 11.3889 97.4698 11.1176 97.3755 10.9451C97.2216 10.6691 96.9326 10.5311 96.5085 10.5311C96.1566 10.5311 95.8377 10.6519 95.5518 10.8934C95.266 11.1349 95.123 11.5912 95.123 12.2624V14.9347H94.2748V8Z" fill="white"/><path d="M100.109 9.89597V13.241C100.109 13.4982 100.15 13.7083 100.232 13.8714C100.382 14.1725 100.664 14.3231 101.075 14.3231C101.666 14.3231 102.068 14.0596 102.281 13.5327C102.398 13.2504 102.456 12.863 102.456 12.3706V9.89597H103.304V14.9347H102.503L102.512 14.1913C102.402 14.3826 102.266 14.5442 102.102 14.6759C101.779 14.9394 101.386 15.0711 100.924 15.0711C100.205 15.0711 99.7148 14.8312 99.454 14.3513C99.3127 14.0941 99.242 13.7507 99.242 13.321V9.89597H100.109Z" fill="white"/><path d="M104.247 9.89597H105.086V10.6111C105.287 10.3633 105.469 10.183 105.632 10.07C105.912 9.87872 106.229 9.78306 106.584 9.78306C106.986 9.78306 107.31 9.88186 107.555 10.0795C107.693 10.1924 107.819 10.3586 107.932 10.5781C108.12 10.3084 108.342 10.1093 108.596 9.98066C108.851 9.84893 109.137 9.78306 109.454 9.78306C110.133 9.78306 110.594 10.0277 110.839 10.517C110.971 10.7804 111.037 11.1349 111.037 11.5802V14.9347H110.156V11.4344C110.156 11.0988 110.071 10.8683 109.902 10.7428C109.735 10.6174 109.531 10.5546 109.289 10.5546C108.956 10.5546 108.669 10.666 108.427 10.8887C108.188 11.1113 108.069 11.483 108.069 12.0037V14.9347H107.206V11.6461C107.206 11.3042 107.165 11.0549 107.084 10.8981C106.955 10.6628 106.715 10.5452 106.363 10.5452C106.042 10.5452 105.75 10.6691 105.486 10.9169C105.225 11.1647 105.095 11.6132 105.095 12.2624V14.9347H104.247V9.89597Z" fill="white"/><path d="M112.55 13.5938C112.55 13.8385 112.64 14.0314 112.819 14.1725C112.998 14.3136 113.21 14.3842 113.455 14.3842C113.754 14.3842 114.043 14.3152 114.322 14.1772C114.793 13.9482 115.029 13.5734 115.029 13.0528V12.3706C114.925 12.4365 114.792 12.4914 114.629 12.5353C114.465 12.5792 114.305 12.6106 114.148 12.6294L113.634 12.6952C113.326 12.736 113.095 12.8003 112.942 12.8881C112.681 13.0355 112.55 13.2708 112.55 13.5938ZM114.605 11.8813C114.8 11.8562 114.93 11.7747 114.996 11.6367C115.034 11.5614 115.053 11.4532 115.053 11.3121C115.053 11.0235 114.949 10.815 114.742 10.6864C114.537 10.5546 114.244 10.4888 113.86 10.4888C113.417 10.4888 113.103 10.6079 112.918 10.8463C112.814 10.978 112.747 11.1741 112.715 11.4344H111.924C111.939 10.8134 112.14 10.3821 112.527 10.1406C112.916 9.89598 113.367 9.77365 113.879 9.77365C114.473 9.77365 114.955 9.88657 115.326 10.1124C115.694 10.3382 115.877 10.6895 115.877 11.1662V14.069C115.877 14.1568 115.895 14.2274 115.929 14.2807C115.967 14.334 116.044 14.3607 116.16 14.3607C116.198 14.3607 116.24 14.3591 116.287 14.356C116.334 14.3497 116.385 14.3419 116.438 14.3325V14.9582C116.306 14.9958 116.206 15.0193 116.136 15.0288C116.067 15.0382 115.973 15.0429 115.854 15.0429C115.562 15.0429 115.35 14.9394 115.218 14.7324C115.148 14.6226 115.1 14.4673 115.072 14.2666C114.899 14.4924 114.651 14.6884 114.327 14.8547C114.003 15.0209 113.647 15.104 113.257 15.104C112.789 15.104 112.406 14.9629 112.107 14.6806C111.812 14.3952 111.664 14.0392 111.664 13.6127C111.664 13.1453 111.811 12.7831 112.103 12.5259C112.395 12.2687 112.778 12.1103 113.253 12.0507L114.605 11.8813Z" fill="white"/><path d="M116.886 9.89597H117.692V10.6111C117.931 10.3163 118.184 10.1045 118.451 9.97595C118.718 9.84736 119.015 9.78306 119.341 9.78306C120.058 9.78306 120.541 10.0324 120.793 10.5311C120.931 10.804 121 11.1945 121 11.7026V14.9347H120.138V11.759C120.138 11.4516 120.092 11.2039 120.001 11.0157C119.85 10.702 119.577 10.5452 119.181 10.5452C118.98 10.5452 118.815 10.5656 118.686 10.6064C118.454 10.6754 118.25 10.8134 118.074 11.0204C117.932 11.1866 117.84 11.3591 117.796 11.5379C117.755 11.7135 117.734 11.966 117.734 12.2953V14.9347H116.886V9.89597Z" fill="white"/><path d="M17.9605 24.1575C21.4266 26.9643 26.3836 26.9643 29.8497 24.1575L28.5095 22.5026C25.8248 24.6766 21.9854 24.6766 19.3007 22.5026L17.9605 24.1575Z" fill="white"/><path d="M19.404 20.5134V17.6365H21.5336V20.5134H19.404Z" fill="white"/><path d="M26.012 17.6365V20.5134H28.1415V17.6365H26.012Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M35 21.5C35 27.8513 29.8513 33 23.5 33C17.1487 33 12 27.8513 12 21.5C12 15.1487 17.1487 10 23.5 10C29.8513 10 35 15.1487 35 21.5ZM32.8705 21.5C32.8705 26.6752 28.6752 30.8705 23.5 30.8705C18.3248 30.8705 14.1295 26.6752 14.1295 21.5C14.1295 16.3248 18.3248 12.1295 23.5 12.1295C28.6752 12.1295 32.8705 16.3248 32.8705 21.5Z" fill="white"/><path d="M48.2896 22.1781C49.2796 22.1781 50.088 22.4414 50.7148 22.9681C51.3474 23.4889 51.6638 24.356 51.6638 25.5692V32.0851H49.098V26.1995C49.098 25.6905 49.0307 25.2999 48.8959 25.0277C48.6499 24.5305 48.1813 24.282 47.49 24.282C46.6407 24.282 46.0578 24.646 45.7415 25.3739C45.5775 25.7586 45.4954 26.2498 45.4954 26.8475V32.0851H43V22.4266H45.4164V23.8381C45.7385 23.341 46.0432 22.9829 46.3302 22.764C46.8457 22.3734 47.4988 22.1781 48.2896 22.1781Z" fill="white"/><path d="M57.5604 30.3008C58.2926 30.3008 58.855 30.0374 59.2475 29.5107C59.6399 28.984 59.8362 28.2353 59.8362 27.2648C59.8362 26.2942 59.6399 25.5485 59.2475 25.0277C58.855 24.501 58.2926 24.2376 57.5604 24.2376C56.8282 24.2376 56.2629 24.501 55.8646 25.0277C55.4721 25.5485 55.2758 26.2942 55.2758 27.2648C55.2758 28.2353 55.4721 28.984 55.8646 29.5107C56.2629 30.0374 56.8282 30.3008 57.5604 30.3008ZM62.4634 27.2648C62.4634 28.6851 62.0592 29.9013 61.2508 30.9133C60.4425 31.9194 59.2152 32.4225 57.5692 32.4225C55.9231 32.4225 54.6959 31.9194 53.8875 30.9133C53.0791 29.9013 52.6749 28.6851 52.6749 27.2648C52.6749 25.8681 53.0791 24.6578 53.8875 23.6339C54.6959 22.6101 55.9231 22.0982 57.5692 22.0982C59.2152 22.0982 60.4425 22.6101 61.2508 23.6339C62.0592 24.6578 62.4634 25.8681 62.4634 27.2648Z" fill="white"/><path d="M62.5608 24.2997V22.4977H63.8964V19.799H66.3742V22.4977H67.9295V24.2997H66.3742V29.4131C66.3742 29.8096 66.424 30.0581 66.5236 30.1587C66.6232 30.2534 66.9278 30.3008 67.4374 30.3008C67.5136 30.3008 67.5927 30.3008 67.6747 30.3008C67.7626 30.2949 67.8475 30.2889 67.9295 30.283V32.1739L66.7433 32.2183C65.56 32.2597 64.7516 32.0526 64.3181 31.5969C64.037 31.3069 63.8964 30.8601 63.8964 30.2564V24.2997H62.5608Z" fill="white"/><path d="M77.602 22.1958C78.8615 22.1958 79.8456 22.6545 80.5544 23.5718C81.2691 24.4891 81.6264 25.6728 81.6264 27.1227C81.6264 28.6259 81.2749 29.8717 80.572 30.8601C79.869 31.8484 78.8878 32.3426 77.6284 32.3426C76.8376 32.3426 76.202 32.1828 75.7217 31.8632C75.4346 31.6738 75.1242 31.3424 74.7903 30.8689V32.0851H72.3388V19.0178H74.8342V23.6695C75.1505 23.2197 75.4991 22.8764 75.8798 22.6397C76.3309 22.3438 76.905 22.1958 77.602 22.1958ZM76.9606 30.2564C77.605 30.2564 78.1058 29.993 78.4631 29.4663C78.8205 28.9396 78.9991 28.2472 78.9991 27.389C78.9991 26.7025 78.9113 26.1344 78.7355 25.6846C78.4016 24.8324 77.7866 24.4063 76.8903 24.4063C75.9823 24.4063 75.3585 24.8235 75.0187 25.658C74.843 26.1018 74.7551 26.6759 74.7551 27.3802C74.7551 28.2087 74.9367 28.8952 75.2999 29.4397C75.6631 29.9842 76.2167 30.2564 76.9606 30.2564Z" fill="white"/><path d="M83.0945 33.9405L83.4108 33.9582C83.6568 33.9701 83.8911 33.9612 84.1137 33.9316C84.3363 33.902 84.5238 33.8339 84.6761 33.7274C84.8225 33.6268 84.9573 33.4167 85.0803 33.0971C85.2092 32.7775 85.2619 32.5822 85.2385 32.5112L81.7237 22.4089H84.5092L86.6004 29.5462L88.5774 22.4089H91.2398L87.9536 31.9253C87.3209 33.76 86.8201 34.8963 86.451 35.3342C86.082 35.7781 85.3439 36 84.2368 36C84.0142 36 83.8355 35.997 83.7008 35.9911C83.566 35.9911 83.3639 35.9822 83.0945 35.9645V33.9405Z" fill="white"/><path d="M97.783 27.1405H101.069L99.4525 21.9916L97.783 27.1405ZM97.95 19H101.008L105.594 32.0851H102.66L101.825 29.3953H97.0537L96.1575 32.0851H93.3281L97.95 19Z" fill="white"/><path d="M110.59 32.0851H107.902V19H110.59V32.0851Z" fill="white"/><path d="M106.306 19H112V21.2258H106.306V19Z" fill="white"/><path d="M106.306 29.8624H112V32.0882H106.306V29.8624Z" fill="white"/></svg> <img height="100%" width="170" src="https://statics.netfox.wiki/20240302/mwdocs-logo-link.8hg7t2v6wm.webp"> <img height="100%" width="100" src="https://statics.netfox.wiki/20240302/netfox-logo-round.60tze5ob17.webp"><hr> Documentation site for <font color="#2196F3">Modern Warships</font> and <font color="#fb8b05">Modern Warfare: Tanks</font> Content 🍂<br>Copyright © 2023-2024 <a href=“https://mw.netfox.wiki”>MW & MWT Docs</a> by <font color="#3b818c">NetFox Society</font> All rights reserved.',

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/zh/dev/": ["1234"],
    },
  },

  plugins: {
    //blog: true,
    seo: true,
    searchPro: {
      indexContent: true,
      autoSuggestions: true,
      worker: "MW-MWT-DOCS-Search.worker.js",
    },
    sitemap: true,
    photoSwipe: {
      delay: 200,
    },
    // You should generate and use your own comment service
    /*comment: {
      provider: "Waline",
      serverURL: "https://waline.mw.netfox.wiki/",
      //comment: false,
      //pageview: true,
      meta: ['nick', 'mail'],
      requiredMeta: ['nick'],
      pageSize: 10,
      locale,
      imageUploader: false,
      //reaction: ['https://wsrv.nl/?url=unpkg.com/@waline/emojis@1.1.0/tw-emoji/1f649.png', 'https://wsrv.nl/?url=s1.ax1x.com/2023/08/04/pPF64UI.jpg', 'https://wsrv.nl/?url=s1.ax1x.com/2023/08/05/pPkbBAP.jpg'],
      search: false,
      emoji: false,/*[
      'https://jsd.cdn.zzko.cn/npm/@waline/emojis/tw-emoji/',
      'https://jsd.cdn.zzko.cn/npm/sticker-heo/Sticker-100/',
      ],
    },*/
    components: {
      components: ["VPCard", "VPBanner", "BiliBili", "Badge", "SiteInfo"],
    },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      tasklist: true,//任务列表
      component: true,//组件
      figure: true,//图片
      imgSize: true,
      align: true,//自定义对齐
      chart: true,//图表
      echarts: true,//图表
      gfm: true,//gfm语法
      sub: true,//上下角标
      sup: true,
      tabs: true,//选项卡
      hint: true,//容器
    },
    catalog: true,
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
}, { custom: true });
