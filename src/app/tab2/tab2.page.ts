
import { FirebaseService,estructura } from '../services/firebase.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public contactos: estructura [];

  constructor(
    private firebase:FirebaseService
  ) {}
  ngOnInit():void{
    this.firebase.verPersonas().subscribe(res=>{
      console.log('personas',res);
      this.contactos=res;
    });
  }

}
