import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/login';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user: User;

  constructor( private authService: AuthService ){}

  ngOnInit(): void {


    
  }

  getUserInfo():void {
    this.authService.getUserInfo().subscribe({
      next: user => {
        console.log(`Hello, ${user.username}!`);
        this.user = user; // Set the user property
      },
      error: error => {
        console.error(error);
      }
    });

  }


  onLogout() {
    this.user = null; // Set user to null
    this.authService.logout();

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


}
