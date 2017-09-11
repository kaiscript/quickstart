/**
 * Created by kaiscript on 2017/9/10.
 */
import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router';

import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.compent";

const routes:Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppModuleRouter{}
