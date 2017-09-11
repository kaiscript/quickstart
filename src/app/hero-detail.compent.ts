/**
 * Created by kaiscript on 2017/9/10.
 */
import { Component,Input,OnInit} from '@angular/core'
import { ActivatedRoute,ParamMap} from '@angular/router'
import { Location} from '@angular/common'
import 'rxjs/add/operator/switchMap'

import { Hero } from './hero';
import { HeroService} from './hero.service'

@Component({
  selector: 'hero-detail',
  templateUrl:'./hero-detail.component.html',
  styleUrls:['./heroes-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
  constructor(
    private heroService:HeroService,
    private router:ActivatedRoute,
    private location:Location
  ){}
  hero:Hero;

  ngOnInit(): void {
    this.router.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero=>this.hero = hero);
  }
  goBack():void{
    this.location.back();
  }
}
