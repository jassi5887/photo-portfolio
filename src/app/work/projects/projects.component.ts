import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host: { 'class': 'projects' }
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
