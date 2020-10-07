class Box{
    constructor(x,y,width,height){

        var options = {
            isStatic:true
        }

        

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.dustbin = loadImage("dustbingreen.png");
    }

    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.dustbin,600,600,100,100);
        fill("brown");
        stroke("blue");
        strokeWeight(4);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}