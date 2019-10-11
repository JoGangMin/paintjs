const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d'); 

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}
function onMouseUp(){
     stopPainting();
}
function onMouseLeave(){
     stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMousDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",onMouseLeave);
}

// function Test_coordnets(){
//     console.log()//현제 좌표?
// }

// function mousOnCanvas(){
//     canvas.addEventListener("",)
// }

// console.log(ctx);