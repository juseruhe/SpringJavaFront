import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8080/SpringJava/personas";

  getPersonas(){
    return this.http.get(this.url);
  }
}
