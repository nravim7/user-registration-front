import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpService: HttpClient ) { }

  public doRegister(user: User) {
    return this.httpService.post<User>('http://localhost:8080/users/add', user, {responseType: 'text' as 'json'})
  
  }

  public getUsers() {
    return this.httpService.get('http://localhost:8080/users/all');
  }

  public getUserById(id) {
    return this.httpService.get('http://localhost:8080/users/find/'+id);
  }

  public deleteUser(id) {
    return this.httpService.delete('http://localhost:8080/users/delete/'+id);
  }
}
