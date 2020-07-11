let i = 0;
let arrayColore = ["blue", "green", "yellow", "orange", "red", "black"]
const back = document.querySelector('button');

back.addEventListener('click', changeColor);

function changeColor() {
    if (i === 5)
        i = 0;
    else
        i += 1;
    document.body.style.backgroundColor = arrayColore[i];
    window.print(arrayColore[i]);
}