import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { ListsPage } from '../lists/lists.page';
import data from '../../assets/members.json'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  
  results:{src : string , Name : string , desc : string }[] = [] ;
  

  constructor(
  ) {

  }
  ngOnInit() {
    this.results = data

    // this.results = []
    // this.httpClient.get("assets/members.json").subscribe(data =>{
      
    //   this.results = data;
      
    // })
  }

 

  


}

