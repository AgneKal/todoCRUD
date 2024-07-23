import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../../models/task';
import { TaskService } from '../../services/task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  public tasks: Task[] = [];

  private loadTasks() {
    this.taskService.getTasks().subscribe((result) => {
      this.tasks = result;
    })
  }

  constructor(private taskService: TaskService){
    this.loadTasks();
  }

  public deleteTask(id: string) {
    const ok = confirm("Ar tikrai norite ištrinti užduotį?")
    if (ok) {
        this.taskService.deleteTask(id).subscribe({
            next: (result) => {
                this.loadTasks();
                alert('Užduotis sėkmingai ištrinta')
            }
        })
        }
  }


}
