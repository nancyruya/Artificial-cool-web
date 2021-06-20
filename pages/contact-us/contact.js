/*
! Show more button with animation
*/
const moreInfo = document.querySelector(".more-info");
const moreContainer = document.querySelector(".more-container");
const closeBtn = document.querySelector(".close");
moreInfo.addEventListener("click", () => {
  moreContainer.classList.add("show");
  moreInfo.classList.add("hide");
});
closeBtn.addEventListener('click' , () => {
    moreContainer.classList.remove("show");
    moreInfo.classList.remove("hide");
})
