class Xotaker extends LivingCreature{
    choosecell(ch){
        this.getNewCoordinates();
      return  super.choosecell(ch);
    }
}