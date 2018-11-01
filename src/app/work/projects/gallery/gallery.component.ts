import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Params } from "@angular/router";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  host: { 'class': 'gallery' }
})
export class GalleryComponent implements OnInit {
  project: {id: number, name: string, images: {url: string, desc: string}[]};
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.galleryOptions = [
        {
            fullWidth: true,
            height: '100vh',
            width: 'auto',
            imageSize: "contain",
            thumbnailsColumns: 4,
            imageSwipe: true,
            imageArrows: true,
            thumbnailsArrows: true,
            previewFullscreen: true,
            // previewForceFullscreen: true,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    console.log("Params: ", this.route.snapshot.parent.params.id);
    //this.project = this.dataService.getProjectById(this.route.snapshot.params.id);
    this.galleryImages = [];
    this.route.parent.params.subscribe((params: Params) => {
      this.project = this.dataService.getProjectById(+params.id);
      this.project.images.forEach((image) => {
        this.galleryImages.push({small: image.url, medium: image.url, big: image.url});
      });
    });
  }

}
