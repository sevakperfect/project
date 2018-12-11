var LivingCreature = require("./LivingCreature")
module.exports =class Dinozavr extends LivingCreature{
    
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    
    choosecell(ch){
    
        this.getNewDirections();
      return  super.choosecell(ch);
    }
    mult() {
       
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 20) {




            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var newXt = new Dinozavr(newX, newY, 1);
            dinoArr.push(newXt);

        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        
        if (empty) {
            this.energy--;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
       
        this.multiply++;    
        var gr = random(this.chooseCell(2));
        var df = random(this.chooseCell(3));
        if (gr && this.multiply > 3 ) { 
            this.energy++;
            var newX = gr[0];
            var newY = gr[1];
          
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1);
                }
            }
          
            this.y = newY;
            this.x = newX;
        }
        if(df && this.multiply >3){

            var newX = df[0];
            var newY = df[1];
          
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            
            for(var i  in gishatichArr){
            if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                gishatichArr.splice(i, 1);
            }
        }
        }
    }
    kataxel(){
        if(this.energy >= 15){
            
            var empty = random(this.chooseCell(1));
            var empty1 = random(this.chooseCell(2));
            var empty2 = random(this.chooseCell(3));
            this.energy-=4;
            if (empty) {
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] = 0
                this.x = newX;
                this.y = newY;
                for(var i in grassArr){
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i,1);
                    }
                }
            }
            else  if(empty1){
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] = 0
                this.x = newX;
                this.y = newY;
                for(var i in xotakerArr){
                    if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i,1);
                    }
                }
            }
            else if(empty2){
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] = 0
                this.x = newX;
                this.y = newY;
                for(var i in gishatichArr){
                    if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i,1);
                }
            }

        }
    }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in dinoArr) {
                if (dinoArr[i].x == this.x && dinoArr[i].y == this.y) {
                    dinoArr.splice(i, 1);
                }
            }
        }
    }
}