import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allergens',
  standalone: true,
  imports: [TitleCasePipe],
  template: `
    @if(orientation == 'horizontal'){
      <div class="flex flex-row flex-wrap">
        <p class="text-xs font-light w-full mb-1">Allergens:</p>
        @for (allergen of allergens; track allergen) {
          <div class="relative group block w-5 aspect-square mr-1">
            <img class="w-full" src="/images/allergens/allergen-{{allergen}}.svg" alt="">
            <div role="tooltip" class="absolute w-16 px-2 py-1 z-[1] pointer-events-none shadow-md text-center font-light text-sm bg-slate-950 bg-opacity-90 text-white rounded-lg top-full -left-full opacity-0 transition-opacity group-hover:opacity-100">
              {{allergen | titlecase}}
            </div>
          </div>
        }
      </div>
    } @else {
      <div class="flex flex-column flex-wrap">
        @for (allergen of allergens; track allergen) {
          <div class="relative group block w-5 aspect-square mb-1">
            <img class="w-full" src="/images/allergens/allergen-{{allergen}}.svg" alt="">
            <div role="tooltip" class="absolute w-16 px-2 py-1 z-[1] pointer-events-none shadow-md text-center font-light text-sm bg-slate-950 bg-opacity-90 text-white rounded-lg top-full -left-full opacity-0 transition-opacity group-hover:opacity-100">
              {{allergen | titlecase}}
            </div>
          </div>
        }
      </div>
    }
  `,
  styles: ''
})
export class AllergensComponent {

  @Input({required: true}) allergens: string[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

}
