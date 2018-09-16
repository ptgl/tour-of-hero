import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-hero';
import { Observable, of} from 'rxjs'
import {MessageService} from './message.service'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{
    return HEROES
  }

  getHeroesFromAPI(): Observable<Hero[]>{
    this.messageService.addMsg('HeroService: hero fetched! ');
    return of(HEROES);
  }


  constructor(public messageService : MessageService) { }
}
