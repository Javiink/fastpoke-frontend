import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entrypoint',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './entrypoint.component.html',
  styleUrl: './entrypoint.component.css'
})
export class EntrypointComponent {
  constructor(iconLibrary: FaIconLibrary){
    iconLibrary.addIconPacks(fas);
  }

}
