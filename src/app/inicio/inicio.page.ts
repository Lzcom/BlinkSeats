import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EventsService } from '../services/events.service'; //Servicio de Api.


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  event_list:any;
  /*slides = [
    {
      image: "https://tuboleta.com/imagenes/65aaf0cd45f98.png", 
    },
    {
      image: "https://www.tuboleta.com/images/Eventos/Carnaval-de-barranquilla-2024/images/banner-coronacion.jpg",      
    },
    {
      image: "https://ticketlive.com.co/wp-content/uploads/2023/11/juanes-bogota.webp",
    },
    {
      image: "https://tuboleta.com/imagenes/65a60b2500ae9.webp"
    },
    {
      image: "https://tuboleta.com/imagenes/65afdd850b618.jpg"
    }
  ]*/

  constructor(private menu:MenuController,
    private events: EventsService) { }

  ngOnInit() {

  }
  ionViewDidEnter(){
    this.events.getEvents().then( 
      res => {
        this.event_list= res;
        console.log("Eventos desde server",this.event_list)
      }
    )
    console.log("localEvents",this.events.getLocalEvents().events);
  }
 

}
