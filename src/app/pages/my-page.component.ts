import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-page-page',
  templateUrl: './my-page.component.html'
})
export class MyPageComponent {
  constructor(private router: Router) {
    let token=localStorage.getItem("token");
    if(!token){
      this.router.navigate(['/login']);
    }

  }
}
