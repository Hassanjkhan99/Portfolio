import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BackgroundComponent} from "./components/background/background.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {ShootingStarsComponent} from "./components/shooting-stars/shooting-stars.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BackgroundComponent,
    HeroSectionComponent,
    ShootingStarsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
