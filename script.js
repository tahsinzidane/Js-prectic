let box = document.getElementById("box");
        
    box.addEventListener("click", Event => {
        Event.target.style.backgroundColor = "tomato";
        Event.target.textContent = "OUCH 🤕";
    })

    box.addEventListener("mouseover", Event => {
        Event.target.style.backgroundColor = "yellow";
        Event.target.textContent = "don't do it 😲";
    })

    box.addEventListener("mouseout", Event => {
        Event.target.style.backgroundColor = "lightgreen";
        Event.target.textContent = "click me 😀";
    })

let hdng = document.querySelector("h1");

hdng.addEventListener("mouseover", function(){
    hdng.innerHTML = "swing in 1s";

})

hdng.addEventListener("mouseout", function(){
    hdng.innerHTML = "mood....";
})


