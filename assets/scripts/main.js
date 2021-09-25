
window.addEventListener("scroll", function(){
  let header = document.querySelector("#head-block")
  // let nav_list = document.querySelector("#nav-list")
  header.classList.toggle("sticky", window.scrollY > 0);
})
