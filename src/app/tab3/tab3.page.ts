import { Component, OnInit } from '@angular/core';
import jsondata from '../../assets/data.json'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


  loaded = false
  term = '';
  data
  //displayedresults:{Name : string , Author : string , Section : string }[] = data ;
  constructor(
    private httpClient: HttpClient,
  ) {
    this.loaded = false
    // console.log("con")
    // httpClient.get('/assets/data.json').toPromise().then(data => {
    // console.log(data);
    // this.data = data
    // });
    this.data = jsondata
  }


  ngOnInit() {

    //this.displayedresults =[]
    
    console.log("ng");


    // let post: Observable<any> = this.httpClient.get<any>('/assets/dataaa.json');
    // post.subscribe(post => {
    //   this.data = post;
    //   this.loaded = true
    // });

  }




}

