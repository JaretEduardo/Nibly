import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExpirationService {
    private baseUrl: string;
    private token: string | null = null;

    constructor(private http: HttpClient) { 
    this.baseUrl = `${environment.apiUrlBase}product/`;
    }

    getAll(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }

    getCount(): Observable<any> {
      return this.http.get(`${this.baseUrl}count`);
    }

}