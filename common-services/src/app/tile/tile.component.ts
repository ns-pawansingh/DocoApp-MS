import { Component, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
constructor(private route: Router){}

style = {
  'width':0 + 'px',
}
navStyle = {'margin': '0px 0px 0px 0px'}

  openNav() {
   this.navStyle = {'margin': '0px 0px 0px 200px'};
    this.style = {
      'width':250 + 'px',
    }
  }
  closeNav(){
    this.navStyle = {'margin': '0px 0px 0px 0px'};
    this.style = {
      'width':0 + 'px',
    }
  }

transportMenu(submenu: string){
  this.route.navigate(['/transport']);
}
openPatientMenu(){
  this.route.navigate(['/patient']);
}
openAppointmentMenu(){
  this.route.navigate(['/appointment']);
}
openMedicineMenu(){
  this.route.navigate(['/medicine']);
}
openReportMenu(){
  this.route.navigate(['/report'])
}

}
