import { Component } from '@angular/core';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full flex flex-wrap gap-2 cols-2 justify-center">
      <div class="flex flex-col flex-wrap grow-0 text-center w-20 cursor-pointer" (click)="lang('en')">
        <span class="text-3xl">🇺🇸</span>
        <span>English</span>
      </div>
      <div class="flex flex-col flex-wrap grow-0 text-center w-20 cursor-pointer" (click)="lang('es')">
        <span class="text-3xl">🇪🇸</span>
        <span>Español</span>
      </div>
    </div>`,
  styles: ''
})
export class LangSwitcherComponent {

  lang(target: string){
    console.log('language switch to', target);
  }
}
