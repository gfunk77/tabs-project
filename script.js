"use strict";

// select elements

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// eventListener on parent (about)
about.addEventListener("click", function (e) {
  // create variable for the target - data-id
  const id = e.target.dataset.id;
  //   if the target is clicked...
  if (id) {
    // loop over the buttons and remove the 'active' class from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // add 'active' class to the target
    e.target.classList.add("active");
    // loop over the all the content and remove the active class
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // create a variable for the id
    const element = document.getElementById(id);
    // add 'active'
    element.classList.add("active");
  }
});
