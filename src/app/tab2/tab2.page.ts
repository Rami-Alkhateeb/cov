import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  phone : string ;
  city : string;
  area : string ;
  count : number;

  constructor(
    public httpClient: HttpClient,
    public toastController: ToastController
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  send() {

    let data = {
      phone : this.phone,
      count : this.count,
      city : this.city,
      area : this.area
    }
    console.log("data")
    console.log(data)
    const requestOptions = {

      withCredentials: false
    }

    const postRequestOptions = {
      headers: new HttpHeaders({
          'Content-Type':'application/json' ,
          "Accept": 'application/json'
        }),
        withCredentials: false
    }

    this.httpClient.post("https://peat-occipital-headphones.glitch.me/postres", data, postRequestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });


  }

}
