import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reslists',
  templateUrl: './reslists.page.html',
  styleUrls: ['./reslists.page.scss'],
})
export class ReslistsPage implements OnInit {

  results 

  constructor( public httpClient: HttpClient) { }

  
  ngOnInit() {
    const requestOptions = {

      withCredentials: false
    }
    this.results = []

    this.httpClient.get("https://peat-occipital-headphones.glitch.me/responses", requestOptions)
      .subscribe(data => {
        console.log(data);
        this.results = data
      }, error => {
        console.log(error);
      });
  }

}
