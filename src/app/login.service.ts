import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginMessageSource = new Subject<boolean>();
  loginMessage = this.loginMessageSource.asObservable();
  constructor() { }

  sendMessage(message : boolean){
    this.loginMessageSource.next(message);
  }

}
