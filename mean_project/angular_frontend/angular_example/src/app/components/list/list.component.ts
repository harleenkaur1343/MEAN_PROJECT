import { Component, OnInit } from '@angular/core';
//import { StudentsService } from '../../shared/students.service';
import { Students } from '../../students';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 /* private students:Students[];
  constructor(private _studentService:StudentsService){

  }
  ngOnInit() {
      this.readstudents();
  }
  readstudents()
  {
    this._studentService.readStudents().subscribe(

      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }*/
}
