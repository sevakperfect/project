var LivingCreature = require("./LivingCreature.js");
weather = "Garun"
module.exports = class Grass extends LivingCreature{
    mult() {
        var gr = this.choosecell(0);
        var empty = gr[Math.floor(Math.random()*gr.length)]
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
        if(weather == "Dzmer"){
            return;
        }
    }
}
