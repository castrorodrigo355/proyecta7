import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  constructor() { }

  @Input("datos") datos: any;

  ngOnInit() {
  }

}