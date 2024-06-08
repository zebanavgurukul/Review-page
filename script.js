function toggleStar(event) {
  const clickedStar = event.target;
  const stars = clickedStar.parentElement.querySelectorAll(".star");
  let clickedIndex = Array.from(stars).indexOf(clickedStar);

  // Toggle the active class for each star and stars before it
  for (let i = 0; i < stars.length; i++) {
    if (i <= clickedIndex) {
      stars[i].classList.add("active");
    } else {
      stars[i].classList.remove("active");
    }
  }
}

// 2 star
function toggleStar_1(event) {
  const clickedStar = event.target;
  const star_1 = clickedStar.parentElement.querySelectorAll(".star_1");
  let clickedIndex = Array.from(star_1).indexOf(clickedStar);

  // Toggle the active1 class for each star and star_1 before it
  for (let i = 0; i < star_1.length; i++) {
    if (i <= clickedIndex) {
      star_1[i].classList.add("active1");
    } else {
      star_1[i].classList.remove("active1");
    }
  }
}

function toggleLike(iconId) {
  const icon = document.getElementById(iconId);
  const allIcons = document.querySelectorAll(".icon, .unlikeIcon");
  allIcons.forEach(function (item) {
    if (item.id !== iconId) {
      item.classList.remove("active");
    }
  });
  icon.classList.toggle("active");
}

const touchlist = document.querySelectorAll(".onclick");

touchlist.forEach((btnEL) => {
  btnEL.addEventListener("click", () => {
    document.querySelector(".special")?.classList.remove("special");
    btnEL.classList.add("special");
  });
});