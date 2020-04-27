import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface estructura{
  id?:string;
  calificacion:string;
  nombre:string;
  precio:string;
  tipo:string;
  
};


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private Collection:AngularFirestoreCollection<estructura>;
  private persona$:Observable<estructura[]>;

  constructor(
    db:AngularFirestore
  ) { 
    this.Collection=db.collection<estructura>('videojuegos');
    this.persona$= this.Collection.snapshotChanges().pipe(map(
     actions=> {
      return actions.map(action => {
        const data = action.payload.doc.data();
        const id = action.payload.doc.id;
        return { id, ...data };
        }); 
      }
    ));
  }
  // funciones 
  
  agregarPersona(calificacion_,nombre_,precio_,tipo_)
  {
    this.Collection.add({
      calificacion:calificacion_,
      nombre:nombre_,
      precio:precio_,
      tipo:tipo_
    });
  }
  verPersonas(){
    return this.persona$;
  }
  verPresona(id:string){
    return this.Collection.doc<estructura>(id).valueChanges();
  }
  updatePresona(p:estructura,id:string){
    return this.Collection.doc(id).update(p);
  }
  eliminarPersona(id:string){
    return this.Collection.doc(id).delete();
  }
}
