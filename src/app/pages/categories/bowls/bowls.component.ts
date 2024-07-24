import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Bowl } from '../../../models/bowl';

@Component({
  selector: 'app-bowls',
  standalone: true,
  imports: [],
  templateUrl: './bowls.component.html',
  styleUrl: './bowls.component.css'
})
export class BowlsComponent {

  private items?: Bowl[];

  constructor(private apiService: ApiService){
    this.apiService.get<Bowl[]>('/bowls').subscribe((bowls) => {
      this.items = bowls;
    })
  }



}
