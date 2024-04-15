import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingRequestsGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userType = this.loginService.checkSession();
    if (userType === 'ADMIN') {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      alert("You are not allowed to access this!")
      return false;
    }
  }
}
