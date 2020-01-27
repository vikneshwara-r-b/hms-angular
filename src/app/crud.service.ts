import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  PATIENTS_READ:string= "http://localhost:8080/patients/getPatients";
  PATIENTS_CREATE:string="http://localhost:8080/patients/create";
  PATIENTS_UPDATE:string="http://localhost:8080/patients/update";
  PATIENTS_DELETE:string="http://localhost:8080/patients/delete/";
  id:string;
  constructor(private httpClient:HttpClient) { }
  getAllPatients()
  {
    return this.httpClient.get<Array<Patient>>(this.PATIENTS_READ);
  }
  updatePatient(patient)
  {
    return this.httpClient.put(this.PATIENTS_UPDATE,patient);
  }
  deletePatient(id:number):Observable<any>
  {
    return this.httpClient.delete(this.PATIENTS_DELETE+id);
  }
  createPatient(createdPatient):Observable<any>{
    return this.httpClient.post(this.PATIENTS_CREATE,createdPatient);
  }
}
