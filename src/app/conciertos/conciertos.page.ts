import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-conciertos',
  templateUrl: './conciertos.page.html',
  styleUrls: ['./conciertos.page.scss'],
})
export class ConciertosPage implements OnInit {
  slides = [
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
  constructor() { }

  ngOnInit() {
  }

}
