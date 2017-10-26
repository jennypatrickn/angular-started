import { Component , OnInit} from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from '../../bo/hero';

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes-app',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{

  // title = 'Tour of Heroes';
  hero: Hero = {id: 2, name: 'Narco'};
  selectedHero: Hero;
  heroes: Hero[];
  _heroService: HeroService;

  /**
   * @description Dependance injection via constructor
   * @param {HeroService} heroService 
   * @memberof HeroesComponent
   */
  constructor(private router: Router, private heroService: HeroService) {
    this._heroService = heroService;
  }

  /**
   * @method onSelect
   * @description Take on parameter the hero selected in list and reset the member value
   * @param {Hero} hero 
   * @memberof HeroesComponent
   */
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  /**
   * @method setHeroes
   * @description Set the heroes values 
   * @memberof HeroesComponent
   */
  setHeroes(): void {
     //this.heroes = this._heroService.getHeroes();
     this._heroService.getHeroes()
     .then(heroes => this.heroes = heroes)
     .catch(error => console.log(error));
  }

  /**
   * @method ngOnInit
   * @description Lyfecicle hook during of component activation
   * @memberof HeroesComponent
   */
  ngOnInit(): void {
    //this code will be executed when the AppComponent activates
    this.setHeroes();
  }

  /**
   * 
   * 
   * @memberof HeroesComponent
   */
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
