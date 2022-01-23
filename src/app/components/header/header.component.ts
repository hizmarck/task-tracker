import {Component, OnInit, OnDestroy} from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title = 'Task Tracker';
  showAdd = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggleAddTask().subscribe((show) => this.showAdd = show);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  hasRoute(url: string): boolean {
    return this.router.url === url;
  }
}
