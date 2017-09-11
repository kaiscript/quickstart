/**
 * Created by kaiscript on 2017/9/10.
 */
import {Component} from '@angular/core'

@Component({
  selector:'my-app',
  template:`
    <h1>{{title}}</h1>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">heroes</a>
    <router-outlet></router-outlet>
  `,
  styleUrls:['./app.component.css']
})

export class AppComponent{
  title:'Tour of Heroes'
}
