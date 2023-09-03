const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getcontext("2d");
const retry = document.querySelector("#retry");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardbackground = "white";
const snakeColor = "balck";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [{x:unitSize, y:0},
    {x:unitSize*2, y:0},
    {x:unitSize*3, y:0},
    {x:unitSize*4, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown",changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createFood(){
function randomFood(min,max){
const ranNum = math.round((manth.random() * (min - max) + min) / unitSize)*unitSize;
return ranNum
}
foodX = randomFood(0, gameWidth - unitSize);
foodY = randomFood(0, gameWidth - unitSize);
};

function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameover(){};
function displayGameover(){};
function resetgame(){};