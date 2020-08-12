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

  phone: string;
  city: string;
  area: string;
  age: number;
  status: string;
  
  isSubmitted = false

  constructor(
    public httpClient: HttpClient,
    public toastController: ToastController,
    
  ) {

  }
  ngOnInit() {
    
  }

 

  async presentToast() {
    const toast = await this.toastController.create({
      position: 'middle',
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  send() {
    //this.presentToast()
    let result = false

    let data = {
      phone: this.phone,
      age: this.age,
      city: this.city,
      area: this.area,
      status: this.status
    }
    console.log("data")
    console.log(data)
    const requestOptions = {

      withCredentials: false
    }

    const postRequestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      }),
      withCredentials: false
    }

    if (result) {
      this.presentToast()
      this.phone = "",
        this.age = 0,
        this.city = "",
        this.area = "",
        this.status = ""
    }

    this.httpClient.post("https://peat-occipital-headphones.glitch.me/postreq", data, postRequestOptions)
      .subscribe(data => {
        console.log(data['_body']);
        result = true
        
      
          
      }, error => {
        console.log(error);
      });



  }


}

