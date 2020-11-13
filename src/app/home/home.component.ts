import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car.service';
import { Car } from '../model/car';
import { FilterCar } from '../model/filterCar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: CarService) { }

  listCars: Car[];

  TypeEngine: string[] = ['Petrol', 'Diesel', 'Electric', 'All'];

  filterCar: FilterCar = {
    name: null,
    price: null,
    typeEngine: null
  }

  filterCars() {
    this.service.getCar().subscribe((res: Car[]) =>{
      let sortListCar: Car[] = res.filter(car => car.typeEngine === this.filterCar.typeEngine);
      this.listCars = sortListCar;
    },
    (err)=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
    this.service.getCar().subscribe((res: Car[]) => {
      this.listCars = res;
    },
      (err) => {
        console.log(err);
      });
  }
}
