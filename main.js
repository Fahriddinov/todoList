let body = document.querySelector("body");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let box = document.querySelector(".box-text");




form.addEventListener  ("submit", (e) => {
    let p = document.createElement("p");
    e.preventDefault();

    let random = Math.ceil(Math.random() * 1000);

    p.innerText = input.value;
    form.append(box) 
    box.appendChild(p);
    input.value = "";

    btn2.addEventListener("click", () => {
        p.remove();
    })

    p.style.fontSize = "20px";
    p.style.background = `#${random}`;
    
})