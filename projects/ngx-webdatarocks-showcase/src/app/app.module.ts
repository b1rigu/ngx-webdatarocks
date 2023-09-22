import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebdatarocksPivotModule } from 'dist/ngx-webdatarocks';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWebdatarocksPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
