var canva;
var gameState=0;
var contestantCount,database,quiz,question,contestant;
function setup(){
  canvas = createCanvas(850,400);
database=firebase.database()


}


function draw(){
  background("pink");
quiz=new Quiz()
  quiz.start()
  quiz.getState()
}
