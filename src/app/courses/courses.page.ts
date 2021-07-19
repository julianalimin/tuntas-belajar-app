import { Component } from '@angular/core';
import { ContentService } from '../shared/api/content.service';
import { Course } from '../shared/api/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss'],
})
export class CoursesPage {
  courseList: Course[] = [];

  constructor(private contentService: ContentService) {
    this.contentService.getCourseList().subscribe((response) => {
      this.courseList = response;
    });
  }

  showCourse(course) {
    console.log(course);
  }
}
