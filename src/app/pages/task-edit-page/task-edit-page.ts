import { Component } from '@angular/core';
import { Footer } from '../../footer/footer';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { TaskService } from '../../services/task-service';
import { Task } from '../../components/task/task';
import { task } from '../../models/taskModel';

@Component({
  selector: 'app-task-edit-page',
  imports: [Footer, RouterLink, ReactiveFormsModule ],
  templateUrl: './task-edit-page.html',
  styleUrl: './task-edit-page.scss',
})
export class TaskEditPage {
  constructor(private service: TaskService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute
  ){
    const id = route.snapshot.paramMap.get('id');

    this.task = this.formBuilder.group({
      id: 0,
      title: '',
      description: ''
    } as Task)

    if (id != null)
      service.getById(id).subscribe({
        next: (res) => this.task.patchValue(res)
    });
  }

  task: FormGroup;

  onSubmit(){
    const updatingTask = this.task.value as Task;

    this.service.update(updatingTask).subscribe({
      next: (res) => this.router.navigate(['home'])
    });  
  }


}
