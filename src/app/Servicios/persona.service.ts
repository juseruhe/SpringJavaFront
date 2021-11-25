import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8080/SpringAngular/personas";

  getPersonas(){
    return this.http.get(this.url);
  }

  createPersona(persona:Persona){
    return this.http.post(this.url,persona);
  }

  mostrarPersona(id:any){
    return this.http.get(this.url+"/"+id);
  }

  updatePersona(id:any,persona:any){
    return this.http.put(this.url+"/"+id,persona);
  }

  deletePersona(persona:any){
    return this.http.delete(this.url+"/"+persona.id);
  }
}
