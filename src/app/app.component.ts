import { Component } from '@angular/core';

import { Hero } from './bo/hero';

import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
