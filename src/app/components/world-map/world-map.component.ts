import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  title = 'World map';
  lat = 28.7041;
  lng = 77.1025;
  
  constructor() { }

  ngOnInit() {
  }

}
