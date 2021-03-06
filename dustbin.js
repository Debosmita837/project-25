class dustbin{
    constructor(x, y, width, height){
    var options = {
       
      isStatic:true,
      friction:0.3,
      density:1.2
    }   
    this.body= Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprite/dustbin.png");
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        image(this.image, 0, 0, this.width,this.height);
        pop();
    }
    }