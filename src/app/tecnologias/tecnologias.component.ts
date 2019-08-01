import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

  tecnologias: any = [
    { id: 1, nombre: "angular",  categoria: "framework", 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyc81OrHx-NYOGUr9d-qGtV0N7OtHvWDW2zHwSpo1bx8VmRDQfvQ"},
      { id: 1, nombre: "javascript", categoria: "lenguage", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8NclH-e-VzbMEHSKu5AX5DEPglHL-ldgle5eocOhVBFIn73F"},
        { id: 1, nombre: "react",  categoria: "library", 
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9V2lTsWuciffKVawnLK-Rwq3b6orG6wvvioJV7UubmCDt2m3RQ"},
          { id: 4, nombre: "java", categoria: "lenguage", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmsOCYoiNnLfXG1nkTzWc4MxnSatSTxFNdbzzASntKLrAmyL00g"},
            { id: 5, nombre: "mongodb", categoria: "ddbb", 
              imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZPOiQ51ru170mMvac4AWB4u3V6dFXQ2UuIj55LsJsKpOGHEJ"},
  ]

  constructor() { }

  ngOnInit() {
  }

}