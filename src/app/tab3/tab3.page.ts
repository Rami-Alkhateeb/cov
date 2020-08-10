import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovServiceService } from '../cov-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  results
  term = '';
  citiesMap 
  displayedresults:any[];
  constructor(public httpClient: HttpClient , private ssservice : CovServiceService) { }


  ngOnInit() {
    const requestOptions = {

      withCredentials: false
    }
    this.results = []

    this.httpClient.get("https://peat-occipital-headphones.glitch.me/responses", requestOptions)
      .subscribe(data => {
        console.log(data);
        this.results = data


        var country = new Set(this.results.map(item => item.City));
        this.displayedresults = [];
        this.citiesMap = this.ssservice.CitiesMap
        country.forEach(getCountry =>
          this.displayedresults.push({
            city_name: this.citiesMap.get(getCountry),
            values: this.results.filter(i => i.City === getCountry)
          }
          ))

      }, error => {
        console.log(error);
      });
  }

  getCityName(city : string){
    this.citiesMap = this.ssservice.CitiesMap

    return this.citiesMap.get(city)

  }

}
