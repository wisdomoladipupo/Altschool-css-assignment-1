document.addEventListener("DOMContentLoaded",() => {
  const burger = document.getElementById("svg")

  const   navlist = document.querySelector(".navList")
  
  burger.addEventListener("click", (e) => {
      e.stopPropagation()
      if(navlist.style.display === "none" || navlist.style.display === ""){
          navlist.style.display = "block"
      } else {
          navlist.style.display = "none"
      }
  })
  
  document.addEventListener("click",(e) => {
      if (navlist.style.display === "block"){
          navlist.style.display = "none"
      }
  })
  
  navlist.addEventListener("click",(e) => {
      e.stopPropagation()
  })
})

