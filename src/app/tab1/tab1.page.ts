import { Component } from '@angular/core';
import { ContentService } from '../shared/api/content.service';
import { Kursus } from '../shared/api/models/kursus';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  daftarKursus: Kursus[] = [];

  constructor(private contentService: ContentService) {
    this.contentService.getDaftarKursus().subscribe((response) => {
      this.daftarKursus = response;
    });
  }
}
