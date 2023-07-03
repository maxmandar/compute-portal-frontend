import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../shared/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; // add this line



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
