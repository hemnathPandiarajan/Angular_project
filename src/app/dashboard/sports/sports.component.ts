import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SportsService } from './sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

 selectedItemList = [];
 checkboxDataList = [];
 checkedIds = [];
 

  constructor(
    private sportsService: SportsService
  ){}

  ngOnInit(): void {
    this.checkboxDataList = this.sportsService.sportsList; 
    this.selectedItems();
    this.fetchCheckedIDs();
  }

  onChange() {
    this.selectedItems();
  }

  selectedItems(){
    this.selectedItemList=this.checkboxDataList.filter((value , index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs(){
    this.checkedIds = [];
    this.checkboxDataList.forEach((value , index) => {
      if(value.isChecked){
        this.checkedIds.push(value.id);
      }
    })
  }


 

}


