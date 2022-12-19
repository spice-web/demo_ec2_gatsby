"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[818],{7709:function(e,t,a){var n=a(7294),l=a(1883),r=a(4626);t.Z=()=>{const e=(0,l.useStaticQuery)("1733432523"),t=e.allFaqReserveJson.edges,a=e.allFaqPaymentJson.edges,m=e.allFaqDepartureJson.edges,c=e.allFaqArrivalJson.edges,s=e.allFaqOtherJson.edges,i={padding:"10px 30px 10px 15px",borderRadius:"3px"};return n.createElement(n.Fragment,null,n.createElement("div",{className:r.nZ},n.createElement("h4",{className:"text-deep-gr mb--sm"},"予約に関して"),t.map((e=>n.createElement("dl",{class:"faq faq__def"},n.createElement("dt",{style:i,className:"headline--greenLabel faq__title"},e.node.title,n.createElement("button",{class:"question-button","aria-label":"予約に関して"},n.createElement("span",null),n.createElement("span",null))),n.createElement("dd",{class:"text-sm faq__answer"},e.node.contents))))),n.createElement("div",{className:r.nZ},n.createElement("h4",{className:"text-deep-gr mb--sm"},"支払い、料金に関して"),a.map((e=>n.createElement("dl",{class:"faq faq__def"},n.createElement("dt",{style:i,className:"headline--greenLabel faq__title"},e.node.title,n.createElement("button",{class:"question-button","aria-label":"支払い、料金に関して"},n.createElement("span",null),n.createElement("span",null))),n.createElement("dd",{class:"text-sm faq__answer"},e.node.contents,e.node.url&&n.createElement(l.Link,{to:e.node.url},e.node.link),e.node.more))))),n.createElement("div",{className:r.nZ},n.createElement("h4",{className:"text-deep-gr mb--sm"},"出発当日に関して"),m.map((e=>n.createElement("dl",{class:"faq faq__def"},n.createElement("dt",{style:i,className:"headline--greenLabel faq__title"},e.node.title,n.createElement("button",{class:"question-button","aria-label":"出発当日に関して"},n.createElement("span",null),n.createElement("span",null))),n.createElement("dd",{class:"text-sm faq__answer"},e.node.contents))))),n.createElement("div",{className:r.nZ},n.createElement("h4",{className:"text-deep-gr mb--sm"},"到着について"),c.map((e=>n.createElement("dl",{class:"faq faq__def"},n.createElement("dt",{style:i,className:"headline--greenLabel  faq__title"},e.node.title,n.createElement("button",{class:"question-button","aria-label":"到着について"},n.createElement("span",null),n.createElement("span",null))),n.createElement("dd",{class:"text-sm faq__answer"},e.node.contents)))),n.createElement("h4",{className:"text-deep-gr mb--sm"},"その他"),s.map((e=>n.createElement("dl",{class:"faq faq__def"},n.createElement("dt",{style:i,class:"headline--greenLabel faq__title"},e.node.title,n.createElement("button",{class:"question-button","aria-label":"その他"},n.createElement("span",null),n.createElement("span",null))),n.createElement("dd",{class:"text-sm faq__answer"},e.node.contents,e.node.url&&n.createElement(l.Link,{to:e.node.url},e.node.link),e.node.more))))))}},4768:function(e,t,a){var n=a(7294),l=a(2513);t.Z=e=>{let{children:t}=e;return n.createElement("div",{className:l.re},n.createElement("div",{className:l.aN},t))}},1992:function(e,t,a){a.r(t);var n=a(7294),l=a(1883),r=a(223),m=a(3811),c=a(7709),s=a(4768),i=a(8894),d=a(2618);t.default=()=>n.createElement(r.Z,null,n.createElement(m.Z,{title:"お問い合わせ",description:"サンパーキングへのお問い合わせページ"}),n.createElement("h2",{class:"headline--title"},"INQUIRY",n.createElement("span",null,"お問い合わせ")),n.createElement("div",{className:"content__wrap content__pd"},n.createElement("div",{className:"content__inner --sm"},n.createElement("p",{className:"pg--md mb--lg"},"各店舗のご利用・ご予約に関するお問い合せ、サンパーキング各店舗のご利用・ご予約に関するお問い合わせは、下記メールフォームまたはサン予約センター TEL. 0476-33-1123 にてお受けいたします。 ご質問・ご要望にはなるべく迅速にお答えいたします。",n.createElement("br",null),"なお、ご入力いただきましたお客様の個人情報および記述内容は、内容の確認ならびにお客様への回答のために 必要な範囲でのみ利用させていただきます。"),n.createElement("p",{className:"text-center text-deep-gr mb--xs"},n.createElement(l.Link,{to:"/policy"},">>>サイトポリシー")),n.createElement("p",{className:"text-center text-xs mb--lg"},"必須の欄は必ずご記入の上お問い合わせください。",n.createElement("br",null),"漢字・カナは全角、半角数字、半角ハイフンをご使用ください。"),n.createElement("p",{className:"text-center text-deep-gr mb--xxl"},"お問い合わせの前に",n.createElement("button",{className:i.K6,onClick:()=>(0,d.Z)("#faq")},"よくあるお問い合わせ"),"の",n.createElement("br",{className:"br_maxsm"}),"ご確認もお願いします。")),n.createElement(s.Z,null,n.createElement("div",{className:"content__inner--xs"},n.createElement("form",{method:"post",action:""},n.createElement("label",{for:"select",htmlFor:"select"},"お問い合わせ先"),n.createElement("select",{name:"select",id:"select",size:"1",required:!0},n.createElement("option",{value:"",hidden:!0},"選択してください"),n.createElement("option",{value:"サンパーキング成田店"},"サンパーキング成田店"),n.createElement("option",{value:"その他"},"その他")),n.createElement("div",null,n.createElement("label",{htmlFor:"formName"},"お名前※必須"),n.createElement("input",{type:"text",name:"お名前",id:"formName",required:!0})),n.createElement("div",null,n.createElement("label",{htmlFor:"kana"},"フリガナ※必須"),n.createElement("input",{type:"text",name:"フリガナ",id:"kana",required:!0})),n.createElement("div",null,n.createElement("label",{htmlFor:"formTel"},"電話番号（数字のみハイフン無し）"),n.createElement("input",{type:"text",pattern:"^[0-9]{9,}$",maxlength:"11",inputmode:"numeric",name:"電話番号",id:"formTel"})),n.createElement("div",null,n.createElement("label",{htmlFor:"formFax"},"FAX番号（数字のみハイフン無し）"),n.createElement("input",{type:"text",pattern:"^[0-9]{9,}$",maxlength:"10",inputmode:"numeric",name:"FAX番号",id:"formFax"})),n.createElement("div",null,n.createElement("label",{htmlFor:"email"},"メールアドレス※必須"),n.createElement("input",{type:"email",pattern:".+\\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]",name:"メールアドレス",id:"email",required:!0})),n.createElement("div",null,n.createElement("label",{htmlFor:"ContactUs"},"お問い合わせ内容※必須"),n.createElement("textarea",{name:"お問い合わせ内容",id:"ContactUs",rows:"3",placeholder:"",required:!0})),n.createElement("div",{className:i.MJ},n.createElement("input",{type:"checkbox",name:"プライバシーポリシーに同意する",id:"agreement",required:!0}),n.createElement("label",{for:"agreement",htmlFor:"agreement"},n.createElement(l.Link,{to:"/policy",className:"link_deco"},"プライバシーポリシー"),"に同意する※必須")),n.createElement("div",{class:""},n.createElement("button",{type:"submit",class:"button__submit","aria-label":"送信する"}))))),n.createElement(s.Z,null,n.createElement("div",{id:"faq",className:"LinkMargin"},n.createElement("div",{className:"content__inner--xs"},n.createElement("h3",{className:"text-deep-gr text-center mb--md"},"よくあるお問い合わせ"),n.createElement(c.Z,null))))))},4626:function(e,t,a){a.d(t,{Fs:function(){return r},N2:function(){return n},nZ:function(){return l}});var n="_faq-module--faqList--ec900",l="_faq-module--faqWrap--67759",r="_faq-module--linkOther--325e2"},8894:function(e,t,a){a.d(t,{K6:function(){return l},MJ:function(){return n}});var n="_form-module--checkbox--4af49",l="_form-module--linkBox--2fb74"},2513:function(e,t,a){a.d(t,{WK:function(){return r},aN:function(){return n},re:function(){return l}});var n="_grayContainer-module--inner--37233",l="_grayContainer-module--wrap--e4e3a",r="_grayContainer-module--wrap_sm--ad28c"}}]);
//# sourceMappingURL=component---src-pages-form-js-9c5c64ebb597e40b65f2.js.map