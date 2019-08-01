import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  // formulario: FormGroup;

  constructor(){}

  // constructor(private frmBuilder: FormBuilder) { 
  //   this.formulario = this.frmBuilder.group({
  //     nombre: ['', Validators.required],
  //     apellido: ['', Validators.required],
  //     edad: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     // password: ['Dni por defecto', Validators.required],
  //   })
  // }

  // onSubmit(e) {
  //   console.log(e)
  // }

  profileForm = new FormGroup({
              firstName: new FormControl(''),
              lastName: new FormControl('')}
  );

  onSubmit(e) {
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
    
  }

}