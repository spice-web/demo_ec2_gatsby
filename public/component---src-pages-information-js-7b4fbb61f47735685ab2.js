"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[658],{4003:function(e,t,n){var a=n(7294);t.Z=e=>{let{children:t}=e;return a.createElement("h2",{class:"headline--title"},t)}},6747:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1883),r=n(7294),l="_side-module--headline--2282b",o="_side-module--section--1c4a0",i="_side-module--title--298c4";var c=()=>{const e=(0,a.useStaticQuery)("2388843083"),t=e.post.edges,n=e.category.edges;return r.createElement("div",{className:"_side-module--side--8feed"},r.createElement("h3",{className:l},"最近の投稿"),r.createElement("div",{className:o},t.map((e=>{let{node:t}=e;return r.createElement("div",{className:i},r.createElement(a.Link,{to:"/information/"+t.informationId},t.title))}))),r.createElement("h3",{className:l},"カテゴリー"),r.createElement("div",{className:o},n.map((e=>{let{node:t}=e;return r.createElement("div",{className:i},r.createElement(a.Link,{to:"/category/"+t.categoryId},t.category))}))))}},9571:function(e,t,n){n.d(t,{t:function(){return i}});var a=n(5785),r=n(7294),l=n(1883),o=n(8707);const i=e=>{let{totalCount:t}=e;return r.createElement("ul",{className:o.Cj},(n=1,i=Math.ceil(t/2),(0,a.Z)(Array(i-n+1)).map(((e,t)=>n+t))).map(((e,t)=>r.createElement("li",{className:o.Ql,key:t},r.createElement(l.Link,{to:"/information/page/"+e},e)))));var n,i}},7831:function(e,t,n){n.r(t);var a=n(7294),r=n(1883),l=n(223),o=n(3811),i=n(4003),c=n(6747),m=n(9571),u=n(8707);t.default=e=>{let{data:t}=e;return a.createElement(l.Z,null,a.createElement(o.Z,{title:"インフォーメーション",description:"サンパーキングの新着情報やお得な情報を掲載中！"}),a.createElement(i.Z,null,"INFORMATION",a.createElement("span",null,"新着情報")),a.createElement("div",{className:"content__wrap content__pd"},a.createElement("div",{className:u.aN},a.createElement("div",{className:u.o},t.allMicrocmsInformation.edges.map((e=>{let{node:t}=e;return a.createElement("div",{className:u.Y2},a.createElement("div",{className:u.TN},a.createElement(r.Link,{to:t.informationId},t.title)),a.createElement("p",{className:u.X1},t.excerpt),a.createElement("ul",{className:u.Mv},a.createElement("li",null,t.date),a.createElement("li",null,a.createElement(r.Link,{to:"/category/"+t.category.id},t.category.category)),a.createElement("li",{className:u.Dk},a.createElement(r.Link,{to:t.informationId},"MORE ≫"))))})),a.createElement(m.t,{totalCount:t.allMicrocmsInformation.totalCount})),a.createElement(c.Z,null))))}},8707:function(e,t,n){n.d(t,{Cj:function(){return u},Dk:function(){return c},Mv:function(){return l},Ql:function(){return m},TN:function(){return s},X1:function(){return r},Y2:function(){return a},aN:function(){return o},o:function(){return i}});var a="_information-module--article--53723",r="_information-module--excerpt--ad112",l="_information-module--footer--104b0",o="_information-module--inner--a8418",i="_information-module--mainInner--4fa18",c="_information-module--more--9cba1",m="_information-module--pagination__item--5d1a8",u="_information-module--pagination__list--6c847",s="_information-module--title--6efd4"}}]);
//# sourceMappingURL=component---src-pages-information-js-7b4fbb61f47735685ab2.js.map