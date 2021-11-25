import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css']
})
export class MostrarPersonaComponent implements OnInit {
   persona:any;
  constructor(private servicio:PersonaService) { }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(){
    let id = localStorage.getItem("id");
    this.servicio.mostrarPersona(id).subscribe(data =>{
      console.log(data);
       this.persona = data;
    })
  }

}
