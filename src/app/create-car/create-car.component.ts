import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarService } from '../shared/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  constructor(public service: CarService, private router: Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    console.log("onSubmit")
    this.service.createCar().subscribe((res: any) => {
      console.log(res);
      this.service.formModel.reset();
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err);
    })
  }
}
