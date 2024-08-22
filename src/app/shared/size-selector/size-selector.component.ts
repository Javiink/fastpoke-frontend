import { Component, Input } from '@angular/core';
import { Size } from '../../models/size';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

let count = 0;

@Component({
  selector: 'app-size-selector',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe],
  template: `
  <div class="grid w-full place-items-center" role="group">
    <div class="grid w-full p-1 grid-cols-{{sizes.length}} rounded-xl bg-sky-200 font-light text-sm">
      @for (size of sizes; track size; let i = $index){
        <div>
          <input type="radio" name="{{idKey}}" id="{{idKey}}-{{size.name}}" value="{{size.name}}" class="peer hidden" [attr.checked]="(i == 0) ? 'checked' : null"/>
          <label for="{{idKey}}-{{size.name}}" class="grid cursor-pointer select-none rounded-xl p-1 text-center transition-all peer-checked:bg-sky-500 peer-checked:font-normal peer-checked:text-white">
            <i class="h-6 {{icon}} text-{{i+2}}xl leading-6"></i>
            <span class="text-xs">{{size.name | titlecase}}</span>
            <span class="font-normal">{{size.price | currency }}</span>
          </label>
        </div>
      }
    </div>
  </div>`,
  styles: ''
})

export class SizeSelectorComponent {
  @Input({ required: true }) sizes: Size[] = [];
  @Input() icon?: string = 'fpi-bowl-1';
  idKey: string;

  constructor(){
    this.idKey = `sizesel${count++}`;
  }
}
