
var Coder = function(){
	this.x;
	this.y;
}

Coder.prototype.init = function(){
	this.x = cWidth - 15;
	this.y = cHeight - 16;
}

Coder.prototype.draw = function(){
	ctx2.save();
	ctx2.fillStyle = '#fff';
	ctx2.font = '15px arial';
	ctx2.textAlign = "right";
	ctx2.fillText("Coded by Dean Han",this.x,this.y);
	ctx2.restore();
}