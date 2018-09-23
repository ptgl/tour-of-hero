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

  getHeroById(id: number) : Observable<Hero>{
    this.messageService.addMsg(`find Hero id = ${id}`);
    return of (HEROES.find(o=> o.id === id));
  }

  constructor(public messageService : MessageService) { }
}
