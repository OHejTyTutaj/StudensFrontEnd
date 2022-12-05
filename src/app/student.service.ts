import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student";
import {environment} from "./environment/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseUrl}/api/v1/students`);
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/api/v1/students`, student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/api/v1/students/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/api/v1/students/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/api/v1/students/${id}`);
  }

}
