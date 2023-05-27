var header = document.getElementsByTagName('header');

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        header[0].setAttribute("class", "header-active");
    }
    else{
        header[0].removeAttribute("class")
    }
} 

window.onscroll = scrollFunction;