"use strict";(self.webpackChunkso_yummy_react_app=self.webpackChunkso_yummy_react_app||[]).push([[256],{9964:function(e,n,t){t.d(n,{Z:function(){return k}});var o=t(3366),r=t(7462),i=t(2791),a=t(8182),s=t(4419),c=t(724),u=t(3736),l=t(6752),d=t(3967),f=t(4999),p=t(2071),v=t(184),m=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],b={entering:{opacity:1},entered:{opacity:1}},h=i.forwardRef((function(e,n){var t=(0,d.Z)(),a={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=e.addEndListener,c=e.appear,u=void 0===c||c,h=e.children,y=e.easing,E=e.in,g=e.onEnter,Z=e.onEntered,x=e.onEntering,k=e.onExit,R=e.onExited,w=e.onExiting,T=e.style,P=e.timeout,A=void 0===P?a:P,S=e.TransitionComponent,C=void 0===S?l.ZP:S,F=(0,o.Z)(e,m),N=i.useRef(null),I=(0,p.Z)(N,h.ref,n),M=function(e){return function(n){if(e){var t=N.current;void 0===n?e(t):e(t,n)}}},L=M(x),B=M((function(e,n){(0,f.n)(e);var o=(0,f.C)({style:T,timeout:A,easing:y},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),g&&g(e,n)})),O=M(Z),D=M(w),K=M((function(e){var n=(0,f.C)({style:T,timeout:A,easing:y},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),k&&k(e)})),j=M(R);return(0,v.jsx)(C,(0,r.Z)({appear:u,in:E,nodeRef:N,onEnter:B,onEntered:O,onEntering:L,onExit:K,onExited:j,onExiting:D,addEndListener:function(e){s&&s(N.current,e)},timeout:A},F,{children:function(e,n){return i.cloneElement(h,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||E?void 0:"hidden"},b[e],T,h.props.style),ref:I},n))}}))})),y=t(5878),E=t(1217);function g(e){return(0,E.Z)("MuiBackdrop",e)}(0,y.Z)("MuiBackdrop",["root","invisible"]);var Z=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],x=(0,c.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),k=i.forwardRef((function(e,n){var t,i,c,l=(0,u.Z)({props:e,name:"MuiBackdrop"}),d=l.children,f=l.className,p=l.component,m=void 0===p?"div":p,b=l.components,y=void 0===b?{}:b,E=l.componentsProps,k=void 0===E?{}:E,R=l.invisible,w=void 0!==R&&R,T=l.open,P=l.slotProps,A=void 0===P?{}:P,S=l.slots,C=void 0===S?{}:S,F=l.TransitionComponent,N=void 0===F?h:F,I=l.transitionDuration,M=(0,o.Z)(l,Z),L=(0,r.Z)({},l,{component:m,invisible:w}),B=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,s.Z)(t,g,n)}(L),O=null!=(t=A.root)?t:k.root;return(0,v.jsx)(N,(0,r.Z)({in:T,timeout:I},M,{children:(0,v.jsx)(x,(0,r.Z)({"aria-hidden":!0},O,{as:null!=(i=null!=(c=C.root)?c:y.Root)?i:m,className:(0,a.Z)(B.root,f,null==O?void 0:O.className),ownerState:(0,r.Z)({},L,null==O?void 0:O.ownerState),classes:B,ref:n,children:d}))}))}))},2860:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(2791);var r=o.createContext(void 0);function i(){return o.useContext(r)}},717:function(e,n,t){t.d(n,{Z:function(){return Y}});var o=t(9439),r=t(3366),i=t(7462),a=t(2791),s=t(8182),c=t(7563),u=t(9723),l=t(8956),d=t(8949),f=t(4419),p=t(6174),v=t(5671),m=t(3144),b=t(3433),h=t(7979);function y(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function E(e){return parseInt((0,h.Z)(e).getComputedStyle(e).paddingRight,10)||0}function g(e,n,t,o,r){var i=[n,t].concat((0,b.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===i.indexOf(e),t=!function(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}(e);n&&t&&y(e,r)}))}function Z(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function x(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,u.Z)(e);return n.body===e?(0,h.Z)(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var r=function(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}((0,u.Z)(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(E(o)+r,"px");var i=(0,u.Z)(o).querySelectorAll(".mui-fixed");[].forEach.call(i,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(E(e)+r,"px")}))}var a;if(o.parentNode instanceof DocumentFragment)a=(0,u.Z)(o).body;else{var s=o.parentElement,c=(0,h.Z)(o);a="HTML"===(null==s?void 0:s.nodeName)&&"scroll"===c.getComputedStyle(s).overflowY?s:o}t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var k=function(){function e(){(0,v.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,m.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&y(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);g(n,e.mount,e.modalRef,o,!0);var r=Z(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=x(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&y(e.modalRef,n),g(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{var i=r.modals[r.modals.length-1];i.modalRef&&y(i.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}(),R=t(184),w=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function T(e){var n=[],t=[];return Array.from(e.querySelectorAll(w)).forEach((function(e,o){var r=function(e){var n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function P(){return!0}var A=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,i=void 0!==r&&r,s=e.disableRestoreFocus,l=void 0!==s&&s,d=e.getTabbable,f=void 0===d?T:d,p=e.isEnabled,v=void 0===p?P:p,m=e.open,b=a.useRef(!1),h=a.useRef(null),y=a.useRef(null),E=a.useRef(null),g=a.useRef(null),Z=a.useRef(!1),x=a.useRef(null),k=(0,c.Z)(n.ref,x),w=a.useRef(null);a.useEffect((function(){m&&x.current&&(Z.current=!o)}),[o,m]),a.useEffect((function(){if(m&&x.current){var e=(0,u.Z)(x.current);return x.current.contains(e.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),Z.current&&x.current.focus()),function(){l||(E.current&&E.current.focus&&(b.current=!0,E.current.focus()),E.current=null)}}}),[m]),a.useEffect((function(){if(m&&x.current){var e=(0,u.Z)(x.current),n=function(n){var t=x.current;if(null!==t)if(e.hasFocus()&&!i&&v()&&!b.current){if(!t.contains(e.activeElement)){if(n&&g.current!==n.target||e.activeElement!==g.current)g.current=null;else if(null!==g.current)return;if(!Z.current)return;var o=[];if(e.activeElement!==h.current&&e.activeElement!==y.current||(o=f(x.current)),o.length>0){var r,a,s=Boolean((null==(r=w.current)?void 0:r.shiftKey)&&"Tab"===(null==(a=w.current)?void 0:a.key)),c=o[0],u=o[o.length-1];"string"!==typeof c&&"string"!==typeof u&&(s?u.focus():c.focus())}else t.focus()}}else b.current=!1},t=function(n){w.current=n,!i&&v()&&"Tab"===n.key&&e.activeElement===x.current&&n.shiftKey&&(b.current=!0,y.current&&y.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);var o=setInterval((function(){e.activeElement&&"BODY"===e.activeElement.tagName&&n(null)}),50);return function(){clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}}),[o,i,l,v,m,f]);var A=function(e){null===E.current&&(E.current=e.relatedTarget),Z.current=!0};return(0,R.jsxs)(a.Fragment,{children:[(0,R.jsx)("div",{tabIndex:m?0:-1,onFocus:A,ref:h,"data-testid":"sentinelStart"}),a.cloneElement(n,{ref:k,onFocus:function(e){null===E.current&&(E.current=e.relatedTarget),Z.current=!0,g.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,R.jsx)("div",{tabIndex:m?0:-1,onFocus:A,ref:y,"data-testid":"sentinelEnd"})]})},S=t(5878),C=t(1217);function F(e){return(0,C.Z)("MuiModal",e)}(0,S.Z)("MuiModal",["root","hidden","backdrop"]);var N=t(7271),I=t(6826),M=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"];var L=new k,B=a.forwardRef((function(e,n){var t,s,v=e.children,m=e.closeAfterTransition,b=void 0!==m&&m,h=e.component,E=e.container,g=e.disableAutoFocus,Z=void 0!==g&&g,x=e.disableEnforceFocus,k=void 0!==x&&x,w=e.disableEscapeKeyDown,T=void 0!==w&&w,P=e.disablePortal,S=void 0!==P&&P,C=e.disableRestoreFocus,B=void 0!==C&&C,O=e.disableScrollLock,D=void 0!==O&&O,K=e.hideBackdrop,j=void 0!==K&&K,U=e.keepMounted,_=void 0!==U&&U,W=e.manager,H=void 0===W?L:W,Y=e.onBackdropClick,q=e.onClose,z=e.onKeyDown,V=e.open,G=e.onTransitionEnter,X=e.onTransitionExited,J=e.slotProps,Q=void 0===J?{}:J,$=e.slots,ee=void 0===$?{}:$,ne=(0,r.Z)(e,M),te=a.useState(!V),oe=(0,o.Z)(te,2),re=oe[0],ie=oe[1],ae=a.useRef({}),se=a.useRef(null),ce=a.useRef(null),ue=(0,c.Z)(ce,n),le=function(e){return!!e&&e.props.hasOwnProperty("in")}(v),de=null==(t=e["aria-hidden"])||t,fe=function(){return ae.current.modalRef=ce.current,ae.current.mountNode=se.current,ae.current},pe=function(){H.mount(fe(),{disableScrollLock:D}),ce.current&&(ce.current.scrollTop=0)},ve=(0,l.Z)((function(){var e=function(e){return"function"===typeof e?e():e}(E)||(0,u.Z)(se.current).body;H.add(fe(),e),ce.current&&pe()})),me=a.useCallback((function(){return H.isTopModal(fe())}),[H]),be=(0,l.Z)((function(e){se.current=e,e&&ce.current&&(V&&me()?pe():y(ce.current,de))})),he=a.useCallback((function(){H.remove(fe(),de)}),[H,de]);a.useEffect((function(){return function(){he()}}),[he]),a.useEffect((function(){V?ve():le&&b||he()}),[V,he,le,b,ve]);var ye=(0,i.Z)({},e,{closeAfterTransition:b,disableAutoFocus:Z,disableEnforceFocus:k,disableEscapeKeyDown:T,disablePortal:S,disableRestoreFocus:B,disableScrollLock:D,exited:re,hideBackdrop:j,keepMounted:_}),Ee=function(e){var n=e.open,t=e.exited,o={root:["root",!n&&t&&"hidden"],backdrop:["backdrop"]};return(0,f.Z)(o,(0,I.T)(F))}(ye),ge={};void 0===v.props.tabIndex&&(ge.tabIndex="-1"),le&&(ge.onEnter=(0,d.Z)((function(){ie(!1),G&&G()}),v.props.onEnter),ge.onExited=(0,d.Z)((function(){ie(!0),X&&X(),b&&he()}),v.props.onExited));var Ze=null!=(s=null!=h?h:ee.root)?s:"div",xe=(0,N.Z)({elementType:Ze,externalSlotProps:Q.root,externalForwardedProps:ne,additionalProps:{ref:ue,role:"presentation",onKeyDown:function(e){z&&z(e),"Escape"===e.key&&me()&&(T||(e.stopPropagation(),q&&q(e,"escapeKeyDown")))}},className:Ee.root,ownerState:ye}),ke=ee.backdrop,Re=(0,N.Z)({elementType:ke,externalSlotProps:Q.backdrop,additionalProps:{"aria-hidden":!0,onClick:function(e){e.target===e.currentTarget&&(Y&&Y(e),q&&q(e,"backdropClick"))},open:V},className:Ee.backdrop,ownerState:ye});return _||V||le&&!re?(0,R.jsx)(p.Z,{ref:be,container:E,disablePortal:S,children:(0,R.jsxs)(Ze,(0,i.Z)({},xe,{children:[!j&&ke?(0,R.jsx)(ke,(0,i.Z)({},Re)):null,(0,R.jsx)(A,{disableEnforceFocus:k,disableAutoFocus:Z,disableRestoreFocus:B,isEnabled:me,open:V,children:a.cloneElement(v,ge)})]}))}):null})),O=t(1503),D=t(627),K=t(724),j=t(3736),U=t(9964),_=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],W=(0,K.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),H=(0,K.ZP)(U.Z,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),Y=a.forwardRef((function(e,n){var t,c,u,l,d,f,p=(0,j.Z)({name:"MuiModal",props:e}),v=p.BackdropComponent,m=void 0===v?H:v,b=p.BackdropProps,h=p.classes,y=p.className,E=p.closeAfterTransition,g=void 0!==E&&E,Z=p.children,x=p.component,k=p.components,w=void 0===k?{}:k,T=p.componentsProps,P=void 0===T?{}:T,A=p.disableAutoFocus,S=void 0!==A&&A,C=p.disableEnforceFocus,F=void 0!==C&&C,N=p.disableEscapeKeyDown,I=void 0!==N&&N,M=p.disablePortal,L=void 0!==M&&M,K=p.disableRestoreFocus,U=void 0!==K&&K,Y=p.disableScrollLock,q=void 0!==Y&&Y,z=p.hideBackdrop,V=void 0!==z&&z,G=p.keepMounted,X=void 0!==G&&G,J=p.slotProps,Q=p.slots,$=p.theme,ee=(0,r.Z)(p,_),ne=a.useState(!0),te=(0,o.Z)(ne,2),oe=te[0],re=te[1],ie={closeAfterTransition:g,disableAutoFocus:S,disableEnforceFocus:F,disableEscapeKeyDown:I,disablePortal:L,disableRestoreFocus:U,disableScrollLock:q,hideBackdrop:V,keepMounted:X},ae=(0,i.Z)({},p,ie,{exited:oe}),se=null!=(t=null!=(c=null==Q?void 0:Q.root)?c:w.Root)?t:W,ce=null!=(u=null!=(l=null==Q?void 0:Q.backdrop)?l:w.Backdrop)?u:m,ue=null!=(d=null==J?void 0:J.root)?d:P.root,le=null!=(f=null==J?void 0:J.backdrop)?f:P.backdrop;return(0,R.jsx)(B,(0,i.Z)({slots:{root:se,backdrop:ce},slotProps:{root:function(){return(0,i.Z)({},(0,O.Z)(ue,ae),!(0,D.Z)(se)&&{as:x,theme:$},{className:(0,s.Z)(y,null==ue?void 0:ue.className,null==h?void 0:h.root,!ae.open&&ae.exited&&(null==h?void 0:h.hidden))})},backdrop:function(){return(0,i.Z)({},b,(0,O.Z)(le,ae),{className:(0,s.Z)(null==le?void 0:le.className,null==h?void 0:h.backdrop)})}},onTransitionEnter:function(){return re(!1)},onTransitionExited:function(){return re(!0)},ref:n},ee,ie,{children:Z}))}))},7570:function(e,n,t){t.d(n,{Z:function(){return o}});var o=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=function(){e.apply(o,i)};clearTimeout(n),n=setTimeout(s,t)}return o.clear=function(){clearTimeout(n)},o}},7602:function(e,n,t){var o=t(7979);n.Z=o.Z},8949:function(e,n,t){function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}}),(function(){}))}t.d(n,{Z:function(){return o}})},7979:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(9723);function r(e){return(0,o.Z)(e).defaultView||window}}}]);
//# sourceMappingURL=256.1a037f3e.chunk.js.map