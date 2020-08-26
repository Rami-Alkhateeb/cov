import { Component, OnInit } from '@angular/core';
import data from '../../assets/dataaa.json'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  
  term = '';
   
  displayedresults:{Name : string , Author : string , Section : string }[] = [] ;
  constructor( ) { }


  ngOnInit() {
    
    this.displayedresults = data

    //#region comments
    // this.httpClient.get("https://peat-occipital-headphones.glitch.me/responses", requestOptions)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.results = data


    //     var country = new Set(this.results.map(item => item.City));
    //     this.displayedresults = [];
    //     this.citiesMap = this.ssservice.CitiesMap
    //     country.forEach(getCountry =>
    //       this.displayedresults.push({
    //         city_name: this.citiesMap.get(getCountry),
    //         values: this.results.filter(i => i.City === getCountry)
    //       }
    //       ))

    //   }, error => {
    //     console.log(error);
    //   });
    //#endregion
    
  //   this.httpClient.get("assets/data.json").subscribe(data =>{
      
  //     this.displayedresults = data;
      
    
  //   // this.dataSource = new MatTableDataSource(this.users);
  //   // this.dataSource.paginator = this.paginator;
  //   // this.dataSource.sort = this.sort;
  //   })
  // }


  }
}
