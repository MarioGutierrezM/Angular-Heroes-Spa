import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe  } from '../../servicios/heroes.service'; // importacion del servicio
import { Router } from '@angular/router'; //para la primera forma de mandar algo por un boton 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  //mandamos como parametro el servicio, así ya se puede usar
  //tambien se manda parametro para usar el Router
  constructor(private _heroesService:HeroesService, private _router:Router) {  

  }

  public heroes:Heroe[] = [];

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  //Para la primera forma de mandar algo por parametro 
  verHeroe( idx:number){
    console.log(idx);
    this._router.navigate(['/heroe', idx]); //el arreglo es igual al del routeLink de la segunda forma
  }

}
