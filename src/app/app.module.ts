import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarPersonaComponent } from './Persona/mostrar-persona/mostrar-persona.component';
import { InsertarPersonaComponent } from './Persona/insertar-persona/insertar-persona.component';
import { MostrarPersonasComponent } from './Persona/mostrar-personas/mostrar-personas.component';
import { EditarPersonaComponent } from './Persona/editar-persona/editar-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MostrarPersonaComponent,
    InsertarPersonaComponent,
    MostrarPersonasComponent,
    EditarPersonaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
