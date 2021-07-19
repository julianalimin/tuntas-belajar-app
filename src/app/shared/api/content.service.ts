import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getCourseList() {
    return this.http.get<Course[]>('assets/json/course-list.json');
  }
}
