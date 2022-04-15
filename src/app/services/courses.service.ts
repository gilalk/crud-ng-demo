import { Injectable } from '@angular/core';
import { Course } from '../Interfaces/Course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly server:string = 'http://localhost:3000';

  courses: Course[] = [];

  constructor(private http: HttpClient) {

   }

   // GET
   getCources() {
     return this.http.get(`${this.server}/courses`);
   }

   // GET Single Course

   getSingleCourse(id:number){
    return this.http.get(`${this.server}/courses/${id}`);
   }

   // POST ( create )

   postCourse(course:Course) {
     return this.http.post(`${this.server}/courses`, course);
   }

   // DELETE ( delete )
   
   deleteCourse(id:number){
     return this.http.delete(`${this.server}/courses/${id}`);
   }

   // PUT ( update )

   updateCourse(id:number, course: Course){
     return this.http.put(`${this.server}/courses/${id}`, course);
   }
}
