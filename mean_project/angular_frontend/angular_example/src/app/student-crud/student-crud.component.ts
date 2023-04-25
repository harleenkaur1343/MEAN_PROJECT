import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})
export class StudentCrudComponent {

  //creating a student array 
  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name : string="";
  place  : string="";
  country : string="";
  _id : string="";


  constructor(private http:HttpClient)
  {
    this.getAllStudents();
  }

  ngOnInit():void
  {

  }

  getAllStudents(){

    this.http.get("http://localhost:5000/api/students")
    .subscribe((resultData:any)=>
    {

      this.isResultLoaded = true;
      console.log(resultData);
      /*function func(){ 
        const res_array = []; 
        for(let i in resultData) { 
           res_array.push([i,resultData[i]]); 
        }; 
        console.log(res_array);
     };*/
      this.StudentArray = resultData; 
    });
    console.log(this.StudentArray);
  }

  register(){
    let bodyData = {
      "name" : this.name,
      "place" : this.place,
      "country" : this.country
    }

    this.http.post('http://localhost:5000/api/students/send',bodyData).subscribe((resultData:any)=>{
      console.log(resultData);
      alert("Student registered successfully");
      this.getAllStudents();
    })
  }

  save(){


    if(this._id=='')
    {
      this.register();
    }
    else{
      this.UpdateRecords();
    }
  }

  UpdateRecords()
  {
      let bodyData = {
        "name" : this.name,
        "place" : this.place,
        "country" : this.country
      };

      this.http.put('http://localhost:5000/api/students/update',bodyData)
      .subscribe((resultData:any)=>{

        console.log(resultData);
        alert("Student record updated");
        this.getAllStudents();
      });
  }

  setUpdate(data : any){

    this.name = data.name;
    this.place = data.place;
    this.country = data.country;

    this._id = data._id;  
  }

  setDelete(data:any)
  {
    const options = {
      body: {
        id: data._id
      }
    };
    
    
    this.http.delete('http://localhost:5000/api/students/delete', options).subscribe((resultData:any)=>{

    console.log(resultData);
    alert("Record deleted");
    this.getAllStudents();
    });
  }
}
