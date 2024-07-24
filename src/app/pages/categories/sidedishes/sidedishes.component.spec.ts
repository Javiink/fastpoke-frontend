import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidedishesComponent } from './sidedishes.component';

describe('SidedishesComponent', () => {
  let component: SidedishesComponent;
  let fixture: ComponentFixture<SidedishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidedishesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidedishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
