import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  check:boolean=true;
  constructor() {
  this.user=
  {
    name:"ARCHANA",
  job:'Amal JyothY College',
  address:'Urappukuzhiyil,vaipur,pathanamthitta',

phone:['950383894',
'4567878']

  };
}
 togglecheck(){
   this.check=!this.check;
 } 

  ngOnInit() {
  }

}
