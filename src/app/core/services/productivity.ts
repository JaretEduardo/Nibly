import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Productivity {
  private baseUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrlBase}productivity/`;
  }
  
  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  
}
