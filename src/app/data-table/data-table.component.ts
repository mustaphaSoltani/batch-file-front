import {Component, OnInit} from '@angular/core';
import {BatchFileService} from '../batch-file.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data = [];
  config: any;

  constructor(private batchFileService: BatchFileService) {
  }

  ngOnInit(): void {
    this.batchFileService.getSumValueByOrigin().subscribe(
      (response) => {
        this.data = response;
        console.log(response);
      },
      (error) => console.log(error)
    );
    this.config = {
      itemsPerPage: 7,
      currentPage: 1,
      totalItems: this.data.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
