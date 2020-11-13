import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: UserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') !== null) {
      let role = route.data['permittedRole'] as Array<string>;
      if(role){
        if(this.service.roleMath(role)){
          return true;
        }
        else{
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}
