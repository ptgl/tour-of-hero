import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';
import {HeroService} from '../hero.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
 
  selectedHero: Hero;

  getHero() : void {
    this.heroes = this.heroService.getHeroes();
  }

  getHeroFromAPI() :void{
    this.heroService.getHeroesFromAPI()
    .subscribe(result => {this.heroes = result
    console.log(result);
    });
    
  }

  getHeroFromHttp(){
    this.heroService.getHeroDB()
    .subscribe(data => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    //this.getHero();
    this.getHeroFromHttp();
    //this.getHeroFromAPI();
  }

}
