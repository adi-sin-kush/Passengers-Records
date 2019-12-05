import { Injectable } from '@angular/core';
import { Passengers } from './Interfaces/Passengers.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class PassengersDashBoardService {

    url = 'https://my-json-server.typicode.com/adi-sin-kush/DataJson/passengers';
    constructor(private http: HttpClient) {
        console.log(this.http);
     }

    getPassengers(): Observable<Passengers[]> {
        return this.http.get<any>(this.url);
    }

    updatePassengers(passenger: Passengers): Observable<Passengers[]> {
        return this.http.put<any>(`${this.url}/${passenger.id}`, passenger, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    searchPassengers(id: number): Observable<Passengers> {
        return this.http.get<any>(`${this.url}/${id}`)
                    .pipe(
                        catchError(err => throwError(err))
                    );
    }

}
