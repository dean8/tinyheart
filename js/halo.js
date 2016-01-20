
var Halo = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}

Halo.prototype.num = 10;

Halo.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

Halo.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'rgba(205, 91, 0,1)';
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			this.r[i] += 0.05 * deltaTime;
			if(this.r[i]>50){
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i]/50;
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctx1.closePath();
			ctx1.strokeStyle = 'rgba(205, 91, 0,' + alpha + ')';
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

Halo.prototype.born = function(x,y){
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