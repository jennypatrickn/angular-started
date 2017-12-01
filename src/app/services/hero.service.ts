import { Injectable }   from '@angular/core';
import {Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

import { Hero } from '../bo/hero';

//import { HEROES } from '../mock-data/mock-heroes';

@Injectable()
export class HeroService {
    //Synchronous method
    // getHeroes(): Hero[] {
    //     return HEROES;
    // }

    private heroesUrl = 'api/heroes'; //URL to web api
    
    private headers   = new Headers({'Content-Type': 'application/json'});
    

    constructor(private http: Http) {}

    /**
     * 
     * @description async metho use Promise to return the list of Heroes
     * @returns {Promise<Hero[]>} 
     * @memberof HeroService
     */
    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // }
    getHeroes(): Promise<any> {
        return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    /**
     * 
     * @description Return one hero 
     * @param {number} id 
     * @returns {Promise<Hero>} 
     * @memberof HeroService
     */
    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes()
    //                 .then(heroes => heroes.find(hero => hero.id === id));
    // }
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json().data as Hero)
                   .catch(this.handleError);
    }

    /**
     * 
     * 
     * @param {Hero} hero 
     * @returns {Promise<Hero>} 
     * @memberof HeroService
     */
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
                   .put(url, JSON.stringify(hero), {headers: this.headers})
                   .toPromise()
                   .then(() => hero)
                   .catch(this.handleError);

    }

    /**
     * 
     * 
     * @param {string} name 
     * @returns {Promise<Hero>} 
     * @memberof HeroService
     */
    create(name: string): Promise<Hero> {
        return this.http
                   .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
                   .toPromise()
                   .then(res => res.json().data as Hero)
                   .catch(this.handleError);
    }


    /**
     * 
     * 
     * @param {number} id 
     * @returns {Promise<void>} 
     * @memberof HeroService
     */
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
                   .toPromise()
                   .then(() => null)
                   .catch(this.handleError);
    }
    
}