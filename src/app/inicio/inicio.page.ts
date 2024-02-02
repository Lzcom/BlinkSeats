import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EventsService } from '../services/events.service'; //Servicio de Api.


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  slides = [
    {
      image: "https://tuboleta.com/imagenes/65aaf0cd45f98.png", 
    },
    {
      image: "https://www.tuboleta.com/images/Eventos/Carnaval-de-barranquilla-2024/images/banner-coronacion.jpg",      
    },
    {
      image: "https://movistararena.co/wp-content/uploads/2023/11/juanes-bogota-juanes-colombia.png",
    },
    {
      image: "https://tuboleta.com/imagenes/65a60b2500ae9.webp"
    },
    {
      image: "https://tuboleta.com/imagenes/65afdd850b618.jpg"
    },
    {
      image:"https://tuboleta.com/imagenes/65b3c92d7a177.webp"
    }
  ]

  constructor(private menu:MenuController,
    private events: EventsService) { }

  ngOnInit() {

  }

}
