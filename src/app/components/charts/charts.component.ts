import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "chart.js";
import { DataServicesService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  title = 'Charts';
  chart : any = [];
  public arrayData: any = [];
  public activeCase: any;
  public getCountry: any;
  public filterCountry: any;


  constructor(private dataService: DataServicesService) {
    Chart.register(...registerables);
  }

  ngOnInit() {

    this.dataService.getAllData().subscribe((data) => {

      this.filterCountry = data.response.filter((data: any)=>{
        return data.continent == 'Asia' && data.population > 50000000;
      })

      this.activeCase = this.filterCountry.map((data: any)=> {
        return this.arrayData.push( data.cases.active );
      })

      this.getCountry = this.filterCountry.map((data: any) => {
        return data.country;
      });
    
    })

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        datasets: [{
          label: 'Active cases in year 2021',
          data: this.arrayData,
          // fill: false,
          borderColor: '#3e95cd',
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ],
          borderWidth: 2,
        }]
      },
    })
  }

}
