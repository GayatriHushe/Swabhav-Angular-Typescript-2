import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  canActivate(){
      const isAdmin=false;
      if(isAdmin)
      {
        console.log("U r an admin");
        return true;
      }
        
      else
      {
        console.log("U r not an admin");
        return false;
      }
        
  }
  
}
