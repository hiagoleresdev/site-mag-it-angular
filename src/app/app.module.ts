import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarroselComponent } from './carrosel/carrosel.component';
import { FooterComponent } from './footer/footer.component';
import { EstagioBannerComponent } from './estagio-banner/estagio-banner.component';
import { EstagiopageComponent } from './estagiopage/estagiopage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarroselComponent,
    FooterComponent,
    EstagioBannerComponent,
    EstagiopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
