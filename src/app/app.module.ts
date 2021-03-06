import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component'
import {HeroesComponent}  from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.compent';

import {HeroService} from './hero.service';
import {AppModuleRouter} from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppModuleRouter
  ],
  declarations: [AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


