import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userCurrent: User;
  roleName: string;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUserPofile().subscribe((res: any) => {
      this.userCurrent = res
    },
      (err) => {
        console.log(err);
      }
    );
    this.roleName = this.service.getRole();
  }
}

