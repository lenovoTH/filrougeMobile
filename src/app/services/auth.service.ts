import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body: any): Observable<any> {
    return this.http.post<any>(`${environment.uri}login`, body);
  }

  logout(): Observable<any> {
    return this.http.get<any>(`${environment.uri}logout`);
  }

  getToken() {
    return localStorage.getItem('access token')
  }

  setToken(token: string) {
    localStorage.setItem('access token', token)
  }

  getRole() {
    return localStorage.getItem('role')
  }

  setRole(role: string) {
    localStorage.setItem('role', role)
  }

  setId(id: string) {
    localStorage.setItem('id user', id)
  }

  getId() {
    return localStorage.getItem('id user')
  }

  removeToken() {
    localStorage.removeItem('access token')
    localStorage.removeItem('role')
    localStorage.removeItem('id user')
  }




  // constructor(private http: HttpClient, private storage: Storage) {
  //   this.initStorage()
  // }

  // login(body: any): Observable<any> {
  //   return this.http.post<any>(`${environment.uri}login`, body);
  // }

  // logout(): Observable<any> {
  //   return this.http.get<any>(`${environment.uri}logout`);
  // }

  // private async initStorage() {
  //   await this.storage.create()
  // }

  // private async storeData(key: string, value: any) {
  //   await this.storage.set(key, value)
  // }

  // getToken() {
  //   return this.storage.get('access token')
  // }

  // setToken(token: string) {
  //   this.storage.set('access token', token)
  // }

  // getRole() {
  //   return this.storage.get('role')
  // }

  // setRole(role: string) {
  //   this.storage.set('role', role)
  // }

  // setId(id: string) {
  //   this.storage.set('id user', id)
  // }

  // getId() {
  //   return this.storage.get('id user').then(
      
  // //     // (user:number | null)=>{
  // //     //   if(user !=null){
  // //     //     return user
  // //     //   }
  // //     //   return null
  // //     // }
  //   )
  // }

  // // getId() {
  // //   return new Promise((resolve, reject) => {
  // //     this.storage.get('id user').then(
  // //       (id) => {
  // //         resolve(id);
  // //       },
  // //       (error) => {
  // //         reject(error);
  // //       }
  // //     );
  // //   });
  // // }

  // removeToken() {
  //   this.storage.remove('access token')
  //   this.storage.remove('role')
  // }

}