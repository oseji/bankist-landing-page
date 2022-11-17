"use strict";

// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const theHeader = document.querySelector(".header");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((button) => button.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//IMPLEMENTING SMOOTH SCROLLING
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

//PAGE NAVIGATION
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//BUILDING THE TABBED COMPONENT
const tabs = document.querySelector(".operations__tab-container");
const operationBtns = document.querySelectorAll(".operations__tab");
const allContentTabs = document.querySelectorAll(".operations__content");

tabs.addEventListener("click", function (e) {
  const clickedTab = e.target.closest(".operations__tab");

  //guard clause
  if (!clickedTab) return;

  //remove active tab class from all tabs
  operationBtns.forEach((i) => i.classList.remove("operations__tab--active"));

  //toggle active tab class onto the clicked tab
  clickedTab.classList.toggle("operations__tab--active");

  //get the content tab dataset value to add the active content class to the corresponding clicked tab
  const activeTab = document.querySelector(`.operations__content--${clickedTab.dataset.tab}`);

  //remove the active content class
  allContentTabs.forEach((i) => i.classList.remove("operations__content--active"));

  //add the active content class to the corresponding tab
  activeTab.classList.add("operations__content--active");
});

//MENU FADE ANIMATION
const nav = document.querySelector(".nav");

const navLinkHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    //find origin of the event
    const link = e.target;

    //find the navLink siblings in the nav
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        //change the opacity of the navLinks that are not the immediate link being hovered on
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", (e) => navLinkHover(e, 0.5));
nav.addEventListener("mouseout", (e) => navLinkHover(e, 1));
