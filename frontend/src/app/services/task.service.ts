import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public apiUrl = 'http://localhost:3000';

  
  constructor(private http: HttpClient) { }

  public getTasks() {
    return this.http.get<Task[]>(this.apiUrl+'/tasks')
  }

  public addTask(model: Task){
    return this.http.post<Task>(this.apiUrl+'/tasks', model)
  }

  public getTask(id: string) {
      return this.http.get<Task>(this.apiUrl + '/tasks/' + id)
  }

  public updateTask(id: string, model: Task){
      return this.http.put<Task>(this.apiUrl + '/tasks/' + id, model)
  }

  public deleteTask(id: string){
      return this.http.delete(this.apiUrl + '/tasks/' + id)
  }

}
