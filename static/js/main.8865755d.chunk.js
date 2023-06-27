(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(11),i=n(4),a=n(1),s=n(0),r=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(i.a)(n,2),l=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://ohkingtaek.github.io/",j="KingTaek Portfolio",h="Wang-Taek Oh(\uc624\uc655\ud0dd)",d="Deep Learning Enginner",m="Hello, I'm undergraduate researcher in Sahmyook University. \nI'm interested in computer vision fields, including image restoration, panoptic segmentation, and application of AI to physical therapy. \nI hope my AI technology will soon have a great strength in the world.",u="https://docs.google.com/document/d/e/2PACX-1vSd_V5zVtDz-bSJBYrTlcy4MKCc5noUau8-quZAdMIyVysw5Zi18Yus9yPYBcYFRhLDWS9Rc7Ip4JcK/pub",b={linkedin:"https://www.linkedin.com/in/ohkingtaek/",github:"https://github.com/ohkingtaek"},p=[{name:"CAIR : Multi-Scale Color Attention Network for Instagram Filter Removal",description:"Image Restoration Model\uc778 \nNafNet\uc5d0 Color Attention Module\uc744 \ucd94\uac00\ud558\uace0 \uacbd\ub7c9\ud654\ud55c \uc778\uc2a4\ud0c0\uadf8\ub7a8 \ud544\ud130 \uc81c\uac70 \n\ubaa8\ub378 CAIR \uac1c\ubc1c",keywords:["Image Restoration","Filter Removal","Color Attention","Ensemble Learning","Light-Weight"],sourceCode:"https://github.com/hnvlab-syu/CAIR",livePreview:"https://arxiv.org/pdf/2208.14039.pdf"},{name:"\nAim 2022 challenge on instagram filter removal: Methods and results",description:"\uc778\uc2a4\ud0c0\uadf8\ub7a8 \ud544\ud130 \uc81c\uac70 \ucc4c\ub9b0\uc9c0 \ub808\ud3ec\ud2b8",keywords:["Filter Removal","Image Restoration","Image-to-Image Translation"],sourceCode:"https://github.com/hnvlab-syu/CAIR",livePreview:"https://arxiv.org/pdf/2210.08997.pdf"},{name:"\nNTIRE 2023 image shadow removal challenge report",description:"\n \uc774\ubbf8\uc9c0 \uadf8\ub9bc\uc790 \uc81c\uac70 \ucc4c\ub9b0\uc9c0 \ub808\ud3ec\ud2b8",keywords:["Shadow Removal","Image Restoration","Image-to-Image Translation"],sourceCode:"https://github.com/hnvlab-syu/CLAN",livePreview:"https://openaccess.thecvf.com/content/CVPR2023W/NTIRE/papers/Vasluianu_NTIRE_2023_Image_Shadow_Removal_Challenge_Report_CVPRW_2023_paper.pdf"}],O=[{name:"\n\n\uac74\uc124\ud604\uc7a5\uc758 \uc704\ud5d8\uc694\uc18c \uac10\uc9c0\ub97c \uc704\ud55c \ub525\ub7ec\ub2dd \uae30\ubc18 \uc2e4\uc2dc\uac04 \uc601\uc0c1\ubd84\uc11d \uc2dc\uc2a4\ud15c \uac1c\ubc1c",description:"\n\uc791\uc5c5\uc790\uac00 \uc548\uc804\ubcf4\ud638\uad6c\ub97c \ucc29\uc6a9\ud588\ub294\uc9c0 Yolact, \ud6c4\ucc98\ub9ac \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud574 \ud655\uc778\ud558\uace0 \ubaa8\ub2c8\ud130\ub9c1 \uc2dc\uc2a4\ud15c\uc744 \uac1c\ubc1c\ud558\ub294 \uac83",stack:["Yolact","Real-Time","Construction Safety"]},{name:"\n\uc2a4\ub9c8\ud2b8 \ud648 \uce74\uba54\ub77c\ub97c \uc774\uc6a9\ud55c \n\uc778\uacf5\uc9c0\ub2a5\uae30\ubc18 \uc601\uc720\uc544 \uc774\uc0c1 \n\uc9d5\ud6c4 \ubc0f \uc815\uc0c1 \uc6b4\ub3d9\ubc1c\ub2ec \n\ubaa8\ub2c8\ud130\ub9c1 \uc5f0\uad6c",description:"\uc778\uacf5\uc9c0\ub2a5 \uae30\ubc18 \uc601\uc720\uc544 \uc774\uc0c1 \uc9d5\ud6c4 \ub370\uc774\ud130\uc14b \n\uad6c\ucd95(Azure Kinect \uce74\uba54\ub77c\uc640 \uc790\uccb4 \uc81c\uc791 \n\ubdf0\uc5b4 \uc0ac\uc6a9) \ubc0f PyQt \uc0ac\uc6a9\ud558\uc5ec GUI \uac1c\ubc1c",stack:["Azure Kinect","PyQt"],sourceCode:"https://github.com/patrashu/pykinect-recorder"},{name:"\uc0b0\ud559\uc5f0\uacc4 SW\ucea1\uc2a4\ud1a4 \ub514\uc790\uc778 \ud504\ub85c\uc81d\ud2b8 - \uc778\uacf5\uc9c0\ub2a5 \uae30\ubc18 \n\ubc29\ubb38\uc790 \uad00\ub9ac \uc2dc\uc2a4\ud15c",description:"\uc2e4\uc81c \ub9e4\uc7a5 CCTV \uc601\uc0c1\uc744 \ud65c\uc6a9\ud558\uc5ec \uac1d\uccb4\uc778\uc2dd, \uac1d\uccb4\ucd94\uc801, \ub098\uc774\uc640 \uc131\ubcc4 \uc608\uce21 \ud1b5\ud574 \uc2dc\uac04\ubcc4 \ubc29\ubb38\uc790\uc218, \uc5f0\ub839\ub300, \uc131\ubcc4 \uc2dc\uac01\ud654\ud558\uc5ec \ub9c8\ucf00\ud305 \ud65c\uc6a9",stack:["Object Detection","Object Tracking","Face Detection","EfficientNet","BoT-SORT","YOLOv8","PyTorch","PyTorch-Lightning","PyQt"],sourceCode:"https://github.com/patrashu/cnai",livePreview:""},{name:"AI \uc591\uc7ac \ud5c8\ube0c \uc778\uacf5\uc9c0\ub2a5 \uc624\ud508\uc18c\uc2a4 \uacbd\uc9c4\ub300\ud68c",description:"\uc774\ubbf8\uc9c0 \ucd08\ud574\uc0c1\ud654 \ubaa8\ub378\uc778 SwinIR\uacfc HAT-L\uc744 \ud1b5\ud574 \ud488\uc9c8\uc774 \uc800\ud558\ub41c \uc800\ud574\uc0c1\ub3c4 \ucd2c\uc601 \uc774\ubbf8\uc9c0\ub97c 4\ubc30 \ub192\uc5ec \uace0\ud488\uc9c8\ub85c \ub9cc\ub4dc\ub294 \uc791\uc5c5",stack:["Super Resolution","SwinIR","HAT-L","Self-Ensemble","PyTorch"],sourceCode:"https://github.com/ohkingtaek/Dacon_Super_Resolution",livePreview:"https://dacon.io/competitions/official/235977/codeshare/6900?page=1&dtype=recent"},{name:"\ub525\ub7ec\ub2dd \ubc0f \uc2e4\uc2b5 \ud504\ub85c\uc81d\ud2b8 \n\ub525\ub7ec\ub2dd \uae30\ubc18 \uc758\uc0c1 \uad50\uccb4 \uc2dc\uc2a4\ud15c",description:"\ucef4\ud4e8\ud130 \ube44\uc804 \ub525\ub7ec\ub2dd \uae30\uc220\uc744 \ud65c\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uac00 \uc785\uc5b4\ubcf4\uace0 \uc2f6\uc740 \uc758\uc0c1\uc744 \uac00\uc0c1\uc73c\ub85c \ud53c\ud305\ud574\uc8fc\ub294 \uc2dc\uc2a4\ud15c",stack:["Virtual Try-On","Semantic Segmentation","Pose Estimation","Human Parsing","ACGPN","TPS","SwinIR","PyTorch","PyQt"],sourceCode:"https://github.com/patrashu/clothes_matching/tree/master",livePreview:""},{name:"\ucef4\ud4e8\ud130 \ube44\uc804 \ud504\ub85c\uc81d\ud2b8 \n\ub525\ub7ec\ub2dd \uae30\ubc18 \ud3ec\ud1a0\uc0f5 \ud504\ub85c\uadf8\ub7a8",description:"\ud3ec\ud1a0\uc0f5\uc5d0 \uc788\ub294 \uae30\ub2a5\uc778 \uc774\ubbf8\uc9c0 \uae30\ubcf8 \uae30\ub2a5\ubd80\ud130 \ub525\ub7ec\ub2dd\uc744 \ud65c\uc6a9\ud55c \uae30\uc220\uae4c\uc9c0 \ud65c\uc6a9\ud558\uc5ec GUI \ub0b4\uc5d0\uc11c \ub0b4 \uc0ac\uc9c4\uc744 \ub123\uace0 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574\ubcfc \uc218 \uc788\ub294 \ud504\ub85c\uadf8\ub7a8",stack:["API","Computer Vision","EfficientNet","YOLO","PyQt"],sourceCode:"https://github.com/patrashu/clothes_matching/tree/master",livePreview:""}],x=[{name:"DNA+ \ub4dc\ub860\ucc4c\ub9b0\uc9c0 \uc9c0\uc815\uacf5\ubaa8I \uc2e4\uc2dc\uac04 AI \uc11c\ube44\uc2a4 \ucc4c\ub9b0\uc9c0 \n \ud55c\uad6d\ubb34\uc778\uc774\ub3d9\uccb4\uc5f0\uad6c\uc870\ud569 \ud3ec\ub7fc\uc0c1",description:"\ub4dc\ub860\uc758 4K \uce74\uba54\ub77c \uc774\ubbf8\uc9c0\uc640 \uc88c\ud45c \uc2e4\uc2dc\uac04 \uc218\uc2e0\ud558\uc5ec YOLOv7\uacfc DeepLabV3+\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacfc\uc81c \uc218\ud589",stack:["Embedded System","YOLOv7","DeepLabV3+"],sourceCode:"",livePreview:""},{name:"DNA+ \ub4dc\ub860\ucc4c\ub9b0\uc9c0 \uc9c0\uc815\uacf5\ubaa8II \uc2e4\uc2dc\uac04 AI \uc11c\ube44\uc2a4 \ucc4c\ub9b0\uc9c0 \n \uacfc\ud559\uae30\uc220\uc815\ubcf4\ud1b5\uc2e0\ubd80 \uc7a5\uad00\uc0c1",description:"\ub4dc\ub860 \uc2dc\uc810\uc758 \uc774\ubbf8\uc9c0 \ub370\uc774\ud130 \ubd80\uc871\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c, \uac00\uc0c1 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc54c\uace0\ub9ac\uc998 \uac1c\ubc1c \ubc0f \ub0a0\uc528 \uc870\uac74\uc5d0 \uac15\uac74\ud55c \ubaa8\ub378\uc744 \uc704\ud574 CycleGAN\uc744 \ud65c\uc6a9\ud55c \uc774\ubbf8\uc9c0 \uc99d\uac15\uc73c\ub85c \ub4dc\ub860 \ucc4c\ub9b0\uc9c0 \uacfc\uc81c \uc218\ud589\ud558\uc5ec \uacfc\uae30\ubd80 \uc7a5\uad00\uc0c1 \uc218\uc0c1",stack:["CycleGAN","DeepLabV3+","YOLOv7"],sourceCode:"https://github.com/patrashu/DNA_Drone_Challenge_2022",livePreview:""},{name:"\uc6d4\uac04 \ub370\uc774\ucf58 \uc22b\uc790 3D \uc774\ubbf8\uc9c0 \ubd84\ub958 AI \uacbd\uc9c4\ub300\ud68c \uc740\uc0c1",description:"RandomPCA + EfficientNetB7(Noisy Student) + TTA",stack:["PCA","EfficientNet","TTA","3D Image Classification"],sourceCode:"https://dacon.io/competitions/official/235951/codeshare/6637?page=1&dtype=recent",livePreview:"https://dacon.io/competitions/official/235951/overview/description"},{name:"\uc81c 3\ud68c \uc0bc\uc721\ub300\ud559\uad50 \ucea1\uc2a4\ud1a4\ub514\uc790\uc778 \uacbd\uc9c4\ub300\ud68c \uc7a5\ub824\uc0c1 ",description:"\uc544\ub450\uc774\ub178\uc640 \uc628\ub3c4 \uc13c\uc11c\ub97c \ud65c\uc6a9\ud558\uc5ec \uc5bc\uad74\uc778\uc2dd \ud558\uba74 \uc0ac\ub78c\uc758 \uccb4\uc628\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub294 \uc7a5\uce58 \uac1c\ubc1c",stack:["Embedded System","Face Detection","Arduino"],sourceCode:"",livePreview:""}],f=["Python","PyTorch","PyTorch-Lightning","C++","Qt","Slack","Git","Docker"],v="mm074111@gmail.com",g="010-3289-5209",k=n(17),N=n.n(k),_=n(15),w=n.n(_),C=n(19),y=n.n(C),P=n(18),I=n.n(P),A=(n(28),function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(a.useState)(!1),o=Object(i.a)(l,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#papers",onClick:d,className:"link link--nav",children:"Papers"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,x.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#awards",onClick:d,className:"link link--nav",children:"Awards"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,v?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(w.a,{}):Object(s.jsx)(N.a,{})}),Object(s.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(I.a,{}):Object(s.jsx)(y.a,{})})]})}),S=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(A,{})]})}),T=n(8),R=n.n(T),E=n(20),L=n.n(E),D=(n(33),function(){var e=h,t=d,n=m,c=u,i=b;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsx)("h1",{children:Object(s.jsx)("span",{className:"about__name",children:e})}),t&&Object(s.jsx)("h2",{className:"about__role",children:t}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"CV"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(R.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(L.a,{})})]})]})]})}),V=n(2),Y=n.n(V),F=n(9),M=n.n(F),W=(n(35),function(e){var t=e.paper;return Object(s.jsxs)("div",{className:"paper",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"paper__description",children:t.description}),t.keywords&&Object(s.jsx)("ul",{className:"paper__stack",children:t.keywords.map((function(e){return Object(s.jsx)("li",{className:"paper__stack-item",children:e},Y()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(R.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(M.a,{})})]})}),B=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"papers",className:"section papers",children:[Object(s.jsx)("h2",{className:"section__title",children:"Papers"}),Object(s.jsx)("div",{className:"papers__grid",children:p.map((function(e){return Object(s.jsx)(W,{paper:e},Y()())}))})]}):null}),G=(n(37),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},Y()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(R.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(M.a,{})})]})}),K=(n(38),function(){return O.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(s.jsx)(G,{project:e},Y()())}))})]}):null}),Q=(n(39),function(e){var t=e.award;return Object(s.jsxs)("div",{className:"award",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"award__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"award__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"award__stack-item",children:e},Y()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(R.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(M.a,{})})]})}),z=(n(40),function(){return x.length?Object(s.jsxs)("section",{id:"awards",className:"section awards",children:[Object(s.jsx)("h2",{className:"section__title",children:"Awards"}),Object(s.jsx)("div",{className:"awards__grid",children:x.map((function(e){return Object(s.jsx)(Q,{award:e},Y()())}))})]}):null}),H=(n(41),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},Y()())}))})]}):null}),J=n(21),U=n.n(J),Z=(n(42),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(U.a,{fontSize:"large"})})}):null}),q=(n(43),function(){return v?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"tel:".concat(g),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Call me"})}),Object(s.jsx)("a",{href:"mailto:".concat(v),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),X=(n(44),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/ohkingtaek/cleanfolio",className:"link footer__link",children:"Created By Wang-Taek Oh"})})}),$=(n(45),function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(D,{}),Object(s.jsx)(B,{}),Object(s.jsx)(K,{}),Object(s.jsx)(z,{}),Object(s.jsx)(H,{}),Object(s.jsx)(q,{})]}),Object(s.jsx)(Z,{}),Object(s.jsx)(X,{})]})});n(46);Object(c.render)(Object(s.jsx)(l,{children:Object(s.jsx)($,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.8865755d.chunk.js.map