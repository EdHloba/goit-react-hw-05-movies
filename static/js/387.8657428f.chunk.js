"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{197:function(n,t,e){e.d(t,{SU:function(){return s},Y5:function(){return f},h6:function(){return p},r7:function(){return h},uV:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3/",i="4bf7f5d1496efdab827169a7539a0778",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({include_adult:!1,language:"en-US",page:1,query:t,api_key:i}),n.next=3,u.Z.get("".concat(o,"search/movie?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c=e(5861),u=e(9439),o=e(4687),i=e.n(o),s=e(197),p=e(279),f=e(2791),l=e(7689),h=e(168),v=e(1109),x=v.Z.ul(r||(r=(0,h.Z)(["\nmargin-top: 10px;\n    display: flex;\n    gap: 15px;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n\n> li {\n    margin-top: 18px;\n    \n}\n> li > h4 {\n    margin-bottom: 5px;\n    font-size: 16px;\n}\n\n> li > p {\n    max-width: 1200px;\n    font-size: 16px;\n    color: var(--primary-text-color);\n}\n"]))),d=v.Z.div(a||(a=(0,h.Z)(["\n    margin-top: 18px;\n    margin-left: 15px;\n    font-size: 16px;\n    color: var(--primary-text-color);\n"]))),m=e(184),w=function(){var n=(0,f.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(null),o=(0,u.Z)(a,2),h=o[0],v=o[1],w=(0,f.useState)(!1),g=(0,u.Z)(w,2),y=g[0],k=g[1],Z=(0,l.UO)().movieId;return(0,f.useEffect)((function(){function n(){return(n=(0,c.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.prev=1,n.next=4,(0,s.r7)(Z);case 4:if(0!==(t=n.sent).length){n.next=9;break}return e=new Error("Sorry, we do not have any reviews for this movie."),v(e),n.abrupt("return");case 9:r(t),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),v(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case 20:case"end":return n.stop()}}),n,null,[[1,13,16,19]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[Z]),(0,m.jsxs)(m.Fragment,{children:[h&&(0,m.jsx)(d,{children:"Sorry, we do not have any reviews for this movie."}),y&&(0,m.jsx)(p.Z,{}),(0,m.jsx)(x,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,m.jsxs)("li",{children:[(0,m.jsxs)("h4",{children:["Author: ",e]}),(0,m.jsx)("p",{children:r})]},t)}))})]})}}}]);
//# sourceMappingURL=387.8657428f.chunk.js.map