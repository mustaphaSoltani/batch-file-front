import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ROUTING} from './app.routing';
import {ChartComponent} from './chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import {StarJobComponent} from './star-job/star-job.component';
import {DataTableComponent} from './data-table/data-table.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    StarJobComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ROUTING,
    ChartsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
