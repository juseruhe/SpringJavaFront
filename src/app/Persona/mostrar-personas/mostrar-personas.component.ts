import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/Modelo/Persona';


@Component({
  selector: 'app-mostrar-personas',
  templateUrl: './mostrar-personas.component.html',
  styleUrls: ['./mostrar-personas.component.css']
})
export class MostrarPersonasComponent implements OnInit {
   personas: any;
   persona:Persona = new Persona();

  constructor(private service:PersonaService,private router:Router) { }

  ngOnInit(): void {
     this.service.getPersonas().subscribe(data=>{
       console.log(this.personas)
       this.personas = data;
     },error => {
       console.log(error)
     })
  }

  mostrar(persona:Persona){
   var id = localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["persona/"+localStorage.getItem('id')]);
  }

   editar(persona:Persona){
    var id = localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["persona/editar/"+localStorage.getItem('id')]);
   }

   eliminar(persona:Persona){
    this.service.deletePersona(persona).subscribe(data =>{
      //this.personas = this.personas
      alert("usuario Eliminado");
    },error =>{
      alert("No se pudo eliminar!!")
    });
   }

}
