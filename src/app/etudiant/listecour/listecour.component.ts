import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-listecour',
  templateUrl: './listecour.component.html',
  styleUrls: ['./listecour.component.scss'],
})
export class ListecourComponent implements OnInit {

  constructor(private etudiantservice: EtudiantService, private authservice: AuthService) { }
  // idElev!: number
  ngOnInit() {
    this.getcours()
    // this.authservice.getId().then(
    //   (id: any) => {
    //     this.idElev = id
    //   }
    // );
  }
tabcours:any
  getcours() {
    this.etudiantservice.getCours().subscribe(value => {
      this.tabcours= value.data
      console.log(value.data);
    })
  }

}
