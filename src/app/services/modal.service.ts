import { Injectable, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public title: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  show(title: string = ''){
    this.title.next(title);
    this.visible.next(true);
  }

  hide(){
    this.visible.next(false);
  }
}

