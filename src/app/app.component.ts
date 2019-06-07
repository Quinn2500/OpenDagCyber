import { Component } from '@angular/core';
import { NgModule, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OpenDay';

  XML: any;
  JSON: any;

  ngOnInit() {
    this.loadXML("Main.xml");
  }

  constructor(private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService, private globals: Globals) { }

  loadXML(file : string): void {
    this.XML = this.http.get('assets/XML/' + file, {responseType: 'text'}).subscribe(data => {
      this.XML = data}, error => {console.log(error)}, () => this.createJSON());    
  }

  createJSON(): void {
    const parser = new DOMParser();
    const xml = parser.parseFromString(this.XML, 'text/xml');
    this.globals.object = this.ngxXml2jsonService.xmlToJson(xml);    
  }
}
