import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private http: HttpClient) {}

  post<T>(url: string, model: T, headers: any = {}): Observable<T> {
    const body = JSON.stringify(model);
    const params = new HttpParams();
    headers.forEach((key: string, value: string | number | boolean) => {
      params.append(key, value);
    });

    return <Observable<T>> this.http.post(url, body, {
      headers: headers,
      params: params
    }).pipe(
      catchError((error: any) => {
        console.error(error);
        throw error;
      })
    );
  }

}