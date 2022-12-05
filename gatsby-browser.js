import './src/styles/global/_ress.scss';
import './src/styles/global/_global.scss';

export const onRouteUpdate = ({ location }) => {
  
//   const toggler = document.querySelector(".drawer__btn");
//   const bg   = document.querySelector('.drawer__bg');
//   const btn  = document.getElementById('drawerBtn');
//   const cover = document.getElementById('coverOption');
//   const menu = document.querySelector('.drawer__menu');
//   // 一番上のコピー
//   const obi  = document.querySelector('.header__right--time');


//   window.addEventListener("click", event => {
//     if(event.target.className == "cover") {
      
//       cover.classList.add("close");
//       cover.classList.remove("cover");
//       document.body.classList.add("noneScroll");
//       btn.classList.remove("drawer__btn");
//       btn.classList.add("drawer__btn__close");
//       bg.classList.toggle("active");
//       // bg.classList.remove("nonActive");
//       menu.classList.toggle("active");
//       // menu.classList.remove("nonActive");
//       obi.classList.toggle("active");
//       // obi.classList.remove("nonActive");

//     } else if(event.target.className == "close") {
//       document.body.classList.remove("noneScroll");
//       cover.classList.remove("close");
//       cover.classList.add("cover");
//       bg.classList.toggle("active");
//       btn.classList.add("drawer__btn");
//       btn.classList.remove("drawer__btn__close");
//       menu.classList.toggle("active");
//       obi.classList.toggle("active");
//     } 
//   });

// // ハンバーガーメニューの中、リンクタグを全部取得
// const hamburger = document.querySelectorAll('.navigation__item a');
// const hamburgerA = Array.from(hamburger);
// // forEachで回す
// hamburgerA.forEach( function(element) {
//   // ハンバーガーメニュー内のリンクタグをクリックしたら
//   element.addEventListener('click',function(){
//     // ハンバーガーメニューのcheckedを外す
//     document.body.classList.remove("noneScroll");
//     cover.classList.remove("close");
//     cover.classList.add("cover");
//     bg.classList.remove("active");
//     // bg.classList.add("nonActive");
//     btn.classList.add("drawer__btn");
//     btn.classList.remove("drawer__btn__close");
//     menu.classList.remove("active");
//     // menu.classList.add("nonActive");
//     obi.classList.remove("active");
//     // obi.classList.add("nonActive");
//   })
// })

// // ハンバーガーメニューの中、リンクタグを全部取得
// const hamburgerTitle = document.querySelectorAll('.navigation__dttl');
// const hamburgerB = Array.from(hamburgerTitle);
// // forEachで回す
// hamburgerB.forEach( function(element) {
//   // ハンバーガーメニュー内のリンクタグをクリックしたら
//   element.addEventListener('click',function(){
//     // ハンバーガーメニューのcheckedを外す
//     document.body.classList.remove("noneScroll");
//     cover.classList.remove("close");
//     cover.classList.add("cover");
//     bg.classList.remove("active");
//     // bg.classList.add("nonActive");
//     btn.classList.add("drawer__btn");
//     btn.classList.remove("drawer__btn__close");
//     menu.classList.remove("active");
//     // menu.classList.add("nonActive");
//     obi.classList.remove("active");
//     // obi.classList.add("nonActive");
//   })
// })

 // FAQ表示非表示
  const faq = document.querySelectorAll(".faq")

  faq.forEach(function (question) {
    const button = question.querySelector(".question-button")
    if (!button) { return false; }
    button.addEventListener("click", function () {
      faq.forEach(function (eachQuestion) {
        if (eachQuestion !== question) {
          eachQuestion.classList.remove("show-answer")
        }
      })
      question.classList.toggle("show-answer")
    })
  });

  window.addEventListener("scroll", function () {
    const topBtn = document.getElementById("header");
    const scroll = window.pageYOffset;
    if (scroll > 200) {
      topBtn.classList.add("fixed");
    } else topBtn.classList.remove("fixed");
  });

  window.addEventListener('scroll', () => {
      const elem = document.getElementById('scrollBtn');
      const docHeight = document.body.clientHeight;
      const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollPos = document.documentElement.clientHeight + scrollCount;
      const footerHeight = document.querySelector('footer').clientHeight;
      const scrolled = window.pageYOffset;
      if (scrolled > 50) {
        elem.style.opacity = 1;
      } else if (docHeight - scrollPos <= footerHeight) {
        elem.style.position = 'absolute';
        elem.style.bottom = footerHeight - 55 + 'px';      
      } else {
        elem.style.position = 'fixed';
        elem.style.bottom = 75 + 'px';
      }
 });

};
