import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private API_URL = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
  
}
