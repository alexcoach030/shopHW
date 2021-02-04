document.querySelector(".header-menu-dropdown").onclick = function (){
  document.querySelector(".dropdown-background").classList.add("dropdown-background-open");
}

document.querySelector(".bem-closing__menubtn").onclick = function (){
  document.querySelector(".dropdown-background").classList.remove("dropdown-background-open");
}

