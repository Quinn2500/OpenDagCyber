import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  object: object = null;
  ID: number = 0;
  points: number = 0;
  storiesDone : number[] = [0];
}