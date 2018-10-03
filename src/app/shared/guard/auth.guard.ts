import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private cookieService:CookieService) {}

    canActivate() {
        let cookieValue =  this.cookieService.get('user_id');
        console.log(`cookie: ${cookieValue}`)
        
        if (this.cookieService.get('user_id')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
