class Box{
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.4,
        friction: 0.9,
      };
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }
  