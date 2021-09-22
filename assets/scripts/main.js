function navScroll() {
  let pos = document.documentElement.scrollTop
  let ul = document.querySelector("#nav-list")

  if (pos > 200) {
    console.log(ul.children[1])
    ul.children[1].height = "20%";
    ul.children[1].style.backgroundColor = 'green';
    ul.children[1].setAttribute("color","green");
  }
}

document.body.onscroll = navScroll;


window.addEventListener("scroll", function(){
  let nav = document.querySelector("nav")
  let nav_list = document.querySelector("#nav-list")
  nav.classList.toggle("sticky", window.scrollY > 0);
  nav_list.classList.toggle("test", window.scrollY > 0);
  // console.log(nav_list.children[1]["flex-grow"])
  // nav_list.children[1]["flex-grow"] = "5";
  nav_list.children[1].setAttribute("flex-grow",5,window.scrollY > 0);
  
  
})
