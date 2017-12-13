import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
// import { Subscriber } from 'rxjs/Subscriber';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {

  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
   }

  getClients() {
    return this.clients;
  }

}
