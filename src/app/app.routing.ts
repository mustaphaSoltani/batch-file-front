import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ChartComponent} from './chart/chart.component';
import {StarJobComponent} from './star-job/star-job.component';
import {DataTableComponent} from './data-table/data-table.component';


const APP_ROUTING: Routes = [
  {path: 'chart', component: ChartComponent},
  {path: 'startJob', component: StarJobComponent},
  {path: 'dataTable', component: DataTableComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
