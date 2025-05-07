import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  ngOnInit(): void {
    console.log('On Init!');

    this.interval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        this.currentStatus = 'online';
      } else if (rand < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
