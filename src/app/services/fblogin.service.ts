import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Injectable({
  providedIn: 'root'
})
export class FbloginService {

  constructor(private fb: Facebook) { }
  loginFB(){
    this.fb.login(['id','name','email']).then
    ((res:FacebookLoginResponse)=>{
      return('logueado correctamente '+ JSON.stringify(res));
    }).
    catch((error)=>{
      return('error: '+ JSON.stringify(error));
    })
  }

}
