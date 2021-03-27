class Question{
 constructor(){
this.title=createElement('h1')
this.question=createElement('h2')
this.option1=createElement('h3')
this.option2=createElement('h3')
 }
 display(){
  this.title.html("cricketQuiz")   
  this.title.position(350,0)

  this.question.html("question:- Who is the captain of Delhi Capitals")
  this.question.position(150,80)
  this.option1.html("1:Shreyas Iyer")
  this.option1.position(150,100)
  this.option2.html("2:Gautum Gambhir")
  this.option2.position(150,120)
}   
}