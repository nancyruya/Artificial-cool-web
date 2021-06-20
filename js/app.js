//*Parallax Background Effect//
const title = document.querySelector(".title");
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerHeight - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
  this.querySelectorAll(".layer2").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerHeight - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    layer.style.transform = `rotate(180deg) translateX(${x}px) translateY(${y}px)`;
  });
  this.querySelectorAll(".planet").forEach((planet) => {
    const speed = planet.getAttribute("data-speed");

    const x = (window.innerHeight - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    planet.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

//*Go Down Btn Function//
const goDownBtn = document.querySelector(".go-down");
goDownBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 930,
    behavior: "smooth",
  });
});

//*Scroll Animation//
ScrollOut({
  targets:
    ".creator-img , .desc-all , .section-title , .moon1 , .projects-list , .projects-title , .projects-content , .skills-title , .support , .copyright-name , .copyright-page",
});

//*Menu animation show/hide //
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-full");
const navBar = document.querySelector(".nav-bar");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
});

//*Nav Bar scroll animation //
function navScrollAnimation() {
  if (window.pageYOffset >= 600) {
    navBar.classList.add("anim");
  } else if (window.pageYOffset < 600) {
    navBar.classList.remove("anim");
  }
}
window.addEventListener("scroll", navScrollAnimation);

//*Tabs function //
function _class(name) {
  return document.getElementsByClassName(name);
}
let tabPanes = _class("list")[0].getElementsByTagName("li");
let tabBody = document.getElementsByClassName("projects-content")[0];
for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    _class("list")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    tabPanes[i].classList.add("active");

    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByClassName("tabs")[i].classList.add("active");
  });
}

//*H1 (title) hide in scroll down //

function hideTitle() {
  if (window.pageYOffset >= 600) {
    title.classList.add("hide");
  } else {
    title.classList.remove("hide");
  }
}
window.addEventListener("scroll", hideTitle);

//*Skills bars animation start on scroll in it //
const skillsContainer = document.querySelector(".skills-set-container");
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
  };
}
let skillsOffset = getOffset(skillsContainer).top;

function skillsAnimation() {
  if (window.pageYOffset >= skillsOffset / 1.3) {
    skillsContainer.classList.add("animate");
  } else {
    skillsContainer.classList.remove("animate");
  }
}
window.addEventListener("scroll", skillsAnimation);

//*Go to top button function //
const goTop = document.querySelector(".go-top");
function goTopBtn() {
  if (window.pageYOffset >= 600) {
    goTop.classList.add("show");
  } else {
    goTop.classList.remove("show");
  }
}
window.addEventListener("scroll", goTopBtn);

goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

$(window).on("load", () => {
  setTimeout(() => {
    $(".loading-screen").addClass("complete");
  }, 3000);
});
