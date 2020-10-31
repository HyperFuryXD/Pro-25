class Dustbin{
  constructor(x,y,width,height){
    

this.body= Bodies.rectangle(x,y,width,height,{isStatic:true});
  this.height = height;
  this.width =width;
  
  World.add(world,this.body);
  }
  display(){
      var pos =this.body.position;
      fill("brown");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      
  }
}
