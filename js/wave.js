
var Wave = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}

Wave.prototype.num = 10;

Wave.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

Wave.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = '#fff';
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			this.r[i] += 0.05 * deltaTime;
			if(this.r[i]>80){
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i]/80;
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctx1.closePath();
			ctx1.strokeStyle = 'rgba(255,255,255,' + alpha + ')';
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

Wave.prototype.born = function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
			return;
		}
	}
}