var LivingCreature = require("./LivingCreature.js");

module.exports = class Xotaker extends LivingCreature{
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
        var randitems = this.choosecell(0);
        var empty = randitems[Math.floor(Math.random()*randitems.length)]
        
        if (empty && this.energy >= 8) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var newXt = new Xotaker(x, y);
            CnvacXotaker++;
            xotakerArr.push(newXt)
            this.energy = 6
        }
       
    }
    move() {
        var randitems = this.choosecell(0);
        var empty = randitems[Math.floor(Math.random()*randitems.length)]
        
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
        this.multiply++
        var ra = this.choosecell(1)
        var gr = ra[Math.floor(Math.random()*ra.length)]
        if (gr && this.multiply > 5) {
            this.energy += 2;
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                }
            }

            this.y = newY
            this.x = newX
        }
        
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}