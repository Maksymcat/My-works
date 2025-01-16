let currentDate = new Date();
function Student(name, surname, yearofbirth, rating) {
  this.name = name;
  this.surname = surname;
  this.yearofbirth = yearofbirth;
  this.age = currentDate.getFullYear() - this.yearofbirth;
  this.rating = rating;
  this.count = 0;
  this.visits = 0;
  this.sumOfRating = 0;
  this.arrayOfVisits = new Array(25);
  this.present = () => {
    if(this.arrayOfVisits[this.arrayOfVisits.length -1] !== undefined){
   
      console.log('Массив ПЕРЕПОВНЕНИЙ ')
      return
    }
    this.arrayOfVisits.splice(this.count, 1, true);

    this.count++;
    this.visits++;
  };
  this.absent = () => {
    if(this.arrayOfVisits[this.arrayOfVisits.length -1] !== undefined){
      console.log('Массив ПЕРЕПОВНЕНИЙ ')
      return
    }
    this.arrayOfVisits.splice(this.count, 1, false);

    this.count++;
    this.visits--;
  };
  this.summary = () => {
    this.rating.forEach((element) => {
      this.sumOfRating += element;
    });
    const averageRating = this.sumOfRating / this.rating.length;
    const averageVisits = this.visits / 25;
    if (averageRating > 90 && averageVisits > 0.9) {
      return console.log("Молодець!");
    }
    if (
      (averageRating < 90 && averageVisits > 0.9) ||
      (averageRating > 90 && averageVisits < 0.9)
    ) {
      return console.log("Добре але можна краще!");
    }
    if (averageRating < 90 && averageVisits < 0.9) {
      return console.log("Редиска!");
    }
  };
}
const masha = new Student(
  "Maksym",
  "bro",
  1985,
  [15, 10, 10, 125, 5000, 25, 252, 15, 15]
);

masha.present();

masha.present();
masha.present();

masha.present();
masha.present();
masha.present();

masha.present();

masha.present();
masha.present();
masha.present();
masha.absent();
masha.present();
masha.absent();
masha.present();
masha.present();
masha.present();
masha.absent();
masha.present();
masha.absent();
masha.present();
masha.present();
masha.present();

masha.present();
masha.present();
masha.present();
masha.present();
masha.present();
masha.present();
masha.present();
masha.present();
masha.present();
masha.present();
masha.present();
masha.present();

masha.summary();
