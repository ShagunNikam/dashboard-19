import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public copyright: string = 'Copyright © 2022 covid-19 Dashboard';
  constructor() { }

  ngOnInit(): void {
  }

}
