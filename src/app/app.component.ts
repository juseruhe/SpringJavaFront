import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringJava';

  constructor(private router:Router){}

  index(){
    this.router.navigate(["persona"]);
  }

  create(){
    this.router.navigate(["persona/crear"])
  }

  datatable(){
    this.router.navigate(["datatable"])
  }
  
}


