const form = document.getElementById('form');
const outpu = document.getElementById('output');

form.addEventListener("submit", function(event){
    event.preventDefault();
    const val = document.getElementById('userval').value 
    // console.log(val);
    outpu.innerHTML = "you're thinking about  " + val;
    
})