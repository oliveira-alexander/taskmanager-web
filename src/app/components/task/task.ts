import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})

export class Task {
  @Input() id = 0;
  @Input() title = '';
  @Input() description = '';

  @Output() delete = new EventEmitter<number>;
  @Output() edit = new EventEmitter<number>;

  editTask(id: number){
    this.edit.emit(id);
  }

  deleteTask(id: number){
    this.delete.emit(id);
  }
}
