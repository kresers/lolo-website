import { Component, OnInit } from '@angular/core';
import {ScriptService} from "../script.service";

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor(private script:ScriptService) {
      this.script.load('mainJs').then(data => {
          console.log('script loaded ', data);
      }).catch(error => console.log(error));
  }

  ngOnInit() {

  }
}
