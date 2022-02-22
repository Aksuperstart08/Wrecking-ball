class Ground{
    constructor(w,h){
        var options = {
            isStatic : true
        }
      this.body = Bodies.rectangle(400,390,w,h,options)
      this.width = w;
      this.height = h;
      World.add(myWorld, this.body);
    }


    display(){
       var pos = this.body.position
        rectMode(CENTER); 
        rect(pos.x,pos.y,this.width,this.height);
    }
}