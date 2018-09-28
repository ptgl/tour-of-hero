import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-hero';
import { Observable, of} from 'rxjs'
import {MessageService} from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
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

  private heroUrl = 'api/heroesDB';
  getHeroDB(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(this.heroUrl)
    .pipe(
      tap(heroes => console.log(heroes));
      catchError(this.handleError('getHeroDB',[]))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  constructor(private httpClient : HttpClient, public messageService : MessageService) { }
}
