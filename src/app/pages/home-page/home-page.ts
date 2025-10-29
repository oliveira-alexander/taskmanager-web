import { Component, OnInit } from '@angular/core';
import { Task } from '../../components/task/task';
import { TaskService } from '../../services/task-service';
import { task } from '../../models/taskModel';
import { Footer } from "../../footer/footer";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [Task, Footer, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  produtos: task[] = [];

  constructor(private service: TaskService,
              private router: Router
  ){}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    this.service.getAll().subscribe({
      next: (res) => {
        this.produtos = res
        console.log(res)
      }
      })
  }

  editTask(id: number){
    this.router.navigate(['edit/' + id]);    
  }

  deleteTask(id: number){
    this.service.delete(id).subscribe({
      next: (res) => {
          alert ("Tarefa de ID " + id + " removida com sucesso!")
          this.loadTasks();
        }
    })
  }

}
