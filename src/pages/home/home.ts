import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Config } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{

    constructor(public controller: NavController)
    {

    }

    segueToProfile()
    {
        this.controller.push(ProfilePage);
    }

}
