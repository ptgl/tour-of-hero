import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeroes : Hero[] = [];
  constructor(private heroService : HeroService) { }
  ngOnInit() {
    this.getTopHeroes();
  }
  getTopHeroes(){
    this.heroService.getHeroesFromAPI()
    .subscribe(result => {console.log(result); this.topHeroes = result.slice(0,5)});
  }
  

}
