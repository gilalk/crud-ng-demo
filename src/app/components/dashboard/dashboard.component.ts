import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses:Course[] = [];
  totalActive:number = 0;
  avgPrice:number = 0;

  constructor(private coursesService:CoursesService) {
     this.coursesService.getCourses()
     .subscribe( (courses:any) => {
       let activeCourses = courses.filter( (x:any ) => x.isActive );
       this.totalActive  = activeCourses.length;

       /*
        למרות שניתן לעשות זאת בחישוב פשוט יותר
        היה חשוב לי להדגים לכם את השימוש בפונקציית
        reduce
       */
       let activeCoursesPrices = activeCourses.map( (c:Course) => c.price);
       this.avgPrice =   this.calcAverage(activeCoursesPrices);
    });
   }

   calcAverage(arr:any[]) {
     /**
      * רצה על כל איברי המערך
      * לוקחת כל פעם את מה שהצטבר עד כה - בתור הפרמטר הראשון
      * ואת האיבר הבא בתור - בתור הפרמטר השני
      * בפעם הראשונה - כיוון שאין לנו כלום שהצטבר עד כה, אז ניקח אפס - כי זה מה שהגדרנו,
      * אך כמובן שאפשר להגדיר שונה.
      * במקרה הזה התוצאה היא סיכום של כל איברי המערך
      * 
      */
    return arr.reduce((a,b) => a + b, 0) / arr.length;
   }  
  ngOnInit(): void {
  }

}
