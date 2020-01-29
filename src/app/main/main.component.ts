import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  selectElement:any;

  constructor() { }

  ngOnInit() {
  }

  // function to select elments
  openNav(){
    document.getElementById("sidebar_aside").style.right="0";
  }
  closeNav(){
    document.getElementById("sidebar_aside").style.right="-26rem"
  }


}
