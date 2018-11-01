import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './work/projects/projects.component';
import { ClientsComponent } from './work/clients/clients.component';
import { ContactComponent } from './work/contact/contact.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'work',  component: WorkComponent, children: [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent },
    { path: 'clients', component:  ClientsComponent}, 
    { path: 'contact', component:  ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
}) 
export class AppRouting {}