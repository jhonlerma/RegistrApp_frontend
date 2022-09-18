import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-rg-login',
  templateUrl: './rg-login.component.html',
  styleUrls: ['./rg-login.component.scss']
})
export class RgLoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    this.authService.login(this.loginForm.value['email']!, this.loginForm.value['password']!)
    .subscribe( {
      next: ()=>{console.log('inicio de sesión exitoso')},
      error: ()=>{console.log('inicio de sesión fallidos')}
   });
    console.log(`peticion http ${JSON.stringify(this.loginForm.value)}`);
  }

  isInvalidField(field: string): any {
    return this.loginForm.get(field)?.invalid && (this.loginForm.get(field)?.dirty || this.loginForm.get(field)?.touched);
  }

  hasError(field: string, validation: string) {
    return this.loginForm.get(field)?.hasError(validation);
  }
}
