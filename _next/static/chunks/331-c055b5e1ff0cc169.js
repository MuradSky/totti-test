(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{77621:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var i=s(34262),o=s(35248);let l=e=>({message:e.message,errors:e.errors});class n{async addProduct(e){let t=localStorage.getItem("_user_uuid"),s=t&&JSON.parse(t),i=await this._apiStore.request({method:o.I.POST,endpoint:"/api/v1/basket/add?BITRIX_SM_SALE_UID=".concat(s.BITRIX_SM_SALE_UID,"&SALE_USER_ID=").concat(s.SALE_USER_ID),headers:{accept:"application/json","Content-Type":"application/json"},data:e});try{return i.data=l(i.data),{success:i.success,data:i.data,status:i.status}}catch(e){return{success:i.success,data:i.data,status:i.status}}}constructor(){this._apiStore=i.Z.apiStore}}},47438:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var i=s(85893),o=s(41664),l=s.n(o),n=s(11163),a=s(67294);let r=e=>{let{children:t,href:s,className:o,isBlank:r}=e,[c,d]=a.useState(0),[u,_]=a.useState(0),h=(0,n.useRouter)(),m=e=>{_(e.currentTarget.parentElement.parentElement.scrollLeft)},g=e=>{e.preventDefault(),d(u),c-u<20&&c-u>-20&&(r?window.open(s,"_blank").focus():h.push(s)),_(0)},p=e=>{e.preventDefault()};return(0,i.jsx)(l(),{className:o,href:s,style:{textDecoration:"none",cursor:"pointer"},onMouseMove:m,onMouseUp:g,onClick:p,children:t})};var c=a.memo(r)},46594:function(e,t,s){"use strict";s.d(t,{Z:function(){return el}});var i=s(85893),o=s(67294),l=s(44822),n=s.n(l),a=s(55995),r=s(11374),c=s(1808),d=s(91374),u=s(63282),_=s(77621),h=s(44965),m=s(39886),g=s(9095),p=s.n(g),v=s(14288);let x=e=>{let{price:t,oldPrice:s}=e;return(0,i.jsxs)("div",{className:p().priceBlock,children:[(0,i.jsx)("p",{children:(0,v.f)(t)}),s&&(0,i.jsx)("p",{className:p().oldPrice,children:(0,v.f)(s)})]})};var f=s(99448),S=s.n(f);let b=e=>{let{colors:t,isMobile:s,handleSetActiveColor:l,activeColor:n}=e,[a,r]=o.useState(!0),[c,d]=o.useState(!1),u=e=>{let t=e.target;0===t.scrollLeft?r(!0):r(!1),t.scrollWidth-t.scrollLeft===t.clientWidth?d(!0):d(!1)};return(0,i.jsx)("div",{className:s?S().isHoverMobile:S().isHover,children:(0,i.jsx)("div",{onScroll:u,className:"".concat(!c&&!a&&t.length>5&&S().isGradient," \n                ").concat(a&&t.length>5&&S().gradientRight," \n                ").concat(c&&t.length>5&&S().gradientLeft),children:t.map(e=>(0,i.jsx)("button",{id:e,onClick:l,className:s?S().colorMobile:"",style:{backgroundColor:e,border:n===e?"1px solid #1B2530":"none",cursor:"pointer"}},e))})})};var j=s(25675),T=s.n(j),k={src:"/_next/static/media/Basket.e6723d18.svg",height:24,width:24,blurWidth:0,blurHeight:0},N=s(17348),C={src:"/_next/static/media/Favourite.e3a16064.svg",height:24,width:24,blurWidth:0,blurHeight:0},I=s(34651),P=s(11163),y=s(64278),z=s(81617),w=s.n(z),B=s(92360),M=s.n(B),Z={src:"/_next/static/media/shapeTriangle.9ff92959.svg",height:8,width:16,blurWidth:0,blurHeight:0};let H=e=>{let{withTriangle:t,text:s,children:o,isOpen:l}=e;return(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsxs)("div",{className:M().container,children:[(0,i.jsx)("div",{className:M().tooltip,children:s}),t&&(0,i.jsx)(T(),{alt:" ",src:Z,className:M().triangle})]}),o]})},L=e=>{let{isMobile:t,favoutieHandler:s,token:o,id:l,isFavourite:n,isInBasket:a,isSizeChoosing:r,isTooltip:c,handleSizesOpen:d}=e,u=(0,P.useRouter)();return(0,i.jsxs)("div",{className:w().icons,children:[(0,i.jsx)(T(),{alt:"fav",onClick:()=>o?s(l):u.push(u.asPath+y.Z.signIn),src:n?I.Z:C,width:t?20:24,height:t?20:24,style:{maxWidth:"100%",height:"auto"}}),(0,i.jsx)(H,{withTriangle:!0,text:"Товар добавлен",isOpen:c,children:(0,i.jsx)(T(),{alt:"checkout",onClick:d,src:a||r?N.Z:k,width:t?20:24,height:t?20:24,className:w().imageCheckout,style:{maxWidth:"100%",height:"auto"}})})]})};var E=s(47438),X=s(83295),D=s.n(X);let R=e=>{let{id:t,title:s,isNovelties:o}=e;return(0,i.jsx)(E.Z,{href:y.Z.productCard+t,isBlank:!0,children:(0,i.jsx)("p",{className:"".concat(o?D().isNovelties:""),children:s})})};var A=s(40014),F=s.n(A),W=s(18375),G=s.n(W);let U=!1,O=e=>{let{images:t}=e,[s,l]=o.useState(0),[n,a]=o.useState(s),[r,c]=o.useState(0),[d,u]=o.useState(!1),[_,h]=o.useState(t),m=o.useRef(null),g=o.useRef(null),p=e=>{u(!0),c(e.touches[0].pageX)},v=e=>{if(1===t.length||!0===U)return;u(!1);let s=e.currentTarget;(!(r-e.changedTouches[0].pageX<10)||!(r-e.changedTouches[0].pageX>-10))&&(a(r>e.changedTouches[0].pageX?n+1:n-1),m&&m.current&&(r>e.changedTouches[0].pageX?(U=!0,setTimeout(()=>{let e=_.slice(1).concat(_[0]);s.style.transition="0.3s",m.current&&(s.style.transform="translateX(-".concat(m.current.clientWidth,"px)")),setTimeout(()=>{h([e[0],e[0],...e.slice(2)])},100),setTimeout(()=>{s.style.transition="0s",s.style.transform="translateX(0px)",h([...e]),U=!1},300)},100)):setTimeout(()=>{U=!0;let e=[_[_.length-1]].concat(_.slice(0,_.length-1));h([e[1],e[1],...e.slice(2)]),setTimeout(()=>{s.style.transition="0s",m.current&&(s.style.transform="translateX(-".concat(m.current.clientWidth,"px)"))},50),setTimeout(()=>{s.style.transition="0.3s",s.style.transform="translateX(0px)",h([...e]),U=!1},100)},100)))},x=e=>{!0===U||!d||_.length-1===s&&r>e.targetTouches[0].pageX||0===s&&r<e.targetTouches[0].pageX||l(r>e.targetTouches[0].pageX?n+1:n-1)};return(0,i.jsx)("div",{ref:m,className:G().mobileImages,children:(0,i.jsx)("div",{className:G().imagesScrollcontainer,children:(0,i.jsx)("div",{ref:g,onTouchStart:p,onTouchEnd:v,onTouchMove:x,style:{width:"calc(".concat(_.length," * 100%)")},className:G().imagesScrollBlock,children:_.map((e,t)=>(0,i.jsx)(T(),{alt:"img",src:e,onLoadingComplete:e=>e.style.backgroundImage="none",quality:80,width:375,height:542,style:{width:"calc(100% / ".concat(_.length,")")}},e+t))})})})};var q=o.memo(O);let J=e=>{let{isMobile:t,images:s,id:o,title:l,secondImg:n,isHover:a}=e;return(0,i.jsx)(E.Z,{className:F().imageLink,href:y.Z.productCard+o,isBlank:!0,children:t?(0,i.jsx)(q,{images:s}):(0,i.jsx)(T(),{alt:l,src:n&&a?n:s[0],onLoadingComplete:e=>e.style.backgroundImage="none",sizes:"100vw",fill:!0,quality:80,style:{width:"100%"}})})};var V=s(59505),Y=s.n(V);let K=e=>{let{persentSale:t}=e;return t&&(0,i.jsxs)("span",{className:Y().sale,children:["-",t,"%"]})};var Q=s(17686),$=s.n(Q),ee={src:"/_next/static/media/closeSize.1c5476f2.svg",height:24,width:24,blurWidth:0,blurHeight:0};let et=e=>{let{sizes:t,isMobile:s,checkouts:l,handleAddToBasket:n,closeSizeChoosing:a}=e;return(0,i.jsxs)("div",{className:$().sizes_container,children:[(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)("p",{className:$().choose_size,children:"Выберите размер"}),(0,i.jsx)("div",{className:$().sizes,children:t.length&&t.map(e=>(0,i.jsx)("div",{onClick:()=>n(Number(e.id)),style:{border:(null==l?void 0:l.includes(e.id))&&"1px solid #000",paddingLeft:"One size"===e.name||e.name.includes("-")?"8px":"",paddingRight:"One size"===e.name||e.name.includes("-")?"8px":""},children:e.name},e.id))})]}),s&&(0,i.jsx)(T(),{className:$().close,alt:"X",src:ee,width:24,height:24,onClick:a})]})},es=new c.Z,ei=new _.Z,eo=e=>{let{data:t,withThree:s,isNovelties:l,productInCheckout:c}=e,_=(0,a.Z)(),g=(0,m.C)(e=>e.product.product);(0,m.C)(e=>e.breadcrumbsProduct.links);let p=(0,m.C)(e=>e.favorites.favoritesIds),v=(0,m.C)(e=>e.checkoutProduct.checkoutProduct),f=(0,m.C)(e=>e.userData.token),S=(0,m.C)(e=>e.isMobile.isMobile),[j,T]=o.useState(!1),[k,N]=o.useState(!1),[C,I]=o.useState({hex:null==t?void 0:t.activeColor,id:null==t?void 0:t.id}),[P,y]=o.useState(!1),z=e=>{S||T(e)},w=e=>{let s=e.currentTarget.id;_((0,r.Ri)({id:null==t?void 0:t.id})).then(e=>{var t,i;let o=null===(t=null===(i=e.payload.data.colors)||void 0===i?void 0:i.find(e=>e.hex===s))||void 0===t?void 0:t.id;I({hex:s,id:o})})},B=()=>{_((0,r.Ri)({id:C.id})).then(()=>{N(!0)})},M=o.useCallback(()=>{y(e=>!e),setTimeout(()=>{y(e=>!e)},4e3)},[]),Z=async e=>{let t=await ei.addProduct({id:e});"success"===t.data.message&&(M(),N(!1),_((0,h.hz)({token:f})),(0,u.ZP)("reachGoal","to-cart"))},H=async e=>{let s=p.find(e=>e===(null==t?void 0:t.id)),i=s?await es.deleteFavorites({id:e}):await es.addToFavorites({id:e});"ok"!==i.data.message||(_((0,d.G4)({token:f})),s||(0,u.ZP)("reachGoal","add-to-favorites"))};return o.useEffect(()=>{N(!1)},[null==g?void 0:g.id]),(0,i.jsxs)("div",{onMouseEnter:()=>z(!0),onMouseLeave:()=>z(!1),className:"".concat(n().Product," ").concat(s?n().withThree:""),children:[(0,i.jsxs)("span",{children:[(0,i.jsx)(J,{isMobile:S,isHover:j,id:null==t?void 0:t.id,images:null==t?void 0:t.images,secondImg:null==t?void 0:t.secondImg,title:null==t?void 0:t.title}),k&&(0,i.jsx)(et,{closeSizeChoosing:()=>N(!1),handleAddToBasket:Z,sizes:null==g?void 0:g.size,checkouts:v,isMobile:S}),(0,i.jsx)(K,{persentSale:null==t?void 0:t.persentSale})]}),(0,i.jsxs)("div",{className:n().actions,children:[(0,i.jsxs)("div",{className:n().upper_actions,children:[(0,i.jsx)(R,{isNovelties:l,title:null==t?void 0:t.title,id:null==t?void 0:t.id}),(0,i.jsx)(x,{price:null==t?void 0:t.price,oldPrice:null==t?void 0:t.oldPrice})]}),(0,i.jsxs)("div",{className:n().bottom_actions,children:[(0,i.jsx)(b,{isMobile:S,activeColor:C.hex,colors:null==t?void 0:t.colors,handleSetActiveColor:w}),(0,i.jsx)(L,{id:null==t?void 0:t.id,isTooltip:P,handleSizesOpen:B,token:f,favoutieHandler:H,isFavourite:null==p?void 0:p.includes(null==t?void 0:t.id),isSizeChoosing:k,isInBasket:(null==v?void 0:v.includes(null==t?void 0:t.id))||c,isMobile:S})]})]})]})};var el=o.memo(eo)},72550:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var i=s(85893),o=s(67294),l=s(96202),n=s.n(l);let a=e=>{let{marginBottom:t,marginTop:s,className:o,colRef:l,children:a}=e;return(0,i.jsx)("div",{ref:l,style:{marginBottom:"number"==typeof t?"".concat(t,"px"):null,marginTop:s?"".concat(s,"px"):null},className:"".concat(n().col," ").concat(o||""),children:a})};var r=o.memo(a)},5997:function(e,t,s){"use strict";s.d(t,{Z:function(){return _}});var i=s(85893),o=s(82462),l=s.n(o),n=s(67294),a=s(29238),r=s.n(a),c=s(18416),d=s.n(c);let u=e=>{let{id:t,size:s,text:o,withDot:n,withSuisse:a,className:c,count:u,marginBottom:_,children:h}=e;return(0,i.jsxs)("h1",{style:s?{fontSize:"".concat(s,"px"),marginBottom:Number.isInteger(_)?"".concat(_,"px"):null}:{marginBottom:Number.isInteger(_)?"".concat(_,"px"):null},id:t,className:"".concat(d().title," ").concat(c||""," ").concat(a?l().className:""),children:[n?"\xb7 ":"",h||o,(0,i.jsx)("sup",{className:"".concat(d().sub," ").concat(s<=40?d().miniSub:s>70?d().bigSub:""),dangerouslySetInnerHTML:null!=u?{__html:r().sanitize("&nbsp;(".concat(1===u.toString().length?"0"+u.toString():u,")"))}:{__html:""}})]})};var _=n.memo(u)},65721:function(e,t,s){"use strict";s.d(t,{i:function(){return c}});var i=s(67294),o=s(9473),l=s(91374),n=s(44965),a=s(76548),r=s(55995);let c=()=>{let e=(0,r.Z)(),t=(0,o.v9)(e=>e.userData.token);i.useEffect(()=>{let s=localStorage.getItem("token");s&&!t?e((0,a.is)({token:s})).then(i=>{let{data:o}=i.payload;o.message?localStorage.removeItem("token"):(t||e((0,a.pM)(s)),e((0,n.hz)({token:s})),e((0,l.G4)({token:s})))}):(e((0,n.hz)({token:null})),e((0,l.G4)({token:s})))},[])}},44822:function(e){e.exports={Product:"ProductTile_Product__dFGzV",withThree:"ProductTile_withThree__0bB3S",actions:"ProductTile_actions__UojP7",upper_actions:"ProductTile_upper_actions__hcl_f",bottom_actions:"ProductTile_bottom_actions__mRDYp",isNovelties:"ProductTile_isNovelties__EwJ9a",isHover:"ProductTile_isHover__b4vrD"}},81617:function(e){e.exports={icons:"Actions_icons__Uqi1o",fadeIn:"Actions_fadeIn__0Tj35"}},99448:function(e){e.exports={isGradient:"Colors_isGradient__b1AGY",gradientLeft:"Colors_gradientLeft__2UW_w",gradientRight:"Colors_gradientRight__l_dFA",colorMobile:"Colors_colorMobile__ol82D",isHoverMobile:"Colors_isHoverMobile__lZ2fi",isHover:"Colors_isHover__vsg5C"}},40014:function(e){e.exports={imageLink:"Cover_imageLink__Vulq2"}},18375:function(e){e.exports={images:"ImagesProductBlock_images___mXI0",imagesScrollcontainer:"ImagesProductBlock_imagesScrollcontainer__vtug9",imagesScrollBlock:"ImagesProductBlock_imagesScrollBlock__SxY6j",mobileImages:"ImagesProductBlock_mobileImages__jFj_C",dotList:"ImagesProductBlock_dotList__EafNJ"}},9095:function(e){e.exports={priceBlock:"Price_priceBlock__Bd_zO",oldPrice:"Price_oldPrice__ZCxkl"}},59505:function(e){e.exports={sale:"Sale_sale__NJ7U7",Product:"Sale_Product__TVKdj",persentSale:"Sale_persentSale__s3IEb",withThree:"Sale_withThree__z1Mg1",isHover:"Sale_isHover__jV9H8",actions:"Sale_actions__nyKMy",oldPrice:"Sale_oldPrice__ojIHb",icons:"Sale_icons__f1Sl3"}},17686:function(e){e.exports={choose_size:"Sizes_choose_size__3DdrV",sizes_container:"Sizes_sizes_container__508UA",fadeIn:"Sizes_fadeIn__9CQPi",sizes:"Sizes_sizes__7VFjC",close:"Sizes_close__saSeI",mobile_container:"Sizes_mobile_container__axkwq","slide-up":"Sizes_slide-up__SPmu7"}},83295:function(e){e.exports={isNovelties:"Title_isNovelties__pvFiI"}},96202:function(e){e.exports={col:"Col_col__arJeD"}},18416:function(e){e.exports={title:"Title_title__c26zI",sub:"Title_sub__wt02d",miniSub:"Title_miniSub__JyiY8",bigSub:"Title_bigSub__s_ou_"}},92360:function(e){e.exports={container:"Tooltip_container__HT_jg",tooltip:"Tooltip_tooltip__Dzryr",triangle:"Tooltip_triangle__Bw1ea"}}}]);