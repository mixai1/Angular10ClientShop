import { Injectable } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl: string = 'https://localhost:44319/api/'
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModel = this.fb.group({
    Email: ['', Validators.required],
    UserName: ['', Validators.required],
    Password: ['', Validators.required, Validators.minLength(5)]
  });

  register() {
    let body = {
      Email: this.formModel.value.Email,
      UserName: this.formModel.value.UserName,
      Password: this.formModel.value.Password
    }
    return this.http.post(this.baseUrl + 'account/register', body);
  }

  login(formData: NgForm) {
    return this.http.post(this.baseUrl + 'account/login', formData);
  }

  getUserPofile() {
    return this.http.get(this.baseUrl + 'userProfile/getUserProfile');
  }

  roleMath(allRole): boolean {
    let isMatch = false;
    let playLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    let userRole = playLoad.role;
    allRole.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  getRole(): string{
    if(localStorage.getItem('token') !== null){
    let roleName: string = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1])).role;
    return roleName;
  }
  // TODO: fix
    return null;
  }
}
