var Fruit = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.aneID = [];
	this.orange = new Image();
	this.blue = new Image();
}

Fruit.prototype.num = 30;

Fruit.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.spd[i] = Math.random()*0.01 + 0.005;
		var ran = Math.random();
		if(ran<0.2){
			this.fruitType[i] = 'blue';
		}else{
			this.fruitType[i] = 'orange';
		}
		this.born(i);
	}
	this.orange.src = './src/fruit.png';
	this.blue.src = './src/blue.png';
}

Fruit.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.fruitType[i]=='blue'){
				var pic = this.blue;
			}else{
				var pic = this.orange;
			}
			if(this.l[i]<=14){
				var aneID = this.aneID[i];
				this.x[i] = ane.headX[aneID];
				this.y[i] = ane.headY[aneID];
				this.l[i] += this.spd[i] * deltaTime;
			}else{
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i] < 10){
				this.alive[i] = false;
			}
		}
	}
}

Fruit.prototype.born = function(i){
	var aneID = Math.floor(Math.random()*ane.num);
	this.aneID[i] = aneID;
	this.l[i] = 0;
	this.alive[i] = true;
}

Fruit.prototype.dead = function(i){
	this.alive[i] = false;
}

function fruitMonitor(){
	var num = 0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			num++;
		}
	}
	if(num<15){
		sendFruit();
		return;
	}
}

function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}