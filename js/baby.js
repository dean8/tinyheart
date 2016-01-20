
var Baby = function(){
	this.x;
	this.y;
	this.angle;
	this.babyTailTimer;
	this.babyTailIndex;
	this.babyEyeTimer;
	this.babyEyeIndex;
	this.babyEyeInterval;
	this.babyBodyTimer;
	this.babyBodyIndex;
}

Baby.prototype.init = function(){
	this.x = cWidth*0.5 - 50;
	this.y = cHeight * 0.5 + 50;
	this.angle = 0;
	this.babyTailTimer = 0;
	this.babyTailIndex = 0;
	this.babyEyeTimer = 0;
	this.babyEyeIndex = 0;
	this.babyEyeInterval = 1000;
	this.babyBodyTimer = 0;
	this.babyBodyIndex = 0;
}

Baby.prototype.draw = function(){
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer>50){
		this.babyTailIndex = (++this.babyTailIndex)%8;
		this.babyTailTimer %= 50;
	}
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer>this.babyEyeInterval){
		this.babyEyeIndex = (++this.babyEyeIndex) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;
		if(this.babyEyeIndex==1){
			this.babyEyeInterval = 200;
		}else{
			this.babyEyeInterval = Math.random() * 1500 + 2000;
		}
	}
	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer>300){
		this.babyBodyIndex = ++this.babyBodyIndex;
		this.babyBodyTimer %= 300;
		if(this.babyBodyIndex>19){
			this.babyBodyIndex = 19;
			//game over
			data.gameover = true;
		}
	}
	this.x = lerpDistance(mom.x+30,this.x,0.98);
	this.y = lerpDistance(mom.y+30,this.y,0.98);
	var deltaX = mom.x - this.x,
		deltaY = mom.y - this.y,
		belta = Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle = lerpAngle(belta,this.angle,0.7);
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var babyTailIndex = this.babyTailIndex,babyEyeIndex = this.babyEyeIndex,babyBodyIndex = this.babyBodyIndex;
	ctx1.drawImage(babyBody[babyBodyIndex],-babyBody[babyBodyIndex].width * 0.5,-babyBody[babyBodyIndex].height * 0.5);
	ctx1.drawImage(babyTail[babyTailIndex],-babyTail[babyTailIndex].width * 0.5+23,-babyTail[babyTailIndex].height * 0.5);
	ctx1.drawImage(babyEye[babyEyeIndex],-babyEye[babyEyeIndex].width * 0.5,-babyEye[babyEyeIndex].height * 0.5);
	ctx1.restore();
}