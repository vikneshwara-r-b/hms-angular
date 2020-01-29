import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from '../../crud.service';
import { Patient } from '../../patient';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { bloodGroupValidator } from '../../../validators/customvalidor';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  index:number=0;
  showModal:boolean;
   allpatients:Array<Patient>;
   patient:Patient;
   patientForm:FormGroup;
   patientEditForm:FormGroup;
   updatedpatient:Patient;
   createdpatient:Patient;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,private _crudservice:CrudService) { }
    
    ngOnInit() {
      console.log("Inside patient component");
      this.getPatients();
      this.patientForm=new FormGroup({
        pkUserId:new FormControl(),
        pkPatientId:new FormControl(),
        userUsername:new FormControl('',Validators.required),
        userPassword:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
        userEmail:new FormControl(''),
        userPhonenumber:new FormControl('',[Validators.required,Validators.maxLength(15)]),
        userFirstname:new FormControl('',Validators.required),
        userLastname:new FormControl('',Validators.required),
        userAge: new FormControl('',[Validators.required,Validators.max(150)]),
        userCity:new FormControl(''),
        fkRoleId:new FormControl(2),
        userState:new FormControl(''),
        userStreet:new FormControl(''),
        patientHeight:new FormControl('',Validators.required),
        patientWeight: new FormControl('',Validators.required),
        patientBloodGroup: new FormControl('',[Validators.required,bloodGroupValidator]),
      });
    }

    onCreateClick() 
    {
      this.showModal=true;
      this.patientForm=new FormGroup({
        pkUserId:new FormControl(),
        pkPatientId:new FormControl(),
        userUsername:new FormControl('',Validators.required),
        userPassword:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
        userEmail:new FormControl(''),
        userPhonenumber:new FormControl('',[Validators.required,Validators.maxLength(10)]),
        userFirstname:new FormControl('',Validators.required),
        userLastname:new FormControl('',Validators.required),
        userAge: new FormControl('',[Validators.required,Validators.max(150)]),
        userCity:new FormControl(''),
        fkRoleId:new FormControl(2),
        userState:new FormControl(''),
        userStreet:new FormControl(''),
        patientHeight:new FormControl('',Validators.required),
        patientWeight: new FormControl('',Validators.required),
        patientBloodGroup: new FormControl('',[Validators.required,bloodGroupValidator]),
      });
      console.log(this.patientForm.value);
      console.log('Clicked');
    }
    get bloodGroup()
    {
      return this.patientForm.get('patientBloodGroup');
    }

    onCreatePressed()
    {
      console.log(this.patientForm.value);
      this._crudservice.createPatient(this.patientForm.value).subscribe(
        (json)=>{
          this.createdpatient=json['data'];
          console.log(this.createdpatient);
          console.log("Patient creation successfull");
          this.getPatients();
        },(err)=>{
         console.log("Something went wrong!");
         console.log("Error occured");
       }
      );
      this.showModal=false;
       this.getPatients();
    }

    sendValues(patient){
      console.log("Inside patient form");
      this.patientForm.patchValue(patient);
      console.log(this.patientForm.value);
    }

    onUpdatePressed(patientFormvalue)
    {
      console.log(patientFormvalue);  
      this._crudservice.updatePatient(patientFormvalue).subscribe(
        (json)=>{
          this.updatedpatient=json['data'];
          console.log(this.updatedpatient);
          this.getPatients();
          console.log("Updated Successfully");
        },(err)=>{
          console.log("Something went wrong!");
          console.log("Error occured");
        }
      );
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
         this.getPatients();
       }
    },
    (err)=>{
      console.log("Something went wrong!");
      console.log("Error occured");
    }
  )
}
  
getPatients()
{
  this._crudservice.getAllPatients().subscribe(
    (json)=>{ 
      this.allpatients=json['data'];
      console.log(this.allpatients);
    },
    (err)=>{
      console.log("Something went wrong!");
      console.log("Error occured");
    }
  );
}


}
