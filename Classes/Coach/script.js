class Coach {
  constructor(name, sport, rating){
    this.name = name
    this.sport = sport 
    this.rating = rating
  }
 displayinfo () {
  console.log('Імя : ' + this.name + ' Вид спорту : ' + this.sport + ' Рейтинг : ' + this.rating)
 }
}
const Alex = new Coach('Alex', 'yoga', 5.5)
Alex.displayinfo( )