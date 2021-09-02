import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNav : boolean = false;

  constructor(
    private loginService : LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.loginMessage.subscribe(
      message => {
        if ( message === true ){
          this.showNav = true
        }
      }
    )
  }

}
