import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor() { }

  sportsList = [
    {
      id:1,
      name : "Cricket",
      isChecked : true,
      imagePath : "../../assets/Cricket-card.jpg"
    },
    {
      id:2,
      name : "Football",
      isChecked : true,
      imagePath : "../../assets/Football.jpg"
    },
    {
      id:3,
      name : "Tennis",
      isChecked : true,
      imagePath : "../../assets/Tennis.jpg"
    },
    {
      id:4,
      name : "Hockey",
      isChecked : true,
      imagePath : "../../assets/Hockey.jpg"
    },
    {
      id:5,
      name: "Volleyball",
      isChecked : true,
      imagePath : "../../assets/volley-ball.jpg"
    },
    {
      id:6,
      name: "Basket ball",
      isChecked : true,
      imagePath : "../../assets/bascket-ball.jpg"
    },
    {
      id:7,
      name: "Badminton",
      isChecked : true,
      imagePath : "../../assets/badminton.jpg"
    },
    {
      id:8,
      name: "Swimming",
      isChecked : true,
      imagePath : "../../assets/swimming.jpg"
    }



  ]


}
