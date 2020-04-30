import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
)

export class LoginService {
    uri = 'http://localhost:4000/api';
    constructor(private http: HttpClient) { }
    
    login(obj): Observable<any> {
        let param = {
            factomaniaId: obj['factomaniaId'],
            password: obj['password'],
        };
        return this.http.post(`${this.uri}/login`, param);
    }

}