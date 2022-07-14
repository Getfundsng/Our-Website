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


let menu = document.getElementsByClassName('menu-icon')[0];
menu.onclick=function(){
            document.getElementById('ul').style.display="block";
            menu.style.display="none"
}