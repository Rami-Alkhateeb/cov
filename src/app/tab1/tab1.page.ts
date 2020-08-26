import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { ListsPage } from '../lists/lists.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  results
  

  constructor(
    public httpClient: HttpClient,
    public toastController: ToastController,
    
  ) {

  }
  ngOnInit() {
    this.results = []
    this.httpClient.get("assets/members.json").subscribe(data =>{
      
      this.results = data;
      
    })
  }

 

  async presentToast() {
    const toast = await this.toastController.create({
      position: 'middle',
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  


}

