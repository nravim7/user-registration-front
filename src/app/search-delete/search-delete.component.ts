import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  user: any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit(): void {
    let response = this.service.getUsers();
    response.subscribe((data)=>this.user=data);
  }

  public deleteUser(id) {
    let response = this.service.deleteUser(id);
    response.subscribe((data)=>this.user=data);
    return this.service.getUsers();
  }

  public getUserById() {
    let response = this.service.getUserById(this.user.id);
    response.subscribe((data)=>this.user=data);
  }


}
