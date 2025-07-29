let generate = document.querySelector("#generate");
generate.addEventListener("click", function() {
    let header = document.querySelector("h1");
    let output = generatecolor();
    header.innerText = output;
    let dv = document.querySelector("#answer");
    console.log(output);
    dv.style.backgroundColor = output;
    console.log("color generated");

});

function generatecolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}