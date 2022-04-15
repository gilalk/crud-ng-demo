import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/Interfaces/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course = {} as Course;
  id:number = 0;

  constructor(private courseService:CoursesService, 
              private router: Router,
              private activatedRoute:ActivatedRoute) { 
      this.activatedRoute.params.subscribe( (params:Params) => {
        this.id = params['id'];
      })
  }

  ngOnInit(): void {
    this.courseService.getSingleCourse(this.id)
                      .subscribe((response:any) => {
                        this.course = response;
                        console.log(this.course);
                      })
  }

  onSubmit(form : any){
    this.course.updatedAt = new Date();
    this.courseService.updateCourse(this.id,this.course).subscribe(
      (response:any) => {
        this.router.navigate(['courses']);
      }
    )
  }
}
