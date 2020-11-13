import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { element } from 'protractor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.formModel.reset();
  }

  onSubmit() {
    this.userService.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.userService.formModel.reset();
        }
        else {
          res.array.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                break;
              default:
                break;
            }
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
