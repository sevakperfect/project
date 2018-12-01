class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}
class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 6;

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
    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy >= 8) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var newXt = new Xotaker(x, y)
            xotakerArr.push(newXt)
            this.energy = 6
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
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
        var gr = random(this.chooseCell(1))
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
class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 12;

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
    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy >= 24) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var newXt = new Gishatich(x, y)
            gishatichArr.push(newXt)
            this.energy = 12
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
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
        var gr = random(this.chooseCell(1))
        var xt = random(this.chooseCell(2))
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
class Dinozavr {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 6;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]






        ]


    }
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
    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
              
            }
        }
        return found;
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
}
class Jur {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 5;
        this.energy = 5;
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
        this.directions1 = [
    
            [this.x, this.y + 1]
            
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions1[i]);
                }
            }
        }
        return found;
    }
    chooseCell1(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mult() {
       this.multiply++
        var empty = random(this.chooseCell(0));
        if (empty && this.multiply > 6) {




            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            var newgr = new Jur(newX, newY, 1);
            jurArr.push(newgr)
            

        }
    }
    tsunami(){
         var eee = random(this.chooseCell1(1));
         var eee1 = random(this.chooseCell1(2));
         var eee2 = random(this.chooseCell1(3));
         var eee3= random(this.chooseCell1(4));
         var eee4 = random(this.chooseCell1(0));
     if(this.multiply && eee >= 10){
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 5;
        var newgr = new Jur(newX, newY, 1);
        jurArr.push(newgr)


     }
     if(this.multiply && eee1 >= 10){
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 5;
        var newgr = new Jur(newX, newY, 1);
        jurArr.push(newgr)


     }
     if(this.multiply && eee2 >= 10){
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 5;
        var newgr = new Jur(newX, newY, 1);
        jurArr.push(newgr)


     }
     if(this.multiply && eee3 >= 10){
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 5;
        var newgr = new Jur(newX, newY, 1);
        jurArr.push(newgr)


     }
     if(this.multiply && eee4 >= 10){
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 5;
        var newgr = new Jur(newX, newY, 1);
        jurArr.push(newgr)


     }
    }
    camaqel(){
        if (this.multiply <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in jurArr) {
                if (jurArr[i].x == this.x && jurArr[i].y == this.y) {
                    jurArr.splice(i, 1);
                }
            }
        }
    }
}