(this.webpackJsonpmining=this.webpackJsonpmining||[]).push([[0],{256:function(e,t){},258:function(e,t){},260:function(e,t){},264:function(e,t){},291:function(e,t){},293:function(e,t){},302:function(e,t){},304:function(e,t){},314:function(e,t){},316:function(e,t){},435:function(e,t){},437:function(e,t){},444:function(e,t){},445:function(e,t){},463:function(e,t){},537:function(e,t,s){},538:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(56),a=s.n(n),r=s(26),l=s(0),o=function(){return Object(l.jsxs)("footer",{className:"pt-16 pb-10 px-5 lg:px-16 xl:px-24 2xl:px-40 md:flex justify-between items-center text-center",children:[Object(l.jsx)("h1",{className:"text-lg md:text-2xl text-[#e13c33]",children:"Welcome to crypto clones"}),Object(l.jsx)("h1",{className:"text-lg md:text-2xl text-[#e13c33] mt-2 md:mt-0",children:"Follow us"}),Object(l.jsxs)("div",{className:"flex items-center justify-center md:justify-start mt-8 md:mt-0",children:[Object(l.jsx)("a",{href:"#",children:Object(l.jsx)(r.a,{className:"text-white text-3xl md:text-[2.5rem] mr-10"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)(r.b,{className:"text-[#e13c33] text-3xl md:text-[2.5rem]"})})]})]})},i=s(43),d=s(543),x=s(42),m=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),s=t[0],n=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{id:"navbar",className:"py-5",children:[Object(l.jsx)("div",{className:"mx-5 lg:mx-12 xl:mx-16 2xl:mx-24",children:Object(l.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-[#e13c33] text-2xl md:text-[40px] font-semibold",children:"Crypto Clones"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"hidden lg:block",children:Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsx)(x.Link,{to:"navbar",smooth:!0,duration:1e3,children:Object(l.jsx)("h1",{className:"text-[#e13c33] font-light text-lg mr-10 cursor-pointer border-b-2 border-[#e13c33]",children:"Home"})}),Object(l.jsx)(x.Link,{to:"roadmap",smooth:!0,duration:1e3,children:Object(l.jsx)("h1",{className:"text-[#e13c33] font-light text-lg mr-20 cursor-pointer hover:border-b-2 border-[#e13c33]",children:"Roadmap"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)(r.a,{className:"text-white text-[2.5rem] mr-10"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)(r.b,{className:"text-[#e13c33] text-[2.5rem]"})})]})}),Object(l.jsx)("button",{onClick:function(){return n(!s)},type:"button",className:"lg:hidden items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-800","aria-controls":"mobile-menu","aria-expanded":"false",children:s?Object(l.jsx)("svg",{className:"h-8 w-8 text-[#e13c33]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-[#e13c33]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})}),Object(l.jsx)(d.a,{show:s,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:function(e){return Object(l.jsx)("div",{className:"",id:"mobile-menu",children:Object(l.jsxs)("div",{className:"pt-2 pb-3 space-y-1 text-center",children:[Object(l.jsx)(x.Link,{to:"navbar",smooth:!0,duration:1e3,onClick:function(){return n(!s)},children:Object(l.jsx)("p",{className:"text-[#e13c33] text-lg md:text-2xl mt-8",children:"Home"})}),Object(l.jsx)(x.Link,{to:"roadmap",offset:-250,smooth:!0,duration:1e3,onClick:function(){return n(!s)},children:Object(l.jsx)("p",{className:"text-[#e13c33] text-lg md:text-2xl my-8",children:"Roadmap"})}),Object(l.jsxs)("div",{className:"flex justify-center items-center pb-10 border-b-2 border-[#e13c33]",children:[Object(l.jsx)("a",{href:"#",children:Object(l.jsx)(r.a,{className:"text-white text-3xl mr-10"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)(r.b,{className:"text-[#e13c33] text-3xl"})})]})]})})}})]})})},j=s.p+"static/media/giphy.7e8c49a3.gif",h=s.p+"static/media/graph.25907c7c.jpeg",b=s(14),u=s.n(b),O=s(41),p=s(57),f=s(68),N=s.n(f),g=s(222),C=s.n(g),v=s(69),y=s(223),E=s(16),w={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(E.a)(Object(E.a)({},w),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(E.a)(Object(E.a)({},w),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(E.a)(Object(E.a)({},e),{},{account:t.payload.account});default:return e}},T={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(E.a)(Object(E.a)({},T),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},k=Object(v.b)({blockchain:S,data:A}),R=[y.a],D=Object(v.c)(v.a.apply(void 0,R)),_=Object(v.d)(k,D),F=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},L=function(){return function(){var e=Object(O.a)(u.a.mark((function e(t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,_.getState().blockchain.smartContract.methods.totalSupply().call();case 4:s=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:s}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(F("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},I=function(e){return{type:"CONNECTION_FAILED",payload:e}},M=function(e){return function(){var t=Object(O.a)(u.a.mark((function t(s){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s({type:"UPDATE_ACCOUNT",payload:{account:e}}),s(L());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(){var e,t,s=Object(p.b)(),n=Object(p.c)((function(e){return e.blockchain})),a=Object(p.c)((function(e){return e.data})),r=Object(c.useState)(!1),o=Object(i.a)(r,2),d=o[0],x=o[1],m=Object(c.useState)("Click buy to mint your NFT."),j=Object(i.a)(m,2),h=j[0],b=j[1],f=Object(c.useState)(1),g=Object(i.a)(f,2),v=g[0],y=g[1],E=Object(c.useState)({CONTRACT_ADDRESS:"",OWNER_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,COST0:0,COST1:0,COST2:0,COST3:0,COST4:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),w=Object(i.a)(E,2),S=w[0],T=w[1],A=function(){""!==n.account&&null!==n.smartContract&&s(L(n.account))},k=function(){var e=Object(O.a)(u.a.mark((function e(){var t,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,T(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){k()}),[]),Object(c.useEffect)((function(){A()}),[n.account]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{className:"text-white text-xl md:text-4xl mt-10",children:[a.totalSupply," / ",S.MAX_SUPPLY]}),Object(l.jsx)("p",{className:"text-blue-600 mt-4",children:Object(l.jsx)("a",{target:"_blank",href:S.SCAN_LINK,children:(e=S.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),""===n.account||null===n.smartContract?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"text-white mt-5 font-semibold",children:["Connect to the ",S.NETWORK.NAME," network"]}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),s(function(){var e=Object(O.a)(u.a.mark((function e(t){var s,c,n,a,r,l,o,i,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return s=e.sent,e.next=6,s.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return n=e.sent,e.next=12,n.json();case 12:if(a=e.sent,r=window,!(l=r.ethereum)||!l.isMetaMask){e.next=33;break}return N.a.setProvider(l),o=new C.a(l),e.prev=18,e.next=21,l.request({method:"eth_requestAccounts"});case 21:return i=e.sent,e.next=24,l.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:i[0],smartContract:d,web3:o}}),l.on("accountsChanged",(function(e){t(M(e[0]))})),l.on("chainChanged",(function(){window.location.reload()}))):t(I("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(I("Something went wrong."));case 31:e.next=34;break;case 33:t(I("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),A()},className:"bg-[#e13c33] text-white font-semibold px-5 py-3 text-lg md:text-xl rounded-lg mt-5 transition duration-700 ease-in-out transform hover:scale-110",children:"Connect"}),""!==n.errorMsg?Object(l.jsx)("p",{className:"text-red-600 text-sm my-5",children:n.errorMsg}):null]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"text-white mt-5 font-semibold text-lg",children:h}),Object(l.jsxs)("div",{className:"flex justify-center items-center mt-5",children:[Object(l.jsx)("button",{className:"bg-[#e13c33] text-white text-lg rounded-md font-medium p-2 mr-5",disabled:d?1:0,onClick:function(e){e.preventDefault(),function(){var e=v-1;e<10&&(e=10),y(e)}()},children:"-"}),Object(l.jsx)("p",{className:"text-white mr-5",children:v}),Object(l.jsx)("button",{className:"bg-[#e13c33] text-white text-lg rounded-md font-medium p-2",disabled:d?1:0,onClick:function(e){e.preventDefault(),function(){var e=v+1;e>10&&(e=10),y(e)}()},children:"+"})]}),Object(l.jsx)("button",{className:"bg-[#e13c33] text-white font-semibold px-5 py-3 text-lg md:text-xl rounded-lg mt-10 transition duration-700 ease-in-out transform hover:-translate-y-1",disabled:d?1:0,onClick:function(e){e.preventDefault(),function(){var e=n.account;e=e.toUpperCase();var t=S.OWNER_ADDRESS;e==(t=t.toUpperCase())?S.WEI_COST=0:a.totalSupply>1&&a.totalSupply<50?S.WEI_COST=S.COST0:a.totalSupply>50&&a.totalSupply<200?S.WEI_COST=S.COST1:a.totalSupply>200&&a.totalSupply<1e4&&(S.WEI_COST=S.COST2);var c=S.WEI_COST,r=(S.COST0,S.COST1,S.COST2,S.COST3,S.COST4,S.GAS_LIMIT),l=String(c*v),o=String(r*v);console.log("Cost: ",l),console.log("Gas limit: ",o),b("Minting your ".concat(S.NFT_NAME,"...")),x(!0),n.smartContract.methods.mint(v).send({gasLimit:String(o),to:S.CONTRACT_ADDRESS,from:n.account,value:l}).once("error",(function(e){console.log(e),b("Sorry, something went wrong please try again later."),x(!1)})).then((function(e){console.log(e),b("WOW, the ".concat(S.NFT_NAME," is yours! go visit Opensea.io to view it.")),x(!1),s(L(n.account))}))}(),A()},children:d?"BUSY":"BUY"})]})]})},W=function(){return Object(l.jsxs)("section",{className:"px-5 lg:px-16 xl:px-24 2xl:px-40 py-10",children:[Object(l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[Object(l.jsx)("div",{className:"self-center",children:Object(l.jsx)("img",{src:j,className:"object-fill mx-auto lg:mx-0"})}),Object(l.jsxs)("div",{className:"text-center order-first lg:order-last",children:[Object(l.jsx)("h1",{className:"text-3xl md:text-5xl text-[#e13c33] font-semibold",children:"CRYPTO CLONES"}),Object(l.jsx)("p",{className:"text-sm font-light text-white mt-10",children:"A generative NFT art collectible project of 10.000 unique avatars immortalized on the Ethereum blockchain."}),Object(l.jsx)(U,{}),Object(l.jsx)("p",{className:"text-sm font-light text-white mt-10 underline",children:"FREE MINT for the first 50 NFTs (FCFS)"}),Object(l.jsxs)("p",{className:"text-sm font-light text-white mt-3",children:[Object(l.jsx)("span",{className:"font-semibold",children:"- 0.02 ETH"})," ","\u2014>"," from 51 to 200"]}),Object(l.jsxs)("p",{className:"text-sm font-light text-white mt-2",children:[Object(l.jsx)("span",{className:"font-semibold",children:"- 0.035 ETH"})," ","\u2014>"," from 201 to 10.000"]}),Object(l.jsxs)("p",{className:"text-sm font-light text-white mt-5",children:[Object(l.jsx)("span",{className:"font-semibold",children:"GAS FEE REFUND*"})," if you buy 10 NFTs"]})]})]}),Object(l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 md:mt-28",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-3xl md:text-5xl text-[#e13c33] font-semibold",children:"What are CRYPTO CLONES?"}),Object(l.jsx)("p",{className:"text-white text-sm md:text-base font-light mt-12",children:"Crypto Clones is the first and only DAO that uses 100% of secondary sales and a large portion of primary sales to purchase and fractionalize CloneX and the rarest bluechip NFTs to be distributed to its members."}),Object(l.jsx)("p",{className:"text-white text-sm md:text-base font-light mt-5",children:"After sell-out, the $CLONE token represents fractional shares of CloneX NFTs held in the vault. Each Crypto Clone earns 10 $CLONE per day from staking."}),Object(l.jsx)("p",{className:"text-white text-sm md:text-base font-light mt-5",children:"Each holder will have privileged access to airdrops, and DAO members with more than 10 Crypto Clones will automatically be named to the DAO board of directors responsible for treasury management and more future utility."})]}),Object(l.jsx)("div",{children:Object(l.jsx)("iframe",{className:"h-full w-full",src:"https://www.youtube.com/embed/jHwPTsZQRek",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})]}),Object(l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 md:mt-28",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-3xl md:text-5xl text-[#e13c33] font-semibold",children:"CLONE MINT PRICE"}),Object(l.jsx)("p",{className:"text-white font-semibold mt-8 md:mt-12",children:"THE EARLY BIRD GETS THE WORM!"}),Object(l.jsxs)("p",{className:"font-light text-white mt-1",children:[Object(l.jsx)("span",{className:"font-semibold",children:"FREE MINT"})," for the first 50 NFTs (FCFS)"]}),Object(l.jsxs)("p",{className:"font-light text-white mt-1",children:[Object(l.jsx)("span",{className:"font-semibold",children:"- 0.02 ETH"})," ","\u2014>"," from 51 to 200"]}),Object(l.jsxs)("p",{className:"font-light text-white mt-1",children:[Object(l.jsx)("span",{className:"font-semibold",children:"- 0.035 ETH"})," ","\u2014>"," from 201 to 10.000"]}),Object(l.jsx)("p",{className:"font-light text-white mt-5",children:"Get your clone early before price increase!"}),Object(l.jsxs)("p",{className:"font-light text-white text-sm md:text-base mt-5",children:[Object(l.jsx)("span",{className:"font-semibold",children:"*GAS FEE REFUND"})," (up to $350) if you purchase 10 NFTs. Offer is not valid for NFT minted for free. Please complete the form to request gas fee refund."]}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLScOoFZLV4vCQxKEGhzcwUZj-s0RnFtiVTEE9Nid11hQvoopNQ/viewform",target:"_blank",children:Object(l.jsxs)("button",{className:"text-white text-sm md:text-base mt-10 bg-[#e13c33] py-3 px-5 rounded-3xl transition duration-700 ease-in-out transform hover:scale-105",children:["GAS FEE REFUND FORM ",">"]})})})]}),Object(l.jsx)("div",{className:"self-center",children:Object(l.jsx)("img",{src:h,alt:"graph",className:"object-fill"})})]})]})},P=s.p+"static/media/baby.1dd45f9b.gif",H=function(){return Object(l.jsxs)("section",{id:"roadmap",className:"px-5 lg:px-16 xl:px-24 2xl:px-40 py-10 mt-10",children:[Object(l.jsx)("h1",{className:"text-5xl md:text-[80px] text-[#e13c33] text-center font-semibold",children:"ROADMAP"}),Object(l.jsxs)("div",{className:"mx-5 md:mx-24 lg:mx-32",children:[Object(l.jsxs)("div",{className:"grid grid-cols-2 gap-5 md:gap-10 mt-10",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-2xl md:text-5xl text-[#e13c33]",children:"10 %"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-white font-semibold md:text-lg",children:"AIRDROP CRYPTO CLONES"}),Object(l.jsxs)("p",{className:"text-white text-xs md:text-base mt-1",children:["We ",Object(l.jsx)("span",{className:"font-semibold",children:"airdrop 15 Crypto Clone"})," ","randomly for owners of the first 1000 tokens."]})]})]}),Object(l.jsxs)("div",{className:"grid grid-cols-2 gap-5 md:gap-10 mt-10",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-2xl md:text-5xl text-[#e13c33]",children:"50 %"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-white font-semibold md:text-lg",children:"TREASURY SET UP"}),Object(l.jsxs)("p",{className:"text-white text-xs md:text-base mt-1",children:[Object(l.jsx)("span",{className:"font-semibold",children:"50 ETH"})," from primary sales will be placed in the treasury and 100% of secondary sales will flow into treasury. We purchase our first"," ",Object(l.jsx)("span",{className:"font-semibold",children:"Bored Ape Yacht Club and CloneX"})," ","NFTs and place them in the DAO vault."]})]})]}),Object(l.jsxs)("div",{className:"grid grid-cols-2 gap-5 md:gap-10 mt-10",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-2xl md:text-5xl text-[#e13c33]",children:"100 %"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-white font-semibold md:text-lg",children:"CRYPTOCLONE DAO AND $CLONE"}),Object(l.jsxs)("p",{className:"text-white text-xs md:text-base mt-1",children:["We\u2019ll set up the Crypto Clones"," ",Object(l.jsx)("span",{className:"font-semibold",children:"DAO"})," to fully leverage the power of our community. Start of staking,"," ",Object(l.jsx)("span",{className:"font-semibold",children:"$CLONE token"})," release and board of director setup."]})]})]}),Object(l.jsxs)("div",{className:"grid grid-cols-2 gap-5 md:gap-10 mt-10",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-2xl md:text-5xl text-[#e13c33]",children:"CRYPTO CLONES 2.0"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-white font-semibold md:text-lg",children:"BREEDING AND FUTURE UTILITY"}),Object(l.jsx)("p",{className:"text-white text-xs md:text-base mt-1",children:"Crypto Clone holders gain access to breeding using $CLONE tokens. More utility and ability to using the $CLONE token to unfold in the future."})]})]}),Object(l.jsx)("div",{className:"text-center mt-12",children:Object(l.jsx)(x.Link,{to:"navbar",smooth:!0,duration:1e3,children:Object(l.jsx)("button",{className:"bg-[#e13c33] text-white font-semibold px-5 py-3 md:text-xl rounded-lg transition duration-700 ease-in-out transform hover:scale-105",children:"Mint"})})}),Object(l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 md:mt-32",children:[Object(l.jsxs)("div",{className:"self-center",children:[Object(l.jsx)("h1",{className:"text-3xl md:text-5xl text-[#e13c33] font-semibold",children:"BREADING"}),Object(l.jsx)("p",{className:"text-white text-sm md:text-base mt-3 md:mt-12",children:"Second generation of clones is closer than you think\u2026 To breed you need at least 2 clones."})]}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:P,alt:"baby alien",className:"object-fill"})})]})]})]})};s(537);var K=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(W,{}),Object(l.jsx)(H,{}),Object(l.jsx)(o,{})]})};a.a.render(Object(l.jsx)(p.a,{store:_,children:Object(l.jsx)(K,{})}),document.getElementById("root"))}},[[538,1,2]]]);
//# sourceMappingURL=main.cba67ed6.chunk.js.map