import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  feedbackForm = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required , Validators.email]),
    mobNo : new FormControl('',[Validators.required]),
    feedback : new FormControl('',[Validators.required])
  })

  onSubmit(){
    console.log(this.feedbackForm.value);
  }

}
