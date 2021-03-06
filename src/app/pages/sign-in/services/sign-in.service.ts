import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  BASE_URL: string;

  constructor( private http: HttpClient ) {
    this.BASE_URL = environment.API_URL;
  }

  getMerchant( id: number) {
    return this.http.get(`${this.BASE_URL}/users/${id}`, {
      observe: 'response'
    });
  }

  // tslint:disable-next-line: typedef
  login( body: any ) {
    return this.http.post(`${this.BASE_URL}/auth/login`, body).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

}
