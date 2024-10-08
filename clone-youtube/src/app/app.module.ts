import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from "./shared/shared.module";
import { ErroComponent } from './views/erro/erro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
