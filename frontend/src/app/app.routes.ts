import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFormComponent } from './components/tasks/task-form/task-form.component';

export const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    },
    {
        path: "tasks",
        component: TasksComponent
    },
    {
        path: "tasks/add",
        component: TaskFormComponent
    },
        {
        path: "tasks/:id",
        component: TaskFormComponent
    }
];
