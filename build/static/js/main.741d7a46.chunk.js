(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),u=n.n(c),o=n(3),i=n.n(o),s=(n(24),n.p,n(16)),r=n(17),l=n.n(r),a=(new function e(){Object(s.a)(this,e),this.request=l.a.create({baseURL:"BASE_URL"}),this.request.defaults.timeout=3e4,this.request.defaults.headers.common.Authorization="INSTRUCTION"},n(43),n(1)),d=function(e){Object(c.useEffect)((function(){}),[]);return Object(a.jsx)("div",{className:"input_box",children:Object(a.jsx)("input",{id:e.col_id+e.row_id,onChange:function(e){var t=[],n=!1,c=e.target.value.split(",");if(c.includes("="))for(var u=0;u<c.length;u++)if("="!==c[u]){var o=document.getElementById(c[u]);"undefined"!=typeof o&&null!=o&&""!==o.value&&void 0!==o.value&&null!==o.value&&t.push(parseInt(o.value)),u===c.length-2&&(n=!0)}!0===n&&(e.target.value=t.reduce((function(e,t){return e+t}),0))}})})},f=(n(45),function(e){return Object(c.useEffect)((function(){}),[]),Object(a.jsxs)("div",{className:"column",children:[Object(a.jsx)("span",{className:"col_id",children:e.col_id}),void 0!==e.rows&&null!==e.rows?e.rows.map((function(t,n){return Object(a.jsx)(d,{row_id:t,col_id:e.col_id})})):null]})}),j=(n(46),function(e){return Object(c.useEffect)((function(){console.log("-----",e.rows)}),[]),Object(a.jsx)("div",{className:"sheet",children:void 0!==e.columns&&0!==e.columns.length?e.columns.map((function(t,n){return Object(a.jsx)(f,{rows:e.rows,col_id:t})})):null})}),h=(n(47),function(){return Object(a.jsx)("div",{children:Object(a.jsx)(j,{rows:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],columns:["A","B","C","D","E","F","G","H","I","J"]})})}),b=(n(54),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,u=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),u(e),o(e),i(e)}))});i.a.render(Object(a.jsx)(u.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),b()}},[[55,1,2]]]);
//# sourceMappingURL=main.741d7a46.chunk.js.map