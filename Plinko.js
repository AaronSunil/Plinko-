class Plinko
{
    constructor(x,y)
    {
        var options = {
            isstatic:true
        }
        this.body = Bodies.circle(x, y, 10,options);
        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0, 0, 30, 30);
        pop();
    }
}