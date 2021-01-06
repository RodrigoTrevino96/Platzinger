import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService
      .getStatus()
      .pipe(
        map(status => {
          if (status)
            return true;
          else {
            this.router.navigate(['login']);
            return false;
          }
        }));
  }

  
}
