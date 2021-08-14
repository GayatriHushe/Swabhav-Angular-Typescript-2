import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomecomponentComponent } from './welcomecomponent/welcomecomponent.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { RatingcomponentComponent } from './ratingcomponent/ratingcomponent.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    WelcomecomponentComponent,
    ProductcomponentComponent,
    RatingcomponentComponent,
    ListcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
