class Launcher {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 100,
      };
  
      
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
    }
  
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(20, 100, 8);
      strokeWeight(5);

      
        
  
        pop();
      }
    }
  }
  