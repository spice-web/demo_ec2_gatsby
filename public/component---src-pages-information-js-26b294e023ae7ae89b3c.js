"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[658],{4003:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children;return a.createElement("h2",{class:"headline--title"},t)}},3222:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1082),r=n(7294),i=function(){var e=(0,a.useStaticQuery)("4183784856").allMicrocmsInformation.edges;return r.createElement("div",{className:"_side-module--side--j+7T8"},r.createElement("h3",{className:"_side-module--headline--IoKz9"},"最近の投稿"),r.createElement("div",{className:"_side-module--section--HEoFT"},e.map((function(e){var t=e.node;return r.createElement("div",{className:"_side-module--title--KYxJD"},r.createElement(a.Link,{to:"/information/"+t.informationId},t.title))}))))}},9571:function(e,t,n){n.d(t,{t:function(){return l}});var a=n(5785),r=n(7294),i=n(1082),o=n(2182),l=function(e){var t,n,l=e.totalCount;return r.createElement("ul",{className:o.Cj},(t=1,n=Math.ceil(l/2),(0,a.Z)(Array(n-t+1)).map((function(e,n){return t+n}))).map((function(e,t){return r.createElement("li",{className:o.Ql,key:t},r.createElement(i.Link,{to:"/information/page/"+e},e))})))}},9357:function(e,t,n){var a=n(7294),r=n(1082);function i(e){var t,n,i=e.description,o=e.title,l=e.children,c=(0,r.useStaticQuery)("63159454").site,m=i||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?o+" | "+u:o),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:m}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:m}),l)}i.defaultProps={lang:"ja",meta:[],description:""},t.Z=i},7831:function(e,t,n){n.r(t);var a=n(7294),r=n(1082),i=n(7619),o=n(9357),l=n(4003),c=n(3222),m=n(9571),u=n(2182);t.default=function(e){var t=e.data;return a.createElement(i.Z,null,a.createElement(o.Z,{title:"インフォーメーション"}),a.createElement(l.Z,null,"INFORMATION",a.createElement("span",null,"新着情報")),a.createElement("div",{className:"content__wrap content__pd"},a.createElement("div",{className:u.aN},a.createElement("div",{className:u.o},t.allMicrocmsInformation.edges.map((function(e){var t=e.node;return a.createElement("div",{className:u.Y2},a.createElement("div",{className:u.TN},a.createElement(r.Link,{to:t.informationId},t.title)),a.createElement("p",{className:u.X1},t.excerpt),a.createElement("ul",{className:u.Mv},a.createElement("li",null,t.date),a.createElement("li",null,t.category.category),a.createElement("li",{className:u.Dk},a.createElement(r.Link,{to:t.informationId},"MORE ≫"))))})),a.createElement(m.t,{totalCount:t.allMicrocmsInformation.totalCount})),a.createElement(c.Z,null))))}},2182:function(e,t,n){n.d(t,{Cj:function(){return u},Dk:function(){return c},Mv:function(){return i},Ql:function(){return m},TN:function(){return s},X1:function(){return r},Y2:function(){return a},aN:function(){return o},o:function(){return l}});var a="_information-module--article--U3Izt",r="_information-module--excerpt--rREjM",i="_information-module--footer--EEsKf",o="_information-module--inner--qEGFU",l="_information-module--mainInner--T6GLM",c="_information-module--more--nLoXB",m="_information-module--pagination__item--XRqHl",u="_information-module--pagination__list--bIRz5",s="_information-module--title--bv1CZ"}}]);
//# sourceMappingURL=component---src-pages-information-js-26b294e023ae7ae89b3c.js.map