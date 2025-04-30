import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
