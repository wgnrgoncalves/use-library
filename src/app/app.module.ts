import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ComponentsLibModule} from 'components-app001/projects/components-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ComponentsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
