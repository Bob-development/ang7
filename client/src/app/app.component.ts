import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    public getDataService: GetDataService,
    private httpClient: HttpClient
  ){}

}
