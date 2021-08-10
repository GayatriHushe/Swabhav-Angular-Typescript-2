import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { StarComponent } from './parentchild/star.component';
import { ToggleComponent } from './parentchild/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentchildComponent,
    ToggleComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ParentchildComponent]
})
export class AppModule { }
