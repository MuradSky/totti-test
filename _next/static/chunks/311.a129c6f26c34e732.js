(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{76311:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return b}});var t=n(85893),s=n(50674),c=n(64278),r=n(41664),i=n.n(r),l=n(11163),o=n(67294),d=n(84675),_=n.n(d),m=n(9473),h=n(82462),u=n.n(h);let x=e=>{let{navArray:a,isBunnerMove:n,onMouseEnter:r,onMouseLeave:d,closeMobileNavbar:h,category:x}=e,b=(0,l.useRouter)(),v=function(){let[e,a]=o.useState(!1);return o.useEffect(()=>{a(document.documentElement.scrollWidth>1680)},[]),e}(),N=(0,m.v9)(e=>e.isMobile.isMobile),g=(0,m.v9)(e=>e.userData.token);(0,m.v9)(e=>e.isMobile.activeNav);let j=c.Z.catalog+x,k=()=>{h&&h(),d()},p=N?"":"calc((".concat(v?"1360px":"100vw"," - ").concat(document.documentElement.scrollWidth<1188?"0px":"500px",") / (").concat(Object.keys(a.section).length," + 1 + ").concat(a.categories.length?1:0,"))"),B=N?"":"calc((".concat(v?"1360px":"100vw"," - ").concat(document.documentElement.scrollWidth<1188?"0px":"500px",") / (").concat(Object.keys(a.section).length," + 1 + ").concat(a.categories.length?1:0,") * 2)");return(0,t.jsx)("div",{onMouseEnter:r,onMouseLeave:d,className:_().navbarContainer,children:(0,t.jsxs)("div",{className:_().navbarContainerBlock,children:[a.categories&&Array.isArray(a.categories)&&(0,t.jsxs)("div",{className:_().categories,children:[j.includes("deti")&&(0,t.jsx)(i(),{className:N?u().className:"",href:c.Z.aboutKids,onClick:k,children:'О бренде "TOTTI Kids"'}),N&&(0,t.jsx)(i(),{className:N?u().className:"",href:j,onClick:k,children:"Смотреть все"}),a.categories.map(e=>(0,t.jsx)(i(),{className:N?u().className:"",href:c.Z.catalog+e.code,style:{width:a.categories.length>7&&!N?B:p,color:"Sale"===e.name?"#FF3A3A":""},onClick:k,children:e.name},e.name))]}),(0,t.jsx)("div",{className:_().section,children:a.section&&Object.keys(a.section).map(e=>(0,t.jsxs)("div",{className:_().sectionContainer,style:{width:a.section[e].length>8&&!N?B:p},children:[(0,t.jsx)(i(),{href:c.Z.catalog+e.split(":")[1],className:"".concat(_().sectionTitle," ").concat(N?u().className:""),onClick:k,children:e.split(":")[0]}),(0,t.jsx)("div",{className:_().sectionCol,children:a.section[e].map(e=>(0,t.jsx)(i(),{className:_().sectionItem,href:c.Z.catalog+e.href,onClick:k,children:e.name},e.name))})]},e))}),a.banner&&a.banner.bannerImg&&(0,t.jsx)(s.Z,{className:n&&!N?_().isBunnerMove:"",img:a.banner.bannerImg,text:a.banner.text,link:a.banner.link||""}),N&&(0,t.jsx)("div",{className:_().lkAndTranslate,children:(0,t.jsx)(i(),{href:b.pathname+(g?c.Z.lk:c.Z.signIn)+(0!==Object.keys(b.query).length?Object.entries(b.query).map(e=>"&".concat(e[0],"=").concat(e[1])).join(""):""),shallow:!0,children:(0,t.jsx)("button",{className:u().className,children:"Личный кабинет"})})})]})})};var b=o.memo(x)},50674:function(e,a,n){"use strict";n.d(a,{Z:function(){return B}});var t=n(85893),s=n(56030),c=n(25675),r=n.n(c),i=n(67294),l=n(79136),o=n.n(l),d=n(82462),_=n.n(d),m={src:"/_next/static/media/arrowBanner.d66590b6.svg",height:96,width:96,blurWidth:0,blurHeight:0},h=n(35630),u=n.n(h),x=n(29238),b=n.n(x),v=n(41664),N=n.n(v),g=n(9473),j=n(11163),k=n(64278);let p=e=>{let{img:a,video:n,text:c,link:l,isBlackBtn:d,isInvisibleBtn:h,wholeSale:x,aboutKids:v,annotation:p,isNotHeader:B,isAllWidth:C,className:f,onClick:H,block:y}=e,[w,I]=i.useState(!1),T=(0,g.v9)(e=>e.isMobile.isMobile),Z=(0,j.useRouter)(),A=e=>{v||Z.replace(e)},M=e=>{Z.push(e)};return(0,t.jsxs)("div",{className:"".concat(u().HeaderBanner," ").concat(B?u().notHeader:""," ").concat(v?u().aboutKids:""," ").concat(C?u().isAllWidth:""," ").concat(f||""," HeaderBanner"),onClick:H||null,children:[B?(0,t.jsx)(t.Fragment,{children:n?(0,t.jsx)("video",{preload:"auto",autoPlay:!0,muted:!0,playsInline:!0,loop:!0,poster:T?"/static/img/bannerMobileLoader.svg":"/static/img/bannerLoader.svg",children:(0,t.jsx)("source",{src:n,type:"video/mp4"})}):(0,t.jsx)(r(),{alt:c,src:a,sizes:"100vw",fill:!0,priority:!0,quality:100,onClick:()=>A(l||null)})}):(0,t.jsx)(r(),{alt:c,width:413,height:220,src:a,priority:!0,quality:100,style:{maxWidth:"100%",height:"auto"},onClick:()=>A(l||null)}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:u().bread_kids,onClick:()=>M(k.Z.home),children:(0,t.jsx)("p",{className:o().className,children:"О\xa0бренде / Главная"})}),(0,t.jsxs)("div",{className:u().about_kids,children:[(0,t.jsxs)("p",{className:"".concat(_().className," ").concat(u().title_text),children:["TOTTI KIDS — БРЕНД УДОБНОЙ ",(0,t.jsx)("br",{})," И\xa0СТИЛЬНОЙ ОДЕЖДЫ"]}),(0,t.jsxs)("p",{className:"".concat(o().className," ").concat(u().bottom_text),children:["из высокотехнологичных тканей ",(0,t.jsx)("br",{}),"для\xa0детей от\xa03\xa0до\xa09\xa0лет"," "]}),(0,t.jsx)(s.Z,{className:u().about_btn,isInvisible:!0,text:c,onClick:()=>Z.push("/catalog/deti")})]})]}),B&&!v?(0,t.jsx)(N(),{href:l||"",children:(0,t.jsxs)("button",{className:"".concat(x?u().wholeSale:u().headerButton," ").concat(d?u().isBlackBtn:null),children:[(0,t.jsx)("p",{className:_().className,style:T&&w?{color:d?"#F3F3EA":"#1B2530"}:{},dangerouslySetInnerHTML:{__html:b().sanitize(c)}}),x?(0,t.jsx)(r(),{src:m,alt:"->"}):(0,t.jsx)("p",{className:o().className,style:T?{top:"-8px",left:"-220px"}:{},dangerouslySetInnerHTML:{__html:b().sanitize(p)}})]})}):v?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(N(),{href:l,children:(0,t.jsx)(s.Z,{isWhite:!0,isInvisible:!0,text:c})})]})};var B=i.memo(p)},84675:function(e){e.exports={navbarContainer:"NavbarContainer_navbarContainer__3AhcQ",navbarContainerBlock:"NavbarContainer_navbarContainerBlock__Uck8j",categories:"NavbarContainer_categories__Yo7pg",section:"NavbarContainer_section__zzLVJ",sectionContainer:"NavbarContainer_sectionContainer__dbAV2",sectionTitle:"NavbarContainer_sectionTitle__gCdJ8",sectionCol:"NavbarContainer_sectionCol__UO0I3",sectionItem:"NavbarContainer_sectionItem__O7gwu",lkAndTranslate:"NavbarContainer_lkAndTranslate__fyk8k",isBunnerMove:"NavbarContainer_isBunnerMove__siiIF"}},35630:function(e){e.exports={HeaderBanner:"HeaderBanner_HeaderBanner__nLbJH",notHeader:"HeaderBanner_notHeader__ZFFWU",aboutKids:"HeaderBanner_aboutKids__mkQCH",customBlock:"HeaderBanner_customBlock__lksBO",about_btn:"HeaderBanner_about_btn__AKrwB",wholeSale:"HeaderBanner_wholeSale__ZNghT",isBlackBtn:"HeaderBanner_isBlackBtn__q6_6J",headerButton:"HeaderBanner_headerButton__ROfV_",bread_kids:"HeaderBanner_bread_kids__RNtNQ",about_kids:"HeaderBanner_about_kids__Ydykg",title_text:"HeaderBanner_title_text__Ozg98",bottom_text:"HeaderBanner_bottom_text__dxpBD",isAllWidth:"HeaderBanner_isAllWidth__ZMxvL"}}}]);