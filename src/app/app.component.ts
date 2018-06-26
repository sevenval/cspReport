import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dtOptions;

  ngOnInit(): void {
    this.dtOptions = {
      "ajax": {
        "url": "http://localhost:4000/csp",
        "dataSrc": ""
      },
      "columns": [
        { "data": "domain" },
        { "data": "document-uri" },
        { "data": "blocked-uri" },
        { "data": "violated-directive" },
        { "data": "original-policy"},
        { "data": "date" }
      ],
      "aLengthMenu": [[5,10, 25, 50, -1], [5,10, 25, 50, "All"]]
    };
  }
}
