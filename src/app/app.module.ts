import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app-routing.module';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './work/projects/projects.component';
import { ClientsComponent } from './work/clients/clients.component';
import { ContactComponent } from './work/contact/contact.component';
import { TopNavComponent } from './work/top-nav/top-nav.component';
import { ProjectComponent } from './work/projects/project/project.component';
import { GalleryComponent } from './work/projects/gallery/gallery.component';
import { DataService } from './services/data.service';

import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ProjectsComponent,
    ClientsComponent,
    ContactComponent,
    TopNavComponent,
    GalleryComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGalleryModule,
    AppRouting
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
