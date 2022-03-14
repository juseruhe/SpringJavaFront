import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from 'src/app/Modelo/Persona';
import { XLSX$Consts } from 'xlsx';
import { XLSX$Utils } from 'xlsx';
import * as xlsx from 'xlsx';


@Component({
  selector: 'app-mostrar-personas',
  templateUrl: './mostrar-personas.component.html',
  styleUrls: ['./mostrar-personas.component.css']
})
export class MostrarPersonasComponent implements OnInit {
  personas: any;
  persona: Persona = new Persona();
  datos: any

  constructor(private service: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data => {
      console.log(this.personas)
      this.personas = data;
    }, error => {
      console.log(error)
    })
  }

  mostrar(persona: Persona) {
    var id = localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["persona/" + localStorage.getItem('id')]);
  }

  editar(persona: Persona) {
    var id = localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["persona/editar/" + localStorage.getItem('id')]);
  }

  eliminar(persona: Persona) {
    this.service.deletePersona(persona).subscribe(data => {
      //this.personas = this.personas
      alert("usuario Eliminado");
    }, error => {
      alert("No se pudo eliminar!!")
    });
  }

  // Exportar Excel con SheetJS
  exportarPersonas(): void {
    let tabla = document.getElementById("tabla_excel")
    const hoja: xlsx.WorkSheet = xlsx.utils.table_to_sheet(tabla)

    const libro: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(libro, hoja, 'Personas')

    xlsx.writeFile(libro, "PersonasAPI.xlsx")
  }

  leerArchivo(event: any) {

    //Conectar con el lector de archivos
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('No puede usar múltiples archivos');
    }
    const lector: FileReader = new FileReader();
    lector.readAsBinaryString(target.files[0]);
    lector.onload = (e: any) => {

      // Leer libro
      const stringBinario: string = e.target.result;
      const libro: xlsx.WorkBook = xlsx.read(stringBinario, { type: 'binary' });

      // Seleccionar primera hoja
      const nombreHoja: string = libro.SheetNames[0];
      const hoja: xlsx.WorkSheet = libro.Sheets[nombreHoja];

      // Guardar datos
      const datos = xlsx.utils.sheet_to_json(hoja)

      this.datos = JSON.stringify(datos)
      
    };
  }


  insertarPersonas(){ 
    console.log(typeof(this.datos))

    this.service.createPersona(this.datos).subscribe(data => {
      alert("datos insertados")
      this.router.navigate(["persona"])
    },error => {
        alert("Hay un error")
        console.log(error)
    })
  }

}
