import './src/styles/global/_ress.scss';
import './src/styles/global/_global.scss';

export const onRouteUpdate = ({ location }) => {

  



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