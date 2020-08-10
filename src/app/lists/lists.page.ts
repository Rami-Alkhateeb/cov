import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  
  results 

  constructor( public httpClient: HttpClient) { }

  
  ngOnInit() {
    const requestOptions = {

      withCredentials: false
    }
    this.results = []

    this.httpClient.get("https://peat-occipital-headphones.glitch.me/reqs", requestOptions)
      .subscribe(data => {
        console.log(data);
        this.results = data
      }, error => {
        console.log(error);
      });
  }

}
