import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-sube-route',
  templateUrl: './sube-route.component.html',
  styleUrls: ['./sube-route.component.css']
})
export class SubeRouteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  goToPag1(){
    this.router.navigate(['page1'], {relativeTo:this.route})
  }

  goToPag2(){
    this.router.navigate(['page2'], {relativeTo:this.route})
  }

}
