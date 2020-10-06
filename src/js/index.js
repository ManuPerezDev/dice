const button1 = document.getElementById("button-1");

button1.onclick = function(){
    const result = document.getElementById("result-1");
    result.innerHTML = Math.floor((Math.random() * 6) + 1);
}

const button2 = document.getElementById("button-2");

button2.onclick = function(){
    const result = document.getElementById("result-2");
    result.innerHTML = Math.floor((Math.random() * 6) + 1);
}

const button3 = document.getElementById("button-3");

button3.onclick = function(){
    const result = document.getElementById("result-3");
    result.innerHTML = Math.floor((Math.random() * 6) + 1);
}