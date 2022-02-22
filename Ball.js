class Ball{
    constructor(x,y,w,h,angle){
        var options = {
            frictionAir : 0.01, 
            density : 1, 
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.width = w; 
        this.height = h;
        this.angle = angle;
        World.add(myWorld, this.body);
    }

    display(){
        var angle = this.body.angle 
        var pos = this.body.position 
        push(); 
        translate(pos.x,pos.y)
        angleMode(DEGREES)
        rotate(angle); 
        ellipse(0,0,this.width,this.height)
        pop(); 
        
    }
}