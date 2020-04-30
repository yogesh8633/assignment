import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
)

export class RegistrationService {
    uri = 'http://localhost:4000/api';
    constructor(private http: HttpClient) { }   
    registration(obj):Observable<any> {
        let param = {
            factomaniaId:obj['factomaniaId'],
            firstname: obj['firstname'],
              lastname:obj['lastname'],
              dob:obj['dob'],
              gender:obj['gender'],
              email:obj['email'],
              password:obj['password'],
              mobile:obj['mobile'],
              fav:obj['fav']
        };
        this.login(obj).subscribe();
        return this.http.post(`${this.uri}/register`, param);
      }

      login(obj):Observable<any>{
        let param = {
          factomaniaId:obj['factomaniaId'],
          password:obj['password']
        }
        return this.http.post(`${this.uri}/login/create`, param);
      }
      getUserById(factomaniaId):Observable<any>{
        return this.http.get(`${this.uri}/user/${factomaniaId}`)
      }

}