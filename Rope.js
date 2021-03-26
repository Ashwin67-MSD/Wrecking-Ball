class Rope{
    constructor(body1,Point2){
        var options={
        bodyA:body1,
        pointB:Point2,
        stiffness:0.04,
        length:200
       
        }
        this.pointB=Point2
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        }
        display(){
            var pointA= this.rope.bodyA.position;
            var pointB= this.pointB;

            stroke("Black");
            strokeWeight (4)
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
}