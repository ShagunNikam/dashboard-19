import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  title = 'History';
  public getAllCountryList: any;
  public getData : any;
  public name: string = '';

  constructor(private dataService: DataServicesService) { }

  ngOnInit() {
    this.getAllHistoryList();
  }
  

  public getAllHistoryList() {
    this.dataService.getAllData().subscribe((data) => {
      this.getData = data.response;
    })
  }

}
