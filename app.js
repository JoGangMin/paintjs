const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d'); 
const color = document.getElementsByClassName('jsColor');
const sizeRegulator = document.querySelector('#sizeRegulator');
const mode = document.querySelector('#jsMode');

const INITIAL_COLOR ='#2c2c2c';
const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 15;

let painting = false;
let fill = false;


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
    ctx.fillStyle = changeColor;
    console.log(ctx.strokeStyle);
        }
 
function brushSize(){
    const Size = event.target.value;
    ctx.lineWidth = Size;
    console.log(event.target.value);
}
 
function fillPaint (){
    if(!fill){ // if fill=false
        fill = true;
        mode.innerText = "채우기";
    }
    else{
        fill = false;
        mode.innerText = "브러쉬";
    
    }
}

function fillingCanvas(){
    if(fill){
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}

if (canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPaintting);
    canvas.addEventListener("mouseleave",stopPaintting);
    canvas.addEventListener('click',fillingCanvas);
}

if(color){
Array.from(color).forEach(color => { color.addEventListener("click",handleColor)
});
}

if(sizeRegulator){
sizeRegulator.addEventListener('change',brushSize)
}

if(mode){
    mode.addEventListener('click',fillPaint)
}
