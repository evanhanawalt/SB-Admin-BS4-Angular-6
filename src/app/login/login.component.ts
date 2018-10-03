import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../shared/services/login.service';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private loginService: LoginService, private cookieService:CookieService) { }

    ngOnInit() { }

    onSubmit(email, password) {
        NgModel
        console.log('Hey')
        this.tryLogin(email,password)
    
    }
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    showErrorMessage(){

        document.getElementById("login-error-message").setAttribute("style","")
    }
    tryLogin(email, password) {
        console.log(email, password)
        this.loginService.login(email, password).subscribe(res => {
                //determine if logged in 
                
                console.log(res)

                if (res.email != null){
                    //console.log("good login")
                    //  success
                    this.cookieService.set( 'user_id', 'Hello World' );
                    this.router.navigate(['/dashboard']);
                } else {
                // fail
                    this.showErrorMessage()
                    //console.log("failed login")
                }

            })
    }
}