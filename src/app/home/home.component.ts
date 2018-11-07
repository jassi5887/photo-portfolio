import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  private fragment;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment });
  }

  ngAfterViewChecked() {
    try {
      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView({behavior: "smooth"});
      }
    } catch(e) {}
  }
}
