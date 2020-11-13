import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  listCar:Car []
  constructor(private serviceCar: CarService) { }

  ngOnInit(): void {
    this.serviceCar.getCar().subscribe((res: Car[])=>{
      this.listCar = res;
    },(err)=>{
      console.log(err);
    });
  }
  deleteCar(id: number){
    console.log(typeof(id));
    console.log(id);
    this.serviceCar.deleteCarById(id);
    this.ngOnInit();
  }
}
