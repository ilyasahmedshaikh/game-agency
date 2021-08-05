import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';

import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxSimpleCountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
