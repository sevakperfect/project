var LivingCreature = require("./LivingCreature.js");
weather = "Garun"
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
        var gg = this.choosecell(0);
         var empty = gg[Math.floor(Math.random()*gg.length)];
         if (empty && this.multiply > 6) {
 
 
 
 
             var newX = empty[0];
             var newY = empty[1];
             matrix[newY][newX] = 5;
             var newgr = new Jur(newX, newY, 1);
             jurArr.push(newgr)
             
            if(weather == "Dzmer"){
                return
            }
         }
     }
     tsunami(){
         var Choosefood = this.choosecell(1);
        var eee = Choosefood[Math.floor(Math.random()*Choosefood.length)];
        var Choosefood1 = this.choosecell(2);
        var eee1 = Choosefood1[Math.floor(Math.random()*Choosefood1.length)];
        var Choosefood2 = this.choosecell(3);
        var eee2 = Choosefood2[Math.floor(Math.random()*Choosefood2.length)];
        var Choosefood3 = this.choosecell(4);
        var eee3= Choosefood3[Math.floor(Math.random()*Choosefood3.length)];
        var Choosefood4= this.choosecell(0);
        var eee4 = Choosefood4[Math.floor(Math.random()*Choosefood4.length)];
    if(this.multiply && eee >= 10){
       var newX = empty[0];
       var newY = empty[1];
       matrix[newY][newX] = 5;
       var newgr = new Jur(newX, newY, 1);
       jurArr.push(newgr);


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
    if(weather == "Dzmer"){
        return;
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