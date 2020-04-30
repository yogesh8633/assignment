import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private activatedRoute : ActivatedRoute) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (StorageService.getItem('factomaniaId')) {
      return true;
    }
    this.router.navigateByUrl('');
    return false;
   
  }
  

}
