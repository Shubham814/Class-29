class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,250,23);
        image(this.sling2,223,18);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if (pointA.x<280){
                line(pointA.x-17, pointA.y, pointB.x, pointB.y);
                line(pointA.x-17,pointA.y,pointB.x+45,pointB.y);
                image(this.sling3,pointA.x-23,pointA.y-10,10,20);
            } else if (pointA.x>280){
                line(pointA.x+17, pointA.y, pointB.x, pointB.y);
                line(pointA.x+17,pointA.y,pointB.x+45,pointB.y);
                image(this.sling3,pointA.x+23,pointA.y,10,20);   
            }
            
        }
    }
    
}