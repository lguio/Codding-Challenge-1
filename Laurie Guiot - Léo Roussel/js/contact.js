var actif=0;
function afficher (){
    if(actif==0){
        document.getElementById("").classList.add("on");
        document.getElementById("").classList.add("content-hide");
        document.getElementById("").style.transition = "1s ease";
        actif=1;
    }
    else{
        document.getElementById("").classList.remove("on");
        document.getElementById("").classList.remove("content-hide");
        document.getElementById("").style.transition = "1s ease";
        actif=0;
    }
}