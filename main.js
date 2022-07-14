function show(){
    document.getElementById('modal').style.display='block'
}
var x = document.getElementsByClassName('close-modal')[0];
x.onclick=function(){
document.getElementById('modal').style.display="none";
}

window.onclick=function(event){
if (event.target == document.getElementById('modal')){
    document.getElementById('modal').style.display="none";
}
}

// 
let menu = document.getElementsByClassName('menu-icon')[0];
menu.onclick=function(){
            document.getElementById('ul').style.display="block";
            menu.style.display="none"
}




// donation page form showing
function show_form(){
    if (document.getElementById('donate-form').style.display=='block'){
        document.getElementById('donate-form').style.display='none'
    }
    else{
        document.getElementById('donate-form').style.display='block';
    }
}

// About page function

function myFunction() {
    var x = document.getElementById("thisTopnav");
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
    var x = document.getElementById("thisTopnavv");
    if (x.className === "btn") {
      x.className += " responsive";
    } else {
      x.className = "btn";
    }
  }