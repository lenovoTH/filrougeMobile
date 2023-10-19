import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService, public router: Router) { }
  ngOnInit() { }

  logoutUser() {
    this.authservice.logout().subscribe((value) => {
      // alert(localStorage.getItem('role'))
      this.authservice.removeToken()
      const extra: NavigationExtras = { replaceUrl: true }
      this.router.navigate(['/'], extra)
    })
  }

}
