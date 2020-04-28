import { Component, OnInit } from '@angular/core';
import { FirebaseService, estructura } from '../services/firebase.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit { 
  public calificacion: string;
  public nombre: string;
  public precio: string;
  public tipo: string;

  constructor(
    private firebase:FirebaseService
  ) {}

  ngOnInit(){
  }
  
  agregar_videojuego(){
    this.firebase.agregarPersona(this.calificacion,this.nombre,this.precio,this.tipo);
    console.log('Video Juego Registrado');
  }
}
