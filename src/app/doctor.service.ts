import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl='http://localhost:8081/api/admin';
  
  constructor(private http:HttpClient) { }
  newDoctor(doctor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, doctor);
    }
    getList(): Observable<any> {
      return this.http.get(`${this.baseUrl}/doctor`);
    }
    deletedoctor(id:number):Observable<any>{
      return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
      
    }
    getPatient(): Observable<any> {
      return this.http.get(`${this.baseUrl}/patient`);
    }
    deletepatient(patientid:number):Observable<any>{
      return this.http.delete(`${this.baseUrl}/patient/${patientid}`,{responseType:'text'});
      
    }
}
