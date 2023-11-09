var foldBtns = document.getElementsByClassName("fold-button");


for (var i = 0; i<foldBtns.length; i++){
    foldBtns[i].addEventListener("click", function(e) {
        if (e.target.classList.contains("folded")){
            e.target.innerHTML = "Свернуть";
            e.target.classList.remove("folded");
            var displayState = "";
        } else {
            e.target.innerHTML = "Развернуть";
            e.target.classList.add("folded");
            var displayState = "none";
        }
        event.target.parentElement.getElementsByClassName('post-author')[0].style.display = displayState;
        event.target.parentElement.getElementsByClassName('post-datetime')[0].style.display = displayState;
        event.target.parentElement.getElementsByClassName('post-text')[0].style.display = displayState;
    });
}