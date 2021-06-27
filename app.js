const ball = document.querySelector(".ball");
const cont = document.querySelector(".container");
const ship = document.querySelector(".ship");
const blocks = document.querySelectorAll(".block");

let validBlocks = [];

console.log(blocks);

blocks.forEach((block,index)=>{
  validBlocks.push({
    "x1":block.getBoundingClientRect().x,
    "y1":block.getBoundingClientRect().y,
    "x2":block.offsetWidth+block.getBoundingClientRect().x,
    "y2":block.offsetHeight+block.getBoundingClientRect().y,
  })

})

validBlocks.forEach(block=>{
  const el = document.createElement("div");
  el.style.backgroundColor = "cyan";
  el.style.zIndex = "4";

  el.style.position = "absolute";
  el.style.top = block.x1;
  el.style.left = block.y1;
  el.style.width = block.x2-block.x1;
  el.style.height = block.y2-block.y1;


})

console.log(validBlocks)

const Xend = window.innerWidth;
const Yend = window.innerHeight;
let shipCordinate = null;
// console.log(Xend, Yend);

let i = 30,
  j = 30,
  a = 3,
  b = 3;

const interval = setInterval(ballMove, 1);

function ballMove() {
  ball.style.transform = `translate(${i}px,${j}px)`;

  Array.from(blocks).map((block)=>{
    if(i<=block.offsetLeft && i>=block.offsetRight)
      console.log(block.offsetRight)
  })
  i += a;
  j += b;
  if (i >= Xend - 20 || i <= 20) a = -a;
  if (j <= 20) b = -b;

  if (j >= Yend) {
    clearInterval(interval);
    setTimeout("location.reload(true);", 50);
  }
  if (
    shipCordinate &&
    i >= shipCordinate.x - 10 &&
    i <= shipCordinate.x + 110 &&
    shipCordinate.y <= j + 33
  )
    b = -b;
 
}

cont.addEventListener("mousemove", function (e) {
  shipCordinate = ship.getBoundingClientRect();
  ship.style.left = `${e.clientX - 50}px`;
});

