import{s as H,i as I,n as d,b as M,o as N}from"./scheduler.BvLojk_z.js";import{S as C,i as j,e as p,s as q,H as y,c as b,d as _,h as O,B as U,g,p as f,j as E,k as v,u as V,w as $,b as z,f as D}from"./index.DrXxwevr.js";import{w as F}from"./index.BGTSHx9J.js";function S(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const w=F(),G=()=>{w.set(localStorage.getItem("theme")||"dark")},k=e=>{console.log(e),w.set(e),localStorage.setItem("theme",e)};function A(e,t,o){const n=e.slice();return n[3]=t[o],n}function B(e){let t,o=e[3].name+"",n;return{c(){t=p("a"),n=z(o),this.h()},l(h){t=b(h,"A",{href:!0,class:!0});var c=_(t);n=D(c,o),c.forEach(g),this.h()},h(){f(t,"href",e[3].href),f(t,"class","menu-item")},m(h,c){E(h,t,c),v(t,n)},p:d,d(h){h&&g(t)}}}function J(e){let t,o,n,h,c=e[0]==="light"?"🌑":"☀️",u,T,m=S(e[2]),a=[];for(let l=0;l<m.length;l+=1)a[l]=B(A(e,m,l));return{c(){t=p("nav");for(let l=0;l<a.length;l+=1)a[l].c();o=q(),n=p("button"),h=new y(!1),this.h()},l(l){t=b(l,"NAV",{class:!0,theme:!0});var i=_(t);for(let r=0;r<a.length;r+=1)a[r].l(i);o=O(i),n=b(i,"BUTTON",{class:!0});var s=_(n);h=U(s,!1),s.forEach(g),i.forEach(g),this.h()},h(){h.a=null,f(n,"class","theme-switcher svelte-5xlot"),f(t,"class","menubar"),f(t,"theme",e[1])},m(l,i){E(l,t,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(t,null);v(t,o),v(t,n),h.m(c,n),u||(T=V(n,"click",function(){I(k(e[0]==="light"?"dark":"light"))&&k(e[0]==="light"?"dark":"light").apply(this,arguments)}),u=!0)},p(l,[i]){if(e=l,i&4){m=S(e[2]);let s;for(s=0;s<m.length;s+=1){const r=A(e,m,s);a[s]?a[s].p(r,i):(a[s]=B(r),a[s].c(),a[s].m(t,o))}for(;s<a.length;s+=1)a[s].d(1);a.length=m.length}i&1&&c!==(c=e[0]==="light"?"🌑":"☀️")&&h.p(c),i&2&&f(t,"theme",e[1])},i:d,o:d,d(l){l&&g(t),$(a,l),u=!1,T()}}}function K(e,t,o){let n;M(e,w,u=>o(0,n=u)),N(()=>{G(),console.log(n)});let h,c=[{name:"Birthdays",href:"/"},{name:"Namedays",href:"/birth"}];return e.$$.update=()=>{e.$$.dirty&1&&o(1,h=n)},[n,h,c]}class R extends C{constructor(t){super(),j(this,t,K,J,H,{})}}export{R as M,S as e,w as t};
