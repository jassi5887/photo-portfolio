import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private projects = [
    {
      id: 1,
      name: 'project 1',
      images: [
        { 
          url: 'assets/images/projects/advertising_1/girl_1.jpg', 
          desc: 'some image desc' 
        },
        { 
          url: 'assets/images/projects/advertising_1/girl_2.jpg', 
          desc: 'some image desc' 
        },
        { 
          url: 'assets/images/projects/advertising_1/pump.jpg', 
          desc: 'some image desc' 
        },
        { 
          url: 'assets/images/projects/advertising_1/wall.jpg', 
          desc: 'some image desc' 
        },
        { 
          url: 'assets/images/projects/advertising_1/wall.jpg', 
          desc: 'some image desc' 
        },
        { 
          url: 'assets/images/projects/advertising_1/wall.jpg', 
          desc: 'some image desc' 
        },
        { 
          url: 'assets/images/projects/advertising_1/wall.jpg', 
          desc: 'some image desc' 
        }
      ]
    }
  ];

  getProjectById(id: number) {
    return this.projects.filter((project) => project.id === id)[0];
  }
}