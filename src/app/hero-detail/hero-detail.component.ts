import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  selectedHero : Hero;

 // @Input() selectedHero: Hero;
  constructor(
    private heroService :HeroService,
    private activatedRoute : ActivatedRoute,
    private location : Location
    ) { }

    getHeroDetail(){

      const id = + this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.activatedRoute.snapshot);
      this.heroService.getHeroById(id)
      .subscribe(result => this.selectedHero = result );

    }

    goback(){
      this.location.back();
    }

  ngOnInit() {
    this.getHeroDetail()
  }


}
