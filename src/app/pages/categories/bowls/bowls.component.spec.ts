import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlsComponent } from './bowls.component';

describe('BowlsComponent', () => {
  let component: BowlsComponent;
  let fixture: ComponentFixture<BowlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BowlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
