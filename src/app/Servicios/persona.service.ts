import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver'; 
import * as xlsx from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/SpringAngular/personas";
  personas: any;

  getPersonas() {
    return this.http.get(this.url);
  }

  createPersona(persona: Persona) {
    return this.http.post(this.url,persona);
  }

  mostrarPersona(id: any) {
    return this.http.get(this.url + "/" + id);
  }

  updatePersona(id: any, persona: any) {
    return this.http.put(this.url + "/" + id, persona);
  }

  deletePersona(persona: any) {
    return this.http.delete(this.url + "/" + persona.id);
  }

  // Exportar Excel con SheetJS
  exportarPersonas(): void {
    let tabla = document.getElementById("tabla_excel")
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(tabla)

    const wb: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(wb, ws, 'Personas')

    xlsx.writeFile(wb, "PersonasAPI.xlsx")
  }

}
