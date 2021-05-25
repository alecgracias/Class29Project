class Block{
    constructor(x, y) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, 30, 35, options);
        this.width = 30;
        this.height = 35;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,30, 35);
        pop();
      }
}
