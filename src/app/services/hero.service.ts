import { Injectable } from '@angular/core';

import { Hero } from '../bo/hero';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable()
export class HeroService {
    //Synchronous method
    // getHeroes(): Hero[] {
    //     return HEROES;
    // }
    /**
     * 
     * @description async metho use Promise to return the list of Heroes
     * @returns {Promise<Hero[]>} 
     * @memberof HeroService
     */
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    /**
     * 
     * @description Return one hero 
     * @param {number} id 
     * @returns {Promise<Hero>} 
     * @memberof HeroService
     */
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id));
    }
}