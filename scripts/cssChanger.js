function changerCSS(){

    var O_baliseMetaCss = document.getElementById("css");
    var S_css = O_baliseMetaCss.getAttribute("href");

    if(S_css == "../css/style.css"){
        console.log("Le CSS utilisé est :" + S_css);
        O_baliseMetaCss.setAttribute("href","../css/style2.css");
        console.log("Maintenant c'est: style2.css");
    }else{
        console.log("Le CSS utilisé est :" + S_css);
        O_baliseMetaCss.setAttribute("href","../css/style.css");
        console.log("Maintenant c'est: style.css");
    }

}