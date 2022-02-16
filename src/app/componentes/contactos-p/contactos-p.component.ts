import { Component } from '@angular/core';

@Component({
  selector: 'contactosP',
  templateUrl: './contactos-p.component.html',
  styleUrls: ['./contactos-p.component.css']
})
export class ContactosPComponent {
  
  options: google.maps.MapOptions = {
  center: {lat: -16.490112, lng: -68.139622},
  mapTypeId:'satellite',
  zoom: 17,
  };
  zoom=17;
  posicion={
    lat: -16.490112,
    lng: -68.139622
  };
  posicion1={
    lat: -17.373605,
    lng: -66.177616
  };
  label={
    color:'blue',
    text:'Estamos aqui',
    fontSize:'24px'
  };
  options1: google.maps.MarkerOptions = {
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      labelOrigin: new google.maps.Point(20, 45),
    }
  };
  constructor() { }

}
