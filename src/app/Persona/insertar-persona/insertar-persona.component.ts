import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { Persona} from '../../Modelo/Persona';

@Component({
  selector: 'app-insertar-persona',
  templateUrl: './insertar-persona.component.html',
  styleUrls: ['./insertar-persona.component.css']
})
export class InsertarPersonaComponent implements OnInit {
   persona:Persona = new Persona();

  constructor(private ruta:Router,private servicio:PersonaService) { }
  
  ngOnInit(): void {
  }

  guardar(){
   this.servicio.createPersona(this.persona).subscribe(data =>{
     alert("Datos Insertados a la base de datos")
     this.ruta.navigate(["persona"]);
   });
  }

}
