import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './DataTable/persona/persona.component';
import { EditarPersonaComponent } from './Persona/editar-persona/editar-persona.component';
import { InsertarPersonaComponent } from './Persona/insertar-persona/insertar-persona.component';
import { MostrarPersonaComponent } from './Persona/mostrar-persona/mostrar-persona.component';
import { MostrarPersonasComponent } from './Persona/mostrar-personas/mostrar-personas.component';

const routes: Routes = [
  {path:'persona', component:MostrarPersonasComponent},
  {path:'persona/crear',component:InsertarPersonaComponent},
  {path:'persona/:id',component:MostrarPersonaComponent},
  {path:'persona/editar/:id',component:EditarPersonaComponent},
  {path:'datatable',component:PersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
