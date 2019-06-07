import { Component, OnInit } from '@angular/core';

import {Globals} from '../globals'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}
