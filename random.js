function setup() {
  createCanvas(windowWidth,windowHeight);

  var offset = random(50,200)
  var diameter = random(10,80);
  var randR = random(255);
  var randB = random(255);
  var randB = random(255);
  //var length = random(0,100);

  fill(random(255), random(255), random(255));
for(var counter = 0; counter < 10; counter = counter +1){
  for(var column = 0 ; column < 5 ; column = column +1){

  var xPos = counter * diameter + counter*20 + offset;
  var yPos = column * diameter + column*20 + offset;

    fill(random(255), random(255), random(255));
  triangle(random(xPos+offset),random(yPos+offset),random(xPos+offset),random(yPos+offset),random(xPos+offset),random(yPos+offset));

}
}

  fill(random(255), random(255), random(255));
for(var counter = 0; counter < 10; counter = counter +1){
  for(var column = 0 ; column < 5 ; column = column +1){

  var xPos = counter * diameter + counter*20 + offset;
  var yPos = column * diameter + column*20 + offset;



  rect(xPos,yPos,diameter,diameter);
  //line(xPos,yPos,length,length);
  fill(random(255), random(255), random(255));
  ellipse(random(xPos,xPos+offset),yPos,diameter,diameter);


  }
  }



}
