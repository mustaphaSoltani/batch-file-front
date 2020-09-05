import {Component, OnInit} from '@angular/core';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BatchFileService} from '../batch-file.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  show = false;
  data: any[] = [];
  year = new FormControl('');
  config: any;
  startDate = new FormControl('');
  endDate = new FormControl('');
  sources = [];
  origin = new FormControl('');

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions = {responsive: true};
  lineChartColors: Color[] = [{borderColor: 'black', backgroundColor: 'rgba(255,255,0,0.28)',}];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  type: ChartType = 'line';
  labels: Label[] = [];
  datasets: ChartDataSets[] = [];
  options: ChartOptions = {scales: {yAxes: [{ticks: {beginAtZero: true}}]}};

  constructor(private batchFileService: BatchFileService) {
  }

  ngOnInit() {
    this.batchFileService.getAllSources().subscribe(
      source => {
        this.sources = source;
      }
    );
  }

  getDataByYear(year) {
    this.show = true;

    this.batchFileService.getSumValuesByYear(year.value, '', '').subscribe(
      (response) => {
        this.data = response;
        console.log('data       :' + this.data);
        this.lineChartLabels = this.data.map(x => x[0]);
        console.log('this.lineChartLabels       :' + this.lineChartLabels);
        this.lineChartData = [{data: this.data.map(x => x[1]), label: 'Sum Values By Date for year ' + this.year.value}];
        console.log('lineChartData       :' + this.lineChartData);

        this.config = {itemsPerPage: 7, currentPage: 1, totalItems: this.data.length};
      },
      (error) => alert('API access problem ')
    );
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  getDataByPeriod(startDate, endDate) {
    this.show = true;
    this.batchFileService.getSumValuesByYear('0', startDate.value, endDate.value).subscribe(
      (response) => {
        this.data = response;
        this.lineChartLabels = this.data.map(x => x[0]);
        this.lineChartData = [{data: this.data.map(x => x[1]), label: 'Sum Values between ' + startDate.value + ' and ' + endDate.value}];
        this.config = {itemsPerPage: 7, currentPage: 1, totalItems: this.data.length};
      },
      (error) => alert('API access problem ')
    );
  }

  getDataByPeriodOfOrigin(origin, startDate, endDate) {
    this.show = true;
    this.batchFileService.getSumValueByDateAndOrigin('0', startDate.value, endDate.value, origin.value).subscribe(
      (response) => {
        this.data = response;
        this.labels = this.data.map(x => x[0]);
        this.datasets = [
          {
            label: 'Sum Values of ' + origin.value + ' between ' + startDate.value + ' and ' + endDate.value,
            data: this.data.map(x => x[1]),
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
          }];
        this.config = {itemsPerPage: 7, currentPage: 1, totalItems: this.data.length};
      },
      (error) => alert('API access problem ')
    );
    document.getElementById('div2').style.visibility = 'visible';
  }
}
