import { Component, OnInit } from '@angular/core';
//import jsondata from '../../assets/data.json'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


  term = '';
  data
  constructor (
    private httpClient: HttpClient,
    public loadingController: LoadingController
  ) 
  {    
    this.presentLoading()
  }


  ngOnInit() {

    this.getJson()

  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'الرجاء الانتظار ..',
      duration: 1000
    });
    await loading.present();

  }

  delay(ms: number) { // <------ Change
    return new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired")); // <------ Change
  }

  async getJson() {
    await this.delay(2000)
    let post: Observable<any> = this.httpClient.get<any>('/assets/dataaa.json');
    post.subscribe(post => {
      this.data = post;
    });
  }




}

