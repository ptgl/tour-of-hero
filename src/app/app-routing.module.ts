import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

const routes : Routes = [
  {path: 'hero', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'detail/:id', component: HeroDetailComponent}
]

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
})


export class AppRoutingModule { }
