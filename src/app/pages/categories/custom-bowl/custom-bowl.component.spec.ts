import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBowlComponent } from './custom-bowl.component';

describe('CustomBowlComponent', () => {
  let component: CustomBowlComponent;
  let fixture: ComponentFixture<CustomBowlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomBowlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
