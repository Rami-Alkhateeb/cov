import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab0',
  templateUrl: 'tab0.page.html',
  styleUrls: ['tab0.page.scss']
})
export class Tab0Page implements OnInit{

  results
  constructor(public httpClient: HttpClient) {}
  ngOnInit(): void {
    this.results = []
    this.httpClient.get("assets/ar.json").subscribe(data =>{
      
      this.results = data;
      
    })
    }

}
