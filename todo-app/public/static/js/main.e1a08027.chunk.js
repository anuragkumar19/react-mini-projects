(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(8),o=n.n(a),s=(n(14),n(9)),i=n(2),u=n.n(i),d=n(5),l=n(3),j=n(0),f=function(t){var e=t.children;return Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-body",children:e})})},b=function(t){var e=t.addTodo,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],o=c[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Add Todo"}),Object(j.jsxs)("form",{className:"form-control",onSubmit:function(t){"string"===typeof a&&a.trim()&&(t.preventDefault(),e(a.trim()).then((function(){return o("")})))},children:[Object(j.jsx)("input",{type:"text",placeholder:"Your Todo's Title",name:"title",id:"title",value:a,onChange:function(t){return o(t.currentTarget.value)}}),Object(j.jsx)("input",{type:"submit",value:"Add"})]}),Object(j.jsx)("div",{className:"divider"})]})},p=function(t){var e=t.todo,n=t.deleteTodo,c=t.updateTodo,a=Object(r.useRef)(null),o=Object(r.useState)(e.title),s=Object(l.a)(o,2),i=s[0],u=s[1],d=Object(r.useState)(!1),f=Object(l.a)(d,2),b=f[0],p=f[1];return Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsx)("input",{ref:a,type:"text",disabled:!b,value:i,onChange:function(t){return u(t.currentTarget.value)}}),Object(j.jsxs)("div",{className:"todo-action",children:[Object(j.jsx)("button",{className:"btn btn-info",onClick:function(){if(p(!b),setTimeout((function(){b?a.current.blur():a.current.focus()}),100),b){if("string"!==typeof i||!i.trim())return u(e.title);c(e.id,i)}},children:b?Object(j.jsx)("i",{className:"fas fa-save"}):Object(j.jsx)("i",{className:"fas fa-pen"})}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(e.id)},children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})]})},h=function(t){var e=t.todos,n=t.deleteTodo,r=t.updateTodo;return Object(j.jsx)("div",{className:"todos",children:e.map((function(t){return Object(j.jsx)(p,{todo:t,deleteTodo:n,updateTodo:r},t.id)}))})};var x=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1];Object(r.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/todos",{method:"get"});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,c(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var a=function(){var t=Object(d.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/todos/".concat(e),{method:"delete"});case 3:c(n.filter((function(t){return t.id!==e}))),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),alert("Error!");case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(d.a)(u.a.mark((function t(e){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=JSON.stringify({title:e,createdAt:new Date}),t.next=4,fetch("/todos",{method:"post",body:r,headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:a=t.sent,c([].concat(Object(s.a)(n),[a])),t.next=16;break;case 11:throw t.prev=11,t.t0=t.catch(0),console.log(t.t0),alert("Error!"),new Error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=Object(d.a)(u.a.mark((function t(e,r){var a,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=JSON.stringify({title:r}),t.next=4,fetch("/todos/".concat(e),{method:"put",body:a,headers:{"Content-Type":"application/json"}});case 4:return o=t.sent,t.next=7,o.json();case 7:o=t.sent,s=n.findIndex((function(t){return t.id===e})),(i=n)[s]=o,c(i),t.next=19;break;case 14:throw t.prev=14,t.t0=t.catch(0),console.log(t.t0),alert("Error!"),new Error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:"Your Todo List"}),Object(j.jsxs)(f,{children:[Object(j.jsx)(b,{addTodo:o}),Object(j.jsx)(h,{todos:n,deleteTodo:a,updateTodo:i})]})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e1a08027.chunk.js.map