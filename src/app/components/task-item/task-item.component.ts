import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggleReminder(task: Task): void {
    this.onToggleTask.emit(task);
  }

}
