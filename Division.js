class Division
{
    constructor(x,y,width,height)
    {
        var options = {
            isstatic:true
        }
        this.Bodies = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        rectmode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}