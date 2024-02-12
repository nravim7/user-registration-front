import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User;
  message: any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow() {
    let response = this.service.doRegister(this.user);
    response.subscribe((data)=>this.message = data)
  }

}
