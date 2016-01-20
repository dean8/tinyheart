
var canvas1,canvas2,ctx1,ctx2,cWidth,cHeight;

var lastTime,deltaTime;

var bgPic = new Image();

var ane,fruit,mom,baby;

var mx,my;

var babyTail = [],babyEye = [],babyBody = [];

var momTail = [],momEye = [],momBodyOrag = [],momBodyBlue = [];

var data;

var wave,halo;

var dust,dustPic = [];

var coder;

window.requestAnimFrame = (function(){
	return window.requestAnimationFrame ||
		   window.webkitRequestAniamtionFrame ||
		   window.mozRequestAnimationFrame ||
		   window.oRequewstAnimationFrame ||
		   function(callback){
		   		setTimeout(callback,1000/60);
		   }
})();

document.body.onload = game;

function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	//获取canvas场景
	canvas1 = document.getElementById("canvas1");
	ctx1 = canvas1.getContext("2d");
	canvas2 = document.getElementById("canvas2");
	ctx2 = canvas2.getContext("2d");

	cWidth = canvas1.width;
	cHeight = canvas1.height;

	mx = cWidth * 0.5;
	my = cHeight * 0.5;

	bgPic.src = './src/background.jpg';

	for(var i=0;i<8;i++){
		babyTail[i] = new Image();
		babyTail[i].src = './src/babyTail' + i + '.png';
		momTail[i] = new Image();
		momTail[i].src = './src/babyTail' + i + '.png';
		momBodyOrag[i] = new Image();
		momBodyOrag[i].src = './src/bigSwim' + i + '.png';
		momBodyBlue[i] = new Image();
		momBodyBlue[i].src = './src/bigSwimBlue' + i + '.png';
	}

	for(var i=0;i<2;i++){
		babyEye[i] = new Image();
		babyEye[i].src = './src/babyEye' + i + '.png';
		momEye[i] = new Image();
		momEye[i].src = './src/babyEye' + i + '.png';
	}

	for(var i=0;i<20;i++){
		babyBody[i] = new Image();
		babyBody[i].src = './src/babyFade' + i + '.png';
	}

	for(var i=0;i<7;i++){
		dustPic[i] = new Image();
		dustPic[i].src = './src/dust' + i + '.png';
	}

	canvas1.addEventListener("mousemove",onMouseMove);

	data = new Data();

	ane = new Ane();
	ane.init();

	fruit = new Fruit();
	fruit.init();

	mom = new Mom();
	mom.init();

	baby = new Baby();
	baby.init();

	wave = new Wave();
	wave.init();

	halo = new Halo();
	halo.init();

	dust = new Dust();
	dust.init();

	coder = new Coder();
	coder.init();
}

function gameloop(){
	requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime>40){
		deltaTime = 40;
	}
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,cWidth,cHeight);
	mom.draw();
	baby.draw();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
	coder.draw();
	momFruitsCollision();
	momBabyCollision();
}

function onMouseMove(e){
	if(data.gameover){
		return;
	}
	if(e.offsetX || e.layerX){
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
	}
}