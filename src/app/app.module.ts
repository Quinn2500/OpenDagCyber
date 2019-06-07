import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ChoiceComponent } from './choice/choice.component';
import { ViewComponent } from './view/view.component';

import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChoiceComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModule.forRoot(),
    HttpClientModule    
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
