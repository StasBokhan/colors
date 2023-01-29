const cols = document.querySelectorAll(".col");

// function generateRandomColor(){
//     const hexCodes = '0123456789ABCDEF'

//     let color = '';
//     for(let i = 0; i < 6; i++){
//         color+= hexCodes[Math.floor(Math.random()*hexCodes.length)];
//     }
//     return '#'+color;
// }

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() == "space") {
    setRandomColors();
  }
});

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type == "lock") {
    const node = 
    event.target.tagName.toLowerCase() == 'i' 
    ? event.target 
    : event.target.children[0];
    node.classList.toggle('fa-lock-open');
    node.classList.toggle('fa-lock');
  }  else if(type == 'copy'){
    copyToClickboard(event.target.textContent);
  }

});


function copyToClickboard(text){
    return navigator.clipboard.writeText(text);
}

function setRandomColors() {
  const colors = [];
  cols.forEach((elem) => {
    const isLocked = elem.querySelector('i').classList.contains('fa-lock')
    const text = elem.querySelector("h2");
    const but = elem.querySelector("button");
    const color = chroma.random();

    
    if(isLocked){
      colors.push(text.textContent)
      return;
    }
     
    text.textContent = color;
    elem.style.background = color;

    setTextColor(text, color);
    setTextColor(but, color);
  });
}
function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

function upfdateColorsHash(colors = []){
       document.location.has = colors.toString();
}

setRandomColors();
