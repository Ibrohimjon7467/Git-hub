let icon = document.getElementById("icon");
icon.onclick = function() {
document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.src = "./light.png";
    }else{
        icon.src = "./dark.png";
    }
}