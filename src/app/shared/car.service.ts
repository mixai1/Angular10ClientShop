import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly BaseURL = 'https://localhost:44319/api/Car/';

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  formModel = this.fb.group({
    Brand: ['',Validators.required],
    URL: ['',Validators.required],
    Price: ['',Validators.required],
    Description: ['',Validators.required],
    TypeEngine: ['', Validators.required]
  });

  createCar() {
    let Body = {
      nameCar: this.formModel.value.Brand,
      img: this.formModel.value.URL,
      price: this.formModel.value.Price,
      desc: this.formModel.value.Description,
      typeEngine: this.formModel.value.TypeEngine
    }
    
   return this.http.post(this.BaseURL + 'addCar', Body);
  }

  getCar() {
    return this.http.get(this.BaseURL + 'getAllCar');
  }

  getCarById(id: number) {
    return this.http.get(this.BaseURL + 'getCar?id=' + id);
  }

  deleteCarById(id: number) {
   return this.http.delete(this.BaseURL + 'delCar?id=' + id);
  }
}
