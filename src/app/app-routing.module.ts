import { NgModule }   from '@angular/core'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboards/dashboard.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/dashboard', //Redirection url
      pathMatch: 'full'
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}