import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

class Domain {
  _id: string;
  domain: string;
  "document-uri" :string;
  "blocked-uri":string;
  "violated-directive": string;
  "original-policy": string;
  date: string;
  __v: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  domains:Domain[]= [];
  dtTrigger: Subject<any> = new Subject();
 cspAmount;
 domainAmount;


  constructor(private http:Http){};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6
    };
    this.http.get('http://localhost:4000/csp')
      .subscribe(domains => {

        console.log(JSON.parse(domains["_body"]));
        this.domains = JSON.parse(domains["_body"]);

        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
    this.http.get("http://localhost:4000/csp").subscribe(
      data => {
        this.cspAmount = Object.keys(data).length;
      }
    )

    this.http.get("http://localhost:4000/csp/distinct").subscribe(
      data => {
        console.log(data);
        this.domainAmount = JSON.parse(data["_body"]).length;
        console.log(this.domainAmount);
      }
    )
  }

}
