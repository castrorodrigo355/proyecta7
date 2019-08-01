import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormularioComponent } from './formulario/formulario.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { PersonasComponent } from './personas/personas.component';
import { TargetComponent } from './target/target.component';
import { UrlconparametroComponent } from './urlconparametro/urlconparametro.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';

// Importar librerias de ruteo
import { Routes, RouterModule } from '@angular/router';
// Hoja de navegacion
const routes : Routes = [
  {path:'', component: TargetComponent},
  {path:'formulario', component: FormularioComponent},
  {path:'personas', component: PersonasComponent},
  {path:'tecnologias', component: TecnologiasComponent},
  {path:'urlconparametro', component: UrlconparametroComponent},
  {path:'urlconparametro/:id', component: UrlconparametroComponent},
  {path:'**', component: ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TargetComponent,
    FormularioComponent,
    PersonasComponent,
    TecnologiasComponent,
    ErrorComponent,
    UrlconparametroComponent,    
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }