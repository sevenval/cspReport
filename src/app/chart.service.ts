import { Injectable } from '@angular/core';
import {ChartsComponent } from './components/charts/charts.component';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ChartService {

  constructor(private http:HttpClient) { }

  getLabel() : string {
    return  ChartsComponent.clickedLabel;
  }

  getData(url:string):any {
    return new Promise((resolve,reject) => {
      this.http.get(url).subscribe(info => {
        resolve(info);
      });
    })
  }

}
