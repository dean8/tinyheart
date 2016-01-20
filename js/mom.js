var Mom = function(){
	this.x;
	this.y;
	this.angle;
	this.momTailTimer;
	this.momTailIndex;
	this.momEyeTimer;
	this.momEyeInterval;
	this.momEyeIndex;
	this.momBodyIndex;
}

Mom.prototype.init = function(){
	this.x = cWidth * 0.5;
	this.y = cHeight * 0.5;
	this.angle = 0;
	this.momTailTimer = 0;
	this.momTailIndex = 0;
	this.momEyeTimer = 0;
	this.momEyeInterval = 1200;
	this.momEyeIndex = 0;
	this.momBodyIndex = 0;
}

Mom.prototype.draw = function(){
	this.momTailTimer += deltaTime;
	if(this.momTailTimer>60){
		this.momTailIndex = (++this.momTailIndex) % 8;
		this.momTailTimer %= 60;
	}
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer>this.momEyeInterval){
		this.momEyeIndex = (++this.momEyeIndex) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if(this.momEyeIndex==0){
			this.momEyeInterval = Math.random() * 2000 + 1800;
		}else{
			this.momEyeInterval = 200;
		}
	}
	this.x = lerpDistance(mx,this.x,0.9);
	this.y = lerpDistance(my,this.y,0.9);
	var deltaY = my - this.y,
		deltaX = mx - this.x,
		belta = Math.atan2(deltaY,deltaX) + Math.PI; 
	this.angle = lerpAngle(belta,this.angle,0.7);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var momTailIndex = this.momTailIndex,momEyeIndex = this.momEyeIndex,momBodyIndex = this.momBodyIndex;
	if(data.double==1){
		ctx1.drawImage(momBodyOrag[momBodyIndex],-momBodyOrag[momBodyIndex].width * 0.5,-momBodyOrag[momBodyIndex].height * 0.5);
	}else{
		ctx1.drawImage(momBodyBlue[momBodyIndex],-momBodyBlue[momBodyIndex].width * 0.5,-momBodyBlue[momBodyIndex].height * 0.5);
	}
	ctx1.drawImage(momEye[momEyeIndex],-momEye[momEyeIndex].width * 0.5,-momEye[momEyeIndex].height * 0.5);
	ctx1.drawImage(momTail[momTailIndex],-momTail[momTailIndex].width * 0.5 + 28,-momTail[momTailIndex].height * 0.5);
	ctx1.restore();
} 