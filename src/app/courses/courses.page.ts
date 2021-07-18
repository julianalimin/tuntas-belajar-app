import { Component } from '@angular/core';
import { ContentService } from '../shared/api/content.service';
import { Kursus } from '../shared/api/models/kursus';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss'],
})
export class CoursesPage {
  daftarKursus: Kursus[] = [];

  constructor(private contentService: ContentService) {
    this.contentService.getDaftarKursus().subscribe((response) => {
      this.daftarKursus = response;
    });
  }
}
