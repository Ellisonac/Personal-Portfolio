// function navScroll() {
//   let pos = document.documentElement.scrollTop
//   let ul = document.querySelector("#nav-list")

//   if (pos > 200) {
//     console.log(ul.children[1])
//     ul.children[1].height = "20%";
//     ul.children[1].style.backgroundColor = 'green';
//     ul.children[1].setAttribute("color","green");
//   }
// }

// document.body.onscroll = navScroll;


window.addEventListener("scroll", function(){
  let header = document.querySelector("#head-block")
  // let nav_list = document.querySelector("#nav-list")
  header.classList.toggle("sticky", window.scrollY > 0);
  


})
