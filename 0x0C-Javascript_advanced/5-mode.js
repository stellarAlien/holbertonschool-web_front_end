function changeMode(size, weight, transform, background, color){
    document.body.style.size = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color =color;
}
function main(){
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);
    document.querySelector('body').innerHTML = `
    <p>Welcome Holberton!</p>
    <button id='Spooky'>Spooky</button>
    <button id='Dark-Mode'>Dark Mode</button>
    <button id="Scream-Mode">Scream Mode</button>
    `;

    document.getElementById("Spooky").addEventListener("click", spooky);
    document.getElementById("Dark-Mode").addEventListener("click", darkMode);
    document.getElementById("Scream-Mode").addEventListener("click", screamMode);
}