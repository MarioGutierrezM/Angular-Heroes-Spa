import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //para recibir algo por parametro
import { HeroesService } from '../../servicios/heroes.service'; //para el servicio
import { APP_ROUTING } from '../../app.routes';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  public heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      //recibimos el id que se había mandado, se pone 'id' po que es lo que pusimos como parametro
      //en el archivo de routes 
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
  }

  ngOnInit() {
  }

}
