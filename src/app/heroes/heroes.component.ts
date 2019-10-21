import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private HeroService: HeroService) { }

  ngOnInit() {
    this.getHeros() 
  }

  getHeros(): void {
    this.HeroService.getHeros().subscribe(heroes => {
      this.heroes = heroes
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
