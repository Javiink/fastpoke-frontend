import { Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { ImageUrlPipe } from '../../pipes/image-url.pipe';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [ImageUrlPipe],
  template: `
    <div class="ingredients grid grid-cols-2 gap-x-2 text-sm">
      @for (ingredient of ingredients; track ingredient.id) {
        <div class="flex flex-1 w-full gap-2">
          <div class="w-2/12">
            <img class="w-full" src="{{ingredient.image | imageUrl}}">
          </div>
          <p>{{ingredient.name}}</p>
        </div>
      }
    </div>
  `,
  styles: ''
})
export class IngredientsComponent {

  @Input({required: true}) ingredients: Ingredient[] = [];

}
