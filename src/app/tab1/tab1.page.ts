import { FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { FbloginService } from '../services/fblogin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public facebook_account ;

  constructor(private fb: FbloginService ) {}

  loguearFB(){
    this.facebook_account=this.fb.loginFB();

  }

}
