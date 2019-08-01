import { Component } from '@angular/core';
import { ProductosService } from './servicio/productos.service';
import { HttpClientModule } from '@angular/common/http';

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

  productos: any;
  constructor(public productosService: ProductosService){
    // console.log(JSON.stringify(productosService.productos.rows))
    this.productos = productosService.productos;
  }

  visualizarPersona(id){
    const productos = this.productos.filter(producto => {
      return producto._id == id
    })
    console.log(productos[0])
  }

  eliminarPersona(id){
    const productos = this.productos.filter(producto => {
      return producto._id != id
    })
    this.productos = productos;
  }

}