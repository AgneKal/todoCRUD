import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

import { ActivatedRoute, Router } from '@angular/router';
import { statusas, Task } from '../../../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  public newTaskForm: FormGroup;
  public editTaskId!: string;
  public statusOption = Object.values(statusas);

  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute){
    this.newTaskForm = new FormGroup({
      'description': new FormControl(null, [Validators.required]),
      'startDate': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(){
    this.editTaskId = this.activatedRoute.snapshot.params['id'];
    if(this.editTaskId) {
      this.taskService.getTask(this.editTaskId).subscribe((result) => {
        this.newTaskForm.patchValue(result);
      });
    }
  }

  // formatDate(date: Date): string {
  //   if (!date) return '';
  //   const d = new Date(date);
  //   const year = d.getFullYear();
  //   const month = ('0' + (d.getMonth() + 1)).slice(-2);
  //   const day = ('0' + d.getDate()).slice(-2);
  //   return `${year}-${month}-${day}`;
  // }

  public addTask(){
    if(this.newTaskForm.invalid) {
      alert('Prašome užpildyti visus laukus');
      return;
    }
    const model: Task = this.newTaskForm.value as Task;
      this.taskService.addTask(model).subscribe((result) => {
            alert('Užduotis pridėta sėkmingai');
            this.router.navigateByUrl('/');
      })
  }

  public updateTask(){
    if(this.newTaskForm.invalid) {
      alert('Prašome užpildyti visus laukus');
      return;
    }
    const model: Task = this.newTaskForm.value as Task;
      this.taskService.updateTask(this.editTaskId, model).subscribe((result) => {
            alert('Užduotis atnaujinta sėkmingai');
            this.router.navigateByUrl('/');
      })
  }

}
