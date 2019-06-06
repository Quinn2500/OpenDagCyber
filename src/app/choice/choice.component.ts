import { Component, OnInit } from '@angular/core';

import {Globals} from '../globals';

import {AppComponent} from '../app.component';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(private globals: Globals, private app: AppComponent) { }

  ngOnInit() {
  }
  chooseStory(file : string) {
    this.app.loadXML(file);
  }
}
