import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides = [
    {
      title: "Bienvenido a BlinkSeats",
      description: "¡Donde podras apoyar a tu equipo en primera fila!",
      image: "https://cdn-icons-png.flaticon.com/512/2817/2817809.png",
      class: "slide-1",
      color: '#2b2d42',
      
    },
    {
      title: "Tus eventos favoritos en un solo lugar",
      description: "Conciertos, teatro, deportes, festivales y mucho más",
      image: "https://cdn-icons-png.flaticon.com/512/195/195123.png",
      class: "slide-2",
      color: '#8d99ae',
      
    },
    {
      title: "¡Ingresa y cumple tus sueños!",
      description: "Entradas a eventos de forma facil y segura",
      image: "https://i.pinimg.com/originals/74/ed/af/74edaf05172513f7a3a09459847f3e57.png",
      class: "slide-3",
      color: '#ee4242', 
    }
  ]

  constructor(private router:Router) {}

  goToInicio(){
    console.log("go to intro");
    this.router.navigateByUrl('/inicio');
  }

}
