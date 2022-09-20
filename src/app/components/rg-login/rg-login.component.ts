import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  showPasswordIcon: string = "visibility_off";

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  loginSubmit() {
    this.authService.login(this.loginForm.value['email']!, this.loginForm.value['password']!)
      .subscribe({
        next: () => {
          this.snackBar.open('inicio de sesión exitoso', 'cerrar', { duration: 2000 });
          this.router.navigate(['/', 'dashboard'])
        },
        error: (err) => { this.snackBar.open(err, 'cerrar', { duration: 2000 }); }
      });
    console.log(`peticion http ${JSON.stringify(this.loginForm.value)}`);
  }

  isInvalidField(field: string): any {
    return this.loginForm.get(field)?.invalid && (this.loginForm.get(field)?.dirty || this.loginForm.get(field)?.touched);
  }

  hasError(field: string, validation: string) {
    return this.loginForm.get(field)?.hasError(validation);
  }

  toogleShowPasswordIcon() {
    if (this.showPasswordIcon == 'visibility_off') {
      this.showPasswordIcon = 'visibility';
    } else {
      this.showPasswordIcon = 'visibility_off';
    }
  }
}
