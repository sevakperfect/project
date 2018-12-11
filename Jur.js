var LivingCreature = require("./LivingCreature")
module.exports = class Jur extends LivingCreature{
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