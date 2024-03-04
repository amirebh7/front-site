function myFun(){
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
         x.className += " responsive";  //fasle bayad bezarim ta be nav nachasbe
    }
    else{
        x.className = "nav";
    }
}
