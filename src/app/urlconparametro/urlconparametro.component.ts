import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-urlconparametro',
  templateUrl: './urlconparametro.component.html',
  styleUrls: ['./urlconparametro.component.scss']
})

export class UrlconparametroComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params["id"] != null){
        console.log(`El id recibido es ${params["id"]}`)
      }
    })
  }

}
