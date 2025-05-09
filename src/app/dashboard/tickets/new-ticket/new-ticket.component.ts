import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // private form = viewChild.required<HTMLFormElement>('form');

  onSubmit(title: HTMLInputElement) {
    console.log(title);
    console.dir(title);
    console.log('Submitted');
    // this.form?.nativeElement.reset();

    this.form().nativeElement.reset();
  }
}
