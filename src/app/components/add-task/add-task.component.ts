import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {Task} from '../../task';
import {Subscription} from 'rxjs';
import {UiService} from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {

  @Output() onAddTask = new EventEmitter<Task>();

  showAdd = false;
  subscription: Subscription;
  text: string = '';
  day: string = '';
  reminder = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleAddTask().subscribe((show) => this.showAdd = show);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSubmit(): void {
    if (this.text === '') {
      alert("Include the task's name");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
