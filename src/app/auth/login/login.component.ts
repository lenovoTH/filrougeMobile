import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myFormLogin: FormGroup

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.myFormLogin = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  loginUser() {
    const data = {
      "login": this.myFormLogin.get('login')!.value,
      "password": this.myFormLogin.get('password')!.value
    }
    this.authservice.login(data).subscribe(value => {
      if (value.status == true) {
        if (value.user.role != "etudiant") {
          console.log("User Not Found");
        } else {
          this.authservice.setToken(value.token)
          this.authservice.setRole(value.user.role)
          this.authservice.setId(value.user.id)
          const extra: NavigationExtras = { replaceUrl: true }
          this.router.navigate(['/etudiant/planning'], extra)
        }
        this.myFormLogin.reset()
      }
    })
  }

}
