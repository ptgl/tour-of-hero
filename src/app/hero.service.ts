import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-hero';
import { Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{
    return HEROES
  }

  getHeroesFromAPI(): Observable<Hero[]>{
    return of(HEROES);
  }
  constructor() { }
}
