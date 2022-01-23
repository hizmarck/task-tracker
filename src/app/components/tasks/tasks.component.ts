import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../../task';
import {TaskService} from '../../services/task.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  subscription: Subscription;

  constructor(private taskService: TaskService) {
    this.subscription = taskService.getTask().subscribe((task) => this.tasks = task);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }

  toggleTask(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((t) => this.tasks.push(t));
  }

}
