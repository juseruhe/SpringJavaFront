import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
    persona: any;
  
    

  constructor(private ruta:Router, private servicio:PersonaService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id = localStorage.getItem("id");
    this.servicio.mostrarPersona(id).subscribe(data =>{
     
       this.persona = data;
    })
  }
  
  actualizar(){
    let id = localStorage.getItem("id");
    this.servicio.updatePersona(id,this.persona).subscribe(data=>{
      alert("Datos actualizados correctamente !!!");
      this.ruta.navigate(["persona/"+id]);
    },error => {
      alert("Error al Actualizar datos "+error);
      console.log("Error al actualizar "+error)
    });
  }

}
