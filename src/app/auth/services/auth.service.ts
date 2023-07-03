import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Login } from '../interfaces/login';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/login';
// import { LoginResponse } from '../interfaces/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; // Import the Router class

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private currentUser: User;

  // Get BASE_URL and TOKEN_KEY from environment
  private BASE_URL = environment.BASE_URL;
  // private TOKEN_KEY = environment.TOKEN_KEY;

  constructor(private http: HttpClient, 
    private tokenService: TokenService, 
    private snackBar: MatSnackBar,
    private router: Router) { }

  // Login method to authenticate with Django
  // Receives a Login object with username and password
  login(login: Login): Observable<any> {

    // Set headers for the HTTP request
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
    });

    // Create payload with the client ID, client secret, grant type, username and password
    const payload = `client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}&grant_type=password&username=${login.username}&password=${login.password}`;

    // Debugging purposes
    console.log(payload)
    console.log(`${this.BASE_URL}/oauth2/token/`);

    // Send HTTP request to authenticate
    return this.http.post<any>(`${this.BASE_URL}/api/oauth2/token/`, payload, { headers }).pipe(
      tap(response => console.log('Response from backend:', response)), // Log response from backend
      // If successful, save the token to the Token Service
      tap(response => this.tokenService.setToken(
        response.access_token, response.refresh_token)),
      // if Sucessfull, save as it current user.

      

      tap((user: User) => {
        this.currentUser = user;
        console.log('Logged in user:', user)
      }),
      // If there's an error, return it as a Observable
      catchError((error: HttpErrorResponse) => {

        let errorMessage = '';

        console.error("Auth Error message", error)

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Server-side error : ${error.status} ${error.error.error_description}`;
          if (error.status === 401) {
            errorMessage += `: ${error.error.error_description}`;
          }
        }

        console.error(errorMessage);
        this.snackBar.open(errorMessage, 'Close', { duration: 6000 });

        return throwError(() => new Error(errorMessage));
        
      })
    );
  }

  
  refreshToken(): Observable<any> {
    const refreshToken = this.tokenService.getRefreshToken();
    // Set headers for the HTTP request
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
    });

    // Create payload with the client ID, client secret, grant type, username and password
    const body = `client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${refreshToken}`;

  
    return this.http.post(`${this.BASE_URL}/oauth2/token/`, body, { headers });
  }
  


  // Logout method to clear tokens
  logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
    this.currentUser = null
    console.log("Logout service Done")
  }
  

  // getCurrentUser
   public getCurrentUser(): User {
    return this.currentUser;
  }

  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.BASE_URL}/api/user-info/`, { headers });
  }


  public isLoggedIn(): boolean {
    return !!this.currentUser;
  }




}
