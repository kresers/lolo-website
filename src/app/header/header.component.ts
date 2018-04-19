import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

    changeRoute(url) {
        this.router.navigateByUrl(url, { skipLocationChange: true });
        setTimeout(() => this.router.navigate(url));
        // $.getScript('../../assets/js/main.js');
    }



}
