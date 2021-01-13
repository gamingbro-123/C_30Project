class Box
{

    constructor(xpos,ypos, width1, height1)
  {

    var options = {
        'restitution':0.8,
        'friction':1
        }
   this.body = Bodies.rectangle(xpos,ypos,width1,height1, options);
   this.width = width1;
   this.height = height1;

   World.add(world,this.body);


  }
    

display()
{
    // var position = this.body.position;

    rectMode(CENTER)    
    rect(this.body.position.x,this.body.position.y,this.width,this.height)

  //    if(this.body.speed<3)
  // {
  //    this.body.display
  // }

//   else
//   {
//     World.remove(world,this.body);
//     push();
//     tint(255,this.visibility);
//     this.visibility = this.visibility-10;
//     pop();

    
// }
}
}
