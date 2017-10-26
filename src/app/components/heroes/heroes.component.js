"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("../../services/hero.service");
var HeroesComponent = (function () {
    /**
     * @description Dependance injection via constructor
     * @param {HeroService} heroService
     * @memberof HeroesComponent
     */
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        // title = 'Tour of Heroes';
        this.hero = { id: 2, name: 'Narco' };
        this._heroService = heroService;
    }
    /**
     * @method onSelect
     * @description Take on parameter the hero selected in list and reset the member value
     * @param {Hero} hero
     * @memberof HeroesComponent
     */
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    /**
     * @method setHeroes
     * @description Set the heroes values
     * @memberof HeroesComponent
     */
    HeroesComponent.prototype.setHeroes = function () {
        var _this = this;
        //this.heroes = this._heroService.getHeroes();
        this._heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; })
            .catch(function (error) { return console.log(error); });
    };
    /**
     * @method ngOnInit
     * @description Lyfecicle hook during of component activation
     * @memberof HeroesComponent
     */
    HeroesComponent.prototype.ngOnInit = function () {
        //this code will be executed when the AppComponent activates
        this.setHeroes();
    };
    /**
     *
     *
     * @memberof HeroesComponent
     */
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'heroes-app',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map