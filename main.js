var btn = document.querySelector(".btn-action") ;
var darkMode = 'dark-mode'
var modalKey = 'main-modal'

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


if(localStorage.getItem(modalKey)) {
   document.querySelector('.xmodal-wrapper').classList.add('hidden')
}


var btnModalCerrar = document.querySelector('.btn-cerrar-modal');
btnModalCerrar.addEventListener('click', function(e) {
    localStorage.setItem(modalKey, true)
    var modal = e.target.closest('.xmodal-wrapper')
    modal.classList.add('hidden')
})