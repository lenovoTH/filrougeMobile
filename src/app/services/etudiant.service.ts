import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  // getId !:number
  constructor(private http: HttpClient, private authservice: AuthService) {
    // this.authservice.getId().then(
    //   (id: any) => {
    //     this.getId = id
    //   }
    // )
   }
idElev= this.authservice.getId()
  getCours(): Observable<any> {
    return this.http.get<any>(`${environment.uri}getCoursByEleve/${this.idElev}`)
  }

}
