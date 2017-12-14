import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';
// import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {

  // clients: Observable<any[]>;
  clients: AngularFireList<any[]>;
  client: AngularFireObject<any>;

  constructor(
    public af: AngularFireDatabase
  ) {
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
   }

  getClients() {
    return this.clients;
  }

  newClient(client: Client) {
    this.clients.push(client);
  }

}
