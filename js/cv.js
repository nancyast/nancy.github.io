
var fluidcontainer = document.getElementsByClassName("fluidcontainer");
var indicators = document.getElementsByClassName("indicator");

function slideTo(event){
    var indicator = event.target;
    var index = indicator.getAttribute("data-slide-to");

    indicator.classList.add("activeLi");
    fluidcontainer[index].classList.add("active");
    fluidcontainer[index].classList.remove("inactive");

    for(var i = 0 ; i < fluidcontainer.length ; i++){
        if(i != index){
            fluidcontainer[i].classList.remove("active");
            fluidcontainer[i].classList.add("inactive");
            indicators[i].classList.remove("activeLi");
        }
    }
}


