/**
 * Created by kaiscript on 2017/9/10.
 */
import {Hero} from './hero';
import {HEROES} from './mock-hero';
import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id:number):Promise<Hero>{
    return this.getHeroes()
      .then(heroes=>heroes.find(hero=>hero.id===id));
  }
}
