"use strict";(self.webpackChunkso_yummy_react_app=self.webpackChunkso_yummy_react_app||[]).push([[994],{3994:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,o=t(5861),a=t(9439),c=t(4687),l=t.n(c),s=t(6590),u=t(7727),p=t(9482),d=t(3896),h=t(2791),f=t(7689),x=t(168),m=t(5228),g=t(8789),b=g.default.main(r||(r=(0,x.Z)(["\n    padding-top: 114px;\n    padding-bottom: 100px;\n\n    @media screen and (min-width: 768px) {\n      padding-top: 136px;\n      padding-bottom: 200px;\n    };\n\n    @media screen and (min-width: 1280px) {\n      padding-top: 164px;\n      padding-bottom: 100px;\n    };\n"]))),v=(0,g.default)(m.Z)(i||(i=(0,x.Z)(["\n  margin-top: 50px;\n  margin-bottom: 32px;\n  padding-left: 19px;\n  border-bottom: 1px solid ",";\n\n    @media screen and (min-width: 768px) {\n        margin-bottom: 50px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        margin-top: 100px;\n        padding-left: 20px;\n    };\n\n  .MuiTabs-flexContainer {\n    gap: 8px;\n\n    @media screen and (min-width: 768px) {\n        gap: 35px;\n    };\n  };\n\n  .MuiTab-textColorPrimary {\n    min-height: auto;\n    min-width: auto;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1;\n    text-transform: capitalize;\n    padding: 10px 10px 32px;\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n        font-size: 18px;\n        padding: 10px 10px 28px;\n    };\n    \n    &.Mui-selected {\n        color: ",";\n    };\n  };\n  \n  .MuiTabs-indicator {\n    background-color: ",";\n  };\n"])),(function(n){return n.theme.border.grey}),(function(n){return n.theme.text.grey}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.green})),w=t(7954),y=t(1818),j=t(1076),C=t(8213),Z=t(9434),k=t(2400),O=t(6351),P=t(184),S=function(){var n=(0,Z.I0)(),e=(0,f.UO)().categoryName,t=(0,Z.v9)(O.DS),r=(0,h.useState)(e),i=(0,a.Z)(r,2),c=i[0],x=i[1],m=(0,h.useState)(1),g=(0,a.Z)(m,2),S=g[0],M=g[1],E=(0,h.useState)(null),L=(0,a.Z)(E,2),I=L[0],z=L[1],A=(0,h.useState)([]),_=(0,a.Z)(A,2),B=_[0],F=_[1],R=(0,h.useState)([]),T=(0,a.Z)(R,2),$=T[0],q=T[1],G=(0,f.s0)();(0,h.useEffect)((function(){n((0,k.tG)())}),[n]),(0,h.useEffect)((function(){e||x(t[0].title)}),[t,e]),(0,h.useEffect)((function(){c&&function(e){n.apply(this,arguments)}({normalisedQuery:(0,C.L)(c),page:S});function n(){return(n=(0,o.Z)(l().mark((function n(e){var t,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,q(!0),n.next=4,y.$8.getRecipeByCategories(e);case 4:if(0!==(t=n.sent).length){n.next=7;break}return n.abrupt("return");case 7:F(t.recipes),r=Math.round(t.total/t.limit),z(r>1?r:null),n.next=15;break;case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return");case 15:return n.prev=15,q(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})))).apply(this,arguments)}}),[c,S]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(u.A,{}),(0,P.jsx)(s.W,{children:(0,P.jsxs)(b,{children:[(0,P.jsx)(p.e,{title:"Categories"}),(0,P.jsx)(v,{component:"ul",value:c,onChange:function(n,e){G("/categories/".concat(e)),x(e),1!==S&&M(1)},variant:"scrollable",scrollButtons:!1,"aria-label":"categories list",children:0!==t.length&&t.map((function(n){var e=n.id,t=n.title;return(0,P.jsx)(d.Z,{label:t,value:t,component:"a"},e)}))}),$||0===B.length?(0,P.jsx)(P.Fragment,{children:"...Loading"}):(0,P.jsx)(j.y,{list:B}),(0,P.jsx)(h.Suspense,{fallback:(0,P.jsx)("div",{children:"...Loading"}),children:(0,P.jsx)(f.j3,{})}),(0,P.jsx)(w.t,{page:S,totalPages:I,onChange:function(n,e){M(e)}})]})})]})},M=t(6602),E=function(){return(0,P.jsx)(M.Main,{children:(0,P.jsx)(S,{})})}},1076:function(n,e,t){t.d(e,{y:function(){return p}});var r,i,o=t(2951),a=t(168),c=t(8789),l=c.default.ul(r||(r=(0,a.Z)(["\n    display: flex;\n    gap: 28px;\n    flex-wrap: wrap;\n\n    @media screen and (min-width: 768px) {\n        gap: 32px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        column-gap: 14px;\n        row-gap: 100px;\n    }\n"]))),s=c.default.li(i||(i=(0,a.Z)(["\n    position: relative;\n    width: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    transition: scale ",", box-shadow ",";\n\n    &:hover {\n        scale: 1.02;\n        box-shadow: ",";\n    }\n\n    @media screen and (min-width: 768px) {\n        width: calc((100% - 32px) / 2);\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: calc((100% - 3*14px) / 4);\n\n    }\n"])),(function(n){return n.theme.hover.transition}),(function(n){return n.theme.hover.transition}),(function(n){return n.theme.hover.boxShadow})),u=t(184),p=function(n){var e=n.list;return(0,u.jsx)(l,{children:e.map((function(n){return(0,u.jsx)(s,{children:(0,u.jsx)(o.q,{item:n})},n._id)}))})}},2951:function(n,e,t){t.d(e,{q:function(){return I}});var r,i,o,a,c,l,s=t(5861),u=t(9439),p=t(4687),d=t.n(p),h=t(2791),f=t(7689),x=t(1818),m=t(5985),g=t(1123),b=t(68),v=t(4454),w=t(168),y=t(8789),j=t(7488),C=t(7237),Z=t(5809),k=y.default.a(r||(r=(0,w.Z)(["\n    display: block;\n    height: 100%;\n"]))),O=y.default.div(i||(i=(0,w.Z)(["\n    position: absolute;\n    bottom: 26px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 307px;\n    font-family: 'Poppins';\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: -0.24px;\n    line-height: 1.25;\n    padding: 16px 6px 16px 16px;\n    border-radius: 8px;\n    background-color: ",";\n    color: ",";\n    transition: height ",";\n\n    &:hover {\n        height: auto;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 300px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: calc(100% - 36px);\n        bottom: 24px;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.text.primary}),(function(n){return n.theme.hover.transition})),P=(0,y.default)(j.Z)(o||(o=(0,w.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.green})),S=(0,y.default)(C.Z)(a||(a=(0,w.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.green})),M=y.default.button(c||(c=(0,w.Z)(["\n    position: absolute;\n    top: 20px;\n    right: 23px;\n    border: none;\n    background-color: transparent;\n    transition: scale ",";\n\n    @media screen and (min-width: 1280px) {\n        top: 23px;\n        right: 23px;\n    }\n\n    &:hover,\n    :focus {\n        scale: 1.5;\n    }\n"])),(function(n){return n.theme.hover.transition})),E=(0,y.default)(Z.ZP)(l||(l=(0,w.Z)(["\n& .MuiPopover-paper {\n    scale: 1.02;\n    width: 307px;\n    padding: 16px;\n    border-radius: 8px;\n    background-color: ",";\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n        width: 300px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: 268px;\n    }\n}\n\n& .MuiTypography-root {\n    font-family: 'Poppins';\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: -0.24px;\n    line-height: 1.25;\n    padding: 0;\n}\n    \n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.text.primary})),L=t(184),I=function(n){var e=n.item,t=e.title,r=e._id,i=e.preview,o=e.favorite,a=(0,h.useState)(o),c=(0,u.Z)(a,2),l=c[0],p=c[1],w=(0,h.useState)(null),y=(0,u.Z)(w,2),j=y[0],C=y[1],Z=(0,f.s0)(),I=t.length<22?t:t.substr(0,22).replace(/\s+\S*$/,"")+"...",z=function(){C(null)},A=Boolean(j);return(0,L.jsxs)(k,{onClick:function(n){n.target.classList.contains("PrivateSwitchBase-input")||Z("/recipe/".concat(r))},children:[(0,L.jsx)("img",{src:i,alt:t}),(0,L.jsxs)(O,{"aria-owns":A?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(n){return t.length<22?null:function(n){C(n.target)}(n)},onMouseLeave:z,children:[I,(0,L.jsx)(E,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:A,anchorEl:j,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:z,disableRestoreFocus:!0,children:(0,L.jsx)(g.Z,{sx:{p:1},children:t})})]}),(0,L.jsx)(b.Z,{title:"Add to favorite",placement:"right-start",children:(0,L.jsx)(M,{id:r,onClick:function(){function n(){return(n=(0,s.Z)(d().mark((function n(e){var t,r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.$8.toggleFavoriteRecipesById(e);case 3:t=n.sent,r=t.favorite,p(r),r&&m.Am.success("Added to Favorite!"),!r&&m.Am.info("Removed from Favorite!"),n.next=13;break;case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",m.Am.error("Something went wrong! Please, try again"));case 13:case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(r)},children:(0,L.jsx)(v.Z,{label:"Add to favorite",checked:l,icon:(0,L.jsx)(P,{}),checkedIcon:(0,L.jsx)(S,{})})})})]})}},7954:function(n,e,t){t.d(e,{t:function(){return S}});var r,i=t(1413),o=t(168),a=t(1333),c=t(2791),l=["title","titleId"];function s(){return s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function p(n,e){var t=n.title,i=n.titleId,o=u(n,l);return c.createElement("svg",s({width:8,height:15,viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},o),t?c.createElement("title",{id:i},t):null,r||(r=c.createElement("path",{d:"M7.64471 0.394637C7.75733 0.518919 7.84669 0.666543 7.90765 0.829057C7.96862 0.991571 8 1.16579 8 1.34173C8 1.51767 7.96862 1.69188 7.90765 1.8544C7.84669 2.01691 7.75733 2.16454 7.64471 2.28882L2.93089 7.50117L7.64471 12.7135C7.87187 12.9647 7.99949 13.3054 7.99949 13.6606C7.99949 14.0158 7.87187 14.3565 7.64471 14.6077C7.41755 14.8589 7.10945 15 6.7882 15C6.46695 15 6.15886 14.8589 5.9317 14.6077L0.35529 8.44154C0.242664 8.31726 0.153311 8.16964 0.0923452 8.00712C0.0313797 7.84461 0 7.67039 0 7.49445C0 7.31851 0.0313797 7.1443 0.0923452 6.98178C0.153311 6.81927 0.242664 6.67165 0.35529 6.54736L5.9317 0.381203C6.39336 -0.129285 7.1709 -0.129285 7.64471 0.394637Z"})))}var d,h=c.forwardRef(p),f=(t.p,["title","titleId"]);function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},x.apply(this,arguments)}function m(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function g(n,e){var t=n.title,r=n.titleId,i=m(n,f);return c.createElement("svg",x({width:8,height:15,viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,d||(d=c.createElement("path",{d:"M0.355291 0.394637C0.242666 0.518919 0.153312 0.666543 0.0923468 0.829057C0.0313812 0.991571 0 1.16579 0 1.34173C0 1.51767 0.0313812 1.69188 0.0923468 1.8544C0.153312 2.01691 0.242666 2.16454 0.355291 2.28882L5.06911 7.50117L0.355291 12.7135C0.128132 12.9647 0.000514428 13.3054 0.000514428 13.6606C0.000514428 14.0158 0.128132 14.3565 0.355291 14.6077C0.582451 14.8589 0.890546 15 1.2118 15C1.53305 15 1.84114 14.8589 2.0683 14.6077L7.64471 8.44154C7.75734 8.31726 7.84669 8.16964 7.90765 8.00712C7.96862 7.84461 8 7.6704 8 7.49445C8 7.31851 7.96862 7.1443 7.90765 6.98178C7.84669 6.81927 7.75734 6.67165 7.64471 6.54736L2.0683 0.381203C1.60664 -0.129285 0.829104 -0.129285 0.355291 0.394637Z"})))}var b,v,w,y=c.forwardRef(g),j=(t.p,t(8789)),C=(0,j.default)(a.Z)(b||(b=(0,o.Z)(["\n    margin-top: 40px;\n\n    @media screen and (min-width: 768px) {\n        margin-top: 50px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        /* padding-bottom: 100px; */\n    };\n\n    .MuiPagination-ul {\n        justify-content: space-between;\n        align-items: center;\n        flex-wrap: nowrap;\n        margin: 0 auto;\n        padding: 12px 28px;\n        width: 275px;\n        border-radius: 26px;\n        box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);\n        background-color: ",";\n\n        @media screen and (min-width: 768px) {\n        padding: 14px 24px;\n        width: 324px;\n    };\n    };\n\n    .MuiPaginationItem-root {\n        font-family: 'Poppins', sans-serif;\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 1.5;\n        margin: 0;\n        padding: 0;\n        min-width: auto;\n        width: 27px;\n        height: 27px;\n        color: ",";\n        transition: background-color ",";\n        \n        &:hover {\n            background-color: #cce681;\n        }\n\n        &.Mui-selected {\n        background-color: ",";\n        transition: background-color ",";\n\n        &:hover {\n            background-color: #cce681;\n        }\n        }\n    }\n"])),(function(n){return n.theme.colors.bgMain}),(function(n){return n.theme.text.paginationText}),(function(n){return n.theme.hover.transition}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.hover.transition})),Z=(0,j.default)(h)(v||(v=(0,o.Z)(["\n  fill: rgba(169, 169, 169, 0.73);\n"]))),k=(0,j.default)(y)(w||(w=(0,o.Z)(["\n  fill: rgba(169, 169, 169, 0.73);\n"]))),O=t(6563),P=t(184),S=function(n){var e=n.onChange,t=n.page,r=n.totalPages;return(0,P.jsx)(P.Fragment,{children:r>1&&(0,P.jsx)(C,{count:r,page:t,onChange:e,boundaryCount:1,siblingCount:0,renderItem:function(n){return(0,P.jsx)(O.Z,(0,i.Z)({slots:{previous:Z,next:k}},n))}})})}},8213:function(n,e,t){t.d(e,{L:function(){return r}});var r=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}}}]);
//# sourceMappingURL=994.7c2d8efe.chunk.js.map