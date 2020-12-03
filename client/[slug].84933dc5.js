import{S as t,i as e,s,e as a,q as n,f as r,d as l,j as o,l as c,n as i,u as h,v as m,w as d,m as f,x as u,y as g,a as p,t as $,c as v,g as j,h as E,k as y,A as x,C as w,D,B as T}from"./client.c831ca59.js";import{T as H}from"./Tag.0b89b2d4.js";function I(t){let e,s,h;return document.title=e=t[0].title,{c(){s=a("meta"),this.h()},l(t){const e=n('[data-svelte="svelte-i32x0v"]',document.head);s=r(e,"META",{name:!0,content:!0}),e.forEach(l),this.h()},h(){o(s,"name","description"),o(s,"content",h=t[0].description)},m(t,e){c(document.head,s)},p(t,[a]){1&a&&e!==(e=t[0].title)&&(document.title=e),1&a&&h!==(h=t[0].description)&&o(s,"content",h)},i:i,o:i,d(t){l(s)}}}function V(t,e,s){let{metadata:a={}}=e;return t.$$set=t=>{"metadata"in t&&s(0,a=t.metadata)},[a]}class b extends t{constructor(t){super(),e(this,t,V,I,s,{metadata:0})}}function M(t,e,s){const a=t.slice();return a[1]=e[s],a}function A(t){let e,s;return e=new H({props:{title:t[1]}}),{c(){h(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,a){d(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.title=t[1]),e.$set(a)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function B(t){let e,s,i,H,I,V,B,L,k,q,C,S,z,F,G,J,K,N,O=t[0].title+"",P=t[0].date+"",Q=t[0].html+"";document.title=e=t[0].title,i=new b({props:{metadata:{title:t[0].title,description:t[0].summary}}});let R=t[0].tags,U=[];for(let e=0;e<R.length;e+=1)U[e]=A(M(t,R,e));const W=t=>u(U[t],1,1,(()=>{U[t]=null}));return{c(){s=p(),h(i.$$.fragment),H=p(),I=a("h1"),V=$(O),B=p(),L=a("div"),k=a("h5"),q=$(P),C=p(),S=a("div"),z=$("・"),F=p(),G=a("div");for(let t=0;t<U.length;t+=1)U[t].c();J=p(),K=a("div"),this.h()},l(t){n('[data-svelte="svelte-1uty71u"]',document.head).forEach(l),s=v(t),m(i.$$.fragment,t),H=v(t),I=r(t,"H1",{class:!0});var e=j(I);V=E(e,O),e.forEach(l),B=v(t),L=r(t,"DIV",{class:!0});var a=j(L);k=r(a,"H5",{class:!0});var o=j(k);q=E(o,P),o.forEach(l),C=v(a),S=r(a,"DIV",{class:!0});var c=j(S);z=E(c,"・"),c.forEach(l),F=v(a),G=r(a,"DIV",{class:!0});var h=j(G);for(let t=0;t<U.length;t+=1)U[t].l(h);h.forEach(l),a.forEach(l),J=v(t),K=r(t,"DIV",{class:!0}),j(K).forEach(l),this.h()},h(){o(I,"class","svelte-1drjrh6"),o(k,"class","gray"),o(S,"class","gray"),o(G,"class","tags svelte-1drjrh6"),o(L,"class","meta svelte-1drjrh6"),o(K,"class","content svelte-1drjrh6")},m(t,e){y(t,s,e),d(i,t,e),y(t,H,e),y(t,I,e),c(I,V),y(t,B,e),y(t,L,e),c(L,k),c(k,q),c(L,C),c(L,S),c(S,z),c(L,F),c(L,G);for(let t=0;t<U.length;t+=1)U[t].m(G,null);y(t,J,e),y(t,K,e),K.innerHTML=Q,N=!0},p(t,[s]){(!N||1&s)&&e!==(e=t[0].title)&&(document.title=e);const a={};if(1&s&&(a.metadata={title:t[0].title,description:t[0].summary}),i.$set(a),(!N||1&s)&&O!==(O=t[0].title+"")&&x(V,O),(!N||1&s)&&P!==(P=t[0].date+"")&&x(q,P),1&s){let e;for(R=t[0].tags,e=0;e<R.length;e+=1){const a=M(t,R,e);U[e]?(U[e].p(a,s),f(U[e],1)):(U[e]=A(a),U[e].c(),f(U[e],1),U[e].m(G,null))}for(T(),e=R.length;e<U.length;e+=1)W(e);w()}(!N||1&s)&&Q!==(Q=t[0].html+"")&&(K.innerHTML=Q)},i(t){if(!N){f(i.$$.fragment,t);for(let t=0;t<R.length;t+=1)f(U[t]);N=!0}},o(t){u(i.$$.fragment,t),U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)u(U[t]);N=!1},d(t){t&&l(s),g(i,t),t&&l(H),t&&l(I),t&&l(B),t&&l(L),D(U,t),t&&l(J),t&&l(K)}}}async function L({params:t}){const e=await this.fetch(`blog/${t.slug}.json`),s=await e.json();if(200===e.status)return{post:s};this.error(e.status,s.message)}function k(t,e,s){let{post:a}=e;return t.$$set=t=>{"post"in t&&s(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),e(this,t,k,B,s,{post:0})}}export{L as preload};
