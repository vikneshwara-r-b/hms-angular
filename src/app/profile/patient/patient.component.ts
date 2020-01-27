import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from '../../crud.service';
import { Patient } from '../../patient';
import { Customresponse } from '../../customresponse';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  showModal:boolean;
  createModal:boolean;
  createdpatient:Patient=new Patient();
  updatedpatient:Patient;
  index:number=0;
   allpatients:Array<Patient>;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,private _crudservice:CrudService) { }

      showPopup(i:number)
      {
        this.showModal=true;
        this.index=i;
      }

    onCreatePressed()
    {
       this.createdpatient.fkRoleId=2;
       this._crudservice.createPatient(this.createdpatient).subscribe(
         (data)=>{
           console.log(data);
           console.log("Patient creation successfull");
         },(err)=>{
          console.log("Something went wrong!");
          console.log("Error occured");
        }
       );
       this.createModal=false;
       this.ngOnInit();
    }

    onUpdatePressed(patient)
    {
      console.log(patient);
      this._crudservice.updatePatient(patient).subscribe(
        (json)=>{
          this.updatedpatient=json['data'];
          console.log(this.updatedpatient);
          this.ngOnInit();
          console.log("Updated Successfully");
        },(err)=>{
          console.log("Something went wrong!");
          console.log("Error occured");
        }
      )
    }
onDeletePressed(i:number)
{
  let id=this.allpatients[i].pkPatientId;
  this._crudservice.deletePatient(id).subscribe(
    (data)=>
    {
      console.log(data);
      if(data['statusCode']==204)
       {
         console.log('Deleted successfully');
         this.ngOnInit();
       }
    },
    (err)=>{
      console.log("Something went wrong!");
      console.log("Error occured");
    }
  )
}
  
ngOnInit() {
    console.log("Inside patient component");
    this._crudservice.getAllPatients().subscribe(
      (json)=>{ 
        this.allpatients=json['data'];
        console.log(this.allpatients);
      },
      (err)=>{
        console.log("Something went wrong!");
        console.log("Error occured");
      }
    )
  }

}
