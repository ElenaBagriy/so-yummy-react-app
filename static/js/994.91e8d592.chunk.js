"use strict";(self.webpackChunkso_yummy_react_app=self.webpackChunkso_yummy_react_app||[]).push([[994],{3994:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var o,r,i=t(5861),a=t(9439),u=t(4687),p=t.n(u),c=t(6590),s=t(7727),l=t(9482),N=t(3896),d=t(2791),f=t(7689),h=t(168),x=t(5228),g=t(8789),q=g.default.main(o||(o=(0,h.Z)(["\n    padding-top: 114px;\n    padding-bottom: 100px;\n\n    @media screen and (min-width: 768px) {\n      padding-top: 136px;\n      padding-bottom: 200px;\n    };\n\n    @media screen and (min-width: 1280px) {\n      padding-top: 164px;\n      padding-bottom: 100px;\n    };\n"]))),m=(0,g.default)(x.Z)(r||(r=(0,h.Z)(["\n  margin-top: 50px;\n  margin-bottom: 32px;\n  padding-left: 19px;\n  border-bottom: 1px solid ",";\n\n    @media screen and (min-width: 768px) {\n        margin-bottom: 50px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        margin-top: 100px;\n        padding-left: 20px;\n    };\n\n  .MuiTabs-flexContainer {\n    gap: 8px;\n\n    @media screen and (min-width: 768px) {\n        gap: 35px;\n    };\n  };\n\n  .MuiTab-textColorPrimary {\n    min-height: auto;\n    min-width: auto;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1;\n    text-transform: capitalize;\n    padding: 10px 10px 32px;\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n        font-size: 18px;\n        padding: 10px 10px 28px;\n    };\n    \n    &.Mui-selected {\n        color: ",";\n    };\n  };\n  \n  .MuiTabs-indicator {\n    background-color: ",";\n  };\n"])),(function(n){return n.theme.border.grey}),(function(n){return n.theme.text.grey}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.green})),y=t(7954),A=t(4542),w=t(1076),v=t(8213),b=t(9434),C=t(2400),Z=t(6351),B=t(184),j=function(){var n=(0,b.I0)(),e=(0,f.UO)().categoryName,t=(0,b.v9)(Z.DS),o=(0,d.useState)(e),r=(0,a.Z)(o,2),u=r[0],h=r[1],x=(0,d.useState)(1),g=(0,a.Z)(x,2),j=g[0],k=g[1],O=(0,d.useState)(null),I=(0,a.Z)(O,2),Q=I[0],Y=I[1],P=(0,d.useState)([]),E=(0,a.Z)(P,2),S=E[0],R=E[1],V=(0,d.useState)([]),H=(0,a.Z)(V,2),M=H[0],U=H[1],D=(0,f.s0)();(0,d.useEffect)((function(){n((0,C.tG)())}),[n]),(0,d.useEffect)((function(){e||h(t[0].title)}),[t,e]),(0,d.useEffect)((function(){u&&function(e){n.apply(this,arguments)}({normalisedQuery:(0,v.L)(u),page:j});function n(){return(n=(0,i.Z)(p().mark((function n(e){var t,o;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,U(!0),n.next=4,A.$8.getRecipeByCategories(e);case 4:if(0!==(t=n.sent).length){n.next=7;break}return n.abrupt("return");case 7:R(t.recipes),o=Math.round(t.total/t.limit),Y(o>1?o:null),n.next=15;break;case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return");case 15:return n.prev=15,U(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})))).apply(this,arguments)}}),[u,j]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(s.A,{}),(0,B.jsx)(c.W,{children:(0,B.jsxs)(q,{children:[(0,B.jsx)(l.e,{title:"Categories"}),(0,B.jsx)(m,{component:"ul",value:u,onChange:function(n,e){D("/categories/".concat(e)),h(e),1!==j&&k(1)},variant:"scrollable",scrollButtons:!1,"aria-label":"categories list",children:0!==t.length&&t.map((function(n){var e=n.id,t=n.title;return(0,B.jsx)(N.Z,{label:t,value:t,component:"a"},e)}))}),M||0===S.length?(0,B.jsx)(B.Fragment,{children:"...Loading"}):(0,B.jsx)(w.y,{list:S}),(0,B.jsx)(d.Suspense,{fallback:(0,B.jsx)("div",{children:"...Loading"}),children:(0,B.jsx)(f.j3,{})}),(0,B.jsx)(y.t,{page:j,totalPages:Q,onChange:function(n){window.scrollTo({top:0,behavior:"smooth"}),k(n)}})]})})]})},k=t(6602),O=function(){return(0,B.jsx)(k.Main,{children:(0,B.jsx)(j,{})})}},1076:function(n,e,t){t.d(e,{y:function(){return l}});var o,r,i=t(7205),a=t(168),u=t(8789),p=u.default.ul(o||(o=(0,a.Z)(["\n    display: flex;\n    gap: 28px;\n    flex-wrap: wrap;\n\n    @media screen and (min-width: 768px) {\n        gap: 32px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        column-gap: 14px;\n        row-gap: 100px;\n    }\n"]))),c=u.default.li(r||(r=(0,a.Z)(["\n    position: relative;\n    width: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    transition: scale ",", box-shadow ",";\n\n    &:hover {\n        scale: 1.02;\n        box-shadow: ",";\n    }\n\n    @media screen and (min-width: 768px) {\n        width: calc((100% - 32px) / 2);\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: calc((100% - 3*14px) / 4);\n\n    }\n"])),(function(n){return n.theme.hover.transition}),(function(n){return n.theme.hover.transition}),(function(n){return n.theme.hover.boxShadow})),s=t(184),l=function(n){var e=n.list;return(0,s.jsx)(p,{children:e.map((function(n){return(0,s.jsx)(c,{children:(0,s.jsx)(i.q,{item:n})},n._id)}))})}},7205:function(n,e,t){t.d(e,{q:function(){return Q}});var o,r,i,a,u,p,c=t(5861),s=t(9439),l=t(4687),N=t.n(l),d=t(2791),f=t(7689),h=t(4542),x=t(5985),g=t(1123),q=t(68),m=t(4454),y=t(168),A=t(8789),w=t(7488),v=t(7237),b=t(5809),C=A.default.a(o||(o=(0,y.Z)(["\n    display: block;\n    height: 100%;\n    \n"]))),Z=A.default.div(r||(r=(0,y.Z)(["\n    position: absolute;\n    bottom: 26px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 307px;\n    font-family: 'Poppins';\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: -0.24px;\n    line-height: 1.25;\n    padding: 16px 6px 16px 16px;\n    border-radius: 8px;\n    background-color: ",";\n    color: ",";\n    transition: height ",";\n\n    &:hover {\n        height: auto;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 300px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: calc(100% - 36px);\n        bottom: 24px;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.text.primary}),(function(n){return n.theme.hover.transition})),B=(0,A.default)(w.Z)(i||(i=(0,y.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.green})),j=(0,A.default)(v.Z)(a||(a=(0,y.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.green})),k=A.default.button(u||(u=(0,y.Z)(["\n    position: absolute;\n    top: 20px;\n    right: 23px;\n    border: none;\n    background-color: transparent;\n    transition: scale ",";\n\n    @media screen and (min-width: 1280px) {\n        top: 23px;\n        right: 23px;\n    }\n\n    &:hover,\n    :focus {\n        scale: 1.5;\n    }\n"])),(function(n){return n.theme.hover.transition})),O=(0,A.default)(b.ZP)(p||(p=(0,y.Z)(["\n& .MuiPopover-paper {\n    scale: 1.02;\n    width: 307px;\n    padding: 16px;\n    border-radius: 8px;\n    background-color: ",";\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n        width: 300px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: 268px;\n    }\n}\n\n& .MuiTypography-root {\n    font-family: 'Poppins';\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: -0.24px;\n    line-height: 1.25;\n    padding: 0;\n}\n    \n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.text.primary})),I=t(184),Q=function(n){var e=n.item,t=e.title,o=e._id,r=e.preview,i=e.favorite,a=(0,d.useState)(i),u=(0,s.Z)(a,2),p=u[0],l=u[1],y=(0,d.useState)(null),A=(0,s.Z)(y,2),w=A[0],v=A[1],b=(0,f.s0)(),Q=t.length<22?t:t.substr(0,22).replace(/\s+\S*$/,"")+"...",Y=function(){v(null)},P=Boolean(w);return(0,I.jsxs)(C,{onClick:function(n){n.target.classList.contains("PrivateSwitchBase-input")||b("/recipe/".concat(o))},children:[(0,I.jsx)("img",{src:r||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL6UExURUdwTI2qNYuqNoupNoyqN4upNIyqNoysN4uqNourOIurN97/AIuqNouqNoiqN4uqNpKpRHKlOZqqVYuqNouqNouqNpOiQI6rNoyqNoCAKJGaPIyrNouqNoqqNZnMSoyqNo6sM4qmNoyrN///gIurNouqNouqNouqNYuqN4D/gIyqNouqNoyrNouqNouiNousNYuqN42vO4yqNYmkN4yqN4+pNouqNouqNouqNYuqNYuqNourNouqNoqqNYuqNoupOJOxPY2rNoyqNouqNoqqNYyqN4upN4ysNoqrN46sNYuqNoyrN4ujNIiqOYuqNoypOouqNoyqNoqqNouqNo6oN4uqNoqqN4yqNo2wNoyqNpC5M4utNouqOIyqNo6qNoyqNourN4uqNourNouqNoypN4uqNoyqN42qN4yqNoyqN4urNYyqNYurN4urNIumN4qqNoqoNoyqNoyqNoukNYuqNouqN4mlMYuqNoupNousNo6qOYyqNoupNQAAAIuqNouqNoyqNoypNYqqNoupNoqqN4uqNourNoyrNomqN4yrNpawPIuqNoupNouqNo2rOIqxOIyrNoqqNY6vOIqpNouqNoqpNoypNYymOIyoOIyrN4upNYyrNouqNouqN4upNoiyM4yqNouqN4qoNYuqNIuqNouqNouqNoqrN4uqNouqNoupNouqNouqNouqNourNoyqNourNoyqNoeqPI2qNouqNoupNoysNo6pNYqpNourNourNv///4urNouqNoyqN4ypNoqsNouqNouqN4qpNouqNoyrNYuqN4CZM4upNourNYysNoyrNomqNoupNoupNYyqNoqpNoyqNYuqNoyqN4yqOYuqNYuqNoyrNoypNoaoNouqNourNYupN4yqNoysNo2rNoyqN4auNoqrNoypNoyrNoupNYurN4yrN46rNomqNYupNoyuNYyqN4usN4esOY2rNoqqNoyrN42tNYyrNYqqNYyrNo6sN4yqN4yqNoyoNYqnOIuqNoqrNouqNvP7+awAAAD9dFJOUwBg+4BFRN+f/EC/Af79D+kHBAPj+PkIDDwCBs7aaQX+GRS/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",alt:t}),(0,I.jsxs)(Z,{"aria-owns":P?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(n){return t.length<22?null:function(n){v(n.target)}(n)},onMouseLeave:Y,children:[Q,(0,I.jsx)(O,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:P,anchorEl:w,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:Y,disableRestoreFocus:!0,children:(0,I.jsx)(g.Z,{sx:{p:1},children:t})})]}),(0,I.jsx)(q.Z,{title:"Add to favorite",placement:"right-start",children:(0,I.jsx)(k,{id:o,onClick:function(){function n(){return(n=(0,c.Z)(N().mark((function n(e){var t,o;return N().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.$8.toggleFavoriteRecipesById(e);case 3:t=n.sent,o=t.favorite,l(o),o&&x.Am.success("Added to Favorite!"),!o&&x.Am.info("Removed from Favorite!"),n.next=13;break;case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",x.Am.error("Something went wrong! Please, try again"));case 13:case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(o)},children:(0,I.jsx)(m.Z,{label:"Add to favorite",checked:p,icon:(0,I.jsx)(B,{}),checkedIcon:(0,I.jsx)(j,{})})})})]})}},7954:function(n,e,t){t.d(e,{t:function(){return j}});var o,r=t(1413),i=t(168),a=t(1333),u=t(2791),p=["title","titleId"];function c(){return c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},c.apply(this,arguments)}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function l(n,e){var t=n.title,r=n.titleId,i=s(n,p);return u.createElement("svg",c({width:8,height:15,viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?u.createElement("title",{id:r},t):null,o||(o=u.createElement("path",{d:"M7.64471 0.394637C7.75733 0.518919 7.84669 0.666543 7.90765 0.829057C7.96862 0.991571 8 1.16579 8 1.34173C8 1.51767 7.96862 1.69188 7.90765 1.8544C7.84669 2.01691 7.75733 2.16454 7.64471 2.28882L2.93089 7.50117L7.64471 12.7135C7.87187 12.9647 7.99949 13.3054 7.99949 13.6606C7.99949 14.0158 7.87187 14.3565 7.64471 14.6077C7.41755 14.8589 7.10945 15 6.7882 15C6.46695 15 6.15886 14.8589 5.9317 14.6077L0.35529 8.44154C0.242664 8.31726 0.153311 8.16964 0.0923452 8.00712C0.0313797 7.84461 0 7.67039 0 7.49445C0 7.31851 0.0313797 7.1443 0.0923452 6.98178C0.153311 6.81927 0.242664 6.67165 0.35529 6.54736L5.9317 0.381203C6.39336 -0.129285 7.1709 -0.129285 7.64471 0.394637Z"})))}var N,d=u.forwardRef(l),f=(t.p,["title","titleId"]);function h(){return h=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},h.apply(this,arguments)}function x(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function g(n,e){var t=n.title,o=n.titleId,r=x(n,f);return u.createElement("svg",h({width:8,height:15,viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},r),t?u.createElement("title",{id:o},t):null,N||(N=u.createElement("path",{d:"M0.355291 0.394637C0.242666 0.518919 0.153312 0.666543 0.0923468 0.829057C0.0313812 0.991571 0 1.16579 0 1.34173C0 1.51767 0.0313812 1.69188 0.0923468 1.8544C0.153312 2.01691 0.242666 2.16454 0.355291 2.28882L5.06911 7.50117L0.355291 12.7135C0.128132 12.9647 0.000514428 13.3054 0.000514428 13.6606C0.000514428 14.0158 0.128132 14.3565 0.355291 14.6077C0.582451 14.8589 0.890546 15 1.2118 15C1.53305 15 1.84114 14.8589 2.0683 14.6077L7.64471 8.44154C7.75734 8.31726 7.84669 8.16964 7.90765 8.00712C7.96862 7.84461 8 7.6704 8 7.49445C8 7.31851 7.96862 7.1443 7.90765 6.98178C7.84669 6.81927 7.75734 6.67165 7.64471 6.54736L2.0683 0.381203C1.60664 -0.129285 0.829104 -0.129285 0.355291 0.394637Z"})))}var q,m,y,A=u.forwardRef(g),w=(t.p,t(8789)),v=(0,w.default)(a.Z)(q||(q=(0,i.Z)(["\n    margin-top: 40px;\n\n    @media screen and (min-width: 768px) {\n        margin-top: 50px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        /* padding-bottom: 100px; */\n    };\n\n    .MuiPagination-ul {\n        justify-content: space-between;\n        align-items: center;\n        flex-wrap: nowrap;\n        margin: 0 auto;\n        padding: 12px 28px;\n        width: 275px;\n        border-radius: 26px;\n        box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);\n        background-color: ",";\n\n        @media screen and (min-width: 768px) {\n        padding: 14px 24px;\n        width: 324px;\n    };\n    };\n\n    .MuiPaginationItem-root {\n        font-family: 'Poppins', sans-serif;\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 1.5;\n        margin: 0;\n        padding: 0;\n        min-width: auto;\n        width: 27px;\n        height: 27px;\n        color: ",";\n        transition: background-color ",";\n        \n        &:hover {\n            background-color: #cce681;\n        }\n\n        &.Mui-selected {\n        background-color: ",";\n        transition: background-color ",";\n\n        &:hover {\n            background-color: #cce681;\n        }\n        }\n    }\n"])),(function(n){return n.theme.colors.bgMain}),(function(n){return n.theme.text.paginationText}),(function(n){return n.theme.hover.transition}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.hover.transition})),b=(0,w.default)(d)(m||(m=(0,i.Z)(["\n  fill: rgba(169, 169, 169, 0.73);\n"]))),C=(0,w.default)(A)(y||(y=(0,i.Z)(["\n  fill: rgba(169, 169, 169, 0.73);\n"]))),Z=t(6563),B=t(184),j=function(n){var e=n.onChange,t=n.page,o=n.totalPages;return(0,B.jsx)(B.Fragment,{children:o>1&&(0,B.jsx)(v,{count:o,page:t,onChange:function(n,t){return e(t)},boundaryCount:1,siblingCount:0,renderItem:function(n){return(0,B.jsx)(Z.Z,(0,r.Z)({slots:{previous:b,next:C}},n))}})})}},8213:function(n,e,t){t.d(e,{L:function(){return o}});var o=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}}}]);
//# sourceMappingURL=994.91e8d592.chunk.js.map