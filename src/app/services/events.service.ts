import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer ="http://190.131.209.106";
  constructor() { }

  getEvents(){
    return fetch(`${this.urlServer}/events`).then( //la respuesta que obtenga del server la pasara a una variable json
      response => response.json()
    );
  }

  getLocalEvents(){ //Para importar la información de una api local
    return dataEvents;
  }
  //Obtener categorias " get hacia /categories "
  //Obtener 1 categoria " get hacia /categories/:id"
  
}