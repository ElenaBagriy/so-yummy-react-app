"use strict";(self.webpackChunkso_yummy_react_app=self.webpackChunkso_yummy_react_app||[]).push([[122],{8284:function(n,o,e){e.d(o,{U:function(){return F}});var r=e(1413),t=e(168),i=e(4942),u=e(3366),a=e(7462),N=e(2791),s=e(8182),p=e(4419);var c=e(2860),d=e(8927),l=e(4036),q=e(5878),f=e(1217);function h(n){return(0,f.Z)("MuiFormHelperText",n)}var x,m,A,g,y,v=(0,q.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),w=e(3736),Z=e(184),b=["children","className","component","disabled","error","filled","focused","margin","required","variant"],B=(0,d.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(n,o){var e=n.ownerState;return[o.root,e.size&&o["size".concat((0,l.Z)(e.size))],e.contained&&o.contained,e.filled&&o.filled]}})((function(n){var o,e=n.theme,r=n.ownerState;return(0,a.Z)({color:(e.vars||e).palette.text.secondary},e.typography.caption,(o={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,i.Z)(o,"&.".concat(v.disabled),{color:(e.vars||e).palette.text.disabled}),(0,i.Z)(o,"&.".concat(v.error),{color:(e.vars||e).palette.error.main}),o),"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})})),k=N.forwardRef((function(n,o){var e=(0,w.Z)({props:n,name:"MuiFormHelperText"}),r=e.children,t=e.className,i=e.component,N=void 0===i?"p":i,d=(0,u.Z)(e,b),q=function(n){var o=n.props,e=n.states,r=n.muiFormControl;return e.reduce((function(n,e){return n[e]=o[e],r&&"undefined"===typeof o[e]&&(n[e]=r[e]),n}),{})}({props:e,muiFormControl:(0,c.Z)(),states:["variant","size","disabled","error","filled","focused","required"]}),f=(0,a.Z)({},e,{component:N,contained:"filled"===q.variant||"outlined"===q.variant,variant:q.variant,size:q.size,disabled:q.disabled,error:q.error,filled:q.filled,focused:q.focused,required:q.required}),m=function(n){var o=n.classes,e=n.contained,r=n.size,t=n.disabled,i=n.error,u=n.filled,a=n.focused,N=n.required,s={root:["root",t&&"disabled",i&&"error",r&&"size".concat((0,l.Z)(r)),e&&"contained",a&&"focused",u&&"filled",N&&"required"]};return(0,p.Z)(s,h,o)}(f);return(0,Z.jsx)(B,(0,a.Z)({as:N,ownerState:f,className:(0,s.Z)(m.root,t),ref:o},d,{children:" "===r?x||(x=(0,Z.jsx)("span",{className:"notranslate",children:"\u200b"})):r}))})),Q=e(8789),Y=Q.default.form(m||(m=(0,t.Z)(["\n    margin: 0 auto;\n    position: relative;\n    width: 295px;\n\n    @media screen and (min-width: 768px) {\n        margin: 0;\n        width: 362px;\n    }\n\n  //desktop\n    @media screen and (min-width: 1280px) {\n        width: 510px;\n    }\n"]))),I=Q.default.input(A||(A=(0,t.Z)(["\n    width: 100%;\n    padding: 17px 113px 17px 32px;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.5;\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 24px 44px;\n\n    &:focus-visible {\n        outline: none;\n        border: 1px solid ",";\n    };\n\n    &::placeholder {\n        color: ",";\n    };\n\n    @media screen and (min-width: 768px) {\n        font-size: 16px;\n        padding: 18px 161px 18px 38px;\n    }\n\n  //desktop\n    @media screen and (min-width: 1280px) {\n        padding: 23px 161px 23px 48px;\n    }    \n"])),(function(n){return n.theme.text.heroParagraph}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.input.normal}),(function(n){return n.theme.input.active}),(function(n){return n.theme.text.grey})),C=Q.default.button(g||(g=(0,t.Z)(["\n  position: absolute;\n  right: 0;\n  padding: 16px 32px;\n  border-radius: 24px 44px;\n  background-color: ",";\n  color: ",";\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5;\n  border: none;\n  transition: background-color ",";\n\n\n  //tablet\n  @media screen and (min-width: 768px) {\n    padding: 18px 52px;\n    font-size: 16px;\n  }\n\n  //desktop\n  @media screen and (min-width: 1280px) {\n    padding: 23px 52px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors[n.$color||"black"]}),(function(n){return n.theme.colors.bgMain}),(function(n){return n.theme.hover.transition}),(function(n){return n.theme.colors["green"===n.$color?"black":"green"]})),P=(0,Q.default)(k)(y||(y=(0,t.Z)(["\n&.MuiFormHelperText-root {\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  text-align: center;\n  position: absolute;\n  padding: 0 38px;\n  margin-left: 14px;\n  color: #E74A3B;\n}\n"]))),H=e(1134),F=function(n){var o=n.value,e=n.onSearchFormSubmit,t=n.color,i=(0,H.cI)(),u=i.register,a=i.handleSubmit,N=i.formState.errors;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(Y,{onSubmit:a((function(n){var o=n.search.trim();e(o)})),children:[(0,Z.jsx)(I,(0,r.Z)((0,r.Z)({name:"search",type:"text",defaultValue:o},u("search",{required:!0})),{},{placeholder:"Enter the text"})),(0,Z.jsx)(C,{type:"submit",$color:t,children:"Search"}),N.search&&(0,Z.jsx)(P,{children:"Please, type something"})]})})}},7205:function(n,o,e){e.d(o,{q:function(){return P}});var r,t,i,u,a,N,s=e(5861),p=e(9439),c=e(4687),d=e.n(c),l=e(2791),q=e(7689),f=e(4542),h=e(5985),x=e(1123),m=e(68),A=e(4454),g=e(168),y=e(8789),v=e(7488),w=e(7237),Z=e(5809),b=y.default.a(r||(r=(0,g.Z)(["\n    display: block;\n    height: 100%;\n    \n"]))),B=y.default.div(t||(t=(0,g.Z)(["\n    position: absolute;\n    bottom: 26px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 307px;\n    font-family: 'Poppins';\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: -0.24px;\n    line-height: 1.25;\n    padding: 16px 6px 16px 16px;\n    border-radius: 8px;\n    background-color: ",";\n    color: ",";\n    transition: height ",";\n\n    &:hover {\n        height: auto;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 300px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: calc(100% - 36px);\n        bottom: 24px;\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.text.primary}),(function(n){return n.theme.hover.transition})),k=(0,y.default)(v.Z)(i||(i=(0,g.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.green})),Q=(0,y.default)(w.Z)(u||(u=(0,g.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.green})),Y=y.default.button(a||(a=(0,g.Z)(["\n    position: absolute;\n    top: 20px;\n    right: 23px;\n    border: none;\n    background-color: transparent;\n    transition: scale ",";\n\n    @media screen and (min-width: 1280px) {\n        top: 23px;\n        right: 23px;\n    }\n\n    &:hover,\n    :focus {\n        scale: 1.5;\n    }\n"])),(function(n){return n.theme.hover.transition})),I=(0,y.default)(Z.ZP)(N||(N=(0,g.Z)(["\n& .MuiPopover-paper {\n    scale: 1.02;\n    width: 307px;\n    padding: 16px;\n    border-radius: 8px;\n    background-color: ",";\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n        width: 300px;\n    };\n\n    @media screen and (min-width: 1280px) {\n        width: 268px;\n    }\n}\n\n& .MuiTypography-root {\n    font-family: 'Poppins';\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: -0.24px;\n    line-height: 1.25;\n    padding: 0;\n}\n    \n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.text.primary})),C=e(184),P=function(n){var o=n.item,e=o.title,r=o._id,t=o.preview,i=o.favorite,u=(0,l.useState)(i),a=(0,p.Z)(u,2),N=a[0],c=a[1],g=(0,l.useState)(null),y=(0,p.Z)(g,2),v=y[0],w=y[1],Z=(0,q.s0)(),P=e.length<22?e:e.substr(0,22).replace(/\s+\S*$/,"")+"...",H=function(){w(null)},F=Boolean(v);return(0,C.jsxs)(b,{onClick:function(n){n.target.classList.contains("PrivateSwitchBase-input")||Z("/recipe/".concat(r))},children:[(0,C.jsx)("img",{src:t||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL6UExURUdwTI2qNYuqNoupNoyqN4upNIyqNoysN4uqNourOIurN97/AIuqNouqNoiqN4uqNpKpRHKlOZqqVYuqNouqNouqNpOiQI6rNoyqNoCAKJGaPIyrNouqNoqqNZnMSoyqNo6sM4qmNoyrN///gIurNouqNouqNouqNYuqN4D/gIyqNouqNoyrNouqNouiNousNYuqN42vO4yqNYmkN4yqN4+pNouqNouqNouqNYuqNYuqNourNouqNoqqNYuqNoupOJOxPY2rNoyqNouqNoqqNYyqN4upN4ysNoqrN46sNYuqNoyrN4ujNIiqOYuqNoypOouqNoyqNoqqNouqNo6oN4uqNoqqN4yqNo2wNoyqNpC5M4utNouqOIyqNo6qNoyqNourN4uqNourNouqNoypN4uqNoyqN42qN4yqNoyqN4urNYyqNYurN4urNIumN4qqNoqoNoyqNoyqNoukNYuqNouqN4mlMYuqNoupNousNo6qOYyqNoupNQAAAIuqNouqNoyqNoypNYqqNoupNoqqN4uqNourNoyrNomqN4yrNpawPIuqNoupNouqNo2rOIqxOIyrNoqqNY6vOIqpNouqNoqpNoypNYymOIyoOIyrN4upNYyrNouqNouqN4upNoiyM4yqNouqN4qoNYuqNIuqNouqNouqNoqrN4uqNouqNoupNouqNouqNouqNourNoyqNourNoyqNoeqPI2qNouqNoupNoysNo6pNYqpNourNourNv///4urNouqNoyqN4ypNoqsNouqNouqN4qpNouqNoyrNYuqN4CZM4upNourNYysNoyrNomqNoupNoupNYyqNoqpNoyqNYuqNoyqN4yqOYuqNYuqNoyrNoypNoaoNouqNourNYupN4yqNoysNo2rNoyqN4auNoqrNoypNoyrNoupNYurN4yrN46rNomqNYupNoyuNYyqN4usN4esOY2rNoqqNoyrN42tNYyrNYqqNYyrNo6sN4yqN4yqNoyoNYqnOIuqNoqrNouqNvP7+awAAAD9dFJOUwBg+4BFRN+f/EC/Af79D+kHBAPj+PkIDDwCBs7aaQX+GRS/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",alt:e}),(0,C.jsxs)(B,{"aria-owns":F?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(n){return e.length<22?null:function(n){w(n.target)}(n)},onMouseLeave:H,children:[P,(0,C.jsx)(I,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:F,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:H,disableRestoreFocus:!0,children:(0,C.jsx)(x.Z,{sx:{p:1},children:e})})]}),(0,C.jsx)(m.Z,{title:"Add to favorite",placement:"right-start",children:(0,C.jsx)(Y,{id:r,onClick:function(){function n(){return(n=(0,s.Z)(d().mark((function n(o){var e,r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.$8.toggleFavoriteRecipesById(o);case 3:e=n.sent,r=e.favorite,c(r),r&&h.Am.success("Added to Favorite!"),!r&&h.Am.info("Removed from Favorite!"),n.next=13;break;case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",h.Am.error("Something went wrong! Please, try again"));case 13:case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(o){n.apply(this,arguments)}(r)},children:(0,C.jsx)(A.Z,{label:"Add to favorite",checked:N,icon:(0,C.jsx)(k,{}),checkedIcon:(0,C.jsx)(Q,{})})})})]})}}}]);
//# sourceMappingURL=122.cbaa2f18.chunk.js.map