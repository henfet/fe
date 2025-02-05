import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PadresDeFamiliaService {
  private baseUrl = 'http://localhost:3300/api';

  constructor(private http: HttpClient) { }

  getAllPadres(): Observable<any> {
    const endpoint = `${this.baseUrl}/padres`;
    return this.http.get<any>(endpoint);
  }
}
