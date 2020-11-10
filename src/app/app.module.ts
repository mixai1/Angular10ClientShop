import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { InterceptorService } from './authentication/interceptor.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CarService } from './shared/car.service';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CreateCarComponent } from './create-car/create-car.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    CarDetailComponent,
    CreateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService,
              CarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
