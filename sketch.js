
var particle = null;
var score =0;
var plinko = [];
var plinko1 = [];
var plinko2 = [];
var plinko3 = [];
var plinko4 = [];
var divisions = [];
var count;
var pcount = 0;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState;
var count = 0 ;
var engine, world;
var divisionHeight = 300;
 
function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    count = 0;
  //  particles = new Particles(200,200,200,200);
  
    ground = new Ground(200,780,1200,20);

for(var i = 0; i<= 600 ; i = i+80){
    divisions.push(new Division(i, 800 - divisionHeight/2, 10,divisionHeight));
   
}
//4th layer
for(var k = 40; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,100,10,10));
    count++;
}
//3rd layer
for(var k = 60; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,150,10,10));
    count++;
}
//2nd layer
for(var k = 40; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,200,10,10));
    count++;
}

//1st layer
for(var k = 60; k<= 480; k= k+50) {
    plinko.push(new Plinko(k,250,10,10));
    count++;
}

}

function draw(){
    background("black");
   
    Engine.update(engine);

  //if(pcount <= 4 )
  //  spawnBalls();
    ground.display();

       
    for(var k=0 ; k<plinko.length ; k++ )
      plinko[k].display();

     // console.log("divisions.length : " + divisions.length + "particles.length " + particles.length);
     
      for(var j=0 ; j<divisions.length ; j++ ){
      divisions[j].display();

      }

      if(particle!=null) {
        
          particle.display();

          if(particle.body.position.y > 710 ){
            console.log("particle.body.position.y  :" + particle.body.position.y  ); 
              if(particle.body.position.x< 200) {
                console.log("count :" + count +" x: " + particle.body.position.x + "y: "+particle.body.position.y ); 
                  score = score+500;  
                  //particle = null;
                  
                  if(count >= 41) gameState = "end";
                }

                if(particle.body.position.x > 200) {
                    console.log("count :" + count +" x: " + particle.body.position.x + "y: "+particle.body.position.y ); 
                      score = score+200;  
                     // 
                      
                      if(count >= 41) gameState = "end";
                    }
                    particle = null;
          }
 
      }

      text("SCORE:"+score,50,40);
      textSize(20);
      fill("white")

      if(count >= 41){
          text("GAMEOVER",200,200)
          textSize(20);
          fill("white")
      } 

      text("500",20,500);
      text("500",100,500);
      text("500",180,500);
      stroke("white")
       
      text("200",260,500);
      text("200",340,500);
      text("200",420,500);


}

function mousePressed()
{  
    if(gameState !== "end" )
    {
        count = count +1 ;
        console.log("Count mouse pressed :" + count);
        particle = new Particles(mouseX , 10,10,10);

    }


}

