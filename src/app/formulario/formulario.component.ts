import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  funcAceptar(){
    console.log("Ejecutamos el evento indicado")
  }

  ngOnInit() {
    
  }

}