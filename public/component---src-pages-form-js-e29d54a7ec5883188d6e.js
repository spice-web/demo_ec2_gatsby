"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[818],{7709:function(e,t,n){var a=n(7294),l=n(1082),r=n(9723);t.Z=function(){var e=(0,l.useStaticQuery)("1733432523"),t=e.allFaqReserveJson.edges,n=e.allFaqPaymentJson.edges,m=e.allFaqDepartureJson.edges,c=e.allFaqArrivalJson.edges,s=e.allFaqOtherJson.edges,i={padding:"10px 30px 10px 15px",borderRadius:"3px"};return a.createElement(a.Fragment,null,a.createElement("div",{className:r.nZ},a.createElement("h4",{className:"text-deep-gr mb--sm"},"予約に関して"),t.map((function(e){return a.createElement("dl",{class:"faq faq__def"},a.createElement("dt",{style:i,className:"headline--greenLabel faq__title"},e.node.title,a.createElement("button",{class:"question-button","aria-label":"予約に関して"},a.createElement("span",null),a.createElement("span",null))),a.createElement("dd",{class:"text-sm faq__answer"},e.node.contents))}))),a.createElement("div",{className:r.nZ},a.createElement("h4",{className:"text-deep-gr mb--sm"},"支払い、料金に関して"),n.map((function(e){return a.createElement("dl",{class:"faq faq__def"},a.createElement("dt",{style:i,className:"headline--greenLabel faq__title"},e.node.title,a.createElement("button",{class:"question-button","aria-label":"支払い、料金に関して"},a.createElement("span",null),a.createElement("span",null))),a.createElement("dd",{class:"text-sm faq__answer"},e.node.contents,e.node.url&&a.createElement(l.Link,{to:e.node.url},e.node.link),e.node.more))}))),a.createElement("div",{className:r.nZ},a.createElement("h4",{className:"text-deep-gr mb--sm"},"出発当日に関して"),m.map((function(e){return a.createElement("dl",{class:"faq faq__def"},a.createElement("dt",{style:i,className:"headline--greenLabel faq__title"},e.node.title,a.createElement("button",{class:"question-button","aria-label":"出発当日に関して"},a.createElement("span",null),a.createElement("span",null))),a.createElement("dd",{class:"text-sm faq__answer"},e.node.contents))}))),a.createElement("div",{className:r.nZ},a.createElement("h4",{className:"text-deep-gr mb--sm"},"到着について"),c.map((function(e){return a.createElement("dl",{class:"faq faq__def"},a.createElement("dt",{style:i,className:"headline--greenLabel  faq__title"},e.node.title,a.createElement("button",{class:"question-button","aria-label":"到着について"},a.createElement("span",null),a.createElement("span",null))),a.createElement("dd",{class:"text-sm faq__answer"},e.node.contents))})),a.createElement("h4",{className:"text-deep-gr mb--sm"},"その他"),s.map((function(e){return a.createElement("dl",{class:"faq faq__def"},a.createElement("dt",{style:i,class:"headline--greenLabel faq__title"},e.node.title,a.createElement("button",{class:"question-button","aria-label":"その他"},a.createElement("span",null),a.createElement("span",null))),a.createElement("dd",{class:"text-sm faq__answer"},e.node.contents,e.node.url&&a.createElement(l.Link,{to:e.node.url},e.node.link),e.node.more))}))))}},4768:function(e,t,n){var a=n(7294),l=n(3177);t.Z=function(e){var t=e.children;return a.createElement("div",{className:l.re},a.createElement("div",{className:l.aN},t))}},1992:function(e,t,n){n.r(t);var a=n(7294),l=n(1082),r=n(7619),m=n(9357),c=n(7709),s=n(4768),i=n(4420),o=n(2618);t.default=function(){return a.createElement(r.Z,null,a.createElement(m.Z,{title:"お問い合わせ"}),a.createElement("h2",{class:"headline--title"},"INQUIRY",a.createElement("span",null,"お問い合わせ")),a.createElement("div",{className:"content__wrap content__pd"},a.createElement("div",{className:"content__inner --sm"},a.createElement("p",{className:"pg--md mb--lg"},"各店舗のご利用・ご予約に関するお問い合せ、サンパーキング各店舗のご利用・ご予約に関するお問い合わせは、下記メールフォームまたはサン予約センター TEL. 0476-33-1123 にてお受けいたします。 ご質問・ご要望にはなるべく迅速にお答えいたします。",a.createElement("br",null),"なお、ご入力いただきましたお客様の個人情報および記述内容は、内容の確認ならびにお客様への回答のために 必要な範囲でのみ利用させていただきます。"),a.createElement("p",{className:"text-center text-deep-gr mb--xs"},a.createElement(l.Link,{to:"/policy"},">>>サイトポリシー")),a.createElement("p",{className:"text-center text-xs mb--lg"},"必須の欄は必ずご記入の上お問い合わせください。",a.createElement("br",null),"漢字・カナは全角、半角数字、半角ハイフンをご使用ください。"),a.createElement("p",{className:"text-center text-deep-gr mb--xxl"},"お問い合わせの前に",a.createElement("button",{className:i.K6,onClick:function(){return(0,o.Z)("#faq")}},"よくあるお問い合わせ"),"の",a.createElement("br",{className:"br_maxsm"}),"ご確認もお願いします。")),a.createElement(s.Z,null,a.createElement("div",{className:"content__inner--xs"},a.createElement("form",{method:"post",action:"https://www.flexyform.com/f/1182875604167c7dcf13359e5c66df8294902e4c"},a.createElement("label",{for:"select",htmlFor:"select"},"お問い合わせ先"),a.createElement("select",{name:"select",id:"select",size:"1",required:!0},a.createElement("option",{value:"",hidden:!0},"選択してください"),a.createElement("option",{value:"サンパーキング成田店"},"サンパーキング成田店"),a.createElement("option",{value:"その他"},"その他")),a.createElement("div",null,a.createElement("label",{htmlFor:"formName"},"お名前※必須"),a.createElement("input",{type:"text",name:"お名前",id:"formName",required:!0})),a.createElement("div",null,a.createElement("label",{htmlFor:"kana"},"フリガナ※必須"),a.createElement("input",{type:"text",name:"フリガナ",pattern:"/\\A[ァ-ヴー]+\\z/u",id:"kana",required:!0})),a.createElement("div",null,a.createElement("label",{htmlFor:"formTel"},"電話番号（数字のみハイフン無し）"),a.createElement("input",{type:"text",pattern:"^[0-9]{9,}$",maxlength:"11",inputmode:"numeric",name:"電話番号",id:"formTel"})),a.createElement("div",null,a.createElement("label",{htmlFor:"formFax"},"FAX番号（数字のみハイフン無し）"),a.createElement("input",{type:"text",pattern:"^[0-9]{9,}$",maxlength:"10",inputmode:"numeric",name:"FAX番号",id:"formFax"})),a.createElement("div",null,a.createElement("label",{htmlFor:"email"},"メールアドレス※必須"),a.createElement("input",{type:"email",pattern:".+\\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]",name:"メールアドレス",id:"email",required:!0})),a.createElement("div",null,a.createElement("label",{htmlFor:"ContactUs"},"お問い合わせ内容※必須"),a.createElement("textarea",{name:"お問い合わせ内容",id:"ContactUs",rows:"3",placeholder:"",required:!0})),a.createElement("div",{className:i.MJ},a.createElement("input",{type:"checkbox",name:"プライバシーポリシーに同意する",id:"agreement",required:!0}),a.createElement("label",{for:"agreement",htmlFor:"agreement"},a.createElement(l.Link,{to:"/policy",className:"link_deco"},"プライバシーポリシー"),"に同意する※必須")),a.createElement("div",{class:""},a.createElement("button",{type:"submit",class:"button__submit","aria-label":"送信する"}))))),a.createElement(s.Z,null,a.createElement("div",{id:"faq",className:"LinkMargin"},a.createElement("div",{className:"content__inner--xs"},a.createElement("h3",{className:"text-deep-gr text-center mb--md"},"よくあるお問い合わせ"),a.createElement(c.Z,null))))))}},9723:function(e,t,n){n.d(t,{Fs:function(){return r},N2:function(){return a},nZ:function(){return l}});var a="_faq-module--faqList--7JACu",l="_faq-module--faqWrap--Z3Wbh",r="_faq-module--linkOther--Ml4mp"},4420:function(e,t,n){n.d(t,{K6:function(){return l},MJ:function(){return a}});var a="_form-module--checkbox--SvSUH",l="_form-module--linkBox--L7dC2"},3177:function(e,t,n){n.d(t,{WK:function(){return r},aN:function(){return a},re:function(){return l}});var a="_grayContainer-module--inner--NyM2L",l="_grayContainer-module--wrap--5OOl4",r="_grayContainer-module--wrap_sm--rSjDg"}}]);
//# sourceMappingURL=component---src-pages-form-js-e29d54a7ec5883188d6e.js.map