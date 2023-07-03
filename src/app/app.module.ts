import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // import RouterModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//external Module

import { NgxCurrencyModule } from "ngx-currency";

//shared modules
import { MaterialModule } from './shared/material.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AuthguardService } from './auth/services/authguard.service';
import { AuthInterceptor } from './auth/auth.interceptor';


// Project Related 
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http'; // This will make available across all app.
import { PifModule } from './pif/pif.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectModule } from './project/project.module';
import { IidModule } from './iid/iid.module';  // <-- import the IidModule here
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BomModule } from './bom/bom.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { BomItemModule } from './bom-item/bom-item.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // add RouterModule here
    FormsModule,
    ReactiveFormsModule, // Add this line for reactive form.
    BrowserAnimationsModule,
    MaterialModule,// add shared material module here
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG, // Set the desired logging level here
      serverLogLevel: NgxLoggerLevel.ERROR, // Set the minimum level for logs sent to the server
      disableConsoleLogging: false, // Set to true to disable all console logs
    }),
    NgxCurrencyModule,
    LayoutModule,
    AuthModule,
    HttpClientModule,
    ProjectModule,
    PifModule,
    IidModule,  // <-- add the IidModule to the imports array
    // BomModule, // Add this for Bom module.
    // CatalogueModule, //add this for catalogue module.,
    // BomItemModule


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthguardService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {  }
}
