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
  data: any[] = [];
  year = new FormControl('');
  config: any;
  startDate = new FormControl('');
  endDate = new FormControl('');
  sources = [];
  origin = new FormControl('') ;

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions = { responsive: true};
  lineChartColors: Color[] = [{borderColor: 'black', backgroundColor: 'rgba(255,255,0,0.28)',}];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  lineChartData1: ChartDataSets[] = [];
  lineChartLabels1: Label[] = [];
  lineChartOptions1 = { responsive: true};
  lineChartColors1: Color[] = [{borderColor: 'black', backgroundColor: 'rgba(255,255,0,0.28)',}];
  lineChartLegend1 = true;
  lineChartPlugins1 = [];
  lineChartType1 = 'line';
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
    year = this.year.value;
    this.batchFileService.getSumValueByTime(year, '', '').subscribe(
      (response) => {
        this.data = response;
        console.log('data       :' + this.data)
        this.lineChartLabels = this.data.map(x => x[0]);
        console.log('this.lineChartLabels       :' + this.lineChartLabels)
        this.lineChartData = [{data: this.data.map(x => x[1]), label: 'Sum Value By Date for year ' + this.year.value}];
        this.config = { itemsPerPage: 7, currentPage: 1, totalItems: this.data.length};
      },
      (error) => alert('API access problem ')
    );
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  getDataByPeriod(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.batchFileService.getSumValueByTime('0', startDate.value, endDate.value).subscribe(
      (response) => {
        this.data = response;
        console.log('data       :' + this.data)
        this.lineChartLabels = this.data.map(x => x[0]);
        this.lineChartData = [{data: this.data.map(x => x[1]), label: 'Sum Value By Period '}];
        this.config = { itemsPerPage: 7, currentPage: 1, totalItems: this.data.length};},
      (error) => alert('API access problem ')
    );
  }

  getDataByPeriodOfOrigin(origin, startDate, endDate) {
    this.origin = origin;
    this.batchFileService.getSumValueByDateAndOrigin('0', startDate.value, endDate.value, origin.value).subscribe(
      (response) => {
        this.data = response;
        this.lineChartLabels1 = this.data.map(x => x[1]);
        this.lineChartData1 = [{data: this.data.map(x => x[2]), label: 'Sum Value By Period Of ' + this.origin.value}];
        this.config = {itemsPerPage: 7, currentPage: 1, totalItems: this.data.length};
      },
      (error) => alert('API access problem ')
    );
    document.getElementById('div2').style.visibility = 'visible';
  }
}
