const burger = document.getElementById("svg");
const navlist = document.getElementsByClassName("navList");

burger.addEventListener("click", () => {
  navlist.forEach((ele) => {
    if (ele.style.display === "none" || ele.style.display === "") {
      navlist.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
});
