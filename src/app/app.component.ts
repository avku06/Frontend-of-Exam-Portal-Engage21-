import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend';
  cur_route_start=false;
  qid:any;
  constructor(private router:Router,private _route: ActivatedRoute,) {}
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if(event.url!=undefined && event.url!=null && event.url.includes('/start/')){
        this.cur_route_start=true;
      }
    });
  }

}
