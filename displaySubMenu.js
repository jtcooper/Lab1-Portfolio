function displaySubMenu(subHead) {
    var x = document.getElementsByClassName("submenu");
    var i;
    // Initially, [element].style.display will have no value
    if (!x[0].style.display || x[0].style.display === "none") {
        //document.getElementById("test").innerHTML = "success";
        if (document.getElementById(subHead).id === "subhead1") {
            document.getElementById(subHead).innerHTML = "Projects &#9662;";
        }
        document.getElementById("")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    }
    else {
        if (document.getElementById(subHead).id === "subhead1") {
            document.getElementById(subHead).innerHTML = "Projects &#9652;";
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
}