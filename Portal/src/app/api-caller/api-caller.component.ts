import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../services/api-caller.service';

@Component({
  selector: 'app-api-caller',
  templateUrl: './api-caller.component.html',
  styles: []
})
export class ApiCallerComponent implements OnInit {

  apiResults: any = null;

  constructor(private apiClient: ApiCallerService) { }

  ngOnInit() {}

  public callApi() {
    this.apiResults = 'sending request';

    this.apiClient.callApi().subscribe(result => {
      console.log(result);

      if (result) {
        this.apiResults = result;
      }
    });
  }

  public callAdminApi() {
    this.apiResults = 'sending request';

    this.apiClient.callAdminApi().subscribe(result => {
      console.log(result);

      if (result) {
        this.apiResults = result;
      }
    });
  }
}
