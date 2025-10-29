import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../models/taskModel';
import { Task } from '../components/task/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  url = "https://taskmanager-api-42cd.onrender.com/api/v1/task";
  
  constructor(private http: HttpClient){}

  getAll(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url)
  }

  create(task: task): Observable<Task>{
    return this.http.post<Task>(this.url, task);
  }

  delete(id: number): Observable<boolean>{
    return this.http.delete<boolean>(this.url + '/' + id);
  }

  getById(id: string): Observable<Task>{
    return this.http.get<Task>(this.url + '/' + id)
  }

  update(task: task): Observable<Task>{
    return this.http.put<Task>(this.url, task)
  }
}
