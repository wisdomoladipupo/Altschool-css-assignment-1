const burger = document.getElementById("svg");
const navlist = document.querySelector(".navList");

burger.addEventListener("click", () => {
    if (navlist.style.display === "none" || navlist.style.display === "") {
      navlist.style.display = "block";
    } else {
      navlist.style.display = "none";
    }
});
