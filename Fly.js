class Fly {
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.5,
            length:400,
            

        }
        this.pointB=pointB
         this.slingshot=Constraint.create(option)
         World.add(world,this.slingshot)
    }

    attach(body){
        this.slingshot.bodyA=body

    }

    fly(){
        this.slingshot.bodyA=null;
    }


    display(){
        if(this.slingshot.bodyA){
        
        line (this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,this.pointB.y);
        strokeWeight(0);
    }
}

    
}
