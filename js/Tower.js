class Tower{
  constructor(x,y,w,h){
    var options ={
      isStatic: true
    }
    this.img = loadImage("assets/tower.png");
    this.body = Matter.Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.w = w;
    this.h = h;
  }
  show(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
  imageMode(CENTER);
   image(this.img,0,0,this.w,this.h);
   pop();
  }
    
}