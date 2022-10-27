import './src/styles/global/_ress.scss';
import './src/styles/global/_global.scss';

export const onRouteUpdate = ({ location }) => {
  document.body.classList.remove("noneScroll");

  const toggler = document.querySelector(".drawer__btn");
  const bg   = document.querySelector('.drawer__bg');
  const btn  = document.querySelector('.drawer__btn');
  const cover = document.querySelector('.cover');
  const menu = document.querySelector('.drawer__menu');
  // 一番上のコピー
  const obi  = document.querySelector('.header__right--time');


  window.addEventListener("click", event => {
    if(event.target.className == "cover" || event.target.className == "cover") {
      document.body.classList.add("noneScroll");
      cover.classList.add("close");
      cover.classList.remove("cover");
      btn.classList.remove("drawer__btn");
      btn.classList.add("drawer__btn__close");
      bg.classList.toggle("active");
      menu.classList.toggle("active");
      obi.classList.toggle("active");

    } else if (event.target.className == "close" || event.target.className == "close") {
      document.body.classList.remove("noneScroll");
      cover.classList.remove("close");
      cover.classList.add("cover");
      bg.classList.toggle("active");
      btn.classList.add("drawer__btn");
      btn.classList.remove("drawer__btn__close");
      menu.classList.toggle("active");
      obi.classList.toggle("active");
      
    } else if (event.target.className == "link" || event.target.className == "link") {
      window.location.reload();
    }
  
  });


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

};