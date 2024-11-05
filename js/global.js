import { setDetails } from "./details.js";
import { headerSetup, setupBackToTopButton } from "./header.js";

function miseEnPlace() {
  headerSetup();
  setDetails();
  setupBackToTopButton();
}

function check_go_to_top() {
  let allScrollDown = document.querySelectorAll(".scroll-down");
  allScrollDown.forEach((scrollDown) => {
    if (window.pageYOffset < 10) {
      scrollDown.style.opacity = "0";
    } else {
      scrollDown.style.opacity = "100%";
    }
  });
}

window.addEventListener("load", miseEnPlace, false);

window.addEventListener("scroll", check_go_to_top);
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    check_go_to_top();
  }, 500);
});
