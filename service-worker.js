if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,f)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let b={};const r=s=>a(s,d),i={module:{uri:d},exports:b,require:r};e[d]=Promise.all(c.map((s=>i[s]||r(s)))).then((s=>(f(...s),b)))}}define(["./workbox-6db16f92"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-a4e0b4da.js",revision:"b45ed99e83ba9f2b4896ec412a2af6d3"},{url:"assets/404.html-f93c9f16.js",revision:"3503342de37ff58d7a02748f1f7462e0"},{url:"assets/align.html-1d19877f.js",revision:"5bf4bbc27148b5fe45a02b098164b736"},{url:"assets/align.html-7fadfc9d.js",revision:"b57d55ba38445810f6e0ba2176af2de8"},{url:"assets/apkxa.html-311442dc.js",revision:"987e2a956f2bf7af914c5e516d1fc0d1"},{url:"assets/apkxa.html-378732df.js",revision:"cc3f7acb164d324a8bc30be4c1750f78"},{url:"assets/app-4aad03b1.js",revision:"b8cd5243adf4985bfc8adbeaef090a63"},{url:"assets/app.html-4d510f80.js",revision:"380ff7c191819b8b293c1972ad97c33d"},{url:"assets/app.html-aea8d675.js",revision:"be8b8f921324259083848b64dd653cb4"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/BP.html-8b67d52b.js",revision:"71211bd7db6dc9578bf6c1a0f9a387e3"},{url:"assets/BP.html-a39f5797.js",revision:"a76e38b56f455e183bec9c06c154d4dd"},{url:"assets/BS.html-32b4ffbc.js",revision:"698e7c25b1cdf172e98e0a6884f8ea9e"},{url:"assets/BS.html-7140d55c.js",revision:"a891e25d5b7932e775befa48c7790c9d"},{url:"assets/card.html-16b0ff22.js",revision:"765506d080c8c9af93ef291d4f4d57d6"},{url:"assets/card.html-fd0e43b8.js",revision:"ec176d158a20f28e1f4165cfc7b4e507"},{url:"assets/chart.html-2e081252.js",revision:"fe3911a2f5ddbe63cbdedc72371198a0"},{url:"assets/chart.html-e1361f18.js",revision:"ee44da80ae07eb85d81fbacb4c0d2d70"},{url:"assets/cn.html-8846cea2.js",revision:"8082a20296622333abb428a20bebf9a9"},{url:"assets/cn.html-f120e3dd.js",revision:"12f7e321f075c5abc2d5400f99694bb3"},{url:"assets/container.html-02b0d22f.js",revision:"81ed5e088020d1df46f3d73b33531246"},{url:"assets/container.html-e3a31dd1.js",revision:"0c628a732217bac23120fff3a8b294ac"},{url:"assets/ct.html-34388285.js",revision:"d2439c7041b97aa9579294470f612b29"},{url:"assets/ct.html-5cf23af1.js",revision:"33d41f156cf3d1a8c683cc67e642747a"},{url:"assets/ctto.html-20ba1adc.js",revision:"d5250dcbc6a939664170ec874b74a477"},{url:"assets/ctto.html-90c090b3.js",revision:"73269333a68f93d39381afccae7b74e2"},{url:"assets/CYCT.html-3e5a760a.js",revision:"139db68121199e31db666cd7dafe84ed"},{url:"assets/CYCT.html-e8a3277a.js",revision:"0bbc86d765ba3cc563f0bb1255471379"},{url:"assets/DE.html-34be9e79.js",revision:"079f2ee23daf255e53b04f28375ae087"},{url:"assets/DE.html-cb35a2c1.js",revision:"ad690f4ef9394533c8a1b1cb145c5e4c"},{url:"assets/echarts.html-615dfb01.js",revision:"f8a975eeb54b6bd9c2f968bcd15a99ee"},{url:"assets/echarts.html-7a2a4941.js",revision:"4602908cfcccda3089e88bc4c3a8363b"},{url:"assets/EGG.html-5a535213.js",revision:"bc5c9b5a76ff31c784075f0072c0d2be"},{url:"assets/EGG.html-62151f27.js",revision:"00f65b11c6c6b91368a70a32b4c9303f"},{url:"assets/external.html-69781f4b.js",revision:"e4bd6419d4cc75d12f3e81a8893970ba"},{url:"assets/external.html-884e27c2.js",revision:"4f39d68643d6c5fbda01c775410d9482"},{url:"assets/game-info.html-5df702c1.js",revision:"1f56e4032de9f32f4ac5c1d218d54808"},{url:"assets/game-info.html-e35e855a.js",revision:"7128660546c2797e2f3e1f1b34409573"},{url:"assets/Game.html-45d2d604.js",revision:"93257ad8b2fd5ef3bcd5ef042f0d39bf"},{url:"assets/Game.html-e5ca55b2.js",revision:"4bce4ff6c2b09d3536b686e467886a7f"},{url:"assets/GO.html-606e8cee.js",revision:"f19ad4406c2f38785d504cb5acafc823"},{url:"assets/GO.html-6b45fac7.js",revision:"e9fef89d4c776f200fb3f3e4e3c03201"},{url:"assets/Google.html-b44854ed.js",revision:"335b829c2bb537cdf8cb53bb3ce205bc"},{url:"assets/Google.html-e464b56f.js",revision:"f595520b7303780bf8252c9dbe42686e"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0b222a15.js",revision:"f9b9415226e7af05f4ccfcbc1d7206cc"},{url:"assets/index.html-3f849bd1.js",revision:"ee47e47dde222a607ece2bee98044b59"},{url:"assets/index.html-529c9aee.js",revision:"3a9e98cec97bf67e3213bb2d6578ce60"},{url:"assets/index.html-8de2d4ff.js",revision:"7d89cf1c3f71a80a8301d28588fb4be1"},{url:"assets/index.html-a9605c2b.js",revision:"8ce11f99efb1e2623ac12b02cb7d5b21"},{url:"assets/index.html-c8fc72e0.js",revision:"57eb45ad71fc6a586c2cc820964bffbb"},{url:"assets/index.html-cb1a954a.js",revision:"035a6ad8081c9d331d250026fcc3e6e0"},{url:"assets/index.html-e04028e8.js",revision:"087f73a21349fd98b30caa1050307d13"},{url:"assets/index.html-f0acfdf6.js",revision:"52bf4b1202ed437646aa89499e664f84"},{url:"assets/index.html-f7ed7fb4.js",revision:"b7c28fc51ebb365ce1b619314a78df0f"},{url:"assets/info.html-9a81aa82.js",revision:"d3ec65eded170afeb6c99d193683ba82"},{url:"assets/info.html-e11ddfcd.js",revision:"8b090d53ab4bba6164c67995e5154b49"},{url:"assets/JC.html-58a4a672.js",revision:"e16347cfc2180b120bac2401adf37d4a"},{url:"assets/JC.html-f37f3634.js",revision:"7edbd294a5722cce5b2315912426e1d2"},{url:"assets/JD.html-5901278a.js",revision:"71439937d888fcfcd3235f35b84cf0f2"},{url:"assets/JD.html-bd855d01.js",revision:"3b4d0e629b11e009302eb1822eeeefd9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/LJ.html-7f50e57b.js",revision:"3f726091279f24566f516a09b9aba4f0"},{url:"assets/LJ.html-999a2776.js",revision:"641ae8f1fd21aee41a65898fbe79f98a"},{url:"assets/LT.html-4bd73397.js",revision:"4365a8825afede720dbe5ea69d3bafd9"},{url:"assets/LT.html-54e9e2a9.js",revision:"f6fe2fe9acdbb104fef869e2f2ac9e82"},{url:"assets/mark.html-904401b3.js",revision:"09889ec84d8f37c24344e7c1a5636469"},{url:"assets/mark.html-fafe62b4.js",revision:"d57f3bcd7bc7432a82160d2ecdd2f486"},{url:"assets/markdown.esm-9d5bc2ce.js",revision:"00403f340754f834b0b81192f798dd6d"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/md.html-389da009.js",revision:"033bd0ddb258a44b746d79d5215668d9"},{url:"assets/md.html-d6f82257.js",revision:"d35b0c59872dde01e9f75ea92866411d"},{url:"assets/mod.html-74b06351.js",revision:"79b84bd907039f630c8f1fc402027fd7"},{url:"assets/mod.html-c53a0f98.js",revision:"8f41b164cdf97c9ea65c5f1885598451"},{url:"assets/musk.html-5cb9b92f.js",revision:"4ebfccc77dc92698032d502e1eee8d18"},{url:"assets/musk.html-c7554ad4.js",revision:"9fcba0d29be3fb824f8d20842d162c2f"},{url:"assets/mw68.html-0704adf7.js",revision:"cda0e41fe7104238055e67340f8921e1"},{url:"assets/mw68.html-7bcbb37c.js",revision:"b18f8b015c0af326dd2efdb63ec24ea7"},{url:"assets/mw70.html-ac0bdeec.js",revision:"1574fc5ab3ddcf50b1394e25f3eec729"},{url:"assets/mw70.html-d65ce0b1.js",revision:"512324911642efb3ebee78c27e3f28bf"},{url:"assets/nature.html-09e2650a.js",revision:"3e6eea1100cd189f06b8ed9d9d20e96b"},{url:"assets/nature.html-31ecb177.js",revision:"54f5fb23f99c1951380a00c72106870e"},{url:"assets/news.html-944e2401.js",revision:"3a7767c221c47d749ffc903ae4778506"},{url:"assets/news.html-d31a95bd.js",revision:"1a47230e7889b700396891eb0a95c8e5"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/object.html-09f3f15f.js",revision:"13b9a05fdf0cbf4bac67dffbf685c577"},{url:"assets/object.html-8f158640.js",revision:"3cfd14a0dd69b748a95fbc53c73c20da"},{url:"assets/pan.html-c14f69d2.js",revision:"b3aba84173034cf714328802ab206afd"},{url:"assets/pan.html-cb8c6542.js",revision:"c188eaa0fc76bf9a7e58a8f3808ecbf0"},{url:"assets/PC.html-3c4bde61.js",revision:"01e10b1835cc20fb3d170a488bca78b8"},{url:"assets/PC.html-e56bf065.js",revision:"d578ac2774de60772387fed73bea1b05"},{url:"assets/people.html-459cf850.js",revision:"0f85dc08844ffe25ec9c8296373c87bf"},{url:"assets/people.html-e6dbe68b.js",revision:"824a33fe43df1b8ad2de1ff381ebc847"},{url:"assets/place.html-0b30d99f.js",revision:"601abb35bfdf82ad3a41d6606cb41845"},{url:"assets/place.html-7f792b76.js",revision:"1b418adcdecfd8cb15ce5b306cacb1e6"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/presentation.html-53cbb995.js",revision:"7f85b53f3017bff6dbca61f09614e959"},{url:"assets/presentation.html-578897cb.js",revision:"54492df458ca7167ffff01d230a67b30"},{url:"assets/qnsj.html-4b120d4d.js",revision:"c15a00f996ba27812e2268b6e17f19a9"},{url:"assets/qnsj.html-bf575790.js",revision:"fd5d6bc69944fb6ac5ee5f13a49d2dc8"},{url:"assets/QT.html-00b09722.js",revision:"a9fc6b9f5e6289dfd4a9eaeb4f19f70a"},{url:"assets/QT.html-bc75cf80.js",revision:"99464c4a291338e4753999b9bb0c601c"},{url:"assets/reveal.esm-1a4c3ae7.js",revision:"fc90b48ee14a4f200f16eadd1328ff85"},{url:"assets/SC.html-0a8d7255.js",revision:"a7c1850765b009bdb0c48a220974a0c5"},{url:"assets/SC.html-abf2e557.js",revision:"d610d94eea243d21ba1d561b6f915ea5"},{url:"assets/SD.html-5c5e45c9.js",revision:"89c096d46b65d8f7fb76ac2b2c289d1c"},{url:"assets/SD.html-9f4661f8.js",revision:"cd7294922c1ff0ef2d79a4c00257a017"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/SearchResult-958b3330.js",revision:"7a2143bdad31cf54ac54bb9f909772ab"},{url:"assets/SMS.html-5ca3f37f.js",revision:"8c91841cbfa339bf5ef853aac4774b07"},{url:"assets/SMS.html-ef962747.js",revision:"867724933b33a44f853a4c6e7ec705b8"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-69b4fc1b.css",revision:"7ac811a1a551bf294c5af30cc09d6c73"},{url:"assets/sup-sub.html-5442d18d.js",revision:"8045e0a007ef7b5957dd36d21a5eb3b8"},{url:"assets/sup-sub.html-d9e3cf26.js",revision:"fc291d682ba6e765bae5cc47b943aafb"},{url:"assets/symbol.html-5aafb3ba.js",revision:"fee5693fc6c6b422e0e011323a3a29ab"},{url:"assets/symbol.html-759d5acf.js",revision:"9dd13eaea2588e97faf496b011b5ac8d"},{url:"assets/sys.html-2e08f27d.js",revision:"7df82acc2ebe10f29c1c99f8a1080f6d"},{url:"assets/sys.html-ef4e6adc.js",revision:"c6b2edfcbd44518699b023066fab033d"},{url:"assets/tabs.html-8d279ba9.js",revision:"862f45141ac3bdc74f7f86c6b9aa17bb"},{url:"assets/tabs.html-99ae1301.js",revision:"0a5fdf91d6adbecae5789c08f8b75988"},{url:"assets/tasklist.html-100924d8.js",revision:"2a61d284971e799c7c54ba560c8c5282"},{url:"assets/tasklist.html-7b88f08c.js",revision:"8b866d8cd670255ae1829d423c1b9333"},{url:"assets/UP.html-da743154.js",revision:"360d77be847e566ae6b5a4808e8bbfad"},{url:"assets/UP.html-db476a79.js",revision:"4a97bf442c5735df6a749dc8cc17da1a"},{url:"assets/WF.html-30798d8c.js",revision:"dd17780828b1c00049629d8fbb7af084"},{url:"assets/WF.html-8f85d433.js",revision:"f0dd5cd9ffcaea6e87b11565e25df89e"},{url:"assets/YJ.html-848690de.js",revision:"8d1642e17ff7fd0a0666101bad37bd8f"},{url:"assets/YJ.html-894fed21.js",revision:"5e892944d3ad0c76154598d951dc701f"},{url:"assets/ZB.html-05c9e8dd.js",revision:"8a3b9a31592b59c1fe415f2d193bf5e5"},{url:"assets/ZB.html-4c293196.js",revision:"da5bd82b176c8ec938c2483820a29d3d"},{url:"assets/ZD.html-3a71883f.js",revision:"5b782709b9c8026ec9cc69df76534344"},{url:"assets/ZD.html-c42014f4.js",revision:"e2238e3ed17873c76245b3c4f25c0fca"},{url:"assets/ZG.html-7cfd4dd8.js",revision:"4531309e7f19f9e97d2e986c85f1e4b6"},{url:"assets/ZG.html-df9af11b.js",revision:"f39998036cc0f2892192c963ab257307"},{url:"assets/ZH.html-18922991.js",revision:"ced29e41d43e61a44ffb414debc09849"},{url:"assets/ZH.html-534fc3b5.js",revision:"72dfb407961ad42aac0e6d0e58cca923"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"assets/ZY.html-da7c48d1.js",revision:"638f1bad1d3a1d21e97a13d3c96be748"},{url:"assets/ZY.html-e7f053e6.js",revision:"33be8b0342c03d24dc4fc4f4a5fa6393"},{url:"index.html",revision:"27ed4073776190ae1958499f0cbeac0e"},{url:"404.html",revision:"7713de704dec031bfca8fe365013bd99"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
