import { Injectable } from '@angular/core';
import { Course } from '../Interfaces/Course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [];

  constructor(private http: HttpClient) {

   }

   getCources() {
     return this.http.get('http://localhost:3000/courses');
   }
}
