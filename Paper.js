class Paper {
    constructor(x,y){
        var options = {
            isStatic:false,
            restituion:0.3,
            friction:0.1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position

        push();
        fill("brown");
        stroke("blue");
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,40,40);
        pop();
    }
}