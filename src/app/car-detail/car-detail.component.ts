import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CarService } from '../shared/car.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car;
  constructor(private router: ActivatedRoute, private service: CarService) { }

  ngOnInit(): void {
    let id: number = +this.router.snapshot.params['id'];
    console.log(id)
    this.service.getCarById(id).subscribe((res: Car)=>{
      this.car = res;
    },
    (err)=>{
      console.log(err);
    })
  }

}
