import { RouterModule, Routes} from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const APP_ROUTES: Routes = [
    {path: 'home' , component: HomeComponent }, //path es el nombre de la ruta en la url
    {path: 'heroes', component: HeroesComponent },
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'busqueda/:clave', component: BusquedaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home' } //en caso de no encontrar redirije aquí 
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);