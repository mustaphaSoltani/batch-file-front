import {Component, OnInit} from '@angular/core';
import {BatchFileService} from '../batch-file.service';

@Component({
  selector: 'app-star-job',
  templateUrl: './star-job.component.html',
  styleUrls: ['./star-job.component.css']
})
export class StarJobComponent implements OnInit {
  errorMessage;
  now: Date = new Date();

  constructor(private batchFileService: BatchFileService) {
  }

  ngOnInit(): void {
  }

  startJob() {
    this.batchFileService.startJob().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => this.errorMessage = `Connection error, you must contact the administrator`
    );
  }
}
