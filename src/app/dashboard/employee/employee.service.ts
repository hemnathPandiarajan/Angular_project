import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
      {
        "name" : "John",
        "email" : "john@mail.com",
        "position" : "FEDeveloper",
        "mobNo" : 98754312345,
        "salary" : 15000
    },
    {
        "name" : "Durai",
        "email" : "durai@mail.com",
        "position" : "FEDeveloper",
        "mobNo" : 9764312345,
        "salary" : 15000
    },
    {
        "name" : "Bavani",
        "email" : "bavani@mail.com",
        "position" : "BEDeveloper",
        "mobNo" : 9876512345,
        "salary" : 15000
    },
    {
        "name" : "Peter",
        "email" : "Peter@mail.com",
        "position" : "Fullstackdeveloper",
        "mobNo" : 9766312345,
        "salary" : 25000
    }
    ];

  constructor() { }
}
