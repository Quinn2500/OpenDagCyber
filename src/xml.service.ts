import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XmlService {

  constructor(private http: HttpClient) { }

  getXML(): any {
    return this.http.get('assets/Main.xml', {responseType: 'text'});
  }
}
