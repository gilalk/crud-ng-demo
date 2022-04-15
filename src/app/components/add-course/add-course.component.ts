import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Course } from 'src/app/Interfaces/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course:Course = {} as Course;

  constructor(private router:Router,
              private coursesService:CoursesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.coursesService.postCourse( this.course).subscribe( (response) => {
      this.router.navigate(['courses']);
    });
   }

}
