import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovServiceService {

   CitiesMap = new Map([
    ["RDamascus", "ريف دمشق"],
    ["Damascus", "دمشق"],
    ["Homs", "حمص"],
    ["Aleepo", "حلب"],
    ["Hama", "حماه"],
    ["Tartus", "طرطوس"],
    ["Latakia", "اللاذقية"],
    ["Daraa", "درعا"],
    ["DirZor", "ديو الزور"],
    ["Reqa", "الرقة"],
    ["Idleb", "ادلب"],
    ["Sweda", "السويداء"],
    ["kunetra", "القنيطرة"],
    ["Hasaka", "الحسكة"],
]); 


  constructor() { }
}
