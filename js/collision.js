function momFruitsCollision(){
	if(data.gameover){
		return
	}
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			var dis = caculateDistance(mom.x,mom.y,fruit.x[i],fruit.y[i]);
			if(dis<800){
				fruit.dead(i);
				data.fruitNum++;
				mom.momBodyIndex++;
				if(mom.momBodyIndex>7){
					mom.momBodyIndex = 7;
				}
				if(fruit.fruitType[i]=='blue'){
					data.double = 2;
				}
				wave.born(mom.x,mom.y);
			}
		}
	}
}

function momBabyCollision(){
	var l = caculateDistance(mom.x,mom.y,baby.x,baby.y);
	if(l<900 && data.fruitNum && !data.gameover){
		//baby recover
		baby.babyBodyIndex = 0;
		mom.momBodyIndex = 0;
		halo.born(baby.x,baby.y);
		data.addScore();
	}
}