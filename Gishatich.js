var LivingCreature = require("./LivingCreature.js");

module.exports = class Gishatich extends LivingCreature {
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

    choosecell(ch) {

        this.getNewDirections();
        return super.choosecell(ch);
    }
   
    mult() {
        var gr = this.choosecell(0);
        var empty = gr[Math.floor(Math.random() * gr.length)]
        if(empty)
        {
            if(weather == "Dzmer" && this.energy >= 40)
            {
                var x = empty[0]
                var y = empty[1]
                matrix[y][x] = 3
                var newXt = new Gishatich(x, y);
                CnvacGishatich++;
                gishatichArr.push(newXt)
                this.energy = 12
            }

            else if(this.energy >= 24 && weather != 'Dzmer')
            {
                var x = empty[0]
                var y = empty[1]
                matrix[y][x] = 3
                var newXt = new Gishatich(x, y);
                CnvacGishatich++;
                gishatichArr.push(newXt)
                this.energy = 12
            }
        }
    }
    move() {
        var gr = this.choosecell(0);
        var empty = gr[Math.floor(Math.random() * gr.length)]
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
        this.multiply++
        var rforg = this.choosecell(1);
        var gr = rforg[Math.floor(Math.random() * rforg.length)]
        var rforx = this.choosecell(2);
        var xt = rforx[Math.floor(Math.random() * rforx.length)]
        if (gr && this.multiply > 5) {
            this.energy += 1;
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                }
            }

            this.y = newY
            this.x = newX
        }
        if (xt && this.multiply > 5) {
            this.energy += 2;
            var newX = xt[0]
            var newY = xt[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1);
                }
            }

            this.y = newY
            this.x = newX
        }
        if(weather == "Dzmer"){
            this.multiply--;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
}