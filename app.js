const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d'); 
const color = document.getElementsByClassName('jsColor');

canvas.width = 700;
canvas.height = 700;

let painting = false;

ctx.strockStyle = '#2c2c2c';
ctx.lineWidth = 2.5;


function startPainting(){
    painting = true;
    
}

function stopPaintting(){
    painting = false;
}

function onMouseMove(){
 //그림그리기    
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
    const color = event.target.style.backgroundColor;
    console.log(color);
    ctx.strockStyle = color;
        }
 

if (canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPaintting);
    canvas.addEventListener("mouseleave",stopPaintting);
}
Array.from(color).forEach(color => { color.addEventListener("click",handleColor)
});

console.log(ctx.strockStyle)