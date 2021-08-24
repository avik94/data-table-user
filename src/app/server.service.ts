import { AngularFirestore } from '@angular/fire/firestore';
import { EventEmitter, Injectable } from '@angular/core';
import { UserModel } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  submitCheck = new EventEmitter();

  constructor(
    private http :HttpClient
  ) { }



  getData(date) {
    // console.log("hi i am get user")
    return this.http.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=725&date=24--08--2021').toPromise()
    // console.log("hi i am get user")
  }
}
