import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';
// import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {

  // clients: AngularFireList<any[]>;
  clients: Observable<Client[]>;
  client: AngularFireObject<any>;

  constructor(
    public af: AngularFireDatabase
  ) {
    this.clients = this.af.list('/clients').valueChanges();
    // af.list('items').snapshotChanges().map(actions => {
    //   return actions.map(action => ({ $key: action.key, ...action.payload.val() }));
    // }).subscribe(items => {
    //   return items.map(item => item.key);
    // });
   }

  getClients() {
    return this.clients;
  }

}
