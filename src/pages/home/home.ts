import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  constructor(public navCtrl: NavController) {

  }

}
