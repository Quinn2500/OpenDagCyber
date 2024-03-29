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

  flagString : string;
  flagDone : boolean = false;

  ngOnInit() {
  }
  chooseFile(file : string, id : number) {
    if(!this.globals.storiesDone.includes(id))
    {
      this.app.loadXML(file);
    }
    
  }

  chooseAnswer(id : number, points : number){
    this.globals.ID = id;
    this.globals.points += Number(points);
  }

  flag(flag : string, answer :  string) {
    if(flag == answer)
    {
      this.globals.ID = 7;
      this.globals.points += 100;
      alert("You won, you defeated the terrible virus and you did this with: "+this.globals.points+" Points!")
    }else{
      this.flagString = '';
      this.globals.points -= 5;
      alert("This flag is not right one! Try to find the right one,\n(Hint: Not only Linux has a console!)")
    }
  }

  ctf(flag: string) {
    if(!this.flagDone)
    {
      console.log("flag: " + flag);
      this.flagDone = true;
    }
    
  }

  setGameEnd(story : number) {
    if(!this.globals.storiesDone.includes(story))
    {
      this.globals.storiesDone.push(story);
      this.flagDone = false;
    }
  } 
  
  testStory(id : number):boolean {
    if(this.globals.storiesDone.includes(id))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
