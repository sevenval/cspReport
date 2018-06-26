import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';

import { TableComponent } from './components/table/table.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { BarComponent } from './components/bar/bar.component';
import { ChartTableComponent } from './components/chart-table/chart-table.component';
import {ChartService} from "./chart.service";

const appRoutes: Routes = [
  {path:'', component: ChartsComponent },
  {path:'table', component: TableComponent},
  {path: 'chart', component: ChartsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartsComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppsettingsComponent,
    BarComponent,
    ChartTableComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ChartsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
