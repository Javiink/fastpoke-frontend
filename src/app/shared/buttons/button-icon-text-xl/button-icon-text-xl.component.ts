import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FontAwesomeModule, IconName } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button-icon-text-xl',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <button  class="px-8 py-12 flex flex-col flex-wrap items-center justify-center rounded-xl w-full bg-gradient-to-br from-white to-sky-50 active:to-sky-200 hover:to-sky-200 shadow-md {{btnClasses}}">
      @if (type == 'fas') {<fa-icon [icon]="icon" class="text-6xl"></fa-icon>}
      @if (type == 'fpi') {<i class="{{icon}} text-6xl"></i>}
      <p class="mt-4 text-xl">{{label}}</p>
    </button>
  `,
  styles: ``
})
export class ButtonIconTextXlComponent {
  @Input({required: true}) label: string = '';
  @Input() icon: IconName = 'info';
  @Input() type: 'fas' | 'fpi' = 'fpi';
  @Input() btnClasses: string = '';
  @Output() clickEvent = new EventEmitter<void>();

  @HostListener('click')
  onClick(){
    this.clickEvent.emit();
  }
}
