import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import localEs from '@angular/common/locales/es-AR';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';
//import { registerLocaleData } from '@angular/common';


//Para poder trabajar con localEs 
//registerLocaleData(localEs)

//Ademas, a providers le debo agragar LOCALE_ID (que lo saco de '@angular/core')

//No funcionó, deja de mostrar información relacinado a las fechas

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide:LOCALE_ID,
    //   useValue: 'es' 
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
