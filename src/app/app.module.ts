import { COMPONENTS } from './constants/components';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ COMPONENTS[0]]
})
export class AppModule { }
