import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = "FORM";
  titulo: any = "form";
  angular: any = "Angular";
  datos: any = { nombre: "rodrigo", apellido: "castro", edad: 31, dni: 33501904};

}