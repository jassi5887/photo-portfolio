import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './work/projects/projects.component';
import { ContactComponent } from './work/contact/contact.component';
import { ProjectComponent } from './work/projects/project/project.component';
import { GalleryComponent } from './work/projects/gallery/gallery.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'work',  component: WorkComponent, children: [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, children: [
      { path: ':id', component: ProjectComponent, children: [
        { path: 'gallery', component: GalleryComponent }
      ]}
    ]},
    { path: 'contact', component: ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
}) 
export class AppRouting {}