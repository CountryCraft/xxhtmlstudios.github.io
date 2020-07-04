var btn = document.querySelector(".btn-action") ;
var darkMode = 'dark-mode'

if(localStorage.getItem(darkMode)) {
    btn.checked = true;
    document.body.classList.add("change-color");
} else {
    btn.checked = false;
    document.body.classList.remove("change-color");
}

btn.addEventListener("change", function(){   
    if(document.body.classList.contains("change-color")) {
        document.body.classList.remove("change-color");
        localStorage.removeItem(darkMode)
    } else {
        document.body.classList.add("change-color");
        localStorage.setItem(darkMode, true)
    }
}) 