import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input<string>();

  private el = inject(ElementRef);

  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  private controlSignal =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    // console.log(this.el.nativeElement);
    console.log(this.control);
    console.log(this.controlSignal());
  }
}
