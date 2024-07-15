import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  template: `<div class="aspect-square bg-gradient-to-br from-teal-200 to-sky-300"></div>`,
  styles: `div{
    mask-image: url('/images/logo.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }`
})
export class LogoComponent {

}
