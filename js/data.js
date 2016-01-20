var Data = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameover = false;
	this.alpha = 0;
	this.gameoverY = cHeight * 0.5 - 80;
}
Data.prototype.reset = function(){
	this.fruitNum = 0;
	this.double = 1;
}
Data.prototype.draw = function(){
	var w = cWidth,h = cHeight;
	ctx1.fillStyle = '#fff';
	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";
	ctx1.fillText("Score "+this.score,w * 0.5,h-20);
	ctx1.save();
	if(this.gameover){
		this.gameoverY += 0.3 * deltaTime;
		if(this.gameoverY>cHeight * 0.5){
			this.gameoverY = cHeight * 0.5;
		}
		this.alpha += 0.001 * deltaTime;
		if(this.alpha>1){
			this.alpha = 1;
		}
		ctx1.fillStyle = 'rgba(255,255,255,' + this.alpha + ')';
		ctx1.shadowBlur = 10;
		ctx1.font = "50px Verdana";
		ctx1.shadowColor = '#fff';
		ctx1.fillText("GAMEOVER",w * 0.5,this.gameoverY);
	}
	ctx1.restore();
}
Data.prototype.addScore = function(){
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}