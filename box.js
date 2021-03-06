class Box{
    constructor(x,y,width,height){
        var properties={
            restitution:1,
            friction:0.5,
            density:1,
        }
        this.body=Bodies.rectangle(x,y,width,height,properties)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("red");
        fill ("green");
        rect(0,0,this.width,this.height);
        pop ()
    }
}