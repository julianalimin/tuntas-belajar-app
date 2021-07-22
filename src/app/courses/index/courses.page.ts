import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../shared/api/content.service';
import { Course } from '../../shared/api/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss'],
})
export class CoursesPage {
  courseList: Course[] = [];

  constructor(private contentService: ContentService, private router: Router) {
    this.contentService.getCourseList().subscribe((response) => {
      this.courseList = response;
    });
  }

  showCourse(course) {
    this.router.navigate([`/tabs/courses/${course.id}`]);
  }
}
