(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{10:function(e,t,s){e.exports={button:"styles_button__2FVvv",symbol:"styles_symbol__3qmUQ",action:"styles_action___8mOm"}},22:function(e,t,s){e.exports={calculator:"styles_calculator__3RzDR"}},3:function(e,t,s){e.exports={keyboard:"styles_keyboard__UBG-g",firstSeg:"styles_firstSeg__VIxHv",secondSeg:"styles_secondSeg__2H2PO",thirdSeg:"styles_thirdSeg__90Bx1",numSeg:"styles_numSeg__KQo7p",actionSeg:"styles_actionSeg__3z-Tm"}},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),a=s(19),n=s.n(a),l=s(9),o=s.n(l),i=s(20),b=s(7),u=s(21),p=s.n(u),j=s(0),y=Object(c.createContext)({}),m=function(e){var t=e.children,s=Object(c.useState)(""),r=Object(b.a)(s,2),a=r[0],n=r[1],l=Object(c.useState)(0),o=Object(b.a)(l,2),i=o[0],u=o[1],p=Object(c.useState)(!1),m=Object(b.a)(p,2),d=m[0],f=m[1];return Object(j.jsx)(y.Provider,{value:{expression:a,setExpression:n,cursorPosition:i,setCursorPosition:u,error:d,setError:f},children:t})},d=s(6),f=s.n(d),O=function(e){var t=e.value,s=e.cursorPosition,r=e.error,a=Object(c.createRef)(),n=Object(c.useCallback)((function(e){e.target.focus()}),[]);return Object(c.useEffect)((function(){var e;null===(e=a.current)||void 0===e||e.setSelectionRange(s,s)}),[s,a]),Object(j.jsxs)("div",{className:f.a.display,children:[Object(j.jsx)("input",{ref:a,type:"text",placeholder:"Try me...",className:f.a.displayInput,autoFocus:!0,onBlur:n,value:t,onChange:function(){}}),r&&Object(j.jsx)("span",{className:f.a.error,children:"ERROR!"})]})},x=s(3),h=s.n(x),_=[{type:"symbol",label:"("},{type:"symbol",label:")"},{type:"action",label:"<-",actionKey:"MOVE_LEFT"},{type:"action",label:"->",actionKey:"MOVE_RIGHT"}],v=[{type:"symbol",label:"/"},{type:"symbol",label:"*"},{type:"symbol",label:"-"},{type:"symbol",label:"+"}],g=[{type:"symbol",label:"7"},{type:"symbol",label:"8"},{type:"symbol",label:"9"},{type:"symbol",label:"4"},{type:"symbol",label:"5"},{type:"symbol",label:"6"},{type:"symbol",label:"1"},{type:"symbol",label:"2"},{type:"symbol",label:"3"},{type:"action",label:"C",actionKey:"RESET"},{type:"symbol",label:"0"},{type:"symbol",label:"."}],C=[{type:"action",label:"DEL",actionKey:"DELETE"},{type:"action",label:"=",actionKey:"CALC"}],E=s(10),k=s.n(E),S=function(e){var t=e.button,s=e.performAction,r=Object(c.useCallback)((function(){var e="action"===t.type?t.actionKey:void 0;s(t.type,t.label,e)}),[t,s]);return Object(j.jsx)("div",{onClick:r,className:"".concat(k.a.button," ").concat(k.a[t.type]),children:t.label})},R=function(e){var t=e.performAction;return Object(j.jsxs)("div",{className:h.a.keyboard,children:[Object(j.jsx)("div",{className:h.a.firstSeg,children:_.map((function(e,s){return Object(j.jsx)(S,{button:e,performAction:t},s)}))}),Object(j.jsx)("div",{className:h.a.secondSeg,children:v.map((function(e,s){return Object(j.jsx)(S,{button:e,performAction:t},s)}))}),Object(j.jsxs)("div",{className:h.a.thirdSeg,children:[Object(j.jsx)("div",{className:h.a.numSeg,children:g.map((function(e,s){return Object(j.jsx)(S,{button:e,performAction:t},s)}))}),Object(j.jsx)("div",{className:h.a.actionSeg,children:C.map((function(e,s){return Object(j.jsx)(S,{button:e,performAction:t},s)}))})]})]})},N=s(22),P=s.n(N),T=function(){var e=function(){var e=Object(c.useContext)(y),t=e.expression,s=e.setExpression,r=e.cursorPosition,a=e.setCursorPosition,n=e.error,l=e.setError,b=Object(c.useCallback)((function(){0!==r&&a(r-1)}),[r,a]),u=Object(c.useCallback)((function(){r!==t.length&&a(r+1)}),[r,t.length,a]),j=Object(c.useCallback)((function(e,c){if(c&&c!==t.length){if(c<t.length){var r=t.substring(0,c),n=t.substring(c);s(r+e+n),a(c+1)}}else{var l=t.length;s(t+e),a(l+1)}}),[t,a,s]),m=Object(c.useCallback)((function(){s(""),a(0)}),[a,s]),d=Object(c.useCallback)((function(e){if(e&&e!==t.length){if(0!==e){var c=t.substring(0,e-1),r=t.substring(e);s(c+r),a(e-1)}}else{var n=t.length;s(t.slice(0,-1)),a(n-1)}}),[t,a,s]),f=Object(c.useCallback)((function(e){s(e),a(e.length)}),[a,s]),O=Object(c.useCallback)((function(e){return encodeURIComponent(e)}),[]),x=Object(c.useCallback)(Object(i.a)(o.a.mark((function e(){var s,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=14;break}return s=O(t),c="http://api.mathjs.org/v4/?expr="+s,e.prev=3,e.next=6,p.a.get(c);case 6:r=e.sent,f(r.data.toString()),l(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),l(!0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),[O,t,l,f]),h=Object(c.useCallback)((function(){l(!1)}),[l]);return{expression:t,updateValue:j,clearValue:m,deleteSymbol:d,calculateExpression:x,cursorPosition:r,moveCursorLeft:b,moveCursorRight:u,error:n,clearError:h}}(),t=e.expression,s=e.cursorPosition,r=e.updateValue,a=e.deleteSymbol,n=e.clearValue,l=e.moveCursorLeft,b=e.moveCursorRight,u=e.calculateExpression,m=e.error,d=e.clearError,f=Object(c.useCallback)((function(e,t,c){if(m&&d(),"symbol"===e)r(t,s);else if(c)switch(c){case"DELETE":a(s);break;case"RESET":n();break;case"MOVE_LEFT":l();break;case"MOVE_RIGHT":b();break;case"CALC":u()}}),[u,d,n,s,a,m,l,b,r]);return Object(j.jsxs)("div",{className:P.a.calculator,children:[Object(j.jsx)(O,{value:t,cursorPosition:s,error:m}),Object(j.jsx)(R,{performAction:f})]})},A=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Calculator App"})}),Object(j.jsx)("main",{children:Object(j.jsx)(T,{})}),Object(j.jsx)("footer",{children:Object(j.jsx)("span",{children:"Made by: Matko Pi\u0161kor"})})]})};s(47);n.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{children:Object(j.jsx)(A,{})})}),document.getElementById("root"))},6:function(e,t,s){e.exports={display:"styles_display__13RTH",displayInput:"styles_displayInput__3tJuy",error:"styles_error__16NBl"}}},[[48,1,2]]]);
//# sourceMappingURL=main.9aa32f49.chunk.js.map