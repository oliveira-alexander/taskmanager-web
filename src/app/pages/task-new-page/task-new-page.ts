import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Task } from '../../components/task/task';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-new-page',
  imports: [Footer, RouterLink, ReactiveFormsModule ],
  templateUrl: './task-new-page.html',
  styleUrl: './task-new-page.scss',
})

export class TaskNewPage {
  task: FormGroup;


  constructor(private fb: FormBuilder,
              private service: TaskService,
              private router: Router
  ){
    this.task = this.fb.group({
      id: 0,
      title: '',
      description: '' 
    })
  }

  onSubmit(){
    const task: Task = this.task.value as Task;

    this.service.create(task).subscribe({
      next: (res) => {
                        alert("Tarefa Criada com sucesso!")
                        this.router.navigate(['/home'])
                      }
    })
  }
}
