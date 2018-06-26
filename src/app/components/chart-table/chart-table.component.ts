import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartService} from "../../chart.service";
import {joinTestLogs} from "protractor/built/util";
import {Subject} from "rxjs/Subject";
import {Http} from "@angular/http";
import {DataTableDirective} from 'angular-datatables';

@ViewChild(DataTableDirective)

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
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.css']
})
export class ChartTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  domains:Domain[]= [];
  dtTrigger: Subject<any> = new Subject();
  cspAmount;
  domainAmount;


  constructor(private http:Http, private chartService:ChartService){};

  ngOnInit(): void {
    console.log('create next one');
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 2
    // };
    // this.http.get('http://localhost:4000/csp')
    //   .subscribe(domains => {
    //
    //     console.log(JSON.parse(domains["_body"]));
    //     this.domains = JSON.parse(domains["_body"]);
    //
    //     // Calling the DT trigger to manually render the table
    //     this.dtTrigger.next();
    //   });
    // this.renderTable(this.getLabel());
  }

  public renderTable(domain:String):void {
    console.log('did it!');
    this.dtOptions = {
      retrieve:true,
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('http://localhost:4000/csp/'+ domain)
      .subscribe(domains => {

        console.log(JSON.parse(domains["_body"]));
        this.domains = JSON.parse(domains["_body"]);

        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  public getLabel():string {
    return  this.chartService.getLabel();
  }


 /* public   dtOptions;
  public   tableLoaded:boolean= false;
  public  domain:string;
  public label: string;

  public data:string;

  constructor(private chartService: ChartService){
    console.log('constructor reached');
  };

  getLabel():string {
   return  this.chartService.getLabel();

  }

  // public static getLabel():void{
  //   ChartTableComponent.data = this.chartService.getLabel();
  // }

  ngOnInit(): void {
    // this.renderTable();

  }

  public static test(): void {

  }

  // public static getTableData():void {
  //   getLabel();
  // }

  public renderTable():void {
    console.log('rendering Table');
    this.getLabel();
    // const foo = this.getLabel()
    const foo = this.getLabel();
    console.log(foo);
   this.dtOptions = {

     "ajax": {
       "url": "http://localhost:4000/csp/"+ "youtube.com",
       "dataSrc": "",
       "data": function(d){
         console.log(d);
       }
     },
     "columns": [
       {
         "title": "domain",
         "data": "domain"
       },
       {
         "title": "document-uri",
         "data": "document-uri"
       },
       {
         "title": "blocked-uri",
         "data": "blocked-uri"
       },
       {
         "title": "violated-directive",
         "data": "violated-directive"
       },
       {
         "title": "original-policy",
         "data": "original-policy"
       },
       {
         "title": "date",
         "data": "date"
       }
     ],
     "bDestroy": true,
     "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
     'autoWidth': false

   }
   console.log('bar', this.dtOptions)
    this.tableLoaded=true;

  }

  public renderTableSecond():void {
   this.chartService.getData("http://localhost:4000/csp/youtube.com").then(info => {
     this.dtOptions = {
       "ajax": {
         "url": "http://localhost:4000/csp/youtube.com",
         "dataSrc": "",
         "data": info
       },
       "columns": [
         {
           "title": "domain",
           "data": "domain"
         },
         {
           "title": "document-uri",
           "data": "document-uri"
         },
         {
           "title": "blocked-uri",
           "data": "blocked-uri"
         },
         {
           "title": "violated-directive",
           "data": "violated-directive"
         },
         {
           "title": "original-policy",
           "data": "original-policy"
         },
         {
           "title": "date",
           "data": "date"
         }
       ],
       "bDestroy": true,
       "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
       'autoWidth': false

     }
     this.data = info;
     console.log(this.data);
     this.tableLoaded= true;
   })
  }*/
}


