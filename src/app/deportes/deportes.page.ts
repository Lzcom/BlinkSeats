import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.page.html',
  styleUrls: ['./deportes.page.scss'],
})
export class DeportesPage implements OnInit {
  event_list:any;
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
