
var Dust = function(){
	this.x = [];
	this.y = [];
	this.amp = [];
	this.alpha = 0;
	this.no = [];
}

Dust.prototype.num = 40;

Dust.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.x[i] = Math.random() * cWidth;
		this.y[i] = Math.random() * cHeight;
		this.amp[i] = 20 + Math.random() * 25;
		this.no[i] = Math.floor(Math.random()*dustPic.length);
	}
}

Dust.prototype.draw = function(){
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	for(var i=0;i<this.num;i++){
		var no = this.no[i];
		ctx1.drawImage(dustPic[no],this.x[i] + this.amp[i] * l,this.y[i]);
	}
}