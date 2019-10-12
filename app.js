const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d'); 
const color = document.getElementsByClassName('jsColor');
const sizeRegulator = document.querySelector('#sizeRegulator');

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 15;
let painting = false;



function startPainting(){
    painting = true; 
}

function stopPaintting(){
    painting = false;
}

function onMouseMove(){
 const x = event.offsetX;
 const y = event.offsetY;

 if(!painting){
 ctx.beginPath();
 ctx.moveTo(x,y);
 }
 else{
 ctx.lineTo(x,y);
 ctx.stroke();
}

}

function handleColor(event){
    const changeColor = event.target.style.backgroundColor;
    ctx.strokeStyle = changeColor;
    console.log(ctx.strokeStyle);
        }
 
function brushSize(){
    const Size = event.target.value;
    ctx.lineWidth = Size;
    console.log(event.target.value);
}
    

if (canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPaintting);
    canvas.addEventListener("mouseleave",stopPaintting);
}

if(color){
Array.from(color).forEach(color => { color.addEventListener("click",handleColor)
});
}

if(sizeRegulator){
sizeRegulator.addEventListener('change',brushSize)
}
