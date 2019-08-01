import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  temporal: any;
  personas: any = [{ id: 1,nombre: "fernando", apellido: "irusta", edad: 45, dni: 33501905},
                { id: 1,nombre: "giovani", apellido: "irusta", edad: 44, dni: 33501906},
                { id: 3,nombre: "marcelo", apellido: "arias", edad: 35, dni: 33501900},
                { id: 4,nombre: "leonardo", apellido: "arias", edad: 36, dni: 33501901}];

  constructor() {
    this.temporal = this.personas;
  }

  ngOnInit() {}

  eventoSelector(e){
    const id = e.target.value
    const repetidos = this.personas.filter(p => {return p.id == id})
    console.log(repetidos)
  }

}