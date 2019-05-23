import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

   public stringList: Array<String> = [
    'WErkgith dit 7846983@! HOI',
    'een reeder in nodd',
    'Je bent een redder',
    'Hallo'
   ]

  constructor() { }

  ngOnInit() {
  }

}
