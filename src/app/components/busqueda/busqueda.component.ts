import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe  } from '../../servicios/heroes.service'; // importacion del servicio
import { ActivatedRoute } from '@angular/router'; //para recibir algo por parametro

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  //mandamos como parametro el servicio, así ya se puede usar
  //tambien se manda parametro para usar el Router
  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute) { }

  heroes:Heroe[] = [];
  clave:string = "";

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      //recibimos el id que se había mandado, se pone 'calve' po que es lo que pusimos como parametro
      //en el archivo de routes 
      this.clave = params['clave'];
      console.log("recibio parametro: " + params['clave']);
      this.heroes = this._heroesService.buscarHeroes(params['clave']);
      console.log(this.heroes);
    })

  }

}
