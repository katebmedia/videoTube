import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'settings-page',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  constructor(private router: Router) {
    let token = localStorage.getItem("token");
    if(!token){
      this.router.navigate(['/login']);
    }
  }
}
